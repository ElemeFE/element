<template>
  <transition name="el-zoom-in-top" @after-leave="$emit('dodestroy')">
    <div
      v-show="visible"
      class="el-picker-panel el-date-range-picker el-popper"
      :class="[{
        'has-sidebar': $slots.sidebar || shortcuts,
        'has-time': showTime
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
          <div class="el-date-range-picker__time-header" v-if="showTime">
            <span class="el-date-range-picker__editors-wrap">
              <span class="el-date-range-picker__time-picker-wrap">
                <el-input
                  size="small"
                  :disabled="rangeState.selecting"
                  ref="minInput"
                  :placeholder="t('el.datepicker.startDate')"
                  class="el-date-range-picker__editor"
                  :value="minVisibleDate"
                  @input="val => handleDateInput(val, 'min')"
                  @change="val => handleDateChange(val, 'min')" />
              </span>
              <span class="el-date-range-picker__time-picker-wrap" v-clickoutside="handleMinTimeClose">
                <el-input
                  size="small"
                  class="el-date-range-picker__editor"
                  :disabled="rangeState.selecting"
                  :placeholder="t('el.datepicker.startTime')"
                  :value="minVisibleTime"
                  @focus="minTimePickerVisible = true"
                  @input="val => handleTimeInput(val, 'min')"
                  @change="val => handleTimeChange(val, 'min')" />
                <time-picker
                  ref="minTimePicker"
                  @pick="handleMinTimePick"
                  :time-arrow-control="arrowControl"
                  :visible="minTimePickerVisible"
                  @mounted="proxyTimePickerDataProperties($refs.minTimePicker)">
                </time-picker>
              </span>
            </span>
            <span class="el-icon-arrow-right"></span>
            <span class="el-date-range-picker__editors-wrap is-right">
              <span class="el-date-range-picker__time-picker-wrap">
                <el-input
                  size="small"
                  class="el-date-range-picker__editor"
                  :disabled="rangeState.selecting"
                  :placeholder="t('el.datepicker.endDate')"
                  :value="maxVisibleDate"
                  :readonly="!minDate"
                  @input="val => handleDateInput(val, 'max')"
                  @change="val => handleDateChange(val, 'max')" />
              </span>
              <span class="el-date-range-picker__time-picker-wrap" v-clickoutside="handleMaxTimeClose">
                <el-input
                  size="small"
                  class="el-date-range-picker__editor"
                  :disabled="rangeState.selecting"
                  :placeholder="t('el.datepicker.endTime')"
                  :value="maxVisibleTime"
                  :readonly="!minDate"
                  @focus="minDate && (maxTimePickerVisible = true)"
                  @input="val => handleTimeInput(val, 'max')"
                  @change="val => handleTimeChange(val, 'max')" />
                <time-picker
                  ref="maxTimePicker"
                  @pick="handleMaxTimePick"
                  :time-arrow-control="arrowControl"
                  :visible="maxTimePickerVisible"
                  @mounted="proxyTimePickerDataProperties($refs.maxTimePicker)">
                </time-picker>
              </span>
            </span>
          </div>
          <div class="el-picker-panel__content el-date-range-picker__content is-left">
            <div class="el-date-range-picker__header">
              <button
                type="button"
                @click="leftPrevYear"
                class="el-picker-panel__icon-btn el-icon-d-arrow-left"></button>
              <button
                type="button"
                @click="leftPrevMonth"
                class="el-picker-panel__icon-btn el-icon-arrow-left"></button>
              <button
                type="button"
                @click="leftNextYear"
                v-if="unlinkPanels"
                :disabled="!enableYearArrow"
                :class="{ 'is-disabled': !enableYearArrow }"
                class="el-picker-panel__icon-btn el-icon-d-arrow-right"></button>
              <button
                type="button"
                @click="leftNextMonth"
                v-if="unlinkPanels"
                :disabled="!enableMonthArrow"
                :class="{ 'is-disabled': !enableMonthArrow }"
                class="el-picker-panel__icon-btn el-icon-arrow-right"></button>
              <div>{{ leftLabel }}</div>
            </div>
            <date-table
              selection-mode="range"
              :date="leftDate"
              :default-value="defaultValue"
              :min-date="minDate"
              :max-date="maxDate"
              :range-state="rangeState"
              :disabled-date="disabledDate"
              @changerange="handleChangeRange"
              :first-day-of-week="firstDayOfWeek"
              :timezone="timezone"
              @pick="handleRangePick">
            </date-table>
          </div>
          <div class="el-picker-panel__content el-date-range-picker__content is-right">
            <div class="el-date-range-picker__header">
              <button
                type="button"
                @click="rightPrevYear"
                v-if="unlinkPanels"
                :disabled="!enableYearArrow"
                :class="{ 'is-disabled': !enableYearArrow }"
                class="el-picker-panel__icon-btn el-icon-d-arrow-left"></button>
              <button
                type="button"
                @click="rightPrevMonth"
                v-if="unlinkPanels"
                :disabled="!enableMonthArrow"
                :class="{ 'is-disabled': !enableMonthArrow }"
                class="el-picker-panel__icon-btn el-icon-arrow-left"></button>
              <button
                type="button"
                @click="rightNextYear"
                class="el-picker-panel__icon-btn el-icon-d-arrow-right"></button>
              <button
                type="button"
                @click="rightNextMonth"
                class="el-picker-panel__icon-btn el-icon-arrow-right"></button>
              <div>{{ rightLabel }}</div>
            </div>
            <date-table
              selection-mode="range"
              :date="rightDate"
              :default-value="defaultValue"
              :min-date="minDate"
              :max-date="maxDate"
              :range-state="rangeState"
              :disabled-date="disabledDate"
              @changerange="handleChangeRange"
              :first-day-of-week="firstDayOfWeek"
              :timezone="timezone"
              @pick="handleRangePick">
            </date-table>
          </div>
        </div>
      </div>
      <div class="el-picker-panel__footer" v-if="showTime">
        <el-button
          size="mini"
          type="text"
          class="el-picker-panel__link-btn"
          @click="handleClear">
          {{ t('el.datepicker.clear') }}
        </el-button>
        <el-button
          plain
          size="mini"
          class="el-picker-panel__link-btn"
          :disabled="btnDisabled"
          @click="handleConfirm(false)">
          {{ t('el.datepicker.confirm') }}
        </el-button>
      </div>
    </div>
  </transition>
</template>

<script type="text/babel">
  import {
    formatDate,
    parseDate,
    isDate,
    modifyDate,
    modifyTime,
    modifyWithTimeString,
    prevYear,
    nextYear,
    prevMonth,
    nextMonth,
    nextDate,
    extractDateFormat,
    extractTimeFormat,
    getFullYear,
    getDate,
    getMonth,
    getHours,
    getMinutes,
    getSeconds,
    newDate
  } from 'element-ui/src/utils/date-util';
  import Clickoutside from 'element-ui/src/utils/clickoutside';
  import Locale from 'element-ui/src/mixins/locale';
  import TimePicker from './time';
  import DateTable from '../basic/date-table';
  import ElInput from 'element-ui/packages/input';
  import ElButton from 'element-ui/packages/button';

  const calcDefaultValue = (defaultValue, timezone) => {
    if (Array.isArray(defaultValue)) {
      return [new Date(defaultValue[0]), new Date(defaultValue[1])];
    } else if (defaultValue) {
      return [new Date(defaultValue), nextDate(new Date(defaultValue), timezone, 1)];
    } else {
      return [new Date(), nextDate(new Date(), timezone, 1)];
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
        return getFullYear(this.leftDate, this.timezone) + ' ' + this.t('el.datepicker.year') + ' ' + this.t(`el.datepicker.month${ getMonth(this.leftDate, this.timezone) + 1 }`);
      },

      rightLabel() {
        return getFullYear(this.rightDate, this.timezone) + ' ' + this.t('el.datepicker.year') + ' ' + this.t(`el.datepicker.month${ getMonth(this.rightDate, this.timezone) + 1 }`);
      },

      leftYear() {
        return getFullYear(this.leftDate, this.timezone);
      },

      leftMonth() {
        return getMonth(this.leftDate, this.timezone);
      },

      leftMonthDate() {
        return getDate(this.leftDate, this.timezone);
      },

      rightYear() {
        return getFullYear(this.rightDate, this.timezone);
      },

      rightMonth() {
        return getMonth(this.rightDate, this.timezone);
      },

      rightMonthDate() {
        return getDate(this.rightDate, this.timezone);
      },

      minVisibleDate() {
        if (this.dateUserInput.min !== null) return this.dateUserInput.min;
        if (this.minDate) return formatDate(this.minDate, this.dateFormat, this.timezone);
        return '';
      },

      maxVisibleDate() {
        if (this.dateUserInput.max !== null) return this.dateUserInput.max;
        if (this.maxDate || this.minDate) return formatDate(this.maxDate || this.minDate, this.dateFormat, this.timezone);
        return '';
      },

      minVisibleTime() {
        if (this.timeUserInput.min !== null) return this.timeUserInput.min;
        if (this.minDate) return formatDate(this.minDate, this.timeFormat, this.timezone);
        return '';
      },

      maxVisibleTime() {
        if (this.timeUserInput.max !== null) return this.timeUserInput.max;
        if (this.maxDate || this.minDate) return formatDate(this.maxDate || this.minDate, this.timeFormat, this.timezone);
        return '';
      },

      timeFormat() {
        if (this.format) {
          return extractTimeFormat(this.format);
        } else {
          return 'HH:mm:ss';
        }
      },

      dateFormat() {
        if (this.format) {
          return extractDateFormat(this.format);
        } else {
          return 'yyyy-MM-dd';
        }
      },

      enableMonthArrow() {
        const nextMonth = (this.leftMonth + 1) % 12;
        const yearOffset = this.leftMonth + 1 >= 12 ? 1 : 0;
        return this.unlinkPanels && newDate([this.leftYear + yearOffset, nextMonth], this.timezone) < newDate([this.rightYear, this.rightMonth], this.timezone);
      },

      enableYearArrow() {
        return this.unlinkPanels && this.rightYear * 12 + this.rightMonth - (this.leftYear * 12 + this.leftMonth + 1) >= 12;
      }
    },

    data() {
      return {
        popperClass: '',
        value: [],
        defaultValue: null,
        defaultTime: null,
        minDate: '',
        maxDate: '',
        leftDate: new Date(),
        rightDate: nextMonth(new Date(), 'local'),
        rangeState: {
          endDate: null,
          selecting: false,
          row: null,
          column: null
        },
        showTime: false,
        shortcuts: '',
        visible: '',
        disabledDate: '',
        firstDayOfWeek: 7,
        minTimePickerVisible: false,
        maxTimePickerVisible: false,
        format: '',
        arrowControl: false,
        unlinkPanels: false,
        dateUserInput: {
          min: null,
          max: null
        },
        timeUserInput: {
          min: null,
          max: null
        },
        timezone: 'local'
      };
    },

    watch: {
      minDate(val) {
        this.dateUserInput.min = null;
        this.timeUserInput.min = null;
        this.$nextTick(() => {
          if (this.$refs.maxTimePicker && this.maxDate && this.maxDate < this.minDate) {
            const format = 'HH:mm:ss';
            this.$refs.maxTimePicker.selectableRange = [
              [
                parseDate(formatDate(this.minDate, format, this.timezone), format, this.timezone),
                parseDate('23:59:59', format, this.timezone)
              ]
            ];
          }
        });
        if (val && this.$refs.minTimePicker) {
          this.$refs.minTimePicker.date = val;
          this.$refs.minTimePicker.value = val;
        }
      },

      maxDate(val) {
        this.dateUserInput.max = null;
        this.timeUserInput.max = null;
        if (val && this.$refs.maxTimePicker) {
          this.$refs.maxTimePicker.date = val;
          this.$refs.maxTimePicker.value = val;
        }
      },

      minTimePickerVisible(val) {
        if (val) {
          this.$nextTick(() => {
            this.$refs.minTimePicker.date = this.minDate;
            this.$refs.minTimePicker.value = this.minDate;
            this.$refs.minTimePicker.adjustSpinners();
          });
        }
      },

      maxTimePickerVisible(val) {
        if (val) {
          this.$nextTick(() => {
            this.$refs.maxTimePicker.date = this.maxDate;
            this.$refs.maxTimePicker.value = this.maxDate;
            this.$refs.maxTimePicker.adjustSpinners();
          });
        }
      },

      value(newVal) {
        if (!newVal) {
          this.minDate = null;
          this.maxDate = null;
        } else if (Array.isArray(newVal)) {
          this.minDate = isDate(newVal[0]) ? new Date(newVal[0]) : null;
          this.maxDate = isDate(newVal[1]) ? new Date(newVal[1]) : null;
          if (this.minDate) {
            this.leftDate = this.minDate;
            if (this.unlinkPanels && this.maxDate) {
              const minDateYear = getFullYear(this.minDate, this.timezone);
              const minDateMonth = getMonth(this.minDate, this.timezone);
              const maxDateYear = getFullYear(this.maxDate, this.timezone);
              const maxDateMonth = getMonth(this.maxDate, this.timezone);
              this.rightDate = minDateYear === maxDateYear && minDateMonth === maxDateMonth
                ? nextMonth(this.maxDate, this.timezone)
                : this.maxDate;
            } else {
              this.rightDate = nextMonth(this.leftDate, this.timezone);
            }
          } else {
            this.leftDate = calcDefaultValue(this.defaultValue, this.timezone)[0];
            this.rightDate = nextMonth(this.leftDate, this.timezone);
          }
        }
      },

      defaultValue(val) {
        if (!Array.isArray(this.value)) {
          const [left, right] = calcDefaultValue(val, this.timezone);
          this.leftDate = left;
          this.rightDate = val && val[1] && this.unlinkPanels
            ? right
            : nextMonth(this.leftDate, this.timezone);
        }
      }
    },

    mounted() {
      this.rightDate = nextMonth(new Date(), this.timezone);
    },

    methods: {
      handleClear() {
        this.minDate = null;
        this.maxDate = null;
        this.leftDate = calcDefaultValue(this.defaultValue, this.timezone)[0];
        this.rightDate = nextMonth(this.leftDate, this.timezone);
        this.$emit('pick', null);
      },

      handleChangeRange(val) {
        this.minDate = val.minDate;
        this.maxDate = val.maxDate;
        this.rangeState = val.rangeState;
      },

      handleDateInput(value, type) {
        this.dateUserInput[type] = value;
        if (value.length !== this.dateFormat.length) return;
        const parsedValue = parseDate(value, this.dateFormat, this.timezone);

        if (parsedValue) {
          if (typeof this.disabledDate === 'function' &&
            this.disabledDate(new Date(parsedValue))) {
            return;
          }
          if (type === 'min') {
            this.minDate = modifyDate(this.minDate || new Date(), getFullYear(parsedValue, this.timezone), getMonth(parsedValue, this.timezone), getDate(parsedValue, this.timezone), this.timezone);
            this.leftDate = new Date(parsedValue);
            if (!this.unlinkPanels) {
              this.rightDate = nextMonth(this.leftDate, this.timezone);
            }
          } else {
            this.maxDate = modifyDate(this.maxDate || new Date(), getFullYear(parsedValue, this.timezone), getMonth(parsedValue, this.timezone), getDate(parsedValue, this.timezone), this.timezone);
            this.rightDate = new Date(parsedValue);
            if (!this.unlinkPanels) {
              this.leftDate = prevMonth(parsedValue, this.timezone);
            }
          }
        }
      },

      handleDateChange(value, type) {
        const parsedValue = parseDate(value, this.dateFormat, this.timezone);
        if (parsedValue) {
          if (type === 'min') {
            this.minDate = modifyDate(this.minDate, getFullYear(parsedValue, this.timezone), getMonth(parsedValue, this.timezone), getDate(parsedValue, this.timezone), this.timezone);
            if (this.minDate > this.maxDate) {
              this.maxDate = this.minDate;
            }
          } else {
            this.maxDate = modifyDate(this.maxDate, getFullYear(parsedValue, this.timezone), getMonth(parsedValue, this.timezone), getDate(parsedValue, this.timezone), this.timezone);
            if (this.maxDate < this.minDate) {
              this.minDate = this.maxDate;
            }
          }
        }
      },

      handleTimeInput(value, type) {
        this.timeUserInput[type] = value;
        if (value.length !== this.timeFormat.length) return;
        const parsedValue = parseDate(value, this.timeFormat, this.timezone);

        if (parsedValue) {
          if (type === 'min') {
            this.minDate = modifyTime(this.minDate, getHours(parsedValue, this.timezone), getMinutes(parsedValue, this.timezone), getSeconds(parsedValue, this.timezone), this.timezone);
            this.$nextTick(_ => this.$refs.minTimePicker.adjustSpinners());
          } else {
            this.maxDate = modifyTime(this.maxDate, getHours(parsedValue, this.timezone), getMinutes(parsedValue, this.timezone), getSeconds(parsedValue, this.timezone), this.timezone);
            this.$nextTick(_ => this.$refs.maxTimePicker.adjustSpinners());
          }
        }
      },

      handleTimeChange(value, type) {
        const parsedValue = parseDate(value, this.timeFormat, this.timezone);
        if (parsedValue) {
          if (type === 'min') {
            this.minDate = modifyTime(this.minDate, getHours(parsedValue, this.timezone), getMinutes(parsedValue, this.timezone), getSeconds(parsedValue, this.timezone), this.timezone);
            if (this.minDate > this.maxDate) {
              this.maxDate = this.minDate;
            }
            this.$refs.minTimePicker.value = this.minDate;
            this.minTimePickerVisible = false;
          } else {
            this.maxDate = modifyTime(this.maxDate, getHours(parsedValue, this.timezone), getMinutes(parsedValue, this.timezone), getSeconds(parsedValue, this.timezone), this.timezone);
            if (this.maxDate < this.minDate) {
              this.minDate = this.maxDate;
            }
            this.$refs.maxTimePicker.value = this.minDate;
            this.maxTimePickerVisible = false;
          }
        }
      },

      handleRangePick(val, close = true) {
        const defaultTime = this.defaultTime || [];
        const minDate = modifyWithTimeString(val.minDate, defaultTime[0], this.timezone);
        const maxDate = modifyWithTimeString(val.maxDate, defaultTime[1], this.timezone);

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
        if (!close || this.showTime) return;
        this.handleConfirm();
      },

      handleShortcutClick(shortcut) {
        if (shortcut.onClick) {
          shortcut.onClick(this);
        }
      },

      handleMinTimePick(value, visible, first) {
        this.minDate = this.minDate || new Date();
        if (value) {
          this.minDate = modifyTime(this.minDate, getHours(value, this.timezone), getMinutes(value, this.timezone), getSeconds(value, this.timezone), this.timezone);
        }

        if (!first) {
          this.minTimePickerVisible = visible;
        }

        if (!this.maxDate || this.maxDate && this.maxDate.getTime() < this.minDate.getTime()) {
          this.maxDate = new Date(this.minDate);
        }
      },

      handleMinTimeClose() {
        this.minTimePickerVisible = false;
      },

      handleMaxTimePick(value, visible, first) {
        if (this.maxDate && value) {
          this.maxDate = modifyTime(this.maxDate, getHours(value, this.timezone), getMinutes(value, this.timezone), getSeconds(value, this.timezone), this.timezone);
        }

        if (!first) {
          this.maxTimePickerVisible = visible;
        }

        if (this.maxDate && this.minDate && this.minDate.getTime() > this.maxDate.getTime()) {
          this.minDate = new Date(this.maxDate);
        }
      },

      handleMaxTimeClose() {
        this.maxTimePickerVisible = false;
      },

      // leftPrev*, rightNext* need to take care of `unlinkPanels`
      leftPrevYear() {
        this.leftDate = prevYear(this.leftDate, this.timezone);
        if (!this.unlinkPanels) {
          this.rightDate = nextMonth(this.leftDate, this.timezone);
        }
      },

      leftPrevMonth() {
        this.leftDate = prevMonth(this.leftDate, this.timezone);
        if (!this.unlinkPanels) {
          this.rightDate = nextMonth(this.leftDate, this.timezone);
        }
      },

      rightNextYear() {
        if (!this.unlinkPanels) {
          this.leftDate = nextYear(this.leftDate, this.timezone);
          this.rightDate = nextMonth(this.leftDate, this.timezone);
        } else {
          this.rightDate = nextYear(this.rightDate, this.timezone);
        }
      },

      rightNextMonth() {
        if (!this.unlinkPanels) {
          this.leftDate = nextMonth(this.leftDate, this.timezone);
          this.rightDate = nextMonth(this.leftDate, this.timezone);
        } else {
          this.rightDate = nextMonth(this.rightDate, this.timezone);
        }
      },

      // leftNext*, rightPrev* are called when `unlinkPanels` is true
      leftNextYear() {
        this.leftDate = nextYear(this.leftDate, this.timezone);
      },

      leftNextMonth() {
        this.leftDate = nextMonth(this.leftDate, this.timezone);
      },

      rightPrevYear() {
        this.rightDate = prevYear(this.rightDate, this.timezone);
      },

      rightPrevMonth() {
        this.rightDate = prevMonth(this.rightDate, this.timezone);
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

      proxyTimePickerDataProperties(ref) {
        const format = timeFormat => {ref.format = timeFormat;};
        const timezone = timezone => {ref.timezone = timezone;};

        this.$watch('timezone', timezone);

        format(this.timeFormat);
        timezone(this.timezone);
      },

      resetView() {
        // NOTE: this is a hack to reset {min, max}Date on picker open.
        // TODO: correct way of doing so is to refactor {min, max}Date to be dependent on value and internal selection state
        //       an alternative would be resetView whenever picker becomes visible, should also investigate date-panel's resetView
        this.minDate = this.value && isDate(this.value[0]) ? new Date(this.value[0]) : null;
        this.maxDate = this.value && isDate(this.value[0]) ? new Date(this.value[1]) : null;
      }
    },

    components: { TimePicker, DateTable, ElInput, ElButton }
  };
</script>
