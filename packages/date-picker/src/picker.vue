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
      type="text"
      :placeholder="placeholder"
      @focus="handleFocus"
      @blur="handleBlur"
      @keydown="handleKeydown"
      ref="reference"
      v-model.lazy="visualValue" />

    <span
      @click="pickerVisible = !pickerVisible"
      class="el-date-editor__trigger el-icon"
      :class="[triggerClass]"
      v-if="haveTrigger">
    </span>
  </span>
</template>

<script>
import Vue from 'vue';
import Clickoutside from 'element-ui/src/utils/clickoutside';
import { formatDate, parseDate, getWeekNumber } from './util';
import Popper from 'element-ui/src/utils/vue-popper';
import Emitter from 'element-ui/src/mixins/emitter';

const NewPopper = {
  props: {
    appendToBody: Popper.props.appendToBody,
    offset: Popper.props.offset,
    boundariesPadding: Popper.props.boundariesPadding
  },
  methods: Popper.methods,
  data: Popper.data,
  beforeDestroy: Popper.beforeDestroy
};

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
  mixins: [Emitter, NewPopper],

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

  directives: { Clickoutside },

  data() {
    return {
      pickerVisible: false
    };
  },

  watch: {
    pickerVisible(val) {
      val ? this.showPicker() : this.hidePicker();
    },
    value(val) {
      if (!val && this.picker && typeof this.picker.handleClear === 'function') {
        this.picker.handleClear();
      }
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
            this.picker.value = parsedValue;
          }
          return;
        }
        this.picker.value = value;
      }
    }
  },

  created() {
    // vue-popper
    this.options = {
      boundariesPadding: 0,
      gpuAcceleration: false
    };
    this.placement = PLACEMENT_MAP[this.align] || PLACEMENT_MAP.left;
  },

  methods: {
    handleClose() {
      this.pickerVisible = false;
    },

    handleFocus() {
      const type = this.type;

      if (HAVE_TRIGGER_TYPES.indexOf(type) !== -1 && !this.pickerVisible) {
        this.pickerVisible = true;
      }
      this.$emit('focus', this);
    },

    handleBlur() {
      this.$emit('blur', this);
      this.dispatch('form-item', 'el.form.blur');
    },

    handleKeydown(event) {
      const keyCode = event.keyCode;
      const target = event.target;
      let selectionStart = target.selectionStart;
      let selectionEnd = target.selectionEnd;
      let length = target.value.length;

      // tab
      if (keyCode === 9) {
        this.pickerVisible = false;
      // enter
      } else if (keyCode === 13) {
        this.pickerVisible = this.picker.visible = false;
        this.visualValue = target.value;
        target.blur();
      // left
      } else if (keyCode === 37) {
        event.preventDefault();

        if (selectionEnd === length && selectionStart === length) {
          target.selectionStart = length - 2;
        } else if (selectionStart >= 3) {
          target.selectionStart -= 3;
        } else {
          target.selectionStart = 0;
        }
        target.selectionEnd = target.selectionStart + 2;
      // right
      } else if (keyCode === 39) {
        event.preventDefault();
        if (selectionEnd === 0 && selectionStart === 0) {
          target.selectionEnd = 2;
        } else if (selectionEnd <= length - 3) {
          target.selectionEnd += 3;
        } else {
          target.selectionEnd = length;
        }
        target.selectionStart = target.selectionEnd - 2;
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
        this.picker = new Vue(this.panel).$mount(document.createElement('div'));
        this.popperElm = this.picker.$el;
        this.picker.width = this.$refs.reference.getBoundingClientRect().width;
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

        this.picker.$on('dodestroy', this.doDestroy);
        this.picker.$on('pick', (date, visible = false) => {
          this.$emit('input', date);

          if (!visible) {
            this.pickerVisible = this.picker.visible = !this.picker.visible;
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

      this.updatePopper();

      if (this.value instanceof Date) {
        this.picker.date = new Date(this.value.getTime());
        this.picker.resetView && this.picker.resetView();
      } else {
        this.picker.value = this.value;
      }

      this.$nextTick(() => {
        this.picker.ajustScrollTop && this.picker.ajustScrollTop();
      });
    }
  }
};
</script>
