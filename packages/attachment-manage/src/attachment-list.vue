<template>
    <div class="attachment-list">
        <table style="width: 100%">
            <thead>
            <tr>
                <td class="remove-border">全部文件</td>
                <td class="remove-border" style="text-align: right">已全部加载，共{{files_list ? files_list.length : 0}}个</td>
            </tr>
            </thead>
        </table>

        <!--<table v-if="filesView"  style="width: 100%">
            <thead>
                <tr>
                    <td>
                        <el-checkbox v-model="all_files_selected"  @change="all_files_selected_handle"></el-checkbox>

                    </td>
                    <td style="width: 10%" >
                        &lt;!&ndash;<input type="checkbox"/> &ndash;&gt;
                        名称
                    </td>
                    <td>样品原始编号</td>
                    <td>附件类型</td>
                    <td>加密级别</td>
                    <td>来源</td>
                    <td>修改时间</td>
                    <td>操作</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in files_list">
                    <td>
                        <input v-if="item.type === 'file'" type="checkbox" name="file_checkbox_list" v-bind:value="item.prn"/>
                    </td>
                    <td>
                        &lt;!&ndash;<img src="../images/folder-icon.png"/>&ndash;&gt;
                        <img v-if="item.type === 'folder'" src="../images/folder-icon.png"/>
                        <img v-if="item.file_type === 'doc'" src="../images/doc-icon.png"/>
                        <img v-if="item.file_type === 'pdf'" src="../images/pdf-icon.png"/>
                        <img v-if="item.file_type === 'xsl'" src="../images/xsl-icon.png"/>
                        {{item.name}}
                    </td>
                    <td>{{item.original_number}}</td>
                    <td>{{item.file_type}}</td>
                    <td>{{item.encode}}</td>
                    <td>{{item.source}}</td>
                    <td>{{item.update_date}}</td>
                    <td>
                        <div v-if="item.type === 'file'">
                            <img src="../images/download.png"/>
                            <img src="../images/delete-icon-sall.png"/>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>-->

        <el-table
                v-if="filesView"
                ref="multipleTable"
                :data="files_list"
                tooltip-effect="dark"
                style="width: 100%"
                @selection-change='table_selection_change_handle'>
            <el-table-column
                    type="selection"
                    width="55" value="1">
            </el-table-column>
            <el-table-column
                    label="文件名">
                <template slot-scope="scope">
                    <img v-if=" compute_file_type(scope.row.file_name)  === 'png'" src="../images/png-icon-small.png"
                         :title="scope.row.file_name"/>
                    <img v-if=" compute_file_type(scope.row.file_name)  === 'jpg'" src="../images/jpg_icon_small.png"
                         :title="scope.row.file_name"/>
                    <img v-if="compute_file_type(scope.row.file_name) === 'doc' ||
                                compute_file_type(scope.row.file_name) === 'docx'" src="../images/doc-icon.png"
                         :title="scope.row.file_name"/>
                    <img v-if="compute_file_type(scope.row.file_name) === 'pdf'" src="../images/pdf-icon.png"
                         :title="scope.row.file_name"/>
                    <img v-if="compute_file_type(scope.row.file_name) === 'xlsx' ||
                                compute_file_type(scope.row.file_name) === 'xls'" src="../images/xsl-icon.png"
                         :title="scope.row.file_name"/>
                    {{ get_file_name(scope.row.file_name) }}
                </template>
            </el-table-column>
            <!-- <el-table-column
                     prop="busin_co"
                     label="业务编号"
                     width="120">
             </el-table-column>-->
            <el-table-column
                    prop="bus_type"
                    label="选择类型"
                    show-overflow-tooltip>
                <template slot-scope="scope">
                    <label>{{type_options(scope.row.bus_type)}}</label>
                </template>
            </el-table-column>
            <!--<el-table-column
                    prop="encr_lev"
                    label="加密级别"
                    show-overflow-tooltip
                    :formatter="formatterEncryLevel">
            </el-table-column>-->
            <el-table-column
                    prop="source"
                    label="来源"
                    show-overflow-tooltip>
            </el-table-column>
            <el-table-column
                    prop="upload_tm"
                    label="修改时间"
                    show-overflow-tooltip>
            </el-table-column>
            <el-table-column
                    label="操作"
                    show-overflow-tooltip>
                <template slot-scope="scope">
                    <a v-if="data.edit && !data.allButtonDisabled" href="javascript:void(0)"
                       @click="update_dialog_open_handle(scope.row);"
                       class="edit-icon" operateColumn="inline-block" title="修改">
                        <!--<img src="../images/update-icon-gray.png"/>-->
                    </a>
                    <a href="javascript:void(0)" title="下载" class="download-icon" operateColumn="inline-block"
                       @click="download_file_handle(scope.row.file_prn, scope.row.file_name)">
                        <!--<img src="../images/download.png" />-->
                    </a>
                    <a v-if="data.delete && !data.allButtonDisabled" href="javascript:void(0)"
                       title="删除"
                       @click="file_delete(scope.row.id)"
                       class="delete-icon"
                       operateColumn="inline-block">
                        <!--<img src="../images/delete-icon-sall.png" />-->
                    </a>
                </template>
            </el-table-column>
        </el-table>


        <div v-else class="attachments-view">
            <div class="select-all-box">
                <el-checkbox v-model="all_files_selected" @change="all_files_selected_handle">全选</el-checkbox>
            </div>
            <ul>
                <!--<li v-for="item in files_list" v-if="item.type === 'folder'" type="folder">-->
                <!--<img src="../images/folder-file-icon.png"/>-->
                <!--&lt;!&ndash;<input type="checkbox"/>&ndash;&gt;-->
                <!--<div class="file-name">{{item.name}}</div>-->
                <!--</li>-->
                <li v-for="item in files_list" type="file"
                    @dblclick="download_file_handle(item.file_prn,item.file_name)"
                    :title="item.file_name">
                    <img v-if="item.type === 'folder'" src="../images/folder-file-icon.png"/>

                    <img v-if="compute_file_type(item.file_name) === 'png'" src="../images/png-file-icon.png"/>
                    <img v-if="compute_file_type(item.file_name) === 'jpg'" src="../images/jpg_file_icon.png"/>
                    <img v-if="compute_file_type(item.file_name) === 'doc' ||
                                compute_file_type(item.file_name) === 'docx'" src="../images/doc-file-icon.png"/>
                    <img v-if="compute_file_type(item.file_name) === 'pdf'" src="../images/pdf-file-icon.png"/>
                    <img v-if="compute_file_type(item.file_name) === 'xls' ||
                                compute_file_type(item.file_name) === 'xlsx'" src="../images/xsl-file-icon.png"/>
                    <!--<el-checkbox v-if="item.type === 'file'" v-model="file_selected"></el-checkbox>-->
                    <input v-bind:id="item.id" type="checkbox" name="file_checkbox_list"
                           v-bind:value="item.id" @click="file_selected_handle(item.id)"/>
                    <div class="file-name">{{get_file_name(item.file_name)}}</div>
                </li>

                <!--<li class="" type="folder">
                    <img src="../images/folder-file-icon.png"/>
                    <input type="checkbox"/>
                    <div class="file-name">2017受控文件</div>
                </li>
                <li class="" type="file">
                    <img src="../images/doc-file-icon.png"/>
                    <input type="checkbox"/>
                    <div class="file-name">2017受控文件</div>
                </li>
                <li class="" type="file">
                    <img src="../images/doc-file-icon.png"/>
                    <input type="checkbox"/>
                    <div class="file-name">2017受控文件</div>
                </li>
                <li type="file">
                    <img src="../images/doc-file-icon.png"/>
                    <input type="checkbox"/>
                    <div class="file-name">2017受控文件</div>
                </li>
                <li type="file">
                    <img src="../images/pdf-file-icon.png"/>
                    <input type="checkbox"/>
                    <div class="file-name">2017受控文件</div>
                </li>
                <li>
                    <img src="../images/pdf-file-icon.png"/>
                    <div class="file-name">2017受控文件</div>
                </li>
                <li>
                    <img src="../images/pdf-file-icon.png"/>
                    <div class="file-name">2017受控文件</div>
                </li>
                <li>
                    <img src="../images/xsl-file-icon.png"/>
                    <div class="file-name">2017受控文件</div>
                </li>
                <li><img src="../images/xsl-file-icon.png"/>
                    <div class="file-name">2017受控文件</div>
                </li>
                <li><img src="../images/xsl-file-icon.png"/>
                    <div class="file-name">2017受控文件</div>
                </li>
                <li>
                    <img src="../images/xsl-file-icon.png"/>
                    <div class="file-name">2017受控文件</div>
                </li>
                <li>
                    <img src="../images/xsl-file-icon.png"/>
                    <div class="file-name">2017受控文件</div>
                </li>-->
            </ul>
        </div>

        <!--attachments update dialog-->
        <el-dialog
                title="修改附件信息"
                :visible.sync="update_dialog_visible"
                width="30%"
                :modal="false"
                :before-close="handleClose">
            <div>
                <table>
                    <!-- <tr>
                         <td>样品原始编号</td>
                         <td>
                             <el-input v-model="update_business_no" placeholder="请输入业务编号"></el-input>
                         </td>
                     </tr>-->
                    <tr>
                        <td>选择类型</td>
                        <td>
                            <el-select v-model="update_file_cate_value" placeholder="请输入类型" style="width:100%">
                                <el-option
                                        v-for="item in type_options_select"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </td>
                    </tr>
                    <!-- <tr>
                         <td>加密级别</td>
                         <td>
                             <el-select v-model="update_encrypt_value" placeholder="请选择加密级别">
                                 <el-option
                                         v-for="item in encryptOptions"
                                         :key="item.value"
                                         :label="item.label"
                                         :value="item.value">
                                 </el-option>
                             </el-select>
                         </td>
                     </tr>-->
                </table>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="update_dialog_visible = false">取 消</el-button>
                <el-button type="primary" @click="update_files_message_handle">确 定</el-button>
             </span>
        </el-dialog>

    </div>
</template>

<script>
  import ElTable from 'element-ui-qz/packages/table';
  import ElTableColumn from 'element-ui-qz/packages/table-column';
  import ElButton from 'element-ui-qz/packages/button';
  import ElInput from 'element-ui-qz/packages/input';
  import ElDialog from 'element-ui-qz/packages/dialog';
  import ElCheckbox from 'element-ui-qz/packages/checkbox';
  import vueResource from 'vue-resource';
  import Vue from 'vue';

  Vue.use(vueResource);
  export default {
    components: {
      ElTable,
      ElButton,
      ElInput,
      ElDialog,
      ElCheckbox,
      ElTableColumn
    },
    data: function() {
      return {
        files_list: [],
        files_list_full: [],
        all_files_selected: false,
        file_selected: false,
        update_dialog_visible: false,
        update_file_cate_value: '',
        update_business_no: '',
        update_encrypt_value: '',
        current_edit_data: null,
        selected_files_ids: [],
        type_options_select: [
          {
            label: '客户文件',
            value: 'KHWJ'
          },
          {
            label: '样品文件',
            value: 'YPWJ'
          },
          {
            label: '设备文件',
            value: 'SBWJ'
          },
          {
            label: '其它文件',
            value: 'QTWJ'
          }
        ]
      };
    },
    props: {
      'files-view': [Boolean],
      'pre-interface-url': [String],
      'encrypt-options': [Array],
      'search-keywords': [String],
      'data': [Object]
    },
    watch: {
      searchKeywords: function(newValue, oldValue) {
        let data = this.files_list_full;
        let tempData = [];
        for (let i = 0; i < data.length; i++) {
          if (data[i].file_name.search(newValue) !== -1) {
            tempData.push(data[i]);
          }
        }
        this.files_list = tempData;
      },
      data: function() {
        this.refresh_files_data();
      }
    },
    methods: {
      type_options: function(key) {
        let res = '';
        switch (key) {
          case 'KHWJ':
            res = '客户文件';
            break;
          case 'YPWJ':
            res = '样品文件';
            break;
          case 'SBWJ':
            res = '设备文件';
            break;
          case 'QTWJ':
            res = '其它文件';
            break;
          default:
            res = '';
        }
        return res;
      },
      all_files_selected_handle: function() {
        // this.file_selected = this.all_files_selected;
        let list = document.getElementsByName('file_checkbox_list');
        if (this.all_files_selected) {
          for (let i = 0; i < list.length; i++) {
            list[i].checked = 'checked';
            list[i].parentNode.setAttribute('class', 'selected');
          }
        } else {
          for (let i = 0; i < list.length; i++) {
            list[i].checked = '';
            list[i].parentNode.setAttribute('class', '');
          }
        }

      },
      file_selected_handle: function(checkboxID) {
        let checkbox_node = document.getElementById(checkboxID);
        let checkbox_parent_node = checkbox_node.parentNode;
        if (checkbox_node.checked) {
          checkbox_parent_node.setAttribute('class', 'selected');
        } else {
          checkbox_parent_node.setAttribute('class', '');
        }
      },
      formatterEncryLevel: function(row, column, cellValue) {
        if (cellValue === '1') {
          return '高';
        } else if (cellValue === '2') {
          return '中';
        } else {
          return '低';
        }
      },
      compute_file_type: function(fileName) {
        let tempArray = fileName.split('.');
        let arraylength = tempArray.length;
        if (arraylength > 1) {
          return tempArray[arraylength - 1];
        }
        return '';
      },
      file_delete: function(ids) {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$http.post(this.preInterfaceUrl + 'deleteAll', Object.assign({
            ids: ids,
            JID: this.data.JID
          }, this.data), {
            emulateJSON: true
          }).then(function(response) {
            this.$message({
              showClose: true,
              message: '恭喜你，删除成功',
              type: 'success'
            });
            this.refresh_files_data();
          }, function(response) {

          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });

      },
      get_file_name: function(fullName) {
        let tempArray = fullName.split('.');
        let arraylength = tempArray.length;
        if (arraylength > 1) {
          return tempArray[0];
        }
        return '';
      },
      table_selection_change_handle: function(selectionObjs) {
        let ids = [];
        selectionObjs.forEach(element => {
          ids.push(element.id);
        });
        this.selected_files_ids = ids;
        this.$emit('headCallBack', ids);
      },
      funDownload: function(content, filename) {
        // 创建隐藏的可下载链接
        var eleLink = document.createElement('a');
        eleLink.download = filename;
        eleLink.style.display = 'none';
        // 字符内容转变成blob地址
        var blob = new Blob([content], {type: 'application/octet-stream'});
        eleLink.href = URL.createObjectURL(blob);
        // 触发点击
        document.body.appendChild(eleLink);
        eleLink.click();
        // 然后移除
        document.body.removeChild(eleLink);
      },
      funDownloadByGet: function(prn, filename) {
        let url = this.preInterfaceUrl + 'downloadFile';
        url += `?filePrn=${prn}&JID=${this.data.JID}&fileName=${filename}`;
        let eleLink = document.createElement('a');
        eleLink.download = filename;
        eleLink.style.display = 'none';
        eleLink.href = url;
        // 触发点击
        document.body.appendChild(eleLink);
        eleLink.click();
      },
      download_file_handle: function(prn, file_name) {
        this.funDownloadByGet(prn, file_name);
        // let url = this.preInterfaceUrl + 'downloadFile';
        // this.$http.post(url, Object.assign({
        //   filePrn: prn,
        //   JID: this.data.JID
        // }, this.data), {
        //   emulateJSON: true
        // }).then(function(response) {
        //   // let url = window.URL.createObjectURL(new Blob([response.body.obj]));
        //   this.funDownload(response, file_name);
        //   // let link = document.createElement('a');
        //   // link.style.display = 'none';
        //   // link.href = 'data:image/png;base64,' + response.body.obj;
        //   // link.setAttribute('download', file_name);
        //   // document.body.appendChild(link);
        //   // link.click();
        // }, function(response) {
        // });
      },
      update_files_message_handle: function() {
        let original_rowData = this.current_edit_data;

        this.$http.post(this.preInterfaceUrl + 'update', Object.assign({
          id: original_rowData.id,
          bus_type: this.update_file_cate_value,
          busin_co: this.update_business_no,
          encr_lev: this.update_encrypt_value,
          file_prn: original_rowData.file_prn,
          file_name: original_rowData.file_name,
          file_size: original_rowData.file_size,
          file_uri: original_rowData.file_uri,
          remark: original_rowData.remark,
          source: original_rowData.source,
          upload_tm: original_rowData.upload_tm,
          up_ver: original_rowData.up_ver,
          prn: this.data.prn,
          JID: this.data.JID
        }, this.data), {
          emulateJSON: true
        }).then(function(response) {
          this.$message({
            showClose: true,
            message: '恭喜你，修改成功',
            type: 'success'
          });
          this.update_dialog_visible = false;
          this.refresh_files_data();
        }, function(response) {

        });

      },
      update_dialog_open_handle: function(dataRow) {
        this.current_edit_data = dataRow;
        this.update_business_no = dataRow.busin_co;
        this.update_file_cate_value = dataRow.bus_type;
        this.update_encrypt_value = dataRow.encr_lev;
        this.update_dialog_visible = true;
      },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {
          });
      },
      refresh_files_data: function() {
        if (this.preInterfaceUrl === '') {
          return;
        }

        let prn = this.data.prn;
        let JID = this.data.JID;

        if (prn === '' ||
          prn === undefined ||
          JID === '' ||
          JID === undefined) {
          return;
        }

        this.$http.get(this.preInterfaceUrl + 'getListByPrn', { params: Object.assign(
          {
            prn: prn,
            JID: JID
          }, this.data)}).then(function(response) {
          // this.all_files = response.body.list;
          this.files_list = response.body.list;
          this.files_list_full = response.body.list;
        }, function(response) {
          // console.log(response);
        });
      }

    },
    created: function() {
      this.refresh_files_data();
    },
    computed: {}
  };
</script>

<style scoped>
    a[operateColumn="inline-block"] {
        width: 28px;
        height: 28px;
        display: inline-block;
    }

    .edit-icon {
        background-image: url("../images/update-icon-gray.png");
    }

    .edit-icon:hover {
        background-image: url("../images/update-icon-hight.png");
    }

    .download-icon {
        background-image: url("../images/download.png");
    }

    .download-icon:hover {
        background-image: url("../images/download-icon-hight.png");
    }

    .delete-icon {
        background-image: url("../images/delete-icon-sall.png");
    }

    .delete-icon:hover {
        background-image: url("../images/delete-icon-hight.png");
    }
</style>
