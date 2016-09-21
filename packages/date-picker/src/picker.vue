<template>
  <span
    class="el-date-editor"
    v-clickoutside="handleClose"
    :class="{
      'is-have-trigger': haveTrigger,
      'is-active': pickerVisible,
      'is-filled': !!this.value
    }">

    <input
      class="el-date-editor__editor"
      :readonly="readonly"
      :type="editorType"
      :placeholder="placeholder"
      @focus="handleFocus"
      @blur="handleBlur"
      @keydown="handleKeydown"
      @keyup="handleKeyup"
      ref="reference"
      v-model.lazy="visualValue" />

    <span
      @click="togglePicker()"
      class="el-date-editor__trigger el-icon"
      :class="[triggerClass]"
      v-if="haveTrigger">
    </span>
  </span>
</template>

<script>
import Vue from 'vue';
import Clickoutside from 'main/utils/clickoutside';
import { merge, formatDate, parseDate, getWeekNumber } from './util';
import Popper from 'main/utils/popper';
import emitter from 'main/mixins/emitter';

const FUNCTION_KEYS = [13, 16, 17, 18, 19, 20, 27, 33, 34, 35, 36, 37, 38, 39, 40];
const RANGE_SEPARATOR = ' - ';
const DEFAULT_FORMATS = {
  date: 'yyyy-MM-dd',
  month: 'yyyy-MM',
  datetime: 'yyyy-MM-dd HH:mm:ss',
  time: 'HH:mm:ss',
  timerange: 'HH:mm:ss',
  daterange: 'yyyy-MM-dd',
  datetimerange: 'yyyy-MM-dd HH:mm:ss'
};
const HAVE_TRIGGER_TYPES = [
  'date',
  'datetime',
  'time',
  'time-select',
  'week',
  'month',
  'year',
  'daterange',
  'timerange',
  'datetimerange'
];
const DATE_FORMATTER = function(value, format) {
  return formatDate(value, format);
};
const DATE_PARSER = function(text, format) {
  text = text.split(':');
  if (text.length > 1) text = text.map(item => item.slice(-2));
  text = text.join(':');

  return parseDate(text, format);
};
const RANGE_FORMATTER = function(value, format) {
  if (Array.isArray(value) && value.length === 2) {
    const start = value[0];
    const end = value[1];

    if (start && end) {
      return formatDate(start, format) + RANGE_SEPARATOR + formatDate(end, format);
    }
  }
  return '';
};
const RANGE_PARSER = function(text, format) {
  const array = text.split(RANGE_SEPARATOR);
  if (array.length === 2) {
    const range1 = array[0].split(':').map(item => item.slice(-2)).join(':');
    const range2 = array[1].split(':').map(item => item.slice(-2)).join(':');
    return [parseDate(range1, format), parseDate(range2, format)];
  }
  return [];
};
const TYPE_VALUE_RESOLVER_MAP = {
  default: {
    formatter(value) {
      if (!value) return '';
      return '' + value;
    },
    parser(text) {
      if (text === undefined || text === '') return null;
      return text;
    }
  },
  week: {
    formatter(value) {
      if (value instanceof Date) {
        const weekNumber = getWeekNumber(value);
        return value.getFullYear() + 'w' + (weekNumber > 9 ? weekNumber : '0' + weekNumber);
      }
      return value;
    },
    parser(text) {
      const array = (text || '').split('w');
      if (array.length === 2) {
        const year = Number(array[0]);
        const month = Number(array[1]);

        if (!isNaN(year) && !isNaN(month) && month < 54) {
          return text;
        }
      }
      return null;
    }
  },
  date: {
    formatter: DATE_FORMATTER,
    parser: DATE_PARSER
  },
  datetime: {
    formatter: DATE_FORMATTER,
    parser: DATE_PARSER
  },
  daterange: {
    formatter: RANGE_FORMATTER,
    parser: RANGE_PARSER
  },
  datetimerange: {
    formatter: RANGE_FORMATTER,
    parser: RANGE_PARSER
  },
  timerange: {
    formatter: RANGE_FORMATTER,
    parser: RANGE_PARSER
  },
  time: {
    formatter: DATE_FORMATTER,
    parser: DATE_PARSER
  },
  month: {
    formatter: DATE_FORMATTER,
    parser: DATE_PARSER
  },
  year: {
    formatter(value) {
      if (!value) return '';
      return '' + value;
    },
    parser(text) {
      const year = Number(text);
      if (!isNaN(year)) return year;

      return null;
    }
  },
  number: {
    formatter(value) {
      if (!value) return '';
      return '' + value;
    },
    parser(text) {
      let result = Number(text);

      if (!isNaN(text)) {
        return result;
      } else {
        return null;
      }
    }
  }
};
const PLACEMENT_MAP = {
  left: 'bottom-start',
  center: 'bottom-center',
  right: 'bottom-end'
};

export default {
  mixins: [emitter],

  props: {
    format: String,
    readonly: Boolean,
    placeholder: String,
    align: {
      type: String,
      default: 'left'
    },
    value: {},
    haveTrigger: {},
    pickerOptions: {}
  },

  directives: {
    Clickoutside
  },

  data() {
    return {
      pickerVisible: false
    };
  },

  watch: {
    pickerVisible(val) {
      val === true ? this.showPicker() : this.hidePicker();
    },
    value(val) {
      this.dispatch('form-item', 'el.form.change');
    }
  },

  computed: {
    triggerClass() {
      return this.type.indexOf('time') !== -1 ? 'el-icon-time' : 'el-icon-date';
    },

    editable() {
      return this.type.indexOf('range') === -1;
    },

    selectionMode() {
      if (this.type === 'week') {
        return 'week';
      } else if (this.type === 'month') {
        return 'month';
      } else if (this.type === 'year') {
        return 'year';
      }

      return 'day';
    },

    haveTrigger() {
      if (typeof this.showTrigger !== 'undefined') {
        return this.showTrigger;
      }
      return HAVE_TRIGGER_TYPES.indexOf(this.type) !== -1;
    },

    visualValue: {
      get() {
        const value = this.value;
        const formatter = (
          TYPE_VALUE_RESOLVER_MAP[this.type] ||
          TYPE_VALUE_RESOLVER_MAP['default']
        ).formatter;
        const format = DEFAULT_FORMATS[this.type];

        return formatter(value, this.format || format);
      },

      set(value) {
        if (value) {
          const type = this.type;
          const parser = (
            TYPE_VALUE_RESOLVER_MAP[type] ||
            TYPE_VALUE_RESOLVER_MAP['default']
          ).parser;
          const parsedValue = parser(value, this.format || DEFAULT_FORMATS[type]);

          if (parsedValue) {
            this.$emit('input', parsedValue);
          }
          return;
        }
        this.$emit('input', value);
      }
    },

    editorType() {
      return 'text';
    }
  },

  methods: {
    handleClose() {
      this.pickerVisible = false;
    },

    handleFocus() {
      const type = this.type;

      if (HAVE_TRIGGER_TYPES.indexOf(type) !== -1) {
        if (!this.pickerVisible) {
          this.showPicker();
        }
      }
      this.$emit('focus', this);
    },

    handleBlur() {
      this.$emit('blur', this);
      this.dispatch('form-item', 'el.form.blur');
    },

    handleKeydown(event) {
      const keyCode = event.keyCode;
      let selectionStart = event.target.selectionStart;
      let selectionEnd = event.target.selectionEnd;
      let length = event.target.value.length;

      if (keyCode === 27) {
        this.pickerVisible = this.picker.visible = false;
      // left
      } else if (keyCode === 37) {
        event.preventDefault();

        if (selectionEnd === length && selectionStart === length) {
          event.target.selectionStart = length - 2;
        } else if (selectionStart >= 3) {
          event.target.selectionStart -= 3;
        } else {
          event.target.selectionStart = 0;
        }
        event.target.selectionEnd = event.target.selectionStart + 2;
      // right
      } else if (keyCode === 39) {
        event.preventDefault();
        if (selectionEnd === 0 && selectionStart === 0) {
          event.target.selectionEnd = 2;
        } else if (selectionEnd <= length - 3) {
          event.target.selectionEnd += 3;
        } else {
          event.target.selectionEnd = length;
        }
        event.target.selectionStart = event.target.selectionEnd - 2;
      }
    },

    handleKeyup(event) {
      const keyCode = event.keyCode;
      if (FUNCTION_KEYS.indexOf(keyCode) > -1) return;
      if (!(this.picker && this.pickerVisible)) return;
      const selectionStart = event.target.selectionStart;
      const value = event.target.value;
      const type = this.type;
      const parser = (
        TYPE_VALUE_RESOLVER_MAP[type] ||
        TYPE_VALUE_RESOLVER_MAP['default']
      ).parser;
      const parsedValue = parser(value, this.format || DEFAULT_FORMATS[type]);

      if (!parsedValue) return;
      this.picker.value = parsedValue;
      this.$emit('input', parsedValue);

      if (this.type.indexOf('date') > -1) return;

      setTimeout(_ => {
        let start = selectionStart;
        let end = selectionStart;
        const offset = 2;

        if (selectionStart === 9) {
          start += offset;
        }
        if (selectionStart >= 12) {
          if (selectionStart % 3 === 0) {
            start += 1;
            end = start;
          } else if (selectionStart % 3 === 2) {
            end = start + offset;
          }
        } else {
          if (selectionStart % 3 === 1) {
            start += 1;
            end = start;
          } else if (selectionStart % 3 === 0) {
            end = start + offset;
          }
        }

        event.target.selectionStart = start;
        event.target.selectionEnd = end;
      }, 0);
    },

    togglePicker() {
      !this.pickerVisible ? this.showPicker() : this.hidePicker();
    },

    destroyPopper() {
      if (this.popper) {
        this.resetTransformOrigin(this.popper);
        setTimeout(() => {
          this.popper && this.popper.destroy();
          this.popper = null;
        }, 300);
      }
    },

    hidePicker() {
      if (this.picker) {
        this.picker.resetView && this.picker.resetView();
        this.pickerVisible = this.picker.visible = false;
        this.destroyPopper();
      }
    },

    showPicker() {
      if (!this.picker) {
        this.panel.defaultValue = this.value;
        this.picker = new Vue(merge({
          el: document.createElement('div')
        }, this.panel));
        this.picker.showTime = this.type === 'datetime' || this.type === 'datetimerange';
        this.picker.selectionMode = this.selectionMode;
        if (this.format) {
          this.picker.format = this.format;
        }

        const options = this.pickerOptions;

        if (options && options.selectableRange) {
          let ranges = options.selectableRange;
          const parser = TYPE_VALUE_RESOLVER_MAP.datetimerange.parser;
          const format = DEFAULT_FORMATS.timerange;

          ranges = Array.isArray(ranges) ? ranges : [ranges];
          this.picker.selectableRange = ranges.map(range => parser(range, format));
        }

        if (this.type === 'time-select' && options) {
          this.$watch('pickerOptions.minTime', val => {
            this.picker.minTime = val;
          });
        }

        for (const option in options) {
          if (options.hasOwnProperty(option) &&
              // 忽略 time-picker 的该配置项
              option !== 'selectableRange') {
            this.picker[option] = options[option];
          }
        }

        this.$el.appendChild(this.picker.$el);
        this.pickerVisible = this.picker.visible = true;
        this.picker.resetView && this.picker.resetView();

        this.picker.$on('pick', (date, visible = false) => {
          this.$emit('input', date);

          if (!visible) {
            this.pickerVisible = this.picker.visible = false;
          }
          this.picker.resetView && this.picker.resetView();
        });

        this.picker.$on('select-range', (start, end) => {
          setTimeout(() => {
            this.$refs.reference.setSelectionRange(start, end);
            this.$refs.reference.focus();
          }, 0);
        });
      } else {
        this.pickerVisible = this.picker.visible = true;
      }

      this.$nextTick(() => {
        if (this.popper) {
          this.popper.update();
          return;
        }

        this.popper = new Popper(this.$refs.reference, this.picker.$el, {
          gpuAcceleration: false,
          placement: PLACEMENT_MAP[this.align] || PLACEMENT_MAP.left,
          boundariesPadding: 0,
          forceAbsolute: true
        });

        this.popper.onCreate(popper => {
          this.resetTransformOrigin(popper);
        });
      });

      if (this.value instanceof Date) {
        this.picker.date = new Date(this.value.getTime());
        this.picker.resetView && this.picker.resetView();
      } else {
        this.picker.value = this.value;
      }

      this.$nextTick(() => {
        if (this.type.indexOf('time') !== -1) {
          this.picker.focusEditor && this.picker.focusEditor('hours');
        }
        this.picker.ajustScrollTop && this.picker.ajustScrollTop();
      });
    },

    resetTransformOrigin(popper) {
      let placementMap = { top: 'bottom', bottom: 'top' };
      let placement = popper._popper.getAttribute('x-placement').split('-')[0];
      let origin = placementMap[placement];
      popper._popper.style.transformOrigin = `center ${ origin }`;
    }
  },

  beforeDestroy() {
    this.popper && this.popper.destroy();
  }
};
</script>
