<template>
  <el-input
    class="el-date-editor"
    :class="'el-date-editor--' + type"
    :readonly="!editable || readonly"
    :disabled="disabled"
    :size="size"
    :name="name"
    v-if="!ranged"
    v-clickoutside="handleClose"
    :placeholder="placeholder"
    @focus="handleFocus"
    @blur="handleBlur"
    @keydown.native="handleKeydown"
    :value="displayValue"
    @mouseenter.native="handleMouseEnter"
    @mouseleave.native="showClose = false"
    @change.native="displayValue = $event.target.value"
    :validateEvent="false"
    :prefix-icon="triggerClass"
    ref="reference">
    <i slot="suffix"
      class="el-input__icon"
      @click="handleClickIcon"
      :class="{ 'el-icon-circle-close': showClose }"
      v-if="haveTrigger">
    </i>
  </el-input>
  <div
    class="el-date-editor el-range-editor el-input__inner"
    :class="[
      'el-date-editor--' + type,
      'el-range-editor--' + size,
      pickerVisible ? 'is-active' : ''
    ]"
    @click="handleRangeClick"
    @mouseenter="handleMouseEnter"
    @mouseleave="showClose = false"
    ref="reference"
    v-clickoutside="handleClose"
    v-else>
    <i :class="['el-input__icon', 'el-range__icon', triggerClass]"></i>
    <input
      :placeholder="startPlaceholder"
      :value="displayValue && displayValue[0]"
      @keydown="handleKeydown"
      @change="handleStartChange"
      class="el-range-input">
    <span class="el-range-separator">{{ rangeSeparator }}</span>
    <input
      :placeholder="endPlaceholder"
      :value="displayValue && displayValue[1]"
      @keydown="handleKeydown"
      @change="handleEndChange"
      class="el-range-input">
    <i
      @click="handleClickIcon"
      v-if="haveTrigger"
      :class="{ 'el-icon-circle-close': showClose }"
      class="el-input__icon el-range__close-icon">
    </i>
  </div>
</template>

<script>
import Vue from 'vue';
import Clickoutside from 'element-ui/src/utils/clickoutside';
import { formatDate, parseDate, getWeekNumber, equalDate, isDate } from './util';
import Popper from 'element-ui/src/utils/vue-popper';
import Emitter from 'element-ui/src/mixins/emitter';
import Focus from 'element-ui/src/mixins/focus';
import ElInput from 'element-ui/packages/input';
import merge from 'element-ui/src/utils/merge';

const NewPopper = {
  props: {
    appendToBody: Popper.props.appendToBody,
    offset: Popper.props.offset,
    boundariesPadding: Popper.props.boundariesPadding
  },
  methods: Popper.methods,
  data() {
    return merge({ visibleArrow: true }, Popper.data);
  },
  beforeDestroy: Popper.beforeDestroy
};

const DEFAULT_FORMATS = {
  date: 'yyyy-MM-dd',
  month: 'yyyy-MM',
  datetime: 'yyyy-MM-dd HH:mm:ss',
  time: 'HH:mm:ss',
  week: 'yyyywWW',
  timerange: 'HH:mm:ss',
  daterange: 'yyyy-MM-dd',
  datetimerange: 'yyyy-MM-dd HH:mm:ss',
  year: 'yyyy'
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
  return parseDate(text, format);
};
const RANGE_FORMATTER = function(value, format) {
  if (Array.isArray(value) && value.length === 2) {
    const start = value[0];
    const end = value[1];

    if (start && end) {
      return [formatDate(start, format), formatDate(end, format)];
    }
  }
  return '';
};
const RANGE_PARSER = function(array, format, separator) {
  if (!Array.isArray(array)) {
    array = array.split(separator);
  }
  if (array.length === 2) {
    const range1 = array[0];
    const range2 = array[1];

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
    formatter(value, format) {
      let date = formatDate(value, format);
      const week = getWeekNumber(value);

      date = /WW/.test(date)
            ? date.replace(/WW/, week < 10 ? '0' + week : week)
            : date.replace(/W/, week);
      return date;
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
    formatter: DATE_FORMATTER,
    parser: DATE_PARSER
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
  center: 'bottom',
  right: 'bottom-end'
};

// only considers date-picker's value: Date or [Date, Date]
const valueEquals = function(a, b) {
  const aIsArray = a instanceof Array;
  const bIsArray = b instanceof Array;
  if (aIsArray && bIsArray) {
    return new Date(a[0]).getTime() === new Date(b[0]).getTime() &&
           new Date(a[1]).getTime() === new Date(b[1]).getTime();
  }
  if (!aIsArray && !bIsArray) {
    return new Date(a).getTime() === new Date(b).getTime();
  }
  return false;
};

export default {
  mixins: [Emitter, NewPopper, Focus('reference')],

  props: {
    size: String,
    format: String,
    readonly: Boolean,
    placeholder: String,
    startPlaceholder: String,
    endPlaceholder: String,
    name: String,
    disabled: Boolean,
    clearable: {
      type: Boolean,
      default: true
    },
    popperClass: String,
    editable: {
      type: Boolean,
      default: true
    },
    align: {
      type: String,
      default: 'left'
    },
    value: {},
    defaultValue: {},
    rangeSeparator: {
      default: '-'
    },
    pickerOptions: {}
  },

  components: { ElInput },

  directives: { Clickoutside },

  data() {
    return {
      pickerVisible: false,
      showClose: false,
      currentValue: '',
      unwatchPickerOptions: null
    };
  },

  watch: {
    pickerVisible(val) {
      if (!val) this.dispatch('ElFormItem', 'el.form.blur');
      if (this.readonly || this.disabled) return;
      val ? this.showPicker() : this.hidePicker();
    },
    currentValue(val) {
      if (val) return;
      if (this.picker && typeof this.picker.handleClear === 'function') {
        this.picker.handleClear();
      } else {
        this.$emit('input');
      }
    },
    value: {
      immediate: true,
      handler(val) {
        this.currentValue = isDate(val) ? new Date(val) : val;
      }
    },
    displayValue(val) {
      this.dispatch('ElFormItem', 'el.form.change');
    }
  },

  computed: {
    ranged() {
      return this.type.indexOf('range') > -1;
    },

    reference() {
      const reference = this.$refs.reference;
      return reference.$el || reference;
    },

    refInput() {
      if (this.reference) {
        return [].slice.call(this.reference.querySelectorAll('input'));
      }
      return [];
    },

    valueIsEmpty() {
      const val = this.currentValue;
      if (Array.isArray(val)) {
        for (let i = 0, len = val.length; i < len; i++) {
          if (val[i]) {
            return false;
          }
        }
      } else {
        if (val) {
          return false;
        }
      }
      return true;
    },

    triggerClass() {
      return this.type.indexOf('time') !== -1 ? 'el-icon-time' : 'el-icon-date';
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

    displayValue: {
      get() {
        const value = this.currentValue;
        if (!value) return;
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

          if (parsedValue && this.picker) {
            this.picker.value = parsedValue;
          }
        } else {
          this.$emit('input', value);
          this.picker.value = value;
        }
        this.$forceUpdate();
      }
    }
  },

  created() {
    // vue-popper
    this.popperOptions = {
      boundariesPadding: 0,
      gpuAcceleration: false
    };
    this.placement = PLACEMENT_MAP[this.align] || PLACEMENT_MAP.left;
  },

  methods: {
    handleMouseEnter() {
      if (this.readonly || this.disabled) return;
      if (!this.valueIsEmpty && this.clearable) {
        this.showClose = true;
      }
    },

    handleStartChange(event) {
      if (this.displayValue && this.displayValue[1]) {
        this.displayValue = [event.target.value, this.displayValue[1]];
      } else {
        this.displayValue = [event.target.value, event.target.value];
      }
    },

    handleEndChange(event) {
      if (this.displayValue && this.displayValue[0]) {
        this.displayValue = [this.displayValue[0], event.target.value];
      } else {
        this.displayValue = [event.target.value, event.target.value];
      }
    },

    handleClickIcon(event) {
      if (this.readonly || this.disabled) return;
      if (this.showClose) {
        this.currentValue = this.$options.defaultValue || '';
        this.showClose = false;
        event.stopPropagation();
      } else {
        this.pickerVisible = !this.pickerVisible;
      }
    },

    dateChanged(dateA, dateB) {
      if (Array.isArray(dateA)) {
        let len = dateA.length;
        if (!dateB) return true;
        while (len--) {
          if (!equalDate(dateA[len], dateB[len])) return true;
        }
      } else {
        if (!equalDate(dateA, dateB)) return true;
      }

      return false;
    },

    handleClose() {
      this.pickerVisible = false;
      if (this.ranged) {
        this.$emit('blur', this);
      }
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
    },

    handleKeydown(event) {
      const keyCode = event.keyCode;

      // TAB or ESC
      if (keyCode === 9 || keyCode === 27) {
        this.pickerVisible = false;
        event.stopPropagation();
      }
    },

    handleRangeClick() {
      const type = this.type;

      if (HAVE_TRIGGER_TYPES.indexOf(type) !== -1 && !this.pickerVisible) {
        this.pickerVisible = true;
      }
      this.$emit('focus', this);
    },

    hidePicker() {
      if (this.picker) {
        this.picker.resetView && this.picker.resetView();
        this.pickerVisible = this.picker.visible = false;
        this.destroyPopper();
      }
    },

    showPicker() {
      if (this.$isServer) return;
      if (!this.picker) {
        this.mountPicker();
      }
      this.pickerVisible = this.picker.visible = true;

      this.updatePopper();

      if (this.currentValue instanceof Date) {
        this.picker.date = new Date(this.currentValue.getTime());
      } else {
        this.picker.value = this.currentValue;
      }
      this.picker.resetView && this.picker.resetView();

      this.$nextTick(() => {
        this.picker.adjustScrollTop && this.picker.adjustScrollTop();
      });
    },

    mountPicker() {
      const defaultValue = this.defaultValue || this.currentValue;
      const panel = merge({}, this.panel, { defaultValue });
      this.picker = new Vue(panel).$mount();
      this.picker.popperClass = this.popperClass;
      this.popperElm = this.picker.$el;
      this.picker.width = this.reference.getBoundingClientRect().width;
      this.picker.showTime = this.type === 'datetime' || this.type === 'datetimerange';
      this.picker.selectionMode = this.selectionMode;
      if (this.format) {
        this.picker.format = this.format;
      }

      const updateOptions = () => {
        const options = this.pickerOptions;

        if (options && options.selectableRange) {
          let ranges = options.selectableRange;
          const parser = TYPE_VALUE_RESOLVER_MAP.datetimerange.parser;
          const format = DEFAULT_FORMATS.timerange;

          ranges = Array.isArray(ranges) ? ranges : [ranges];
          this.picker.selectableRange = ranges.map(range => parser(range, format, this.rangeSeparator));
        }

        for (const option in options) {
          if (options.hasOwnProperty(option) &&
              // 忽略 time-picker 的该配置项
              option !== 'selectableRange') {
            this.picker[option] = options[option];
          }
        }
      };
      updateOptions();
      this.unwatchPickerOptions = this.$watch('pickerOptions', () => updateOptions(), { deep: true });

      this.$el.appendChild(this.picker.$el);
      this.picker.resetView && this.picker.resetView();

      this.picker.$on('dodestroy', this.doDestroy);
      this.picker.$on('pick', (date = '', visible = false, user = true) => {
        // do not emit if values are same
        if (!valueEquals(this.value, date)) {
          this.$emit('input', date);
          if (user && this.value !== date) {
            this.$nextTick(() => this.$emit('change', this.displayValue));
          };
        }
        this.pickerVisible = this.picker.visible = visible;
        this.picker.resetView && this.picker.resetView();
      });

      this.picker.$on('select-range', (start, end, pos) => {
        if (this.refInput.length === 0) return;
        if (!pos || pos === 'min') {
          this.refInput[0].setSelectionRange(start, end);
          this.refInput[0].focus();
        } else if (pos === 'max') {
          this.refInput[1].setSelectionRange(start, end);
          this.refInput[1].focus();
        }
      });
    },

    unmountPicker() {
      if (this.picker) {
        this.picker.$destroy();
        this.picker.$off();
        if (typeof this.unwatchPickerOptions === 'function') {
          this.unwatchPickerOptions();
        }
        this.picker.$el.parentNode.removeChild(this.picker.$el);
      }
    }
  }
};
</script>
