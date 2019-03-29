<template>
  <div class="el-calendar">
    <div class="el-calendar__header">
      <div class="el-calendar__title">
        {{ formatedDate }}
      </div>
      <div class="el-calendar__button-group">
        <el-button-group>
          <el-button
            type="plain"
            size="mini"
            @click="selectDate('prev-month')">
            上月
          </el-button>
          <el-button
            type="plain"
            size="mini"
            @click="selectDate('today')">
            今天
          </el-button>
          <el-button
            type="plain"
            size="mini"
            @click="selectDate('next-month')">
            下月
          </el-button>
        </el-button-group>
      </div>
    </div>
    <div class="el-calendar__body">
      <date-table
        :date="date"
        :selected-day="selectedDay"
        @pick="pickDay" />
    </div>
  </div>
</template>

<script>
// import { t } from 'element-ui/src/locale';
import fecha from 'element-ui/src/utils/date';
import DateTable from './date-table';

const validTypes = ['prev-month', 'today', 'next-month'];

export default {
  name: 'ElCalendar',

  components: {
    DateTable
  },

  provide() {
    return {
      elCalendar: this
    };
  },

  methods: {
    pickDay(day) {
      this.selectedDay = day;
      this.date = new Date(day);
    },

    selectDate(type) {
      if (validTypes.indexOf(type) === -1) {
        throw new Error(`invalid type ${type}`);
      }
      let day = '';
      if (type === 'prev-month') {
        day = `${this.prevMonthDatePrefix}-01`;
      } else if (type === 'next-month') {
        day = `${this.nextMonthDatePrefix}-01`;
      } else {
        day = this.formatedToday;
      }

      if (day === this.formatedDate) return;
      this.pickDay(day);
    }
  },

  computed: {
    prevMonthDatePrefix() {
      const temp = new Date(this.date.getTime());
      temp.setDate(0);
      return fecha.format(temp, 'yyyy-MM');
    },

    curMonthDatePrefix() {
      return fecha.format(this.date, 'yyyy-MM');
    },

    nextMonthDatePrefix() {
      const temp = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 1);
      return fecha.format(temp, 'yyyy-MM');
    },

    formatedDate() {
      return fecha.format(this.date, 'yyyy-MM-dd');
    },

    formatedToday() {
      return fecha.format(this.now, 'yyyy-MM-dd');
    }
  },

  data() {
    const now = new Date();
    return {
      date: now, // defualt value is now
      selectedDay: '',
      now
    };
  }
};
</script>
