<template>
  <transition name="md-fade-bottom" @after-leave="$emit('dodestroy')">
    <div
      v-show="visible"
      :style="{ width: width + 'px' }"
      class="el-picker-panel el-date-range-picker"
      :class="{
        'has-sidebar': $slots.sidebar || shortcuts,
        'has-time': showTime
      }">
      <div class="el-picker-panel__body-wrapper">
        <slot name="sidebar" class="el-picker-panel__sidebar"></slot>
        <div class="el-picker-panel__sidebar" v-if="shortcuts">
          <button
            type="button"
            class="el-picker-panel__shortcut"
            v-for="shortcut in shortcuts"
            @click="handleShortcutClick(shortcut)">{{shortcut.text}}</button>
        </div>
        <div class="el-picker-panel__body">
          <div class="el-date-range-picker__time-header" v-if="showTime">
            <span class="el-date-range-picker__editors-wrap">
              <span class="el-date-range-picker__time-picker-wrap">
                <input
                  :placeholder="$t('el.datepicker.startDate')"
                  class="el-date-range-picker__editor"
                  :value="leftVisibleDate"
                  @input="handleDateInput($event, 'min')"
                  @change="handleDateChange($event, 'min')"/>
              </span>
              <span class="el-date-range-picker__time-picker-wrap">
                <input
                  :placeholder="$t('el.datepicker.startTime')"
                  class="el-date-range-picker__editor"
                  :value="leftVisibleTime"
                  @focus="leftTimePickerVisible = !leftTimePickerVisible"
                  @change="handleTimeChange($event, 'min')"/>
                <time-picker
                  :picker-width="leftPickerWidth"
                  ref="lefttimepicker"
                  :date="minDate"
                  @pick="handleLeftTimePick"
                  :visible="leftTimePickerVisible">
                </time-picker>
              </span>
            </span>
            <span class="el-icon-arrow-right"></span>
            <span class="el-date-range-picker__editors-wrap is-right">
              <span class="el-date-range-picker__time-picker-wrap">
                <input
                  ref="leftInput"
                  :placeholder="$t('el.datepicker.endDate')"
                  class="el-date-range-picker__editor"
                  :value="rightVisibleDate"
                  :readonly="!minDate"
                  @input="handleDateInput($event, 'max')"
                  @change="handleDateChange($event, 'max')" />
              </span>
              <span class="el-date-range-picker__time-picker-wrap">
                <input
                  ref="rightInput"
                  :placeholder="$t('el.datepicker.endTime')"
                  class="el-date-range-picker__editor"
                  :value="rightVisibleTime"
                  @focus="minDate && (rightTimePickerVisible = !rightTimePickerVisible)"
                  :readonly="!minDate"
                  @change="handleTimeChange($event, 'max')" />
                <time-picker
                  :picker-width="rightPickerWidth"
                  ref="righttimepicker"
                  :date="maxDate"
                  @pick="handleRightTimePick"
                  :visible="rightTimePickerVisible"></time-picker>
              </span>
            </span>
          </div>
          <div class="el-picker-panel__content el-date-range-picker__content is-left">
            <div class="el-date-range-picker__header">
              <button
                type="button"
                @click="prevYear"
                class="el-picker-panel__icon-btn el-icon-d-arrow-left"></button>
              <button
                type="button"
                @click="prevMonth"
                class="el-picker-panel__icon-btn el-icon-arrow-left"></button>
              <div>{{ leftLabel }}</div>
            </div>
            <date-table
              selection-mode="range"
              :date="date"
              :year="leftYear"
              :month="leftMonth"
              :min-date="minDate"
              :max-date="maxDate"
              :range-state="rangeState"
              :disabled-date="disabledDate"
              @changerange="handleChangeRange"
              @pick="handleRangePick">
            </date-table>
          </div>
          <div class="el-picker-panel__content el-date-range-picker__content is-right">
            <div class="el-date-range-picker__header">
              <button
                type="button"
                @click="nextYear"
                class="el-picker-panel__icon-btn el-icon-d-arrow-right"></button>
              <button
                type="button"
                @click="nextMonth"
                class="el-picker-panel__icon-btn el-icon-arrow-right"></button>
              <div>{{ rightLabel }}</div>
            </div>
            <date-table
              selection-mode="range"
              :date="rightDate"
              :year="rightYear"
              :month="rightMonth"
              :min-date="minDate"
              :max-date="maxDate"
              :range-state="rangeState"
              :disabled-date="disabledDate"
              @changerange="handleChangeRange"
              @pick="handleRangePick"></date-table>
          </div>
        </div>
      </div>
      <div class="el-picker-panel__footer" v-if="showTime">
        <!-- <a
          class="el-picker-panel__link-btn"
          @click="changeToToday">{{ $t('el.datepicker.now') }}</a> -->
        <button
          type="button"
          class="el-picker-panel__btn"
          @click="handleConfirm"
          :disabled="btnDisabled">{{ $t('el.datepicker.confirm') }}</button>
      </div>
    </div>
  </transition>
</template>

<script type="text/babel">
  import { nextMonth, prevMonth, toDate, formatDate, parseDate } from '../util';
  import Locale from 'element-ui/src/mixins/locale';

  export default {
    mixins: [Locale],

    computed: {
      btnDisabled() {
        return !(this.minDate && this.maxDate && !this.selecting);
      },

      leftLabel() {
        return this.date.getFullYear() + ' ' + this.$t('el.datepicker.year') + ' ' + this.$t(`el.datepicker.month${ this.date.getMonth() + 1 }`);
      },

      rightLabel() {
        return this.rightDate.getFullYear() + ' ' + this.$t('el.datepicker.year') + ' ' + this.$t(`el.datepicker.month${ this.rightDate.getMonth() + 1 }`);
      },

      leftYear() {
        return this.date.getFullYear();
      },

      leftMonth() {
        return this.date.getMonth();
      },

      rightYear() {
        return this.rightDate.getFullYear();
      },

      rightMonth() {
        return this.rightDate.getMonth();
      },

      leftVisibleDate() {
        return formatDate(this.minDate);
      },

      rightVisibleDate() {
        return formatDate(this.maxDate || this.minDate);
      },

      leftVisibleTime() {
        return formatDate(this.minDate, 'HH:mm:ss');
      },

      rightVisibleTime() {
        return formatDate(this.maxDate, 'HH:mm:ss');
      },

      rightDate() {
        const newDate = new Date(this.date);
        const month = newDate.getMonth();
        newDate.setDate(1);

        if (month === 11) {
          newDate.setFullYear(newDate.getFullYear() + 1);
          newDate.setMonth(0);
        } else {
          newDate.setMonth(month + 1);
        }
        return newDate;
      }
    },

    data() {
      return {
        leftPickerWidth: 0,
        rightPickerWidth: 0,
        date: new Date(),
        minDate: '',
        maxDate: '',
        rangeState: {
          endDate: null,
          selecting: false,
          row: null,
          column: null
        },
        showTime: false,
        shortcuts: '',
        value: '',
        visible: '',
        disabledDate: '',
        leftTimePickerVisible: false,
        rightTimePickerVisible: false,
        width: 0
      };
    },

    watch: {
      showTime(val) {
        if (!val) return;
        this.$nextTick(_ => {
          const leftInputElm = this.$refs.leftInput;
          const rightInputElm = this.$refs.rightInput;
          if (leftInputElm) {
            this.leftPickerWidth = leftInputElm.getBoundingClientRect().width + 10;
          }
          if (rightInputElm) {
            this.rightPickerWidth = rightInputElm.getBoundingClientRect().width + 10;
          }
        });
      },

      minDate() {
        this.$nextTick(() => {
          if (this.maxDate && this.maxDate < this.minDate) {
            this.maxDate = null;
          }
        });
      },

      leftTimePickerVisible(val) {
        if (val) this.$nextTick(() => this.$refs.lefttimepicker.ajustScrollTop());
      },

      rightTimePickerVisible(val) {
        if (val) this.$nextTick(() => this.$refs.righttimepicker.ajustScrollTop());
      },

      value(newVal) {
        if (!newVal) {
          this.minDate = null;
          this.maxDate = null;
        } else if (Array.isArray(newVal)) {
          this.minDate = toDate(newVal[0]);
          this.maxDate = toDate(newVal[1]);
        }
      }
    },

    methods: {
      handleDateInput(event, type) {
        const value = event.target.value;
        const parsedValue = parseDate(value, 'yyyy-MM-dd');

        if (parsedValue) {
          if (typeof this.disabledDate === 'function' &&
            this.disabledDate(new Date(parsedValue))) {
            return;
          }
          const target = new Date(type === 'min' ? this.minDate : this.maxDate);
          if (target) {
            target.setFullYear(parsedValue.getFullYear());
            target.setMonth(parsedValue.getMonth());
            target.setDate(parsedValue.getDate());
          }
        }
      },

      handleChangeRange(val) {
        this.minDate = val.minDate;
        this.maxDate = val.maxDate;
        this.rangeState = val.rangeState;
      },

      handleDateChange(event, type) {
        const value = event.target.value;
        const parsedValue = parseDate(value, 'yyyy-MM-dd');
        if (parsedValue) {
          const target = new Date(type === 'min' ? this.minDate : this.maxDate);
          if (target) {
            target.setFullYear(parsedValue.getFullYear());
            target.setMonth(parsedValue.getMonth());
            target.setDate(parsedValue.getDate());
          }
          if (type === 'min') {
            if (target < this.maxDate) {
              this.minDate = new Date(target.getTime());
            }
          } else {
            if (target > this.minDate) {
              this.maxDate = new Date(target.getTime());
              if (this.minDate && this.minDate > this.maxDate) {
                this.minDate = null;
              }
            }
          }
        }
      },

      handleTimeChange(event, type) {
        const value = event.target.value;
        const parsedValue = parseDate(value, 'HH:mm:ss');
        if (parsedValue) {
          const target = new Date(type === 'min' ? this.minDate : this.maxDate);
          if (target) {
            target.setHours(parsedValue.getHours());
            target.setMinutes(parsedValue.getMinutes());
            target.setSeconds(parsedValue.getSeconds());
          }
          if (type === 'min') {
            if (target < this.maxDate) {
              this.minDate = new Date(target.getTime());
            }
          } else {
            if (target > this.minDate) {
              this.maxDate = new Date(target.getTime());
            }
          }
          const l2r = type === 'min' ? 'left' : 'right';

          this.$refs[l2r + 'timepicker'].value = target;
          this[l2r + 'TimePickerVisible'] = false;
        }
      },

      handleRangePick(val, close = true) {
        if (this.maxDate === val.maxDate && this.minDate === val.minDate) {
          return;
        }
        this.maxDate = val.maxDate;
        this.minDate = val.minDate;

        if (!close) return;
        if (!this.showTime) {
          this.$emit('pick', [this.minDate, this.maxDate]);
        }
      },

      changeToToday() {
        this.date = new Date();
      },

      handleShortcutClick(shortcut) {
        if (shortcut.onClick) {
          shortcut.onClick(this);
        }
      },

      resetView() {
        this.leftTimePickerVisible = false;
        this.rightTimePickerVisible = false;
      },

      setTime(date, value) {
        let oldDate = new Date(date.getTime());
        let hour = value.getHours();
        let minute = value.getMinutes();
        let second = value.getSeconds();
        oldDate.setHours(hour);
        oldDate.setMinutes(minute);
        oldDate.setSeconds(second);
        return new Date(oldDate.getTime());
      },

      handleLeftTimePick(value, visible, first) {
        this.minDate = this.minDate || new Date();
        if (value) {
          this.minDate = this.setTime(this.minDate, value);
        }

        if (!first) {
          this.leftTimePickerVisible = visible;
        }
      },

      handleRightTimePick(value, visible, first) {
        if (!this.maxDate) {
          const now = new Date();
          if (now >= this.minDate) {
            this.maxDate = new Date();
          }
        }

        if (this.maxDate && value) {
          this.maxDate = this.setTime(this.maxDate, value);
        }

        if (!first) {
          this.rightTimePickerVisible = visible;
        }
      },

      prevMonth() {
        this.date = prevMonth(this.date);
      },

      nextMonth() {
        this.date = nextMonth(this.date);
      },

      nextYear() {
        const date = this.date;
        date.setFullYear(date.getFullYear() + 1);
        this.resetDate();
      },

      prevYear() {
        const date = this.date;
        date.setFullYear(date.getFullYear() - 1);
        this.resetDate();
      },

      handleConfirm() {
        this.$emit('pick', [this.minDate, this.maxDate]);
      },

      resetDate() {
        this.date = new Date(this.date);
      }
    },

    components: {
      TimePicker: require('./time'),
      DateTable: require('../basic/date-table')
    }
  };
</script>
