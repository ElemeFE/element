<template>
  <table @click="handleYearTableClick" @mousemove="handleMouseMove" class="el-year-table">
    <tbody>
    <tr v-for="(row, key) in rows" :key="key">
      <template v-for="(cell, key) in row">
        <td v-if="!cell" :key="key"></td>
        <td v-else class="available" :key="key" :class="getCellStyle(cell)">
          <div>
            <a class="cell">{{ cell.text }}</a>
          </div>
        </td>
      </template>
    </tr>
    </tbody>
  </table>
</template>

<script type="text/babel">
  import { hasClass } from 'element-ui/src/utils/dom';
  import { isDate, range, nextDate, getDayCountOfYear } from 'element-ui/src/utils/date-util';
  import { arrayFindIndex, coerceTruthyValueToArray } from 'element-ui/src/utils/util';

  const datesInYear = year => {
    const numOfDays = getDayCountOfYear(year);
    const firstDay = new Date(year, 0, 1);
    return range(numOfDays).map(n => nextDate(firstDay, n));
  };

  const clearDate = (date) => {
    return new Date(date.getFullYear(), 0, 1);
  };

  const getYearTimestamp = function(time) {
    if (typeof time === 'number' || typeof time === 'string') {
      return clearDate(new Date(time)).getTime();
    } else if (time instanceof Date) {
      return clearDate(time).getTime();
    } else {
      return NaN;
    }
  };
  export default {
    props: {
      disabledDate: {},
      value: {},
      selectionMode: {
        default: 'year'
      },
      minDate: {},
      maxDate: {},
      defaultValue: {
        validator(val) {
          // null or valid Date Object
          return val === null || isDate(val) || (Array.isArray(val) && val.every(isDate));
        }
      },
      date: {},
      rangeState: {
        default() {
          return {
            endDate: null,
            selecting: false
          };
        }
      }
    },

    watch: {
      'rangeState.endDate'(newVal) {
        this.markRange(this.minDate, newVal);
      },

      minDate(newVal, oldVal) {
        if (getYearTimestamp(newVal) !== getYearTimestamp(oldVal)) {
          this.markRange(this.minDate, this.maxDate);
        }
      },

      maxDate(newVal, oldVal) {
        if (getYearTimestamp(newVal) !== getYearTimestamp(oldVal)) {
          this.markRange(this.minDate, this.maxDate);
        }
      }
    },

    data() {
      return {
        tableRows: [ [], [], [] ],
        lastRow: null,
        lastColumn: null
      };
    },

    computed: {
      startYear() {
        return Math.floor(this.date.getFullYear() / 10) * 10;
      },

      rows() {
        const rows = this.tableRows;
        const disabledDate = this.disabledDate;
        const now = getYearTimestamp(new Date());

        for (let i = 0; i < 3; i++) {
          const row = rows[i];
          for (let j = 0; j < 4; j++) {
            // 第三行最后两格为空
            if (i === 2 && j > 1) {
              row[j] = null;
              continue;
            }
            let cell = row[j];
            if (!cell) {
              cell = { row: i, column: j, type: 'normal', inRange: false, start: false, end: false };
            }

            cell.type = 'normal';

            const index = i * 4 + j;
            const year = (this.startYear + index).toString();
            const time = new Date(year, 0, 1).getTime();
            cell.inRange = time >= getYearTimestamp(this.minDate) && time <= getYearTimestamp(this.maxDate);
            cell.start = this.minDate && time === getYearTimestamp(this.minDate);
            cell.end = this.maxDate && time === getYearTimestamp(this.maxDate);
            const isToday = time === now;

            if (isToday) {
              cell.type = 'today';
            }
            cell.text = year;
            let cellDate = new Date(time);
            cell.disabled = typeof disabledDate === 'function' && disabledDate(cellDate);
            cell.selected = false;

            this.$set(row, j, cell);
          }
        }
        return rows;
      }
    },

    methods: {
      getCellStyle(cell) {
        const year = Number(cell.text);
        const style = {};
        const today = new Date();
        const defaultValue = this.defaultValue ? Array.isArray(this.defaultValue) ? this.defaultValue : [this.defaultValue] : [];
        style.disabled = typeof this.disabledDate === 'function'
          ? datesInYear(year).every(this.disabledDate)
          : false;
        style.current = arrayFindIndex(coerceTruthyValueToArray(this.value), date => date.getFullYear() === year) >= 0;
        style.today = today.getFullYear() === year;
        // style.default = this.defaultValue && this.defaultValue.getFullYear() === year;
        style.default = defaultValue.some(date => new Date(date).getFullYear() === year);

        if (cell.inRange) {
          style['in-range'] = true;

          if (cell.start) {
            style['start-date'] = true;
          }

          if (cell.end) {
            style['end-date'] = true;
          }
        }
        return style;
      },

      markRange(minDate, maxDate) {
        minDate = getYearTimestamp(minDate);
        maxDate = getYearTimestamp(maxDate) || minDate;
        [minDate, maxDate] = [Math.min(minDate, maxDate), Math.max(minDate, maxDate)];
        const rows = this.rows;
        for (let i = 0, k = rows.length; i < k; i++) {
          const row = rows[i];
          for (let j = 0, l = row.length; j < l; j++) {
            const cell = row[j];
            if (!cell) continue;
            const index = i * 4 + j;
            const time = new Date(this.startYear + index, 0, 1).getTime();

            cell.inRange = minDate && time >= minDate && time <= maxDate;
            cell.start = minDate && time === minDate;
            cell.end = maxDate && time === maxDate;
          }
        }
      },

      handleMouseMove(event) {
        if (!this.rangeState.selecting) return;

        let target = event.target;
        if (target.tagName === 'A') {
          target = target.parentNode.parentNode;
        }
        if (target.tagName === 'DIV') {
          target = target.parentNode;
        }
        if (target.tagName !== 'TD') return;

        const row = target.parentNode.rowIndex;
        const column = target.cellIndex;
        if (!this.rows[row][column] || this.rows[row][column].disabled) return;

        if (row !== this.lastRow || column !== this.lastColumn) {
          this.lastRow = row;
          this.lastColumn = column;
          const index = row * 4 + column;
          const endDate = new Date(this.startYear + index, 0, 1);
          this.$emit('changerange', {
            minDate: this.minDate,
            maxDate: this.maxDate,
            rangeState: {
              selecting: true,
              endDate
            }
          });
        }
      },

      handleYearTableClick(event) {
        let target = event.target;
        if (target.tagName === 'A') {
          target = target.parentNode.parentNode;
        }
        if (target.tagName === 'DIV') {
          target = target.parentNode;
        }
        if (target.tagName !== 'TD') return;
        if (hasClass(target, 'disabled')) return ;
        if (hasClass(target.parentNode, 'disabled')) return;
        const year = target.textContent || target.innerText;
        if (this.selectionMode === 'range') {
          const newDate = new Date(year, 0, 1);
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
        } else if (this.selectionMode === 'years') {
          const value = this.value || [];
          const idx = arrayFindIndex(value, date => date.getFullYear() === Number(year));
          const newValue = idx > -1
            ? [...value.slice(0, idx), ...value.slice(idx + 1)]
            : [...value, new Date(year)];
          this.$emit('pick', newValue);
        } else {
          this.$emit('pick', Number(year));
        }
      }
    }
  };
</script>