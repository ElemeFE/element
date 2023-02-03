<template>
    <transition name="el-zoom-in-top" @after-leave="$emit('dodestroy')">
        <div
            v-show="visible"
            class="el-picker-panel el-date-range-picker el-popper"
            :class="[{
                    'has-sidebar': $slots.sidebar || shortcuts
            }, popperClass]">
            <div class="el-picker-panel__body-wrapper">
                <slot name="sidebar" class="el-picker-panel__sidebar"></slot>
                <div class="el-picker-panel__sidebar" v-if="shortcuts">
                    <button
                        type="button"
                        class="el-picker-panel__shortcut"
                        v-for="(shortcut,index) in shortcuts"
                        @click="handleShortcutClick(shortcut)"
                        :key="index">
                        {{shortcut.text}}
                    </button>
                </div>
                <div class="el-picker-panel__body">
                    <div class="el-picker-panel__content el-date-range-picker__content is-left">
                        <div class="el-date-range-picker__header">
                            <button
                                type="button"
                                @click="leftPrevYear"
                                class="el-picker-panel__icon-btn el-icon-d-arrow-left">
                            </button>
                            <button
                                type="button"
                                v-if="unlinkPanels"
                                @click="leftNextYear"
                                :disabled="!enableYearArrow"
                                :class="{ 'is-disabled': !enableYearArrow }"
                                class="el-picker-panel__icon-btn el-icon-d-arrow-right"></button>
                            <div>{{ leftLabel }}</div>
                        </div>
                        <quarter-table
                            :date="leftDate"
                            :min-date="minDate"
                            :max-date="maxDate"
                            :year="leftYear"
                            selection-mode="range"
                            :rangeState="rangeState"
                            :disabled-date="disabledDate"
                            @changerange="handleChangeRange"
                            @pick="handleRangePick">
                        </quarter-table>
                    </div>
                    <div class="el-picker-panel__content el-date-range-picker__content is-right">
                        <div class="el-date-range-picker__header">
                           <button
                               type="button"
                               v-if="unlinkPanels"
                               @click="rightPrevYear"
                               :disabled="!enableYearArrow"
                               :class="{ 'is-disabled': !enableYearArrow }"
                               class="el-picker-panel__icon-btn el-icon-d-arrow-left">
                            </button>
                            <button
                                type="button"
                                @click="rightNextYear"
                                class="el-picker-panel__icon-btn el-icon-d-arrow-right">
                            </button>
                            <div>{{ rightLabel }}</div>
                        </div>
                        <quarter-table
                            :min-date="minDate"
                            :max-date="maxDate"
                            :date="rightDate"
                            :year="rightYear"
                            selection-mode="range"
                            :rangeState="rangeState"
                            :disabled-date="disabledDate"
                            @changerange="handleChangeRange"
                            @pick="handleRangePick">
                        </quarter-table>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script type="text/babel">
import Clickoutside from 'element-ui/src/utils/clickoutside';
import Locale from 'element-ui/src/mixins/locale';
import { isDate, modifyWithTimeString, prevYear, nextYear} from 'element-ui/src/utils/date-util';
import quarterTable from '../basic/quarter-table';
const calcDefaultValue = (defaultValue) => {
  var date;
  if (Array.isArray(defaultValue)) {
    return [new Date(defaultValue[0]), new Date(defaultValue[1])];
  } else if (defaultValue) {
    date = new Date(defaultValue);
    return [new Date(date), new Date(date.setFullYear(date.getFullYear() + 10))];
  } else {
    date = new Date();
    return [new Date(), new Date(date.setFullYear(date.getFullYear() + 10))];
  }
};
export default {
  mixins: [Locale],
  directives: { Clickoutside },
  computed: {
    btnDisabled() {
      return !(this.minDate && this.maxDate && !this.selecting);
    },
    leftLabel() {
      return this.leftDate.getFullYear() + ' ' + this.t('el.datepicker.year');
    },

    rightLabel() {
      return this.rightDate.getFullYear() + ' ' + this.t('el.datepicker.year');
    },
    leftYear() {
      return this.leftDate.getFullYear();
    },
    rightYear() {
      return this.rightDate.getFullYear() === this.leftDate.getFullYear() ? this.leftDate.getFullYear() + 1 : this.rightDate.getFullYear();
    },
    enableYearArrow() {
      return this.unlinkPanels && this.rightYear > this.leftYear + 1;
    }
  },
  data() {
    return {
      defaultTime: null,
      popperClass: '',
      defaultValue: null,
      date: calcDefaultValue(this.defaultValue)[0],
      minDate: '',
      maxDate: '',
      leftDate: new Date(),
      rightDate: nextYear(new Date()),
      rangeState: {
        endDate: null,
        selecting: false
      },
      showTime: false,
      shortcuts: '',
      value: [],
      visible: '',
      disabledDate: '',
      format: '',
      unlinkPanels: false,
      arrowControl: false
    };
  },
  watch: {
    value: {
      handler(newVal) {
        if (!newVal) {
          this.minDate = null;
          this.maxDate = null;
        } else if (Array.isArray(newVal)) {
          this.minDate = isDate(newVal[0]) ? new Date(newVal[0]) : null;
          this.maxDate = isDate(newVal[1]) ? new Date(newVal[1]) : null;
          if (this.minDate) {
            this.leftDate = this.minDate;
            if (this.unlinkPanels && this.maxDate) {
              const minDateYear = this.minDate.getFullYear();
              const maxDateYear = this.maxDate.getFullYear();
              this.rightDate = minDateYear === maxDateYear
                ? nextYear(this.maxDate)
                : this.maxDate;
            } else {
              this.rightDate = nextYear(this.leftDate);
            }
          } else {
            this.leftDate = calcDefaultValue(this.defaultValue)[0];
            this.rightDate = nextYear(this.leftDate);
          }
          this.date = this.minDate;
        }
      },
      immediate: true
    },
    defaultValue(val) {
      if (!Array.isArray(this.value)) {
        const [left, right] = calcDefaultValue(val);
        this.leftDate = left;
        this.rightDate = val && val[1] && left.getFullYear() !== right.getFullYear() && this.unlinkPanels
          ? right
          : nextYear(this.leftDate);
      }
    }
  },
  methods: {
    handleClear() {
      this.minDate = null;
      this.maxDate = null;
      this.leftDate = calcDefaultValue(this.defaultValue)[0];
      this.rightDate = nextYear(this.leftDate);
      this.$emit('pick', null);
    },
    handleChangeRange(val) {
      this.minDate = val.minDate;
      this.maxDate = val.maxDate;
      this.rangeState = val.rangeState;
    },
    handleRangePick(val, close = true) {
      const defaultTime = this.defaultTime || [];
      const minDate = modifyWithTimeString(val.minDate, defaultTime[0]);
      const maxDate = modifyWithTimeString(val.maxDate, defaultTime[1]);
      if (this.maxDate === maxDate && this.minDate === minDate) {
        return;
      }
      this.onPick && this.onPick(val);
      this.maxDate = maxDate;
      this.minDate = minDate;
      // workaround for https://github.com/ElemeFE/element/issues/7539, should remove this block when we don't have to care about Chromium 55 - 57
      setTimeout(() => {
        this.maxDate = maxDate;
        this.minDate = minDate;
      }, 10);
      if (!close) return;
      this.handleConfirm();
    },
    handleShortcutClick(shortcut) {
      if (shortcut.onClick) {
        shortcut.onClick(this);
      }
    },

    leftPrevYear() {
      this.leftDate = prevYear(this.leftDate);
      if (!this.unlinkPanels) {
        this.rightDate = prevYear(this.rightDate);
      }
    },

    rightNextYear() {
      if (!this.unlinkPanels) {
        this.leftDate = nextYear(this.leftDate);
      }
      this.rightDate = nextYear(this.rightDate);
    },

    leftNextYear() {
      this.leftDate = nextYear(this.leftDate);
    },

    rightPrevYear() {
      this.rightDate = prevYear(this.rightDate);
    },

    handleConfirm(visible = false) {
      if (this.isValidValue([this.minDate, this.maxDate])) {
        this.$emit('pick', [this.minDate, this.maxDate], visible);
      }
    },

    isValidValue(value) {
      return Array.isArray(value) &&
        value && value[0] && value[1] &&
        isDate(value[0]) && isDate(value[1]) &&
        value[0].getTime() <= value[1].getTime() && (
        typeof this.disabledDate === 'function'
          ? !this.disabledDate(value[0]) && !this.disabledDate(value[1])
          : true
      );
    },

    resetDate() {
      this.minDate = this.value && isDate(this.value[0]) ? new Date(this.value[0]) : null;
      this.maxDate = this.value && isDate(this.value[0]) ? new Date(this.value[1]) : null;
    }
  },
  components: {
    quarterTable
  }
};
</script>