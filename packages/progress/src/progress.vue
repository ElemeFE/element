<template>
  <div
    class="el-progress"
    :class="[
      'el-progress--' + type,
      status ? 'is-' + status : '',
      {
        'el-progress--without-text': !showText,
        'el-progress--text-inside': textInside,
      }
    ]"
    role="progressbar"
    :aria-valuenow="percentage"
    aria-valuemin="0"
    aria-valuemax="100"
  >
    <div class="el-progress-bar" v-if="type === 'line'">
      <div class="el-progress-bar__outer" :style="{height: strokeWidth + 'px'}">
        <div class="el-progress-bar__inner" :style="barStyle">
          <div class="el-progress-bar__innerText" v-if="showText && textInside">{{content}}</div>
        </div>
      </div>
    </div>
    <div class="el-progress-circle" :style="{height: width + 'px', width: width + 'px'}" v-else>
      <svg viewBox="0 0 100 100">
        <path
          class="el-progress-circle__track"
          :d="trackPath"
          stroke="#e5e9f2"
          :stroke-width="relativeStrokeWidth"
          fill="none"
          :style="trailPathStyle"></path>
        <path
          class="el-progress-circle__path"
          :d="trackPath"
          :stroke="stroke"
          fill="none"
          :stroke-linecap="strokeLinecap"
          :stroke-width="percentage ? relativeStrokeWidth : 0"
          :style="circlePathStyle"></path>
      </svg>
    </div>
    <div
      class="el-progress__text"
      v-if="showText && !textInside"
      :style="{fontSize: progressTextSize + 'px'}"
    >
      <template v-if="!status">{{content}}</template>
      <i v-else :class="iconClass"></i>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'ElProgress',
    props: {
      type: {
        type: String,
        default: 'line',
        validator: val => ['line', 'circle', 'dashboard'].indexOf(val) > -1
      },
      percentage: {
        type: Number,
        default: 0,
        required: true,
        validator: val => val >= 0 && val <= 100
      },
      status: {
        type: String,
        validator: val => ['success', 'exception', 'warning'].indexOf(val) > -1
      },
      strokeWidth: {
        type: Number,
        default: 6
      },
      strokeLinecap: {
        type: String,
        default: 'round'
      },
      textInside: {
        type: Boolean,
        default: false
      },
      width: {
        type: Number,
        default: 126
      },
      showText: {
        type: Boolean,
        default: true
      },
      color: {
        type: [String, Array, Function],
        default: ''
      },
      format: Function
    },
    computed: {
      barStyle() {
        const style = {};
        style.width = this.percentage + '%';
        style.backgroundColor = this.getCurrentColor(this.percentage);
        return style;
      },
      relativeStrokeWidth() {
        return (this.strokeWidth / this.width * 100).toFixed(1);
      },
      radius() {
        if (this.type === 'circle' || this.type === 'dashboard') {
          return parseInt(50 - parseFloat(this.relativeStrokeWidth) / 2, 10);
        } else {
          return 0;
        }
      },
      trackPath() {
        const radius = this.radius;
        const isDashboard = this.type === 'dashboard';
        return `
          M 50 50
          m 0 ${isDashboard ? '' : '-'}${radius}
          a ${radius} ${radius} 0 1 1 0 ${isDashboard ? '-' : ''}${radius * 2}
          a ${radius} ${radius} 0 1 1 0 ${isDashboard ? '' : '-'}${radius * 2}
          `;
      },
      perimeter() {
        return 2 * Math.PI * this.radius;
      },
      rate() {
        return this.type === 'dashboard' ? 0.75 : 1;
      },
      strokeDashoffset() {
        const offset = -1 * this.perimeter * (1 - this.rate) / 2;
        return `${offset}px`;
      },
      trailPathStyle() {
        return {
          strokeDasharray: `${(this.perimeter * this.rate)}px, ${this.perimeter}px`,
          strokeDashoffset: this.strokeDashoffset
        };
      },
      circlePathStyle() {
        return {
          strokeDasharray: `${this.perimeter * this.rate * (this.percentage / 100) }px, ${this.perimeter}px`,
          strokeDashoffset: this.strokeDashoffset,
          transition: 'stroke-dasharray 0.6s ease 0s, stroke 0.6s ease'
        };
      },
      stroke() {
        let ret;
        if (this.color) {
          ret = this.getCurrentColor(this.percentage);
        } else {
          switch (this.status) {
            case 'success':
              ret = '#13ce66';
              break;
            case 'exception':
              ret = '#ff4949';
              break;
            case 'warning':
              ret = '#e6a23c';
              break;
            default:
              ret = '#20a0ff';
          }
        }
        return ret;
      },
      iconClass() {
        if (this.status === 'warning') {
          return 'el-icon-warning';
        }
        if (this.type === 'line') {
          return this.status === 'success' ? 'el-icon-circle-check' : 'el-icon-circle-close';
        } else {
          return this.status === 'success' ? 'el-icon-check' : 'el-icon-close';
        }
      },
      progressTextSize() {
        return this.type === 'line'
          ? 12 + this.strokeWidth * 0.4
          : this.width * 0.111111 + 2 ;
      },
      content() {
        if (typeof this.format === 'function') {
          return this.format(this.percentage) || '';
        } else {
          return `${this.percentage}%`;
        }
      }
    },
    methods: {
      getCurrentColor(percentage) {
        if (typeof this.color === 'function') {
          return this.color(percentage);
        } else if (typeof this.color === 'string') {
          return this.color;
        } else {
          return this.getLevelColor(percentage);
        }
      },
      getLevelColor(percentage) {
        const colorArray = this.getColorArray().sort((a, b) => a.percentage - b.percentage);

        for (let i = 0; i < colorArray.length; i++) {
          if (colorArray[i].percentage > percentage) {
            return colorArray[i].color;
          }
        }
        return colorArray[colorArray.length - 1].color;
      },
      getColorArray() {
        const color = this.color;
        const span = 100 / color.length;
        return color.map((seriesColor, index) => {
          if (typeof seriesColor === 'string') {
            return {
              color: seriesColor,
              progress: (index + 1) * span
            };
          }
          return seriesColor;
        });
      }
    }
  };
</script>
