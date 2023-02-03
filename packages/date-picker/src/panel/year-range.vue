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
                            <button type="button" @click="prevYear(true)" class="el-picker-panel__icon-btn el-icon-d-arrow-left"></button>
                            <button
                                type="button"
                                v-if="unlinkPanels"
                                @click="nextYear(true)"
                                :disabled="!enableYearArrow"
                                :class="{ 'is-disabled': !enableYearArrow }"
                                class="el-picker-panel__icon-btn el-icon-d-arrow-right"></button>
                            <div>{{ leftLabel }}</div>
                        </div>
                        <year-table
                            :date="date"
                            :min-date="minDate"
                            :max-date="maxDate"
                            :year="leftYear"
                            selection-mode="range"
                            :rangeState="rangeState"
                            :disabled-date="disabledDate"
                            @changerange="handleChangeRange"
                            @pick="handleRangePick">
                        </year-table>
                    </div>
                    <div class="el-picker-panel__content el-date-range-picker__content is-right">
                        <div class="el-date-range-picker__header">
                            <button
                                type="button"
                                v-if="unlinkPanels"
                                @click="prevYear(false)"
                                :disabled="!enableYearArrow"
                                :class="{ 'is-disabled': !enableYearArrow }"
                                class="el-picker-panel__icon-btn el-icon-d-arrow-left"></button>
                            <button type="button" @click="nextYear(false)" class="el-picker-panel__icon-btn el-icon-d-arrow-right"></button>
                            <div>{{ rightLabel }}</div>
                        </div>
                        <year-table
                            :min-date="minDate"
                            :max-date="maxDate"
                            :date="rightDate"
                            :year="rightYear"
                            selection-mode="range"
                            :rangeState="rangeState"
                            :disabled-date="disabledDate"
                            @changerange="handleChangeRange"
                            @pick="handleRangePick">
                        </year-table>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script type="text/babel">
import Clickoutside from 'element-ui/src/utils/clickoutside';
import Locale from 'element-ui/src/mixins/locale';
import {
  toDate,
  modifyWithTimeString
} from 'element-ui/src/utils/date-util';
import yearTable from '../basic/year-table';
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
      const startYear = Math.floor(this.date.getFullYear() / 10) * 10;
      const yearTranslation = this.t('el.datepicker.year');
      return startYear + ' ' + yearTranslation + ' - ' + (startYear + 9) + ' ' + yearTranslation;
    },

    rightLabel() {
      const endYear = Math.floor(this.rightDate.getFullYear() / 10) * 10;
      const yearTranslation = this.t('el.datepicker.year');
      return endYear + ' ' + yearTranslation + ' - ' + (endYear + 9) + ' ' + yearTranslation;
    },
    leftYear() {
      return Math.floor(this.date.getFullYear() / 10) * 10;
    },
    rightYear() {
      return Math.floor(this.rightDate.getFullYear() / 10) * 10;
    },
    enableYearArrow() {
      return this.rightYear - 10 > this.leftYear;
    }
  },
  data() {
    return {
      defaultTime: null,
      popperClass: '',
      defaultValue: null,
      date: calcDefaultValue(this.defaultValue)[0],
      rightDate: calcDefaultValue(this.defaultValue)[1],
      minDate: '',
      maxDate: '',
      rangeState: {
        endDate: null,
        selecting: false
      },
      showTime: false,
      shortcuts: '',
      value: '',
      visible: '',
      disabledDate: '',
      firstDayOfWeek: 7,
      format: '',
      toolTipTop: 0,
      toolTipLeft: 0,
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
          this.minDate = newVal[0] ? toDate(newVal[0]).getFullYear() : null;
          this.maxDate = newVal[1] ? toDate(newVal[1]).getFullYear() : null;
          this.date = new Date(this.minDate, 0, 1);
          this.rangeState.endDate = null;
        }
      },
      immediate: true
    },
    date(val) {
      const date = new Date(val);
      if (!this.unlinkPanels || date.getFullYear() + 10 > this.rightDate.getFullYear()) {
        this.rightDate = new Date(date.setFullYear(date.getFullYear() + 10));
      }
    },
    defaultValue(val) {
      if (!Array.isArray(this.value) || !this.value.length) {
        const [left, right] = calcDefaultValue(val);
        this.date = left;
        if (this.unlinkPanels) this.rightDate = right;
      }
    }
  },
  methods: {
    handleClear() {
      this.minDate = null;
      this.maxDate = null;
      this.date = calcDefaultValue(this.defaultValue)[0];
      this.handleConfirm(false);
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
    nextYear(left = false) {
      const date = left || !this.unlinkPanels ? this.date : this.rightDate;
      date.setFullYear(date.getFullYear() + 10);
      this.resetDate();
    },
    prevYear(left = false) {
      const date = left ? this.date : this.rightDate;
      date.setFullYear(date.getFullYear() - 10);
      this.resetDate();
    },
    handleConfirm(visible = false) {
      if (!this.minDate || !this.maxDate) return;
      this.$emit('pick', [new Date(this.minDate, 0, 1), new Date(this.maxDate, 0, 1)], visible);
    },
    resetDate() {
      this.date = new Date(this.date);
      this.rightDate = new Date(this.rightDate);
    }
  },
  components: {
    yearTable
  }
};
</script>