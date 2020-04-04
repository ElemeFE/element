export default {
  functional: true,

  name: 'SliderCommon',

  render(h, { parent: { showStops, stops, marks, markList, vertical, bars } }) {
    function getStopStyle(position) {
      return { [vertical ? 'bottom' : 'left']: position + '%' };
    }

    return [
      bars.map(({ start, width, hidden }, key) => (
        <div
          key={'bar-' + key}
          class="el-slider__bar"
          data-index={key}
          style={{
            ...getStopStyle(start),
            [vertical ? 'height' : 'width']: width + '%',
            display: hidden ? 'none' : null
          }}>
        </div>
      )),
      showStops ? stops.map((stop, key) => (
        <div class="el-slider__stop" key={'stop-' + key} style={getStopStyle(stop)} />
      )) : null,
      marks ? markList.map(({ mark, position }, key) => {
        const { label, style } = (() => typeof mark === 'string'
          ? { label: mark, style: {} }
          : { ...mark, style: mark.style }
        )();
        return (
          <div class="el-slider__marks-item" style={getStopStyle(position)} key={'mark-' + key}>
            <div class="el-slider__stop el-slider__marks-stop" />
            <div class="el-slider__marks-text" style={style}>{label}</div>
          </div>
        );
      }) : null
    ];
  }
};
