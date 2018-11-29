<template>
    <div>
        <div v-if="this.samplesCount > 1" class="sub-flow">
            <div class="flow-title">样品</div>
            <div class="sample-list-box">
                <el-row>
                    <el-col :span="24">
                        <ul>
                            <li v-for="item in data.sample_data_list"
                                :style="init_sample_style(item,data.sample_data_list)"
                                :id="item.prn" class="sample-item"
                                @click="change_sample_data(item.prn,item.subTaskPrn)">
                                <ul>
                                    <li class="sample-item-list">
                                        <div class="circle">{{item.sample_name.substring(0,2)}}</div>
                                    </li>
                                    <li class="sample-item-list">
                                        <ul>
                                            <li class="sample-item-list-">
                                                {{item.sample_name}}
                                                <i style="color: red">{{item.proc_st == "PROC_ZF" ? ('作废') : ''}} </i>
                                            </li>
                                            <li class="sample-item-list-">
                                                <span>{{item.node_name}}</span>
                                                <span style="margin: 0 10px;">{{item.tiCount}}检项</span>
                                                <span style="color:red;">{{item.errorProcess}}</span>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>

                        </ul>
                        <div class="clear"></div>
                    </el-col>
                </el-row>
            </div>

            <div>
                <flow_badge></flow_badge>
                <el-row>
                    <el-col :span="24">
                        <ul class="scroll flow-items-padding">
                            <li v-for="item in data.sample_flow_data_list" :class="main_flow_item_style(item.type)"
                                :back="getBackStatus(item.processType)">
                                <div v-if="item.type == 'flow'">
                                    <div v-if="item.flag == 1">
                                        <img src="../images/icon-ywsl-high.png" v-if="item.date != '----' || item.thisNode == true"/>
                                        <img src="../images/icon-ywsl-gray.png" v-else/>
                                    </div>
                                    <div v-if="item.flag == 2">
                                        <img src="../images/icon-htps-high.png" v-if="item.date != '----' || item.thisNode == true"/>
                                        <img src="../images/icon-htps-gray.png" v-else/>
                                    </div>
                                    <div v-if="item.flag == 3">
                                        <img src="../images/icon-htps-high.png" v-if="item.date != '----' || item.thisNode == true"/>
                                        <img src="../images/icon-htps-gray.png" v-else/>
                                    </div>
                                    <div v-if="item.flag == 4">
                                        <img src="../images/icon-htps-high.png" v-if="item.date != '----' || item.thisNode == true"/>
                                        <img src="../images/icon-htps-gray.png" v-else/>
                                    </div>
                                    <div v-if="item.flag == 5">
                                        <img src="../images/icon-bgbz-high.png" v-if="item.date != '----' || item.thisNode == true"/>
                                        <img src="../images/icon-bgbz-gray.png" v-else/>
                                    </div>
                                    <div v-if="item.flag == 6">
                                        <img src="../images/icon-bgsh-high.png" v-if="item.date != '----' || item.thisNode == true"/>
                                        <img src="../images/icon-bgsh-gray.png" v-else/>
                                    </div>
                                    <div v-if="item.flag == -1">
                                        <img src="../images/icon-rwfp-high.png" v-if="item.date != '----' || item.thisNode == true"/>
                                        <img src="../images/icon-rwfp-gray.png" v-else/>
                                    </div>
                                    <div v-if="item.flag == 7">
                                        <img src="../images/icon-bgqf-high.png" v-if="item.date != '----' || item.thisNode == true"/>
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
                    </el-col>
                </el-row>
            </div>

            <badge :content-box-id="main_flow_records_id"></badge>
            <div id="sub-flow-records" show="1">
                <el-row>
                    <el-col :span="24">
                        <el-table
                                :data="getSfrPageOrder"
                                style="width: 100%"
                                :header-cell-style="get_row_class">
                            <el-table-column
                                    prop="operator"
                                    label="操作人"
                                    width="100">
                            </el-table-column>
                            <el-table-column
                                    prop="task_node_name"
                                    label="操作环节"
                                    width="100">
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
                                    label="操作时间">
                                <template slot-scope="scope">
                                    <!--<i class="el-icon-time"></i>-->
                                    <div class="date-time-item">{{ scope.row.date }}</div>
                                    <div class="date-time-item">{{ scope.row.time }}</div>
                                </template>
                            </el-table-column>
                            <el-table-column
                                    prop="process_remark"
                                    width="150px"
                                    label="备注">
                            </el-table-column>
                        </el-table>
                    </el-col>
                </el-row>
                <div class="block">
                    <el-pagination
                            @size-change="handle_sfr_size_change"
                            @current-change="handle_sfr_current_change"
                            :current-page="sfr_page_index"
                            :page-sizes="[10, 15, 20, 25]"
                            :page-size="sfr_page_size"
                            :total="getSfrDataLength"
                            layout="total, sizes, prev, pager, next, jumper">
                    </el-pagination>
                </div>
            </div>
        </div>
        <div class="check-items">
            <div class="flow-title">项目预览<!--@current-change="handle_check_list_current_change"--></div>
            <el-row>
                <el-col :span="24">
                    <el-table
                            rel="singleTable"
                            highlight-current-row
                            :data="getCheckListPageOrder"
                            style="width: 100%"
                            :header-cell-style="get_row_class">
                        <el-table-column type="expand">
                            <template slot-scope="props">
                                <el-table
                                        :data="props.row.transList"
                                        style="width: 100%;padding-left: 20px;"
                                        size="mini"
                                        max-height="250"
                                        :header-cell-style="get_row_class">
                                    <el-table-column
                                            prop="operator"
                                            label="操作人"
                                            width="100">
                                    </el-table-column>
                                    <el-table-column
                                            prop="task_node_name"
                                            label="操作环节"
                                            width="100">
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
                                            prop="create_time"
                                            min-width="100">
                                    </el-table-column>
                                    <el-table-column
                                            prop="process_remark"
                                            width="150"
                                            label="备注">
                                    </el-table-column>
                                </el-table>
                            </template>
                        </el-table-column>
                        <el-table-column
                                prop="index"
                                label="序号"
                                width="50">
                            <!-- <el-table-column>
                             </el-table-column>-->
                        </el-table-column>
                        <el-table-column
                                label="项目名称"
                                prop="ti_name"
                                width="250%"
                                >
                        </el-table-column>
                        <el-table-column
                                prop="node_name"
                                label="项目进度">
                        </el-table-column>
                        <el-table-column
                                prop="operator"
                                label="检验人">
                        </el-table-column>
                        <el-table-column
                                prop="duty_section_name"
                                width="150%"
                                label="检验科室">
                        </el-table-column>
                    </el-table>
                    <!--<a href="#" @click="clearData">claear data</a>-->
                    <!--<a href="#" @click="testData">test data</a>-->
                    <div class="block">
                        <el-pagination
                                @size-change="handle_cl_size_change"
                                @current-change="handle_cl_current_change"
                                :current-page="cl_page_index"
                                :page-sizes="[10, 15, 20, 25]"
                                :page-size="cl_page_size"
                                :total="getClDataLength"
                                layout="total, sizes, prev, pager, next, jumper">
                        </el-pagination>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
  import badge from './badge.vue';
  import flow_badge from './flow-badge.vue';
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
    components: {
      badge,
      flow_badge,
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
        n: 0,
        sample_item_selected_id: '',
        selectedStyle: 'border:2px solid #67BCFF;',
        /* page_size:5,
         current_page:1,*/
        main_flow_records_id: 'sub-flow-records',
        sample_data_list: this.data.sample_data_list,
        filter_check_name_model: '',
        is_clear_data: false,
        cfr_page_index: 1,
        cfr_page_size: 10,
        cl_page_index: 1,
        cl_page_size: 10,
        sfr_page_index: 1,
        sfr_page_size: 10,
        original_sample_check_list: null
        // current_sample_prn:this.data.sample_data_list[0].subTaskPrn,
        /* tableData: [{
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
        }] */
      };
    },
    methods: {
      main_flow_item_style: function(val) {
        if (val === 'flow') {
          return 'flow-item';
        } else {
          return 'flow-direct';
        }
      },
      handle_check_list_current_change: function(item) {
        if (item !== null) {
          this.$emit('getCheckFlowRecordsCallBack', item.tiTaskPrn);
        }
      },
      change_sample_data: function(prn, subTaskPrn) {
        // alert(prn + "$$" +subTaskPrn);
        let preSelectedPrn = this.sample_item_selected_id;
        if (preSelectedPrn === '') {
          let preSelectedObj = document.getElementsByClassName('sample-item');
          preSelectedObj[0].setAttribute('style', '');
        } else {
          let preSelectedObj = document.getElementById(preSelectedPrn);
          preSelectedObj.setAttribute('style', '');
        }

        let selectedObj = document.getElementById(prn);
        selectedObj.setAttribute('style', this.selectedStyle);

        this.sample_item_selected_id = prn;

        this.$emit('getSampleFlowCallBack', subTaskPrn);
        this.$emit('getSampleFlowRecordCallBack', subTaskPrn);
        this.$emit('getSampleCheckListCallBack', prn);
      },
      clear_data() {
        this.data.sample_flow_data_list = null;
        this.data.sample_flow_record_list = null;
        this.data.sample_check_list = null;
        this.data.sample_check_flow_records_list = null;
      },
      testData: function() {
        console.log(this.samplesCount);
      },
      init_sample_style: function(item, list) {
        if (item === list[0]) {
          // this.sample_item_selected_id = item.prn;
          return this.selectedStyle;
        }
      },
      main_flow_arrow_style: function(val) {
        if (val === 0) {
          return 'arrow-line-gray';
        } else {
          return 'arrow-line-high';
        }
      },
      getBackStatus: function(status) {
        if (status === '打回') {
          return 0;
        } else {
          return 1;
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
      refresh_status() {
        let sampleSelectedId = this.sample_item_selected_id;
        if (sampleSelectedId !== '') {
          let preSelectedObj = document.getElementById(sampleSelectedId);
          if (preSelectedObj !== null) {
            preSelectedObj.setAttribute('style', '');
          }
        }

        let sampleItemObjs = document.getElementsByClassName('sample-item');
        if (sampleItemObjs.length > 0) {
          sampleItemObjs[0].setAttribute('style', this.selectedStyle);
        }
        this.sample_item_selected_id = '';
      },
      check_name_render(h, {column, $index}) {
        let inputStyle = 'line-height:0;padding-left:0px;margin-left:-10px;';
        // let label = column.label;
        return (
          <div style={inputStyle}>
            <el-input style='min-width:80px' v-model={this.filter_check_name_model} placeholder = '请输入...' ></el-input>
          </div>
        );
      },
      handle_cfr_current_change(val) {
        this.cfr_page_index = val;
      },
      handle_cfr_size_change(val) {
        this.cfr_page_size = val;
      },
      handle_cl_current_change(val) {
        this.cl_page_index = val;
      },
      handle_cl_size_change(val) {
        this.cl_page_size = val;
      },
      handle_sfr_current_change(val) {
        this.sfr_page_index = val;
      },
      handle_sfr_size_change(val) {
        this.sfr_page_size = val;
      }
    },
    props: {
      data: [Object],
      'samples-count': [Number]
    },
    computed: {
      getCheckFlowRecords: function() {
        let list = this.data.sample_check_flow_records_list;
        return list.length;
      },
      getCheckFlowRecordsPageOrder() {
        let originalList = this.data.sample_check_flow_records_list;
        let pageIndex = this.cfr_page_index;
        let pageSize = this.cfr_page_size;
        if (originalList !== null) {
          let list = originalList.slice((pageIndex - 1) * pageSize, pageIndex * pageSize);
          return list;
        }
      },
      getCheckListPageOrder() {
        let tempOriginal = this.original_sample_check_list;
        let originalList = null;
        if (tempOriginal === null) {
          originalList = this.data.sample_check_list;
        } else {
          originalList = this.original_sample_check_list;
        }

        let pageIndex = this.cl_page_index;
        let pageSize = this.cl_page_size;
        if (originalList !== null) {
          let list = originalList.slice((pageIndex - 1) * pageSize, pageIndex * pageSize);
          return list;
        }
      },
      getSfrPageOrder() {
        let originalList = this.data.sample_flow_record_list;
        let pageIndex = this.sfr_page_index;
        let pageSize = this.sfr_page_size;
        if (originalList !== null) {
          let list = originalList.slice((pageIndex - 1) * pageSize, pageIndex * pageSize);
          return list;
        }
      },
      getCfrDataLength() {
        let originalList = this.data.sample_check_flow_records_list;
        if (originalList !== null) {
          return originalList.length;
        }
      },
      getClDataLength() {
        let originalList = this.data.sample_check_list;
        if (originalList !== null) {
          return originalList.length;
        }
      },
      getSfrDataLength() {
        let originalList = this.data.sample_flow_record_list;
        if (originalList !== null) {
          return originalList.length;
        }
      },
      filter_By_check_name() {
        alert('ok');
      }
    },
    mounted: function() {

    },
    created: function() {
    },
    watch: {
      filter_check_name_model: function(newValue, oldValue) {
        let data = this.data.sample_check_list;
        let tempData = [];
        if (data !== null) {
          for (let i = 0; i < data.length; i++) {
            if (data[i].ti_name.search(newValue) !== -1) {
              tempData.push(data[i]);
            }
          }
        }

        this.original_sample_check_list = tempData;
      }
    }
  };

</script>

<style scoped>
    abc {
        background: red;
    }
    ul,
    ul li {
        margin: 0;
        list-style-type: none;
    }

    ul li[class="sample-item"] {
        float: left;
        padding: 10px;
        margin-right: 15px;
    }

    ul li[class="sample-item-list"] {
        float: left;
    }

    ul li[class="sample-item-list"]:first-child {
        margin-right: 15px;
    }

    ul li[class="sample-item-list-"]:first-child {
        margin-bottom: 10px;
    }

    ul li .sample-item-list- {
        float: none;
        min-width: 120px;
    }

    ul li[class="sample-item-list-"] span:last-child {
        float: right;
    }

    ul li[class="sample-item-list-"] span:first-child {
        float: left;
    }

    ul li[class="sample-item-list-"] span {
        color: #9FA0A0;
        font-size: 12px;
    }

    .circle {
        width: 44px;
        height: 44px;
        line-height: 44px;
        border-radius: 50px;
        background-color: #67BCFF;
        text-align: center;
        color: #fff;
    }
</style>
