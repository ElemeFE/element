<template>
    <div>
        <div v-if="!having_data" class="nodata-box">
            <img src="../images/nodata.jpg"/>
        </div>
        <div v-else class="el-flow-record">
            <el-row>
                <el-col :span="24">
                    <div class="status-bar">受理单号：{{current_case_prn}}</div>
                    <div class="status-bar">当前状态：<span class="status">{{current_main_flow_status}}</span></div>
                    <div class="status-bar" style="float: right;color:#67BCFF; cursor: pointer;" @click="refresh_page">
                        刷新数据
                    </div>
                </el-col>
            </el-row>
            <div class="main-flow">
                <div class="flow-title">委托单流转记录</div>
                <el-row>
                    <el-col :span="24">
                        <!--<el-button type="primary" @click="test">主要按钮</el-button>-->
                        <!--<div class="scroll-box">-->
                        <ul class="scroll flow-items-padding">
                            <li v-for="item in main_flow_list"
                                :id="item.prn"
                                :class="main_flow_item_style(item.type)"
                                :clickAble="getClickAble(item)"
                                :style="item.thisNode == true ? (item.prevProcessType == '198922080024' ? 'border: 1px solid red' : item.prevProcessType == '198922138768' ? 'border: 1px solid green' : '') : ''"
                                @click="change_sample_list(item)">
                                <div v-if="item.type == 'flow'" style="position: relative">
                                    <div style="position:absolute; height: 18px;right: -10px;top: -10px;color: white;line-height: 18px;font-style: 12px;">
                                        <span v-if="item.dhCount && item.dhCount > 0" style=" background: red; width:18px;height: 18px;display: inline-block;border-radius:18px;">{{item.dhCount}}</span>
                                        <span v-if="item.fgCount && item.fgCount > 0" style=" background: green; width:18px;height: 18px;display: inline-block;border-radius:18px;margin-left:2px;">{{item.fgCount}}</span>
                                    </div>
                                    <div v-if="item.flag == 1">
                                        <img src="../images/icon-ywsl-high.png"
                                             v-if="item.date != '----' || item.thisNode == true"/>
                                        <img src="../images/icon-ywsl-gray.png" v-else/>
                                    </div>
                                    <div v-else-if="item.flag == 2">
                                        <img src="../images/icon-htps-high.png"
                                             v-if="item.date != '----' || item.thisNode == true"/>
                                        <img src="../images/icon-htps-gray.png" v-else/>
                                    </div>
                                    <div v-else-if="item.flag == 7">
                                        <img src="../images/icon-bgbz-high.png"
                                             v-if="item.date != '----' || item.thisNode == true"/>
                                        <img src="../images/icon-bgbz-gray.png" v-else/>
                                    </div>
                                    <div v-else-if="item.flag == 8">
                                        <img src="../images/icon-bgsh-high.png"
                                             v-if="item.date != '----' || item.thisNode == true"/>
                                        <img src="../images/icon-bgsh-gray.png" v-else/>
                                    </div>
                                    <div v-else-if="item.flag == 9">
                                        <img src="../images/icon-bgqf-high.png"
                                             v-if="item.date != '----' || item.thisNode == true"/>
                                        <img src="../images/icon-bgqf-gray.png" v-else/>
                                    </div>
                                    <div v-else-if="item.flag == -1">
                                        <img src="../images/icon-rwfp-high.png"
                                             v-if="item.date != '----' || item.thisNode == true"/>
                                        <img src="../images/icon-rwfp-gray.png" v-else/>
                                    </div>
                                    <div v-else>
                                        <img src="../images/icon-bgqf-high.png"
                                             v-if="item.date != '----' || item.thisNode == true"/>
                                        <img src="../images/icon-bgqf-gray.png" v-else/>
                                    </div>
                                    <div>{{item.name}}</div>
                                    <div style="color:red;">{{item.errorProcess}}</div>
                                    <div>{{item.date}}</div>
                                    <div>{{item.time}}</div>
                                </div>
                                <div v-if="item.type == 'time'" :class="main_flow_arrow_style(item.arrowStatus)">
                                    {{item.timeSpan}}
                                </div>
                            </li>

                            <div style="clear: both;"></div>
                        </ul>
                        <!--</div>-->
                    </el-col>
                </el-row>

                <!--flow records title and fold unfold operation-->
                <badge :content-box-id="main_flow_records_id"></badge>
                <div id="main-flow-records" show="1">
                    <el-row>
                        <el-col :span="24">
                            <el-table
                                    :data="getMainFlowTranPageOrder"
                                    style="width: 100%" :header-cell-style="get_row_class">
                                <el-table-column
                                        prop="operator"
                                        label="操作人">
                                </el-table-column>
                                <el-table-column
                                        prop="task_node_name"
                                        label="操作环节">
                                </el-table-column>
                                <el-table-column
                                        prop="next_task_name"
                                        label="目标环节">
                                </el-table-column>
                                <el-table-column
                                        label="流转方式">
                                    <template slot-scope="scope">
                                        <div :style="get_error_type_style(scope.row.process_type)">{{
                                            scope.row.process_type_desc }}
                                        </div>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                        label="操作时间"
                                        min-width="120">
                                    <template slot-scope="scope">
                                        <!--<i class="el-icon-time"></i>-->
                                        <div class="date-time-item">{{ scope.row.date }}</div>
                                        <div class="date-time-item">{{ scope.row.time }}</div>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                        prop="process_remark"
                                        width="150"
                                        label="备注">
                                </el-table-column>
                            </el-table>
                        </el-col>
                    </el-row>
                    <div class="block">
                        <el-pagination
                                @size-change="handle_mft_size_change"
                                @current-change="handle_mft_current_change"
                                :current-page="mft_page_index"
                                :page-sizes="[10, 15, 20, 25]"
                                :page-size="mft_page_size"
                                :total="getMftDataLength"
                                layout="total, sizes, prev, pager, next, jumper">
                        </el-pagination>
                    </div>
                </div>
            </div>

            <childFlow
                    :data="child_flow_data"
                    :samples-count="samples_count"
                    v-on:getCheckFlowRecordsCallBack="get_sample_check_flow_record_list"
                    v-on:getSampleFlowCallBack="get_sample_flow_data"
                    v-on:getSampleFlowRecordCallBack="get_sample_flow_record_list"
                    v-on:getSampleCheckListCallBack="get_sample_check_list"
                    ref="child">
            </childFlow>
        </div>
    </div>
</template>

<script>
  import childFlow from './child-flow.vue';
  import badge from './badge.vue';
  import ElInput from 'element-ui-qz/packages/input';
  import ElButton from 'element-ui-qz/packages/button';
  import ElUpload from 'element-ui-qz/packages/upload';
  import ElDialog from 'element-ui-qz/packages/dialog';
  import ElRow from 'element-ui-qz/packages/row';
  import ElCol from 'element-ui-qz/packages/col';
  import ElPagination from 'element-ui-qz/packages/pagination';
  import ElTableColumn from 'element-ui-qz/packages/table-column';
  import ElTable from 'element-ui-qz/packages/table';
  export default {
    name: 'ElFlowRecord',
    components: {
      childFlow,
      badge,
      ElInput,
      ElButton,
      ElUpload,
      ElDialog,
      ElCol,
      ElRow,
      ElPagination,
      ElTableColumn,
      ElTable
    },
    data: function() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        current_case_prn: null,
        main_flow_list: [],
        main_flow_records_list: [],
        child_flow_data: {
          sample_data_list: null,
          sample_flow_data_list: null,
          sample_flow_record_list: null,
          sample_check_list: null,
          sample_check_flow_records_list: null
        },
        current_main_flow_status: null,
        selectedStyle: 'border:2px solid #67BCFF;',
        main_flow_item_selected_id: '',
        samples_count: null,
        main_flow_records_id: 'main-flow-records',
        having_data: true,
        mft_page_index: 1,
        mft_page_size: 10,
        child_prn_check: ''
      };
    },
    props: {
      data: {
        type: Object, default: () => {
          return {
            prn: '',
            data_interface: '',
            JID: ''
          };
        }
      }
    },
    computed: {
      getMainFlowTranPageOrder() {
        let originalList = this.main_flow_records_list;
        let pageIndex = this.mft_page_index;
        let pageSize = this.mft_page_size;
        if (originalList !== null) {
          let list = originalList.slice((pageIndex - 1) * pageSize, pageIndex * pageSize);
          return list;
        }
      },
      getMftDataLength() {
        let originalList = this.main_flow_records_list;
        if (originalList !== null) {
          return originalList.length;
        }
      }
    },
    methods: {
      // get main flow data
      get_main_flow: function() {
        this.$http.post(this.data.data_interface + 'getListNodeByOrderNo', {
          orderNo: this.data.prn,
          JID: this.data.JID
        }, {
          emulateJSON: true
        }).then(function(response) {
          console.log('main-flow:');
          console.log(response);
          console.log(response.data.list);
          this.create_flow_data(response.data.list, 'main');
        }, function(response) {
          console.log(response);
        });

      },
      create_flow_data: function(data, flag) {
        if (data === null) {
          this.having_data = false;
          this.main_flow_list = [];
          this.current_main_flow_status = '';
          // this.$refs.child.is_clear_data = true;
          return;
        } else {
          this.having_data = true;
        }

        let tempArray = [];

        for (let i = 0; i < data.length; i++) {
          let startTimePre = '----';
          let startTimeLast = '----';
          let timeSpan = '----';
          let arrowStatus_ = 0;

          if (data[i].startTime !== undefined) {
            let startTime = new Date(data[i].startTime);
            startTimePre = this.format(startTime, 'yyyy-MM-dd');
            startTimeLast = this.format(startTime, 'hh:mm:ss');
          }
          if ((flag === 'main' && data[i].startTime !== undefined) ||
            (flag === 'main' && data[i].thisNode)) {
            this.current_main_flow_status = data[i].descp;
          }

          let temp = {
            name: data[i].descp,
            flag: data[i].disp_or,
            dhCount: data[i].dhCount,
            fgCount: data[i].fgCount,
            prevProcessType: data[i].prevProcessType,
            prn: data[i].prn,
            date: startTimePre,
            time: startTimeLast,
            type: 'flow',
            processType: data[i].processType,
            oth_id: data[i].oth_id,
            thisNode: data[i].thisNode,
            errorProcess: data[i].errorProcess
          };

          if (data[i + 1] !== undefined &&
            data[i + 1].startTime !== undefined && data[i].startTime !== undefined) {
            // console.log(new Date(data[i+1].startTime) - new Date(data[i].startTime));
            timeSpan = new Date(data[i + 1].startTime) - new Date(data[i].startTime);
            let tempArray = (timeSpan / 1000 / 60 / 60).toString().split('.');
            timeSpan = tempArray[0] + '时' + Math.ceil(parseFloat('0.' + tempArray[1]) * 60) + '分';
          }

          if (data[i].startTime !== undefined) {
            arrowStatus_ = 1;
          }

          tempArray.push(temp);
          tempArray.push({
            timeSpan: timeSpan,
            type: 'time',
            arrowStatus: arrowStatus_
          });
          console.log(data[i].startTime);
        }
        tempArray.pop();
        console.log(data);
        console.log(data.length);
        console.log(tempArray);
        if (flag === 'main') {
          this.main_flow_list = tempArray;
        } else {
          this.child_flow_data.sample_flow_data_list = tempArray;
        }
      },
      format: function(date, fmt) {
        let o = {
          'M+': date.getMonth() + 1, // 月份
          'd+': date.getDate(), // 日
          'h+': date.getHours(), // 小时
          'm+': date.getMinutes(), // 分
          's+': date.getSeconds(), // 秒
          'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
          'S': date.getMilliseconds() // 毫秒
        };
        if (/(y+)/.test(fmt)) {
          fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
        }
        for (var k in o) {
          if (new RegExp('(' + k + ')').test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
          }
        }
        return fmt;
      },
      main_flow_item_style: function(val) {
        if (val === 'flow') {
          return 'flow-item';
        } else {
          return 'flow-direct';
        }
      },
      main_flow_arrow_style: function(val) {
        if (val === 0) {
          return 'arrow-line-gray';
        } else {
          return 'arrow-line-high';
        }
      },
      get_main_flow_records: function() {
        this.$http.post(this.data.data_interface + 'getTransListByOrder', {
          orderNo: this.data.prn,
          JID: this.data.JID,
          pageNo: 1,
          pageSize: 10000
        }, {
          emulateJSON: true
        }).then(function(response) {
          console.log('main-flow-records:');
          console.log(response.body.list);
          let created_list = this.create_list_for_date_time(response.body.list);
          console.log(created_list);
          this.main_flow_records_list = created_list;
        }, function(response) {
        });
      },
      create_list_for_date_time: function(list) {
        if (list === null ||
          list.length === null) {
          return list;
        }

        let tempList = [];
        for (let i = 0; i < list.length; i++) {
          let item = list[i];
          let arr = list[i].start_time.split(' ');
          item.date = arr[0];
          item.time = arr[1];
          tempList.push(item);
        }
        return tempList;
      },
      get_sample_data: function() {
        this.$http.post(this.data.data_interface + 'getSampleListByOrder', {
          orderNo: this.data.prn,
          JID: this.data.JID
        }, {
          emulateJSON: true
        }).then(function(response) {
          console.log('sample data:');
          console.log(response.body.list);
          let sample_data_list = response.body.list;
          this.child_flow_data.sample_data_list = sample_data_list;
          if (sample_data_list === null) {
            this.samples_count = 0;
          } else {
            this.samples_count = sample_data_list.length;
            if (sample_data_list.length > 0) {
              this.get_sample_flow_data(sample_data_list[0].subTaskPrn);
              this.get_sample_flow_record_list(sample_data_list[0].subTaskPrn);
              this.get_sample_check_list(sample_data_list[0].prn);
            }
          }

          // this.main_flow_records_list = response.body.list;
        }, function(response) {
        });
      },
      get_sample_flow_data: function(prn) {
        this.$http.post(this.data.data_interface + 'getListByTaskType', { // getAllTransListByTypeAndPrn
          orderNo: this.data.prn,
          taskType: 1,
          taskDataPrn: prn,
          JID: this.data.JID
          // taskDataPrn:prn,
        }, {
          emulateJSON: true
        }).then(function(response) {
          this.create_flow_data(response.body.list, 'sub');
          // this.child_flow_data.sample_flow_data_list = response.body.list;
        }, function(response) {
        });
      },
      //    get sample flow records data
      get_sample_flow_record_list: function(prn) {
        this.$http.post(this.data.data_interface + 'getTransListByTypeAndPrn', {
          pageNo: 1,
          pageSize: 10000,
          taskType: 1,
          prn: prn,
          JID: this.data.JID
        }, {
          emulateJSON: true
        }).then(function(response) {
          console.log('sample-----111115345353531111---- flow records data:');
          console.log(response.data.list);
          let created_list = this.create_list_for_date_time(response.data.list);
          this.child_flow_data.sample_flow_record_list = created_list;
        }, function(response) {
        });
      },
      get_sample_check_list: function(prn) {
        this.child_prn_check = prn;
        this.$http.post(this.data.data_interface + 'getTestItemsBySamplePrn', {
          pageNo: 1,
          pageSize: 10000,
          samplePrn: prn,
          JID: this.data.JID
        }, {
          emulateJSON: true
        }).then(function(response) {
          let checkList = response.data.list;
          /* console.log("sample--------- check list data:");
           console.log(checkList);*/
          let createdList = this.create_sample_check_list(checkList);
          // console.log(createdList);
          this.child_flow_data.sample_check_list = createdList;
          if (checkList !== null) {
            if (checkList.length > 0) {
              this.get_sample_check_flow_record_list(checkList[0].tiTaskPrn);
            }
          }
        }, function(response) {
        });
      },
      create_sample_check_list: function(list) {
        if (list === null) {
          return list;
        }
        let tempList = [];
        for (let i = 0; i < list.length; i++) {
          let item = list[i];
          item.index = i + 1;
          tempList.push(item);
        }
        return tempList;
      },
      get_sample_check_flow_record_list: function(prn) {
        this.$http.post(this.data.data_interface + 'getTransListByTypeAndPrn', {
          pageNo: 1,
          pageSize: 10000,
          taskType: 2,
          prn: prn,
          JID: this.data.JID
        }, {
          emulateJSON: true
        }).then(function(response) {
          console.log('sample----55555555555555555----- check flow records data:');
          console.log(response);
          console.log(response.data.list);
          let created_list = this.create_list_for_date_time(response.data.list);
          this.child_flow_data.sample_check_flow_records_list = created_list;
        }, function(response) {
        });
      },
      getClickAble: function(item) {
        if ((item.type === 'flow' && item.date !== '----') ||
          (item.type === 'flow' && item.thisNode)) {
          return 0;
        } else {
          return 1;
        }
      },
      change_sample_list: function(item) {
        if (item.oth_id === '-1' || item.oth_id === 'ut_60' || item.oth_id === 'ut_50' || item.oth_id === 'ut_40') {
          return;
        }
        // console.log(item);
        if ((item.type === 'flow' && item.date !== '----') ||
          (item.type === 'flow' && item.thisNode)) {
          this.$http.post(this.data.data_interface + 'getSampleListByOrder', {
            taskNodeKey: item.oth_id,
            pageNo: 1,
            pageSize: 10000,
            orderNo: this.data.prn,
            JID: this.data.JID
          }, {
            emulateJSON: true
          }).then(function(response) {
            console.log('sample data:');
            console.log(response.body.list);
            let sample_data_list = response.body.list;
            if (sample_data_list === null) {
              this.child_flow_data.sample_data_list = null;
              this.child_flow_data.sample_flow_data_list = null;
              this.child_flow_data.sample_flow_record_list = null;
              this.child_flow_data.sample_check_list = null;
              this.child_flow_data.sample_check_flow_records_list = null;
            } else {
              this.child_flow_data.sample_data_list = sample_data_list;
              if (sample_data_list.length > 0) {
                this.get_sample_flow_data(sample_data_list[0].subTaskPrn);
                this.get_sample_flow_record_list(sample_data_list[0].subTaskPrn);
                this.get_sample_check_list(sample_data_list[0].prn);
              }
            }
            // this.main_flow_records_list = response.body.list;
          }, function(response) {
          });

          // handle style
          let selectedId = this.main_flow_item_selected_id;
          if (selectedId !== '') {
            let obj = document.getElementById(selectedId);
            if (obj !== null) {
              obj.setAttribute('style', '');
            }

          }
          let currentSelectedobj = document.getElementById(item.prn);
          if (currentSelectedobj !== null) {
            currentSelectedobj.setAttribute('style', this.selectedStyle);
          }

          this.main_flow_item_selected_id = item.prn;
        }
      },
      get_row_class({row, column, rowIndex, columnIndex}) {
        if (rowIndex === 0) {
          return 'background-color:#f6f6f6';
        }
      },
      get_error_type_style(errorType) {
        if (errorType !== '198922013160') {
          return 'color:red;';
        }
      },
      refresh_page: function() {
        this.get_all_data();
        this.$refs.child.refresh_status();
      },
      clear_all_data: function() {
        this.main_flow_list = [];
      },
      get_all_data: function() {
        if (this.data !== undefined) {
          this.current_case_prn = this.data.prn;
          // reset main flow style
          let mainFlowItemSelectedId = this.main_flow_item_selected_id;
          if (mainFlowItemSelectedId !== '') {
            let currentMainFlowSelectedobj = document.getElementById(mainFlowItemSelectedId);
            if (currentMainFlowSelectedobj !== null) {
              currentMainFlowSelectedobj.setAttribute('style', '');
            }
          }
          // get data
          this.get_main_flow();
          this.get_main_flow_records();
          this.get_sample_data();
        }
      },
      handle_mft_current_change(val) {
        this.mft_page_index = val;
      },
      handle_mft_size_change(val) {
        this.mft_page_size = val;
      }
    },
    created: function() {
      // get main flow data
      this.get_all_data();

    },
    watch: {
      data: function() {
        this.get_all_data();
      }
    }
  };
</script>

<style scoped>
    .status-bar {
        display: inline-block;
        margin-right: 20px;
    }

    .status-bar:last-child {
        margin-right: 0;
    }

    .nodata-box {
        text-align: center;
    }
</style>
