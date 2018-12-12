<template>
    <div class='el-quality-control-chart' :v-loading='!arrData.length && !lineBase'>
        <div class='block'>
            <div class='spanBox'>
              <span>质控样编号:&nbsp;{{this.lineBase.qcs_no}}</span>
              <span>质控样名称:&nbsp;{{this.lineBase.qcs_name}}</span>
              <span>质控样型号:&nbsp;{{this.lineBase.qcs_model}}</span>
              <span>检验项目:&nbsp;{{this.lineBase.test_item}}</span>
            </div>
            <div class='dateBox'>
                <el-select v-model="timevalue" placeholder="请选择年份" @change='getChangeTime'>
                  <el-option label="2018年" value="2018"></el-option>
                  <el-option label="2019年" value="2019"></el-option>
                  <el-option label="2020年" value="2020"></el-option>
                  <el-option label="2021年" value="2021"></el-option>
                  <el-option label="2022年" value="2022"></el-option>
                  <el-option label="2023年" value="2023"></el-option>
                  <el-option label="2024年" value="2024"></el-option>
                  <el-option label="2025年" value="2025"></el-option>
                  <el-option label="2026年" value="2026"></el-option>
                  <el-option label="2027年" value="2027"></el-option>
                </el-select>
            </div>
            
            <!-- <el-date-picker
                    unlink-panels
                    v-model='timevalue'
                    type='daterange'
                    range-separator='至' start-placeholder='开始日期' end-placeholder='结束日期'
                    @change='getChangeTime'>
            </el-date-picker> -->
        </div>

        <div v-show='having_data'>
            <!-- <div id='myEchartsContainer' :style='{"width":echartsWidth + "px", "height":echartsHeight + "px"}'></div> -->
            <div id='myEchartsContainer' style="width:1100px;height:500px"></div>
        </div>

        <div v-show='!having_data' style='text-align: center;'>
            <img src='../img/nodata.jpg'/>
        </div>
    </div>
</template>

<script>
  //  引入 ECharts 主模块
  var echarts = require('echarts/lib/echarts');
  //  引入折线图
  require('echarts/lib/chart/line');
  //  引入提示框、标题、标注线、区域线组件
  require('echarts/lib/component/tooltip');
  require('echarts/lib/component/title');
  require('echarts/lib/component/markLine');
  require('echarts/lib/component/markArea');
  require('echarts/lib/component/dataZoom');
  require('echarts/lib/component/markPoint');

  import ElDatePicker from 'element-ui-qz/packages/date-picker';

  export default {
    name: 'ElQualityControlChart',
    components: {
      ElDatePicker
    },
    props: {
      data: {
        type: Object,
        default: () => {
          return {
            JID: '',
            echartsURL: 'http:// 192.168.2.225/sbgl-prj/gzyq/runGzyq',
            prn: '257513837040',
            getEchartsDataParamBtnCode: 'BTN_247335599528',
            getLineBaseParamBtnCode: 'BTN_252753500664'
          };
        }
      }
    },
    data: function() {
      return {
        timevalue: (new Date().getYear() + 1900) + '',
        having_data: false,
        //  基准线
        lineBase: {},
        //  测量数据
        arrData: [],
        echartsWidth: 0,
        echartsHeight: 0
      };
    },

    mounted() {
      this.echartsWidth = this.$parent.$el.offsetWidth;
      this.echartsHeight = this.$parent.$el.offsetHeight;
      let _this = this;
      setTimeout(() => {
        _this.getEcharts();
      });
    },

    methods: {
      //  时间转换
      dateFormat(time) {
        var getBeginTime = new Date(time);
        var day =
          getBeginTime.getDate() < 10
            ? '0' + getBeginTime.getDate()
            : getBeginTime.getDate();

        return (
          getBeginTime.getFullYear() +
          '-' +
          (getBeginTime.getMonth() + 1) +
          '-' +
          day
        );
      },

      // 时间段获取
      getChangeTime() {
        this.getEcharts();
      },

      // 获取基准线
      getLineBase(e) {
        this.lineBase = {};
        this.$http
          .post(
            this.data.echartsURL,
            Object.assign(
              { btnCode: this.data.getLineBaseParamBtnCode },
              this.data
            ),
            { emulateJSON: true }
          )
          .then(
            result => {
              if (result.body.list && result.body.list.length) {
                this.lineBase = result.body.list[0];
              } else {
                this.having_data = false;
              }
              this.getEchartsData(e);
            },
            result => {
              this.$message.error('基线加载错误');
              this.having_data = false;
            }
          );
      },

      // 获取测量数据
      getEchartsData(e) {
        this.arrData = [];
        this.$http
          .post(
            this.data.echartsURL,
            Object.assign(
              {
                btnCode: this.data.getEchartsDataParamBtnCode,
                year: this.timevalue ? this.timevalue : ''// 筛选起时间
                // begintime: this.timevalue
                //   ? this.dateFormat(this.timevalue[0])
                //   : '', // 筛选起时间
                // endtime: this.timevalue ? this.dateFormat(this.timevalue[1]) : '' // 筛选止时间
              },
              this.data
            ),
            { emulateJSON: true }
          )
          .then(
            result => {
              if (result.body.list && result.body.list.length) {
                // 获取测量数据
                for (var i = 0; i < result.body.list.length; i++) {
                  this.arrData[i] = [];
                  this.arrData[i].push(result.body.list[i].dis_or);
                  // 判断是否超出行动线
                  var tipTest_value = result.body.list[i].qcs_test_value;
                  if (Number(result.body.list[i].qcs_test_value) > Number(this.lineBase.retrospective_line_right)) {
                    result.body.list[i].qcs_test_value = String((Number(this.lineBase.statistic_end_value) - Number(this.lineBase.retrospective_line_right)) / 2 + Number(this.lineBase.retrospective_line_right));
                  };
                  if (Number(result.body.list[i].qcs_test_value) < Number(this.lineBase.retrospective_line_left)) {
                    result.body.list[i].qcs_test_value = String((Number(this.lineBase.retrospective_line_left) - Number(this.lineBase.statistic_begin_value)) / 2 + Number(this.lineBase.statistic_begin_value));
                  };
                  result.body.list[i].tipTest_value = tipTest_value;
                  this.arrData[i].push(result.body.list[i].qcs_test_value);
                  this.arrData[i].push(result.body.list[i].tester);
                  this.arrData[i].push(result.body.list[i].qcs_date.substring(0, 10));
                  this.arrData[i].push(result.body.list[i].tipTest_value);
                }
                this.having_data = true;
                e.setOption(
                  this.industryTableView(this.lineBase, this.arrData),
                  true
                );
              } else {
                this.having_data = false;
              }
            },
            result => {
              this.$message.error('测量数据获取错误');
              this.having_data = false;
            }
          );
      },

      // 图表的配置项
      industryTableView(lineData, seriesData) {
        var option = {
          tooltip: {
            trigger: 'item',
            backgroundColor: 'transparent',
            formatter: function(params) {
              let yVal = +params.data[1];
              var str = '第' + params.data[0] + '次测量' +
              '<br/>' + '实际测试结果: ' + params.data[4] +
              '<br/>' + '核查人: ' + params.data[2] +
              '<br/>' + '核查日期: ' + params.data[3];
              if (yVal >= lineData.maintenanc_line_right && yVal < lineData.retrospective_line_right) {
                return '<div style=' + 'background:' + '#f48A0D' + ';padding:10px;>' + str + '</div>';
              } else if (yVal > lineData.maintenanc_line_left && yVal < lineData.maintenanc_line_right) {
                return '<div style=' + 'background:' + '#30b06A' + ';padding:10px;>' + str + '</div>';
              } else if (yVal > lineData.retrospective_line_left && yVal <= lineData.maintenanc_line_left) {
                return '<div style=' + 'background:' + '#f48A0D' + ';padding:10px;>' + str + '</div>';
              } else {
                return '<div style=' + 'background:' + '#f04844' + ';padding:10px;>' + str + '</div>';
              }
            }
          },
          grid: {
            left: '5%',
            right: '11%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            axisLine: {
              lineStyle: {
                color: '#bbb'
              }
            },
            max: seriesData.length - 1,
            min: 0,
            splitLine: {
              show: false // 去除垂直网格线
            },
            axisLabel: {
              interval: 0, // x轴刻度过多时不隐藏
              color: '#000'
            },
            axisTick: {
              alignWithLabel: true, // 刻度线和标签是否对齐
              show: false
            }
          },
          yAxis: [
            {
              name: '(' + lineData.unit + ')',
              type: 'value',
              axisLine: {
                lineStyle: {
                  opacity: '0.7'
                }
              },
              max: lineData.statistic_end_value,
              min: lineData.statistic_begin_value,
              axisLabel: {
                show: false
              },
              splitLine: {
                show: false // 去除水平网格线
              },
              axisTick: {
                show: false // 隐藏纵坐标刻度
              }
            }
          ],
          // 滚动条
          dataZoom: [
            {
              type: 'slider',
              realtime: true,
              // backgroundColor:'#eee', // 组件的背景颜色
              fillerColor: '#bababa', // 选中范围的填充颜色
              handleSize: 0, // 滑动条的左右2个滑动条的大小
              height: 30, // 组件高度
              show: seriesData.length > 16,
              xAxisIndex: [0],
              textStyle: false,
              left: '5%',
              bottom: -14,
              start: 0,
              end: seriesData.length > 16 ? (16 / seriesData.length * 100) - 1 : 100
            }
          ],
          series: [
            {
              type: 'line',
              symbolSize: '14',
              symbol: 'circle',
              data: seriesData,
              markPoint: {
                symbol: 'triangle'
              },
              label: {
                show: true,
                backgroundColor: '#fff',
                borderColor: '#000',
                color: '#000',
                borderWidth: 0.5,
                padding: 5,
                formatter: function(params) {
                  return params.data[3];
                }
              },
              itemStyle: {
                normal: {
                  color: function(params) {
                    let yVal = +params.data[1];
                    if (yVal >= lineData.maintenanc_line_right && yVal < lineData.retrospective_line_right) {
                      return '#f48A0D';
                    } else if (yVal > lineData.maintenanc_line_left && yVal < lineData.maintenanc_line_right) {
                      return '#30b06A';
                    } else if (yVal > lineData.retrospective_line_left && yVal <= lineData.maintenanc_line_left) {
                      return '#f48A0D';
                    } else {
                      return '#f04844';
                    }
                  },
                  lineStyle: {
                    color: '#000',
                    width: 4
                  }
                }
              },
              markArea: {
                // 标记区域
                silent: true,
                label: {
                  show: true,
                  position: ['50%', '30%'] // 标记居中显示
                },
                data: [
                  [
                    {
                      name: '禁用区',
                      yAxis: lineData.retrospective_line_right,
                      label: {
                        color: '#f00',
                        fontSize: 15
                      },
                      itemStyle: {
                        color: '#FFFAFA'
                      }
                    },
                    {
                      yAxis: lineData.statistic_end_value
                    }
                  ],
                  [
                    {
                      name: '维修区',
                      yAxis: lineData.maintenanc_line_right,
                      label: {
                        color: '#FE7F2F',
                        fontSize: 15
                      },
                      itemStyle: {
                        color: '#FFFFF0'
                      }
                    },
                    {
                      yAxis: lineData.retrospective_line_right
                    }
                  ],

                  [
                    {
                      yAxis: lineData.maintenanc_line_left,
                      itemStyle: {
                        // 背景色
                        color: '#FFF'
                      }
                    },
                    {
                      yAxis: lineData.maintenanc_line_right
                    }
                  ],

                  [
                    {
                      name: '维修区',
                      yAxis: lineData.retrospective_line_left,
                      label: {
                        // 文字颜色
                        color: '#FE7F2F',
                        fontSize: 15
                      },
                      itemStyle: {
                        // 背景色
                        color: '#FFFFF0'
                      }
                    },
                    {
                      yAxis: lineData.maintenanc_line_left
                    }
                  ],
                  [
                    {
                      name: '禁用区',
                      yAxis: lineData.statistic_begin_value,
                      label: {
                        color: '#f00',
                        fontSize: 15
                      },
                      itemStyle: {
                        color: '#FFFAFA'
                      }
                    },
                    {
                      yAxis: lineData.retrospective_line_left
                    }
                  ]
                ]
              },

              markLine: {
                // 基准线
                silent: true,
                symbol: ['none', 'none'],
                data: [
                  {
                    yAxis: lineData.maintenanc_line_left,
                    lineStyle: {
                      normal: {
                        color: '#00f'
                      }
                    },
                    label: {
                      normal: {
                        formatter: '维护值1'
                      }
                    }
                  },
                  {
                    yAxis: lineData.maintenanc_line_left,
                    lineStyle: {
                      normal: {
                        color: '#00f'
                      }
                    },
                    label: {
                      position: 'start',
                      formatter: lineData.maintenanc_line_left
                    }
                  },

                  {
                    yAxis: lineData.maintenanc_line_right,
                    lineStyle: {
                      normal: {
                        color: '#00f'
                      }
                    },
                    label: {
                      normal: {
                        formatter: '维护值2'
                      }
                    }
                  },
                  {
                    yAxis: lineData.maintenanc_line_right,
                    lineStyle: {
                      normal: {
                        color: '#00f'
                      }
                    },
                    label: {
                      position: 'start',
                      formatter: lineData.maintenanc_line_right
                    }
                  },
                  {
                    yAxis: lineData.retrospective_line_left,
                    lineStyle: {
                      normal: {
                        color: '#f00'
                      }
                    },
                    label: {
                      normal: {
                        formatter: '回溯值1'
                      }
                    }
                  },
                  {
                    yAxis: lineData.retrospective_line_left,
                    lineStyle: {
                      normal: {
                        color: '#f00'
                      }
                    },
                    label: {
                      position: 'start',
                      formatter: lineData.retrospective_line_left
                    }
                  },

                  {
                    yAxis: lineData.retrospective_line_right,
                    lineStyle: {
                      normal: {
                        color: '#f00'
                      }
                    },
                    label: {
                      normal: {
                        formatter: '回溯值2'
                      }
                    }
                  },
                  {
                    yAxis: lineData.retrospective_line_right,
                    lineStyle: {
                      normal: {
                        color: '#f00'
                      }
                    },
                    label: {
                      position: 'start',
                      formatter: lineData.retrospective_line_right
                    }
                  },

                  {
                    yAxis: lineData.nominal_line,
                    lineStyle: {
                      normal: {
                        color: '#2E8B57'
                      }
                    },
                    label: {
                      normal: {
                        formatter: '中心线'
                      }
                    }
                  },
                  {
                    yAxis: lineData.nominal_line,
                    lineStyle: {
                      normal: {
                        color: '#2E8B57'
                      }
                    },
                    label: {
                      position: 'start',
                      formatter: lineData.nominal_line
                    }
                  }
                ]
              }
            }
          ]
        };
        return option;
      },

      // 渲染图表
      getEcharts() {
        //  页面初始化时渲染图表
        var myChart = echarts.init(document.getElementById('myEchartsContainer'));
        this.getLineBase(myChart);
      }
    }
  };
</script>
<style>
.block .spanBox span{
  width:25%;
  display: inline-block;
  text-align: center;
}
.block .dateBox{
  text-align: center;
  margin-top:20px;
}
.block .dateBox input{
  height: 35px;
}
.block .dateBox .el-input{
  line-height: 35px
}
.block .dateBox .el-select{
  width:130px;
  display: inline-block;
}
</style>
