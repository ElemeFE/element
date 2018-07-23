<template>
  <table
    cellspacing="0"
    cellpadding="0"
    class="el-date-table"
    @click="handleClick"
    @mousemove="handleMouseMove"
    :class="{ 'is-week-mode': selectionMode === 'week' }">
    <tbody>
    <tr>
      <th v-if="showWeekNumber">{{ t('el.datepicker.week') }}</th>
      <th v-for="(week, key) in WEEKS" :key="key">{{ t('el.datepicker.weeks.' + week) }}</th>
    </tr>
    <tr
      class="el-date-table__row"
      v-for="(row, key) in rows"
      :class="{ current: isWeekActive(row[1]) }"
      :key="key">
      <td
        v-for="(cell, key) in row"
        :class="getCellClasses(cell)"
        :key="key">
        <div>
          <span>
            {{ cell.text }}
          </span>
        </div>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
  import { getFirstDayOfMonth, getDayCountOfMonth, getWeekNumber, getStartDateOfMonth, nextDate, isDate } from '../util';
  import { hasClass } from 'element-ui/src/utils/dom';
  import Locale from 'element-ui/src/mixins/locale';

  const WEEKS = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
  const clearHours = function(time) {
    const cloneDate = new Date(time);
    cloneDate.setHours(0, 0, 0, 0);
    return cloneDate.getTime();
  };

  export default {
    mixins: [Locale],

    props: {
      firstDayOfWeek: {
        default: 7,
        type: Number,
        validator: val => val >= 1 && val <= 7
      },

      value: {},

      defaultValue: {
        validator(val) {
          // either: null, valid Date object, Array of valid Date objects
          return val === null || isDate(val) || (Array.isArray(val) && val.every(isDate));
        }
      },

      date: {},

      selectionMode: {
        default: 'day'
      },

      showWeekNumber: {
        type: Boolean,
        default: false
      },

      disabledDate: {},

      selectedDate: {
        type: Array
      },

      minDate: {},

      maxDate: {},

      rangeState: {
        default() {
          return {
            endDate: null,
            selecting: false,
            row: null,
            column: null
          };
        }
      }
    },

    computed: {
      offsetDay() {
        const week = this.firstDayOfWeek;
        // 周日为界限，左右偏移的天数，3217654 例如周一就是 -1，目的是调整前两行日期的位置
        return week > 3 ? 7 - week : -week;
      },

      WEEKS() {
        const week = this.firstDayOfWeek;
        return WEEKS.concat(WEEKS).slice(week, week + 7);
      },

      year() {
        return this.date.getFullYear();
      },

      month() {
        return this.date.getMonth();
      },

      startDate() {
        return getStartDateOfMonth(this.year, this.month);
      },

      rows() {
        // TODO: refactory rows / getCellClasses
        const date = new Date(this.year, this.month, 1);
        let day = getFirstDayOfMonth(date); // day of first day
        const dateCountOfMonth = getDayCountOfMonth(date.getFullYear(), date.getMonth());
        const dateCountOfLastMonth = getDayCountOfMonth(date.getFullYear(), (date.getMonth() === 0 ? 11 : date.getMonth() - 1));

        day = (day === 0 ? 7 : day);

        const offset = this.offsetDay;
        const rows = this.tableRows;
        let count = 1;
        let firstDayPosition;

        const startDate = this.startDate;
        const disabledDate = this.disabledDate;
        const selectedDate = this.selectedDate || this.value;
        const now = clearHours(new Date());

        for (let i = 0; i < 6; i++) {
          const row = rows[i];

          if (this.showWeekNumber) {
            if (!row[0]) {
              row[0] = { type: 'week', text: getWeekNumber(nextDate(startDate, i * 7 + 1)) };
            }
          }

          for (let j = 0; j < 7; j++) {
            let cell = row[this.showWeekNumber ? j + 1 : j];
            if (!cell) {
              cell = { row: i, column: j, type: 'normal', inRange: false, start: false, end: false };
            }

            cell.type = 'normal';

            const index = i * 7 + j;
            const time = nextDate(startDate, index - offset).getTime();
            cell.inRange = time >= clearHours(this.minDate) && time <= clearHours(this.maxDate);
            cell.start = this.minDate && time === clearHours(this.minDate);
            cell.end = this.maxDate && time === clearHours(this.maxDate);
            const isToday = time === now;

            if (isToday) {
              cell.type = 'today';
            }

            if (i >= 0 && i <= 1) {
              if (j + i * 7 >= (day + offset)) {
                cell.text = count++;
                if (count === 2) {
                  firstDayPosition = i * 7 + j;
                }
              } else {
                cell.text = dateCountOfLastMonth - (day + offset - j % 7) + 1 + i * 7;
                cell.type = 'prev-month';
              }
            } else {
              if (count <= dateCountOfMonth) {
                cell.text = count++;
                if (count === 2) {
                  firstDayPosition = i * 7 + j;
                }
              } else {
                cell.text = count++ - dateCountOfMonth;
                cell.type = 'next-month';
              }
            }

            let newDate = new Date(time);
            cell.disabled = typeof disabledDate === 'function' && disabledDate(newDate);
            cell.selected = Array.isArray(selectedDate) &&
              selectedDate.filter(date => date.toString() === newDate.toString())[0];

            this.$set(row, this.showWeekNumber ? j + 1 : j, cell);
          }

          if (this.selectionMode === 'week') {
            const start = this.showWeekNumber ? 1 : 0;
            const end = this.showWeekNumber ? 7 : 6;
            const isWeekActive = this.isWeekActive(row[start + 1]);

            row[start].inRange = isWeekActive;
            row[start].start = isWeekActive;
            row[end].inRange = isWeekActive;
            row[end].end = isWeekActive;
          }
        }

        rows.firstDayPosition = firstDayPosition;

        return rows;
      }
    },

    watch: {
      'rangeState.endDate'(newVal) {
        this.markRange(newVal);
      },

      minDate(newVal, oldVal) {
        if (newVal && !oldVal) {
          this.rangeState.selecting = true;
          this.markRange(newVal);
        } else if (!newVal) {
          this.rangeState.selecting = false;
          this.markRange(newVal);
        } else {
          this.markRange();
        }
      },

      maxDate(newVal, oldVal) {
        if (newVal && !oldVal) {
          this.rangeState.selecting = false;
          this.markRange(newVal);
          this.$emit('pick', {
            minDate: this.minDate,
            maxDate: this.maxDate
          });
        }
      }
    },

    data() {
      return {
        tableRows: [ [], [], [], [], [], [] ]
      };
    },

    methods: {
      cellMatchesDate(cell, date) {
        const value = new Date(date);
        return this.year === value.getFullYear() &&
          this.month === value.getMonth() &&
          Number(cell.text) === value.getDate();
      },

      getCellClasses(cell) {
        const selectionMode = this.selectionMode;
        const defaultValue = this.defaultValue ? Array.isArray(this.defaultValue) ? this.defaultValue : [this.defaultValue] : [];

        let classes = [];
        if ((cell.type === 'normal' || cell.type === 'today') && !cell.disabled) {
          classes.push('available');
          if (cell.type === 'today') {
            classes.push('today');
          }
        } else {
          classes.push(cell.type);
        }

        if (cell.type === 'normal' && defaultValue.some(date => this.cellMatchesDate(cell, date))) {
          classes.push('default');
        }

        if (selectionMode === 'day' && (cell.type === 'normal' || cell.type === 'today') && this.cellMatchesDate(cell, this.value)) {
          classes.push('current');
        }

        if (cell.inRange && ((cell.type === 'normal' || cell.type === 'today') || this.selectionMode === 'week')) {
          classes.push('in-range');

          if (cell.start) {
            classes.push('start-date');
          }

          if (cell.end) {
            classes.push('end-date');
          }
        }

        if (cell.disabled) {
          classes.push('disabled');
        }

        if (cell.selected) {
          classes.push('selected');
        }

        return classes.join(' ');
      },

      getDateOfCell(row, column) {
        const offsetFromStart = row * 7 + (column - (this.showWeekNumber ? 1 : 0)) - this.offsetDay;
        return nextDate(this.startDate, offsetFromStart);
      },

      isWeekActive(cell) {
        if (this.selectionMode !== 'week') return false;
        const newDate = new Date(this.year, this.month, 1);
        const year = newDate.getFullYear();
        const month = newDate.getMonth();

        if (cell.type === 'prev-month') {
          newDate.setMonth(month === 0 ? 11 : month - 1);
          newDate.setFullYear(month === 0 ? year - 1 : year);
        }

        if (cell.type === 'next-month') {
          newDate.setMonth(month === 11 ? 0 : month + 1);
          newDate.setFullYear(month === 11 ? year + 1 : year);
        }

        newDate.setDate(parseInt(cell.text, 10));

        const valueYear = isDate(this.value) ? this.value.getFullYear() : null;
        return year === valueYear && getWeekNumber(newDate) === getWeekNumber(this.value);
      },

      markRange(maxDate) {
        const startDate = this.startDate;
        if (!maxDate) {
          maxDate = this.maxDate;
        }

        const rows = this.rows;
        const minDate = this.minDate;
        for (let i = 0, k = rows.length; i < k; i++) {
          const row = rows[i];
          for (let j = 0, l = row.length; j < l; j++) {
            if (this.showWeekNumber && j === 0) continue;

            const cell = row[j];
            const index = i * 7 + j + (this.showWeekNumber ? -1 : 0);
            const time = nextDate(startDate, index - this.offsetDay).getTime();

            if (maxDate && maxDate < minDate) {
              cell.inRange = minDate && time >= clearHours(maxDate) && time <= clearHours(minDate);
              cell.start = maxDate && time === clearHours(maxDate.getTime());
              cell.end = minDate && time === clearHours(minDate.getTime());
            } else {
              cell.inRange = minDate && time >= clearHours(minDate) && time <= clearHours(maxDate);
              cell.start = minDate && time === clearHours(minDate.getTime());
              cell.end = maxDate && time === clearHours(maxDate.getTime());
            }
          }
        }
      },

      handleMouseMove(event) {
        if (!this.rangeState.selecting) return;

        this.$emit('changerange', {
          minDate: this.minDate,
          maxDate: this.maxDate,
          rangeState: this.rangeState
        });

        let target = event.target;
        if (target.tagName === 'SPAN') {
          target = target.parentNode.parentNode;
        }
        if (target.tagName === 'DIV') {
          target = target.parentNode;
        }
        if (target.tagName !== 'TD') return;

        const column = target.cellIndex;
        const row = target.parentNode.rowIndex - 1;
        const { row: oldRow, column: oldColumn } = this.rangeState;

        if (oldRow !== row || oldColumn !== column) {
          this.rangeState.row = row;
          this.rangeState.column = column;

          this.rangeState.endDate = this.getDateOfCell(row, column);
        }
      },

      handleClick(event) {
        let target = event.target;
        if (target.tagName === 'SPAN') {
          target = target.parentNode.parentNode;
        }
        if (target.tagName === 'DIV') {
          target = target.parentNode;
        }

        if (target.tagName !== 'TD') return;
        if (hasClass(target, 'disabled') || hasClass(target, 'week')) return;

        const selectionMode = this.selectionMode;

        if (selectionMode === 'week') {
          target = target.parentNode.cells[1];
        }

        let year = Number(this.year);
        let month = Number(this.month);

        const cellIndex = target.cellIndex;
        const rowIndex = target.parentNode.rowIndex;

        const cell = this.rows[rowIndex - 1][cellIndex];
        const text = cell.text;
        const className = target.className;

        const newDate = new Date(year, month, 1);

        if (className.indexOf('prev') !== -1) {
          if (month === 0) {
            year = year - 1;
            month = 11;
          } else {
            month = month - 1;
          }
          newDate.setFullYear(year);
          newDate.setMonth(month);
        } else if (className.indexOf('next') !== -1) {
          if (month === 11) {
            year = year + 1;
            month = 0;
          } else {
            month = month + 1;
          }
          newDate.setFullYear(year);
          newDate.setMonth(month);
        }

        newDate.setDate(parseInt(text, 10));

        if (this.selectionMode === 'range') {
          if (this.minDate && this.maxDate) {
            const minDate = new Date(newDate.getTime());
            const maxDate = null;

            this.$emit('pick', { minDate, maxDate }, false);
            this.rangeState.selecting = true;
            this.markRange(this.minDate);
            this.$nextTick(() => {
              this.handleMouseMove(event);
            });
          } else if (this.minDate && !this.maxDate) {
            if (newDate >= this.minDate) {
              const maxDate = new Date(newDate.getTime());
              this.rangeState.selecting = false;

              this.$emit('pick', {
                minDate: this.minDate,
                maxDate
              });
            } else {
              const minDate = new Date(newDate.getTime());
              this.rangeState.selecting = false;

              this.$emit('pick', { minDate, maxDate: this.minDate });
            }
          } else if (!this.minDate) {
            const minDate = new Date(newDate.getTime());

            this.$emit('pick', { minDate, maxDate: this.maxDate }, false);
            this.rangeState.selecting = true;
            this.markRange(this.minDate);
          }
        } else if (selectionMode === 'day') {
          this.$emit('pick', newDate);
        } else if (selectionMode === 'week') {
          const weekNumber = getWeekNumber(newDate);

          const value = newDate.getFullYear() + 'w' + weekNumber;
          this.$emit('pick', {
            year: newDate.getFullYear(),
            week: weekNumber,
            value: value,
            date: newDate
          });
        } else if (selectionMode === 'dates') {
          let selectedDate = this.selectedDate;

          if (!cell.selected) {
            selectedDate.push(newDate);
          } else {
            selectedDate.forEach((date, index) => {
              if (date.toString() === newDate.toString()) {
                selectedDate.splice(index, 1);
              }
            });
          }

          this.$emit('select', selectedDate);
        }
      }
    }
  };
</script>
