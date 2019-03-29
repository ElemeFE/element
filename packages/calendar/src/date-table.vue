<script>
import { range, getFirstDayOfMonth, getPrevMonthLastDays, getMonthDays, getI18nSettings } from 'element-ui/src/utils/date-util';
export default {

  props: {
    selectedDay: String, // formated date yyyy-MM-dd
    range: Array,
    date: Date
  },

  inject: ['elCalendar'],

  methods: {
    toNestedArr(days) {
      return range(days.length / 7).map((_, index) => {
        const start = index * 7;
        return days.slice(start, start + 7);
      });
    },

    getFormateDate(day, type) {
      if (!day || ['prev', 'current', 'next'].indexOf(type) === -1) {
        throw new Error('invalid day or type');
      }
      let prefix = this.curMonthDatePrefix;
      if (type === 'prev') {
        prefix = this.prevMonthDatePrefix;
      } else if (type === 'next') {
        prefix = this.nextMonthDatePrefix;
      }
      day = `00${day}`.slice(-2);
      return `${prefix}-${day}`;
    },

    getCellClass({ text, type}) {
      const classes = [type];
      if (type === 'current') {
        const date = this.getFormateDate(text, type);
        if (date === this.selectedDay) {
          classes.push('is-selected');
        }
        if (date === this.formatedToday) {
          classes.push('is-today');
        }
      }
      return classes;
    },

    pickDay({ text, type }) {
      const date = this.getFormateDate(text, type);
      this.$emit('pick', date);
    },

    cellRenderProxy({ text, type }) {
      let render = this.elCalendar.$scopedSlots.dateCell;
      if (!render) return <span>{ text }</span>;

      const day = this.getFormateDate(text, type);
      const date = new Date(day);
      const data = {
        isSelected: this.selectedDay === day,
        type: `${type}-month`,
        day
      };
      return render({ date, data });
    }
  },

  computed: {
    prevMonthDatePrefix() {
      return this.elCalendar.prevMonthDatePrefix;
    },

    curMonthDatePrefix() {
      return this.elCalendar.curMonthDatePrefix;
    },

    nextMonthDatePrefix() {
      return this.elCalendar.nextMonthDatePrefix;
    },

    formatedToday() {
      return this.elCalendar.formatedToday;
    },

    rows() {
      let days = [];
      // if range exists, should render days in range
      if (this.range && this.range.length) {
        const [start, end] = this.range;
        for (let index = start.getDate(); index <= end.getDate(); index++) {
          days.push({
            text: index,
            type: 'current'
          });
        }
      } else {
        const date = this.date;
        const firstDay = getFirstDayOfMonth(date);
        const prevMonthDays = getPrevMonthLastDays(date, firstDay - 1).map(day => ({
          text: day,
          type: 'prev'
        }));
        const currentMonthDays = getMonthDays(date).map(day => ({
          text: day,
          type: 'current'
        }));;
        days = [...prevMonthDays, ...currentMonthDays];
        const nextMonthDays = range(42 - days.length).map((_, index) => ({
          text: index + 1,
          type: 'next'
        }));
        days = days.concat(nextMonthDays);
      }
      return this.toNestedArr(days);
    }
  },

  data() {
    const dayNames = getI18nSettings().dayNames;
    return {
      DAYS: dayNames.slice(1).concat(dayNames[0])
    };
  },

  render() {
    return (
      <table
        class="el-calendar-table"
        cellspacing="0"
        cellpadding="0">
        <thead>
          {
            this.DAYS.map(day => <th key={day}>{ day }</th>)
          }
        </thead>
        <tbody>
          {
            this.rows.map((row, index) => <tr class="el-calendar-table__row" key={index}>
              {
                row.map((cell, key) => <td key={key}
                  class={ this.getCellClass(cell) }
                  onClick={this.pickDay.bind(this, cell)}>
                  <div class="el-calendar-day">
                    {
                      this.cellRenderProxy(cell)
                    }
                  </div>
                </td>)
              }
            </tr>)
          }
        </tbody>
      </table>);
  }
};
</script>
