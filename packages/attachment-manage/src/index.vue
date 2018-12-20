<template>
    <div class="el-attachment-manage">
        <div>
            <div v-if="JSON.stringify(data) != '{}' && data.prn !==''" style="display: inline-block;">
                <div v-if="!data.allButtonDisabled">
                    <ul>
                        <li v-if="data.capture" v-on:click="reset_child_com_state('capture')"><a class="tab"><img :src="list.captureIcon_"  />摄像</a></li>
                        <!--<li v-if="data.scan"><a class="tab"><img :src="list.scanningIcon_"  />扫描</a></li>-->
                        <li v-if="data.upload">
                            <a class="tab" @click="upload_dialog_visible = true"><img :src="list.uploadIcon_"/>上传</a>
                        </li>
                        <li v-if="data.delete"><a class="tab" @click="files_delete"><img :src="list.deleteIcon_"/>删除</a>
                        </li>
                        <!--<li v-if="edit"><a class="tab" @click="update_dialog_visible = true"><img :src="list.updateIcon_"  />修改</a></li>-->

                        <div class="clear"></div>
                    </ul>
                </div>
                <div v-else>
                    <buttons-disabled></buttons-disabled>
                </div>
            </div>
            <div v-else style="display: inline-block;">
                <buttons-disabled></buttons-disabled>
            </div>


            <!--<ul v-if="data.prn !==''">
                &lt;!&ndash;<li v-if="data.capture" v-on:click="reset_child_com_state('capture')"><a class="tab"><img :src="list.captureIcon_"  />摄像</a></li>
                <li v-if="data.scan"><a class="tab"><img :src="list.scanningIcon_"  />扫描</a></li>&ndash;&gt;
                <li v-if="data.upload"><a class="tab" @click="upload_dialog_visible = true"><img :src="list.uploadIcon_"  />上传</a></li>
                <li v-if="data.delete"><a class="tab" @click="files_delete"><img :src="list.deleteIcon_"  />删除</a></li>
                &lt;!&ndash;<li v-if="edit"><a class="tab" @click="update_dialog_visible = true"><img :src="list.updateIcon_"  />修改</a></li>&ndash;&gt;

                <div class="clear"></div>
            </ul>
            <ul v-else>
                &lt;!&ndash;<li ><a class="tab tab-gray"><img src="../images/icon-capture-gray.png"  />摄像</a></li>
                <li ><a class="tab tab-gray"><img src="../images/icon-scan-gray.png"  />扫描</a></li>&ndash;&gt;
                <li><a class="tab tab-gray"><img src="../images/icon-upload-gray.png"  />上传</a></li>
                <li><a class="tab tab-gray" ><img src="../images/icon-delete-gray.png"  />删除</a></li>
                &lt;!&ndash;<li v-if="edit"><a class="tab" @click="update_dialog_visible = true"><img :src="list.updateIcon_"  />修改</a></li>&ndash;&gt;

                <div class="clear"></div>
            </ul>-->
            <ul style="float: right">
                <li class="right">
                    <img class="cursor-icon" v-if="!filesView" @click="change_files_view"
                         src="../images/files-view-list.png"/>
                    <img class="cursor-icon" v-else @click="change_files_view" src="../images/files-view.png"/>
                </li>
                <!--<li class="right">

                    <el-select v-model="file_cate_value" placeholder="请选择">
                        <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </li>-->
                <li class="right">
                    <!--<input type="text" placeholder="请输入..."/> -->
                    <el-input placeholder="请输入内容" v-model="search_keywords" class="input-with-select">
                        <el-button slot="append" icon="el-icon-search" @click="search_files"></el-button>
                    </el-input>
                </li>


                <div class="clear"></div>
            </ul>
        </div>


        <!--<ul class="wt-list">
            <li>全部</li>
            <li>取样登记</li>
            <li>厂家自检报告</li>
            <li>技术规范</li>
            <li>样品图片</li>
            <li>自定义上传</li>
            <li>设备采集</li>
            <div class="clear"></div>
        </ul>-->
        <div class="main">
            <div class="main-top">
                <!--<ul>
                    <li>委托单附件管理
                        <span>上移</span>
                        <span>下移</span>
                    </li>
                    <li><input type="text"/> </li>
                    <div class="clear"></div>
                </ul>-->
            </div>
            <div class="main-content">
                <capture v-if="current_child_component === 'capture'"></capture>
                <file-list v-else-if="current_child_component === 'attachment-view'"
                           :files-view="filesView"
                           :pre-interface-url="pre_interface_url"
                           v-on:headCallBack="head_call_back_files"
                           :encrypt-options="encrypt_options"
                           :search-keywords="search_keywords"
                           :data="data"
                           ref="child"
                >
                </file-list>
            </div>
        </div>

        <el-dialog
                title="附件上传"
                :visible.sync="upload_dialog_visible"
                width="30%"
                :before-close="handleClose"
                :modal="false">
            <div>
                <table>

                    <tr>
                        <td>上传附件</td>
                        <td >
                            <div class="upload-box">
                                <el-button size="small" type="primary" @click="before_upload_validation">选择文件</el-button>
                                <el-upload
                                        :action="data.uploadUrl"
                                        :on-preview="handlePreview"
                                        :on-remove="handleRemove"
                                        :before-remove="beforeRemove"
                                        :before-upload="beforeUpload"
                                        :on-success="upload_success"
                                        :on-error="upload_error"
                                        :data="{bus_type:upload_category, JID:data.JID}"
                                        :accept="set_file_type"
                                        multiple
                                        :limit="3"
                                        :on-exceed="handleExceed"
                                        :file-list="fileList"
                                        ref="upload"
                                        :auto-upload="false">
                                    <el-button size="small" type="primary" id="upload">点击上传</el-button>
                                    <div slot="tip" class="el-upload__tip">支持格式xsl,pdf,doc,png,jpg文件; 且不超过20M</div>
                                </el-upload>
                            </div>
                        </td>
                    </tr>
                    <!--<tr>
                        <td>业务编号</td>
                        <td>
                            <el-input v-model="upload_business_no" placeholder="请输入业务编号"></el-input>
                        </td>
                    </tr>-->

                    <!--<tr>
                        <td>绑定样品编号</td>
                        <td>
                            <el-select v-model="upload_sample_value" placeholder="请选择样品编号">
                                <el-option
                                        v-for="item in sample_code_options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </td>
                    </tr>-->
                    <!-- <tr>
                         <td>加密级别</td>
                         <td>
                             <el-select v-model="upload_encrypt_value" placeholder="请选择加密级别">
                                 <el-option
                                         v-for="item in encrypt_options"
                                         :key="item.value"
                                         :label="item.label"
                                         :value="item.value">
                                 </el-option>
                             </el-select>
                         </td>
                     </tr>-->
                    <tr>
                        <td>选择类型</td>
                        <td>
                            <el-select v-model="upload_category" placeholder="请输入类型" style="width:100%">
                                <el-option
                                        v-for="item in type_options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </td>
                    </tr>
                    <tr>
                        <td>备注</td>
                        <td>
                            <el-input
                                    type="textarea"
                                    v-model="upload_remark"
                                    :autosize="{ minRows: 2, maxRows: 4}"
                                    placeholder="请输入内容">
                            </el-input>
                        </td>
                    </tr>
                </table>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="upload_cancel_handle">取 消</el-button>
                <el-button type="primary" @click="upload_submit_handle" :disabled="loadingSubmit" :loading="loadingSubmit">确 定</el-button>
             </span>
        </el-dialog>

        <!--attachments update dialog-->
        <el-dialog
                title="修改附件信息"
                :visible.sync="update_dialog_visible"
                width="30%"
                :before-close="handleClose">
            <div>
                <table>
                    <tr>
                        <td>选择类型</td>
                        <td>
                            <el-input v-model="update_file_cate_value" placeholder="请输入类型"></el-input>
                        </td>
                    </tr>
                    <tr>
                        <td>绑定样品编号</td>
                        <td>
                            <el-input v-model="update_business_no" placeholder="请输入业务编号"></el-input>
                        </td>
                    </tr>
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
  import Capture from './capture.vue';
  import FileList from './attachment-list.vue';
  import ButtonsDisabled from './buttons-disabled.vue';
  import captureIcon from '../images/capture-icon.png';
  import scanningIcon from '../images/scanning-icon.png';
  import uploadIcon from '../images/upload-icon.png';
  import deleteIcon from '../images/delete-icon.png';
  import updateIcon from '../images/update-icon-.png';

  import ElInput from 'element-ui-qz/packages/input';
  import ElButton from 'element-ui-qz/packages/button';
  import ElUpload from 'element-ui-qz/packages/upload';
  import ElDialog from 'element-ui-qz/packages/dialog';

  export default {
    name: 'ElAttachmentManage',
    data: function() {
      return {
        list: {
          captureIcon_: captureIcon,
          scanningIcon_: scanningIcon,
          uploadIcon_: uploadIcon,
          deleteIcon_: deleteIcon,
          updateIcon_: updateIcon

        },
        filesView: true,
        current_child_component: 'attachment-view',
        file_cate_value: '',
        upload_dialog_visible: false,
        upload_business_no: '',
        upload_category: 'KHWJ',
        upload_remark: '',
        upload_sample_value: '',
        upload_encrypt_value: '',
        upload_business_prop_value: '',
        upload_customer_prop_value: '1',
        update_dialog_visible: false,
        update_file_cate_value: '',
        update_business_no: '',
        search_keywords: '',
        fileList: [],
        set_file_type: '.jpg,.png,.doc,.pdf,.xsl,.docx',
        uploaded_response: [],
        all_files: {},
        pre_interface_url: null,
        files_selected_ids: [],
        options: [{
          value: '1',
          label: '取样登记表'
        }, {
          value: '2',
          label: '厂家自检报告'
        }, {
          value: '3',
          label: '技术规范'
        }, {
          value: '4',
          label: '样品图片'
        }, {
          value: '5',
          label: '自定义上传'
        }, {
          value: '6',
          label: '设备采集'
        }
        ],
        encrypt_options: [{
          value: '1',
          label: '高'
        }, {
          value: '2',
          label: '中'
        }, {
          value: '3',
          label: '低'
        }
        ],
        sample_code_options: [{
          value: '1',
          label: '样品编号1'
        }, {
          value: '2',
          label: '样品编号2'
        }, {
          value: '3',
          label: '样品编号3'
        }
        ],
        business_prop_options: [
          {
            value: '1',
            label: '样品'
          },
          {
            value: '2',
            label: '文档'
          }
        ],
        type_options: [
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
        ],
        navigatorStream: undefined,
        loadingSubmit: false
      };
    },
    methods: {
      reset_child_com_state: function(name) {
        this.current_child_component = name;
        if (name === 'capture') {
          this.start_video();
        }
      },
      start_video: function() {
        const capture = navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
        const opt = {
          audio: false,
          video: {
            width: 640,
            height: 360
          }
        };
        let self = this;
        if (capture) {
          navigator.getUserMedia(opt,
            function(stream) {
              let video = document.getElementById('video');
              // video.src = window.URL.createObjectURL(stream);
              video.srcObject = stream;
              // video.onloadedmetadata = function(e) {
              //   console.log('capture started successfully');
              //   document.getElementById('non-video').style.display = 'none';
              //   video.play();
              // };
              document.getElementById('non-video').style.display = 'none';
              self.navigatorStream = stream;
            },
            function(err) {
              console.log('The following error occurred: ' + err.name);
            }
          );
        } else {
          console.log('getUserMedia not supported');
        }
      },
      change_files_view: function() {
        if (this.current_child_component !== 'attachment-view') {
          this.current_child_component = 'attachment-view';
        }
        if (this.filesView) {
          this.filesView = false;
        } else {
          this.filesView = true;
        }

        this.files_selected_ids = [];

        this.$refs.child.all_files_selected = false;

      },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {
          });
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
      },
      beforeUpload(file) {
        const isFile20M = file.size / 1024 / 1024 < 20;
        if (!isFile20M) {
          this.$message.warning('上传文件不能超过20M！');
          this.loadingSubmit = false;
          return false;
        }

      },
      upload_success(response, file, fileList) {
        this.uploaded_response = [...this.uploaded_response, ...fileList];
        console.log(fileList);
        let successItem = [];
        fileList.forEach((item) => {
          if (!item.response.status) {
            this.$message({
              showClose: true,
              message: item.name + '提交失败',
              type: 'error'
            });
            this.$refs.upload.clearFiles();
            let loadingTimer = setTimeout(_ => {
              this.loadingSubmit = false;
              clearTimeout(loadingTimer);
            }, 1000);
            return;
          } else {
            successItem.push(item);
          }
        });
        this.$refs.upload.clearFiles();
        this.upload_submit_post(successItem, this.data.prn);
      },
      upload_error(error, file, filelist) {
        this.$refs.upload.clearFiles();
        let loadingTimer = setTimeout(_ => {
          this.loadingSubmit = false;
          clearTimeout(loadingTimer);
        }, 1000);
        this.upload_category = 'KHWJ';
        console.log(error);
      },
      files_delete: function() {
        if (this.current_child_component !== 'attachment-view') {
          return;
        }

        let selected_ids = this.get_selected_ids();
        if (selected_ids === '') {
          this.$message({
            message: '请选择需要删除附件',
            type: 'warning'
          });
          return;
        }

        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$http.post(this.get_interface_url() + 'deleteAll', Object.assign({
            ids: this.get_selected_ids(),
            JID: this.data.JID
          }, this.data), {
            emulateJSON: true
          }).then(function(response) {
            this.$message({
              showClose: true,
              message: '恭喜你，删除成功',
              type: 'success'
            });
            this.$refs.child.refresh_files_data();
          }, function(response) {

          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });

      },
      upload_submit_handle: function() {
        if (this.loadingSubmit) {
          return;
        }
        let choose_file_length = document.getElementsByClassName('el-upload-list')[0].children.length;
        let uploaded_business_type = this.upload_category;
        console.log(choose_file_length);
        if (choose_file_length === 0) {
          this.$message({
            showClose: true,
            message: '请先选择文件',
            type: 'warning'
          });
          return;
        }

        if (uploaded_business_type.trim() === '') {
          this.$message({
            showClose: true,
            message: '请输入选择类型',
            type: 'warning'
          });
          return;
        }
        this.loadingSubmit = true;
        this.$refs.upload.submit();
      },
      upload_files: function(callback) {
        this.$refs.upload.submit();
        let responseData = this.uploaded_response;
        callback(responseData, this.data.prn);
      },
      upload_submit_post: function(data, prn) {
        let dataLength = data.length;
        let upload_submit_url = this.get_interface_url() + '/add';
        for (let i = 0; i < dataLength; i++) {
          this.$http.post(upload_submit_url, Object.assign({
            file_name: data[i].name,
            busin_co: this.upload_business_no,
            bus_type: this.upload_category,
            encr_lev: this.upload_encrypt_value,
            remark: this.upload_remark,
            file_prn: data[i].response.obj.obj.prn,
            file_size: data[i].response.obj.obj.file_size,
            file_uri: data[i].response.obj.obj.file_uri,
            prn: prn,
            source: '上传',
            JID: this.data.JID
          }, this.data), {
            emulateJSON: true
          }).then(function(response) {
            this.loadingSubmit = false;
            let result = response.body.obj;
            if (result) {
              this.$message({
                showClose: true,
                message: '恭喜你，提交成功',
                type: 'success'
              });
              this.upload_dialog_visible = false;
              this.$refs.child.refresh_files_data();
              this.uploaded_response = [];
              this.upload_category = 'KHWJ';
              this.upload_remark = '';
              this.fileList = [];

            }
          }, function(response) {
            this.loadingSubmit = false;
            let result = response.body.obj;
            if (result) {
              this.$message({
                showClose: true,
                message: '提交失败',
                type: 'error'
              });
              this.upload_dialog_visible = false;
            }
          });
        }
      },
      upload_cancel_handle: function() {
        this.upload_dialog_visible = false;
        this.uploaded_response = [];
        this.upload_category = 'KHWJ';
        this.upload_remark = '';
        this.fileList = [];
      },
      get_interface_url: function() {
        let upload_url = this.data.uploadUrl;
        if (upload_url !== undefined) {
          let url_array = upload_url.split('/');
          let result = '';
          for (let i = 0; i < url_array.length - 1; i++) {
            result += url_array[i] + '/';
          }
          return result;
        } else {
          return '';
        }

      },
      head_call_back_files: function(ids) {
        this.files_selected_ids = ids;
      },
      update_files_message_handle: function() {
        if (this.current_child_component !== 'attachment-view') {
          return;
        }
        let selected_ids = this.get_selected_ids();
        if (selected_ids === '') {
          this.$message({
            showClose: true,
            message: '请选择数据行',
            type: 'warning'
          });
          return;
        }
        this.$http.post(this.get_interface_url() + 'update', Object.assign({
          id: selected_ids,
          bus_type: this.update_file_cate_value,
          busin_co: this.update_business_no,
          up_ver: '0',
          JID: this.data.JID
        }, this.data), {
          emulateJSON: true
        }).then(function(response) {
          this.$message({
            showClose: true,
            message: '恭喜你，修改成功',
            type: 'success'
          });
        }, function(response) {

        });
      },
      get_selected_ids: function() {
        let selection_ids = null;
        if (this.filesView) {
          selection_ids = this.files_selected_ids.join(',');
        } else {
          let list = document.getElementsByName('file_checkbox_list');
          let tempArray = [];
          for (let i = 0; i < list.length; i++) {
            if (list[i].checked) {
              tempArray.push(list[i].value);
            }
          }
          selection_ids = tempArray.join(',');
        }
        return selection_ids;
      },
      search_files: function() {
      },
      before_upload_validation: function() {
        let obj = document.getElementById('upload');
        obj.click();

      }
    },
    watch: {
      data: function() {
        console.log('附件上传入参', this.data);
      }
    },
    components: {
      'capture': Capture,
      'file-list': FileList,
      'buttons-disabled': ButtonsDisabled,
      ElInput,
      ElButton,
      ElUpload,
      ElDialog
    },
    props: {
      data: {
        type: Object, default: () => {
          return {
            uploadUrl: '',
            prn: '',
            capture: false,
            scan: true,
            edit: true,
            showAttachments: false,
            delete: true,
            upload: true,
            allButtonDisabled: false,
            JID: ''
          };
        }
      }
    },
    created: function() {
      this.pre_interface_url = this.get_interface_url();
    },
    computed: {}
  };

</script>

<style scoped>
    table tr td {
        padding: 10px 10px;
    }

    #upload {
        display: none;
    }
</style>
