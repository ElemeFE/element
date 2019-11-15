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
  import { getFirstDayOfMonth, getDayCountOfMonth, getWeekNumber, getStartDateOfMonth, prevDate, nextDate, isDate, clearTime as _clearTime} from 'element-ui/src/utils/date-util';
  import Locale from 'element-ui/src/mixins/locale';
  import { arrayFindIndex, arrayFind, coerceTruthyValueToArray } from 'element-ui/src/utils/util';

  const WEEKS = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
  const getDateTimestamp = function(time) {
    if (typeof time === 'number' || typeof time === 'string') {
      return _clearTime(new Date(time)).getTime();
    } else if (time instanceof Date) {
      return _clearTime(time).getTime();
    } else {
      return NaN;
    }
  };

  // remove the first element that satisfies `pred` from arr
  // return a new array if modification occurs
  // return the original array otherwise
  const removeFromArray = function(arr, pred) {
    const idx = typeof pred === 'function' ? arrayFindIndex(arr, pred) : arr.indexOf(pred);
    return idx >= 0 ? [...arr.slice(0, idx), ...arr.slice(idx + 1)] : arr;
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
  
      cellClassName: {},

      minDate: {},

      maxDate: {},

      rangeState: {
        default() {
          return {
            endDate: null,
            selecting: false
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

        const startDate = this.startDate;
        const disabledDate = this.disabledDate;
        const cellClassName = this.cellClassName;
        const selectedDate = this.selectionMode === 'dates' ? coerceTruthyValueToArray(this.value) : [];
        const now = getDateTimestamp(new Date());

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
            cell.inRange = time >= getDateTimestamp(this.minDate) && time <= getDateTimestamp(this.maxDate);
            cell.start = this.minDate && time === getDateTimestamp(this.minDate);
            cell.end = this.maxDate && time === getDateTimestamp(this.maxDate);
            const isToday = time === now;

            if (isToday) {
              cell.type = 'today';
            }

            if (i >= 0 && i <= 1) {
              const numberOfDaysFromPreviousMonth = day + offset < 0 ? 7 + day + offset : day + offset;

              if (j + i * 7 >= numberOfDaysFromPreviousMonth) {
                cell.text = count++;
              } else {
                cell.text = dateCountOfLastMonth - (numberOfDaysFromPreviousMonth - j % 7) + 1 + i * 7;
                cell.type = 'prev-month';
              }
            } else {
              if (count <= dateCountOfMonth) {
                cell.text = count++;
              } else {
                cell.text = count++ - dateCountOfMonth;
                cell.type = 'next-month';
              }
            }

            let cellDate = new Date(time);
            cell.disabled = typeof disabledDate === 'function' && disabledDate(cellDate);
            cell.selected = arrayFind(selectedDate, date => date.getTime() === cellDate.getTime());
            cell.customClass = typeof cellClassName === 'function' && cellClassName(cellDate);
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

        return rows;
      }
    },

    watch: {
      'rangeState.endDate'(newVal) {
        this.markRange(this.minDate, newVal);
      },

      minDate(newVal, oldVal) {
        if (getDateTimestamp(newVal) !== getDateTimestamp(oldVal)) {
          this.markRange(this.minDate, this.maxDate);
        }
      },

      maxDate(newVal, oldVal) {
        if (getDateTimestamp(newVal) !== getDateTimestamp(oldVal)) {
          this.markRange(this.minDate, this.maxDate);
        }
      }
    },

    data() {
      return {
        tableRows: [ [], [], [], [], [], [] ],
        lastRow: null,
        lastColumn: null
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

        if (cell.customClass) {
          classes.push(cell.customClass);
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

        if (isDate(this.value)) {
          const dayOffset = (this.value.getDay() - this.firstDayOfWeek + 7) % 7 - 1;
          const weekDate = prevDate(this.value, dayOffset);
          return weekDate.getTime() === newDate.getTime();
        }
        return false;
      },

      markRange(minDate, maxDate) {
        minDate = getDateTimestamp(minDate);
        maxDate = getDateTimestamp(maxDate) || minDate;
        [minDate, maxDate] = [Math.min(minDate, maxDate), Math.max(minDate, maxDate)];

        const startDate = this.startDate;
        const rows = this.rows;
        for (let i = 0, k = rows.length; i < k; i++) {
          const row = rows[i];
          for (let j = 0, l = row.length; j < l; j++) {
            if (this.showWeekNumber && j === 0) continue;

            const cell = row[j];
            const index = i * 7 + j + (this.showWeekNumber ? -1 : 0);
            const time = nextDate(startDate, index - this.offsetDay).getTime();

            cell.inRange = minDate && time >= minDate && time <= maxDate;
            cell.start = minDate && time === minDate;
            cell.end = maxDate && time === maxDate;
          }
        }
      },

      handleMouseMove(event) {
        if (!this.rangeState.selecting) return;

        let target = event.target;
        if (target.tagName === 'SPAN') {
          target = target.parentNode.parentNode;
        }
        if (target.tagName === 'DIV') {
          target = target.parentNode;
        }
        if (target.tagName !== 'TD') return;

        const row = target.parentNode.rowIndex - 1;
        const column = target.cellIndex;

        // can not select disabled date
        if (this.rows[row][column].disabled) return;

        // only update rangeState when mouse moves to a new cell
        // this avoids frequent Date object creation and improves performance
        if (row !== this.lastRow || column !== this.lastColumn) {
          this.lastRow = row;
          this.lastColumn = column;
          this.$emit('changerange', {
            minDate: this.minDate,
            maxDate: this.maxDate,
            rangeState: {
              selecting: true,
              endDate: this.getDateOfCell(row, column)
            }
          });
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

        const row = target.parentNode.rowIndex - 1;
        const column = this.selectionMode === 'week' ? 1 : target.cellIndex;
        const cell = this.rows[row][column];

        if (cell.disabled || cell.type === 'week') return;

        const newDate = this.getDateOfCell(row, column);

        if (this.selectionMode === 'range') {
          if (!this.rangeState.selecting) {
            this.$emit('pick', {minDate: newDate, maxDate: null});
            this.rangeState.selecting = true;
          } else {
            if (newDate >= this.minDate) {
              this.$emit('pick', {minDate: this.minDate, maxDate: newDate});
            } else {
              this.$emit('pick', {minDate: newDate, maxDate: this.minDate});
            }
            this.rangeState.selecting = false;
          }
        } else if (this.selectionMode === 'day') {
          this.$emit('pick', newDate);
        } else if (this.selectionMode === 'week') {
          const weekNumber = getWeekNumber(newDate);
          const value = newDate.getFullYear() + 'w' + weekNumber;
          this.$emit('pick', {
            year: newDate.getFullYear(),
            week: weekNumber,
            value: value,
            date: newDate
          });
        } else if (this.selectionMode === 'dates') {
          const value = this.value || [];
          const newValue = cell.selected
            ? removeFromArray(value, date => date.getTime() === newDate.getTime())
            : [...value, newDate];
          this.$emit('pick', newValue);
        }
      }
    }
  };
</script>
