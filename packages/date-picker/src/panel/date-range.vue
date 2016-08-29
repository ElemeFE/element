<template>
  <transition name="md-fade-bottom">
    <div
      v-show="visible"
      class="el-picker-panel el-date-range-picker">
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
              <input
                placeholder="开始日期"
                class="el-date-range-picker__editor"
                v-model="leftVisibleDate"
                @input="handleDateInput($event, 'min')"
                @change="handleDateChange($event, 'min')"/>
              <span
                class="el-date-range-picker__time-picker-wrap"
                v-clickoutside="closeLeftTimePicker">
                <input
                  placeholder="开始时间"
                  class="el-date-range-picker__editor"
                  v-model="leftVisibleTime"
                  @focus="leftTimePickerVisible = true"
                  @change="handleTimeChange($event, 'min')"/>
                <time-picker
                  ref="lefttimepicker"
                  :date="minDate"
                  @pick="handleLeftTimePick"
                  :visible="leftTimePickerVisible">
                </time-picker>
              </span>
            </span>
            <span class="el-icon-arrow-right"></span>
            <span class="el-date-range-picker__editors-wrap is-right">
              <input
                placeholder="结束日期"
                class="el-date-range-picker__editor"
                v-model="rightVisibleDate"
                :readonly="!minDate"
                @input="handleDateInput($event, 'max')"
                @change="handleDateChange($event, 'max')" />
              <span
                class="el-date-range-picker__time-picker-wrap"
                v-clickoutside="closeRightTimePicker">
                <input
                  placeholder="结束时间"
                  class="el-date-range-picker__editor"
                  v-model="rightVisibleTime"
                  @focus="minDate && (rightTimePickerVisible = true)"
                  :readonly="!minDate"
                  @change="handleTimeChange($event, 'max')" />
                <time-picker
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
              @changerange="handleChangeRange"
              @pick="handleRangePick"></date-table>
          </div>
        </div>
      </div>
      <div class="el-picker-panel__footer" v-if="showTime">
        <!-- <a
          class="el-picker-panel__link-btn"
          @click="changeToToday">{{ $t('datepicker.today') }}</a> -->
        <button
          type="button"
          class="el-picker-panel__btn"
          @click="handleConfirm"
          :disabled="btnDisabled">确定</button>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import { nextMonth, prevMonth, $t, formatDate, parseDate } from '../util';

  export default {
    computed: {
      btnDisabled() {
        return !(this.minDate && this.maxDate && !this.selecting);
      },

      leftLabel() {
        return this.date.getFullYear() + '年 ' + (this.date.getMonth() + 1) + '月';
      },

      rightLabel() {
        return this.rightDate.getFullYear() + '年 ' + (this.rightDate.getMonth() + 1) + '月';
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
        return formatDate(this.maxDate);
      },

      leftVisibleTime() {
        return formatDate(this.minDate, 'HH:mm:ss');
      },

      rightVisibleTime() {
        return formatDate(this.maxDate, 'HH:mm:ss');
      },

      leftHours: {
        get() {
          return this.date.getHours();
        },
        set(hours) {
          this.date.setHours(hours);
        }
      },

      leftMinutes: {
        get() {
          return this.date.getMinutes();
        },
        set(minutes) {
          this.date.setMinutes(minutes);
        }
      },

      leftSeconds: {
        get() {
          return this.date.getSeconds();
        },
        set(seconds) {
          this.date.setSeconds(seconds);
        }
      },

      rightHours: {
        get() {
          return this.rightDate.getHours();
        },
        set(hours) {
          this.rightDate.setHours(hours);
        }
      },

      rightMinutes: {
        get() {
          return this.rightDate.getMinutes();
        },
        set(minutes) {
          this.rightDate.setMinutes(minutes);
        }
      },

      rightSeconds: {
        get() {
          return this.rightDate.getSeconds();
        },
        set(seconds) {
          this.rightDate.setSeconds(seconds);
        }
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

    directives: {
      Clickoutside: require('main/utils/clickoutside').default
    },

    data() {
      return {
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
        leftTimePickerVisible: false,
        rightTimePickerVisible: false
      };
    },

    watch: {
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
          this.minDate = newVal[0];
          this.maxDate = newVal[1];
        }
      }
    },

    methods: {
      $t,

      closeLeftTimePicker() {
        this.leftTimePickerVisible = false;
      },

      closeRightTimePicker() {
        this.rightTimePickerVisible = false;
      },

      handleDateInput(event, type) {
        const value = event.target.value;
        const parsedValue = parseDate(value, 'yyyy-MM-dd');
        if (parsedValue) {
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
        }
      },

      handleRangePick(val, close = true) {
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
