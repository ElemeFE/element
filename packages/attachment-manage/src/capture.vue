<template>
    <div class="capture-box">
        <div class="capture-box-title">
            拍照上传
        </div>
        <div class="capture-box-main">
            <div class="capture-box-main-video">
                <div class="main-video_">
                    <div id="non-video" class="non-video">
                        <img src="../images/non-video-icon.png"/>
                        <div class="title">没有连接到摄像头!</div>
                    </div>
                    <video id="video" ref="video" autoplay></video>

                </div>
                <!--<button id="btn-take-picture" @click="takePicture" style="display:block;">拍照</button>-->
                <a class="tab" @click="take_picture_handle"><img src="../images/cut-pic.png"/>摄像</a>
            </div>

            <div id="pictures-box" class="pictures-box">
                <!--<canvas  id="canvas" width="122" height="122"></canvas>-->
                <div v-for="item in images_data" class="picture">
                    <img v-bind:src="item" width="182" height="142"/>
                    <div class="link_button_box">
                        <a href="javascript:void(0)" @click="open_modify_dialog">修改</a>
                        <a href="javascript:void(0)">保存</a>
                    </div>
                </div>
            </div>
            <div class="clear"></div>
        </div>
        <el-dialog
                title="修改图片"
                :visible.sync="modify_dialog"
                width="70%"
                class="pictures-edit-dialog">
            <!--:before-close="handleClose"-->

            <div>
                <div class="left">
                    <div class="pic-list">
                        <a v-for="(item,key,index) in images_data">
                            <img v-bind:src="item" width="100"/>
                        </a>
                    </div>
                    <img v-bind:src="images_data[0]" width="640" height="360"/>
                    <el-button>撤销</el-button>
                    <el-button>剪裁</el-button>
                </div>
                <div class="right">
                    <ul>
                        <li>
                            预览
                        </li>
                        <li>
                            名称：
                            <el-input placeholder="请输入内容" width="100"></el-input>
                        </li>
                        <li>
                            加密级别：
                            <el-select v-model="value" placeholder="请选择">
                                <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </li>
                        <li>
                            业务属性
                        </li>
                        <li>
                            客户数据
                        </li>
                        <li>
                            <el-button type="primary">保存</el-button>
                            <el-button>取消</el-button>
                        </li>
                    </ul>
                </div>
                <div class="clear"></div>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
  import ElButton from 'element-ui-qz/packages/button';
  import ElDialog from 'element-ui-qz/packages/dialog';

  export default {
    name: 'capture',
    components: {
      ElButton,
      ElDialog
    },
    data: function() {
      return {
        modify_dialog: false,
        pictures_count: 1,
        images_data: [],
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
      };
    },
    methods: {
      take_picture_handle: function() {
        let canvas_node = document.createElement('canvas');
        let video = this.refs.video.$el;
        canvas_node.width = 640;
        let context = canvas_node.getContext('2d');
        context.drawImage(video, 0, 0, 640, 300);
        // base64
        let img_data = canvas_node.toDataURL('image/png');
        this.images_data.push(img_data);
      },
      open_modify_dialog: function() {
        this.modify_dialog = true;
      }
    },
    props: {},
    watch: {
    }

  };

  window.onload = function() {
  };

</script>

<style scoped>

</style>
