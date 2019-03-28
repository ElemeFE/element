<template>
  <div class="el-calendar">
    <div class="el-calendar__header">
      <div class="el-calendar__title">
        2019年3月
      </div>
      <div class="el-calendar__button-group">
        <el-button-group>
          <el-button type="plain">上月</el-button>
          <el-button type="plain">今天</el-button>
          <el-button type="plain">下月</el-button>
        </el-button-group>
      </div>
    </div>
    <div class="el-calendar__body">
      <table
        class="el-calendar-table"
        cellspacing="0"
        cellpadding="0">
          <thead>
            <tr v-for="i in 7" :key="i">{{ i }}</tr>
          </thead>
          <tbody>
            <tr class="el-calendar-table__row">

            </tr>
          </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElCalendar'
};
</script>
