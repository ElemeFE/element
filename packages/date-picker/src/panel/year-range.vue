<template>
  <transition name="el-zoom-in-top" @after-leave="$emit('dodestroy')">
    <div
      v-show="visible"
      class="el-picker-panel el-date-range-picker el-popper is-pasted"
      :class="[{
        'has-sidebar': $slots.sidebar || shortcuts
      }, popperClass]">
      <div class="el-picker-panel__body-wrapper">
        <slot name="sidebar" class="el-picker-panel__sidebar"></slot>
        <div class="el-picker-panel__sidebar" v-if="shortcuts">
          <button
            type="button"
            class="el-picker-panel__shortcut"
            v-for="(shortcut, key) in shortcuts"
            :key="key"
            @click="handleShortcutClick(shortcut)">{{shortcut.text}}</button>
        </div>
        <div class="el-picker-panel__body">
          <div class="el-picker-panel__content el-date-range-picker__content is-left">
            <div class="el-date-range-picker__header">
              <button
                type="button"
                @click="leftPrevYear"
                class="el-picker-panel__icon-btn el-icon-d-arrow-left"></button>
              <button
                type="button"
                v-if="unlinkPanels"
                @click="leftNextYear"
                :disabled="!enableYearArrow"
                :class="{ 'is-disabled': !enableYearArrow }"
                class="el-picker-panel__icon-btn el-icon-d-arrow-right"></button>
              <div>{{ leftLabel }}</div>
            </div>
            <year-table
              selection-mode="range"
              :date="leftDate"
              :default-value="defaultValue"
              :min-date="minDate"
              :max-date="maxDate"
              :range-state="rangeState"
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
                @click="rightPrevYear"
                :disabled="!enableYearArrow"
                :class="{ 'is-disabled': !enableYearArrow }"
                class="el-picker-panel__icon-btn el-icon-d-arrow-left"></button>
              <button
                type="button"
                @click="rightNextYear"
                class="el-picker-panel__icon-btn el-icon-d-arrow-right"></button>
              <div>{{ rightLabel }}</div>
            </div>
            <year-table
              selection-mode="range"
              :date="rightDate"
              :default-value="defaultValue"
              :min-date="minDate"
              :max-date="maxDate"
              :range-state="rangeState"
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
  import {
    isDate,
    modifyWithTimeString,
    prevYear,
    nextYear
  } from 'element-ui/src/utils/date-util';
  import Clickoutside from 'element-ui/src/utils/clickoutside';
  import Locale from 'element-ui/src/mixins/locale';
  import YearTable from '../basic/year-table';
  // import llsButton from 'element-ui/packages/button';

  const getStartDate = (date) => {
    return new Date(Math.floor(date.getFullYear() / 10) * 10, 0, 1);
  };
  const calcDefaultValue = (defaultValue) => {
    if (Array.isArray(defaultValue)) {
      return [new Date(defaultValue[0]), new Date(defaultValue[1])];
    } else if (defaultValue) {
      return [new Date(defaultValue), nextYear(new Date(defaultValue), 10)];
    } else {
      return [new Date(), nextYear(new Date(), 10)];
    }
  };
  export default {
    mixins: [Locale],

    directives: { Clickoutside },

    computed: {
      btnDisabled() {
        return !(this.minDate && this.maxDate && !this.selecting && this.isValidValue([this.minDate, this.maxDate]));
      },

      leftLabel() {
        return this.leftYear + '-' + (this.leftYear + 9);
      },

      rightLabel() {
        return this.rightYear + '-' + (this.rightYear + 9);
      },

      leftYear() {
        return this.leftDate.getFullYear();
      },

      rightYear() {
        return this.rightDate.getFullYear() === this.leftDate.getFullYear() ? this.leftDate.getFullYear() + 10 : this.rightDate.getFullYear();
      },

      enableYearArrow() {
        return this.unlinkPanels && this.rightYear > this.leftYear + 10;
      }
    },

    data() {
      const leftDate = getStartDate(new Date());
      return {
        popperClass: '',
        value: [],
        defaultValue: null,
        defaultTime: null,
        minDate: '',
        maxDate: '',
        leftDate,
        rightDate: nextYear(leftDate, 10),
        rangeState: {
          endDate: null,
          selecting: false,
          row: null,
          column: null
        },
        shortcuts: '',
        visible: '',
        disabledDate: '',
        format: '',
        arrowControl: false,
        unlinkPanels: false
      };
    },

    watch: {
      value(newVal) {
        if (!newVal) {
          this.minDate = null;
          this.maxDate = null;
        } else if (Array.isArray(newVal)) {
          this.minDate = isDate(newVal[0]) ? new Date(newVal[0]) : null;
          this.maxDate = isDate(newVal[1]) ? new Date(newVal[1]) : null;
          if (this.minDate) {
            this.leftDate = getStartDate(this.minDate);
            if (this.unlinkPanels && this.maxDate) {
              const leftDateYear = this.leftDate.getFullYear();
              const maxDateYear = this.maxDate.getFullYear();
              this.rightDate = maxDateYear - 20 < leftDateYear
                ? nextYear(this.leftDate, 10)
                : getStartDate(this.maxDate);
            } else {
              this.rightDate = nextYear(this.leftDate, 10);
            }
          } else {
            this.leftDate = getStartDate(calcDefaultValue(this.defaultValue)[0]);
            this.rightDate = nextYear(this.leftDate, 10);
          }
        }
      },

      defaultValue(val) {
        if (!Array.isArray(this.value)) {
          const [left, right] = calcDefaultValue(val);
          this.leftDate = getStartDate(left);
          this.rightDate = val && val[1] && left.getFullYear() !== right.getFullYear() && this.unlinkPanels
            ? getStartDate(right)
            : nextYear(this.leftDate, 10);
        }
      }
    },

    methods: {
      handleClear() {
        this.minDate = null;
        this.maxDate = null;
        this.leftDate = getStartDate(calcDefaultValue(this.defaultValue)[0]);
        this.rightDate = nextYear(this.leftDate, 10);
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

      // leftPrev*, rightNext* need to take care of `unlinkPanels`
      leftPrevYear() {
        this.leftDate = prevYear(this.leftDate, 10);
        if (!this.unlinkPanels) {
          this.rightDate = prevYear(this.rightDate, 10);
        }
      },

      rightNextYear() {
        if (!this.unlinkPanels) {
          this.leftDate = nextYear(this.leftDate, 10);
        }
        this.rightDate = nextYear(this.rightDate, 10);
      },

      // leftNext*, rightPrev* are called when `unlinkPanels` is true
      leftNextYear() {
        this.leftDate = nextYear(this.leftDate, 10);
      },

      rightPrevYear() {
        this.rightDate = prevYear(this.rightDate, 10);
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

      resetView() {
        // NOTE: this is a hack to reset {min, max}Date on picker open.
        // TODO: correct way of doing so is to refactor {min, max}Date to be dependent on value and internal selection state
        //       an alternative would be resetView whenever picker becomes visible, should also investigate date-panel's resetView
        this.minDate = this.value && isDate(this.value[0]) ? new Date(this.value[0]) : null;
        this.maxDate = this.value && isDate(this.value[0]) ? new Date(this.value[1]) : null;
      }
    },

    components: { YearTable }
  };
</script>