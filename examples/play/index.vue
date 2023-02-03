<!--日、周、月、年、季选择 组件-->
<template>
  <div>
    <div class="Que">
      <el-radio-group
              v-model="time"
              @change="changeTime()"
              size="small"
              class="tab-class"
      >
        <el-radio-button label="day">日报</el-radio-button>
        <el-radio-button label="week">周报</el-radio-button>
        <el-radio-button label="month">月报</el-radio-button>
        <el-radio-button label="quarter">季报</el-radio-button>
        <el-radio-button label="year">年报</el-radio-button>
      </el-radio-group>

      <el-date-picker
              v-model="date"
              v-show="this.time === 'day' || this.time === 'week'"
              type="daterange"
              align="center"
              unlink-panels
              range-separator="~"
              size="small"
              class="date-class"
              :format="format"
              :picker-options="pickerOptionsType"
              value-format="yyyy-MM-dd"
      >
      </el-date-picker>

      <el-date-picker
              v-model="date"
              type="monthrange"
              v-show="this.time === 'month'"
              align="center"
              unlink-panels
              range-separator="~"
              size="small"
              :picker-options="pickerOptionsType"
              class="date-class"
              value-format="yyyy-MM-dd"
      >
      </el-date-picker>
      <el-date-picker
              v-model="date2"
              type="quarterrange"
              v-show="this.time === 'quarter'"
              align="center"
              unlink-panels
              range-separator="~"
              size="small"
              class="date-class"
      >
      </el-date-picker>
      <el-date-picker
              v-model="date"
              type="yearrange"
              v-show="this.time === 'year'"
              value-format="yyyy"
              align="center"
              unlink-panels
              range-separator="~"
              size="small"
              class="date-class"
      >
      </el-date-picker>
    </div>
  </div>
</template>

<script>
    import * as common from "./common";
    import dayjs from "dayjs";
    import advancedFormat from 'dayjs/plugin/advancedFormat'
    dayjs.extend(advancedFormat)
    export default {
        name: "NavTime",
        data() {
            return {
                time: "day",
                newDate: ["2023-02-01","2023-02-03"],
                pickerOptions: {
                    firstDayOfWeek: 1,
                    disabledDate(time) {
                        return time.getTime() > Date.now();
                    },
                    shortcuts: [
                        {
                            text: "今天",
                            onClick(picker) {
                                const end = new Date();
                                const start = new Date();
                                picker.$emit("pick", [start, end]);
                            }
                        },
                        {
                            text: "昨天",
                            onClick(picker) {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24);
                                end.setTime(end.getTime() - 3600 * 1000 * 24);
                                picker.$emit("pick", [start, end]);
                            }
                        },
                        {
                            text: "近7日",
                            onClick(picker) {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 6);
                                picker.$emit("pick", [start, end]);
                            }
                        },
                        {
                            text: "近30天",
                            onClick(picker) {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                                picker.$emit("pick", [start, end]);
                            }
                        }
                    ],
                },

                pickerOptions1: {
                    firstDayOfWeek: 1,
                    shortcuts: [
                        {
                            text: "本周",
                            onClick(picker) {
                                let end = common.getWeekStartAndEnd(0, new Date());
                                let start = common.getWeekStartAndEnd(0, new Date());
                                picker.$emit("pick", [new Date(start[0]), new Date(end[1])]);
                            }
                        },
                        {
                            text: "上周",
                            onClick(picker) {
                                let end = common.getWeekStartAndEnd(-1, new Date());
                                let start = common.getWeekStartAndEnd(-1, new Date());
                                picker.$emit("pick", [new Date(start[0]), new Date(end[1])]);
                            }
                        }
                    ]
                },

                pickerOptions2: {
                    firstDayOfWeek: 1,
                    shortcuts: [
                        {
                            text: "本月",
                            onClick(picker) {
                                let end = common.getMonthStartAndEnd(0, new Date());
                                let start = common.getMonthStartAndEnd(0, new Date());
                                picker.$emit("pick", [new Date(start[0]), new Date(end[1])]);
                            }
                        },
                        {
                            text: "上月",
                            onClick(picker) {
                                let end = common.getMonthStartAndEnd(-1, new Date());
                                let start = common.getMonthStartAndEnd(-1, new Date());
                                picker.$emit("pick", [new Date(start[0]), new Date(end[1])]);
                            }
                        }
                    ]
                },
            };
        },
        computed: {
            date: {
                get() {
                    let newDate = this.newDate;
                    if (this.time == "day" && newDate && newDate.length <= 0) {
                        let beginDate = common.addDays(new Date(), -this.chartData);
                        let endDate = common.addDays(new Date(), -1);
                        newDate = [beginDate, endDate];
                    }
                    return newDate;
                },
                set(newDate) {
                    if (newDate && newDate.length > 0) {
                        //当控件为月时，时间为月的第一天到月的最后一天。
                        if ("day" == this.time) {
                            this.newDate = newDate;
                        } else if ("month" == this.time) {
                            let monthStart = common.getMonthStartAndEnd(
                                0,
                                new Date(newDate[0])
                            );
                            let monthEnd = common.getMonthStartAndEnd(0, new Date(newDate[1]));

                            this.newDate = [monthStart[0], monthEnd[1]];
                        } //当控件为周时，时间改为周的正确计算逻辑。
                        else if ("week" == this.time) {
                            let weekStart = common.getWeekStartAndEnd(0, new Date(newDate[0]));
                            let weekEnd = common.getWeekStartAndEnd(0, new Date(newDate[1]));
                            this.newDate = [weekStart[0], weekEnd[1]];
                        } else if ("year" == this.time) {
                            this.newDate = [newDate[0] + "-01-01", newDate[1] + "-12-31"];
                        }
                    }
                }
            },
            format: {
                get() {
                    let timeType = this.time;
                    let date = this.date;
                    if ("week" == timeType && date && date.length > 0) {
                        let beginYearWeek = common.getYearAndWeek(date[0], date[1]);
                        let endYearWeek = common.getYearAndWeek(date[1], date[0]);
                        return beginYearWeek + endYearWeek;
                    } else {
                        return "";
                    }
                }
            },
            date2: {
                get() {
                    let newDate = this.newDate;
                    return newDate;
                },
                set(newDate) {
                    let newStartDate = this.getQuartorStartDate(newDate);
                    let newEndDate = this.getQuartorEndDate(newDate);
                    console.log([newStartDate,newEndDate])
                    this.newDate = [newStartDate,newEndDate]
                }
            },
            dateType: {
                get() {
                    return this.dateType;
                }
            },

            pickerOptionsType: {
                get() {
                    let timeType = this.time;
                    if ("day" == timeType) {
                        return this.pickerOptions;
                    } else if ("week" == timeType) {
                        return this.pickerOptions1;
                    } else if ("month" == timeType) {
                        return this.pickerOptions2;
                    } else {
                        return "";
                    }
                }
            }
        },

        methods: {
            changeTime() {
                let time = this.time;
                this.$emit("timeType", time);
            },
            /**
             * 根据 年份 和 季度  获取 季度 第一天 和 季度 最后 一天
             * @param year
             * @param quarter
             */
            getQuartorStartDate(date) {
              const sDate = dayjs(date[0]).format("YYYY-Q")
              const year = sDate.split("-")[0];
              const quarter = sDate.split("-")[1];
              let startMonth = 1;
              if(quarter == 1){
                  startMonth = 1;
              }else if (quarter == 2){
                  startMonth = 4;
              }else if (quarter == 3){
                  startMonth = 7;
              }else if (quarter == 4){
                  startMonth = 10;
              }
              return year+"-"+this.formatDate(startMonth)+'-01'
            },
            /**
             * 根据 年份 和 季度  获取 季度 第一天 和 季度 最后 一天
             * @param year
             * @param quarter
             */
             getQuartorEndDate(date) {
                let dateEnd = dayjs(date[1]).format("YYYY-Q")
                let year = dateEnd.split("-")[0];
                let quarter = dateEnd.split("-")[1];
                let startMonth = 1;
                if(quarter == 1){
                    startMonth = 1;
                }else if (quarter == 2){
                    startMonth = 4;
                }else if (quarter == 3){
                    startMonth = 7;
                }else if (quarter == 4){
                    startMonth = 10;
                }
                let endMonth = startMonth + 2;
                if (quarter == 0){
                    endMonth = 12
                }
                // const startDate = year+"-"+this.formatDate(startMonth)+'-01';
                const endDate = year + '-' + this.formatDate(endMonth) + '-' +new Date(year,endMonth,0).getDate()
                // console.log(endDate)
                return endDate
            },

//格式化月和日为MM、dd
            formatDate(value){
                if(value < 10){
                    value = "0" + value;
                }
                return value;
            },
        },
    };
</script>

<style scoped>
  /*.tab-class {
        width: 167px;
      }*/

  .date-class {
    margin-left: 100px;
    width: 250px;
  }
  .Que {
    width: 100%;
  }
</style>
<style>
  .el-input__inner {
    height: 30px;
    line-height: 30px;
  }
</style>
