<template>
  <div class="el-upload-cover" @click.stop v-if="image">
    <transition name="el-fade-in">
      <el-progress
        class="el-upload-cover__progress"
        v-if="image.status === 'uploading'"
        :percentage="image.percentage"
        :show-text="false"
      >
      </el-progress>
    </transition>
    <div
      class="el-upload-cover__content"
      v-if="image.status === 'success'"
      @mouseenter="mouseover = true"
      @mouseleave="mouseover = false"
    >
      <img :src="image.url">
      <label class="el-upload-cover__label"><i class="el-icon-check"></i></label>
      <transition name="el-fade-in">
        <div v-show="mouseover" class="el-upload-cover__interact">
          <div class="el-draggeer__cover__btns">
            <span class="btn" @click="$parent.handleClick()"><i class="el-icon-upload2"></i><span>{{ t('el.upload.continue') }}</span></span>
            <span class="btn" @click="$emit('preview', image)"><i class="el-icon-view"></i><span>{{ t('el.upload.preview') }}</span></span>
            <span class="btn" @click="$emit('remove', image)"><i class="el-icon-delete2"></i><span>{{ t('el.upload.delete') }}</span></span>
          </div>
        </div>
      </transition>
      <transition name="el-zoom-in-bottom">
        <h4 v-show="mouseover" class="el-upload-cover__title">{{image.name}}</h4>
      </transition>
    </div>
  </div>
</template>
<script>
  import Locale from 'element-ui/src/mixins/locale';
  import ElProgress from 'element-ui/packages/progress';

  export default {
    mixins: [Locale],

    components: { ElProgress },

    props: {
      image: {},
      onPreview: {
        type: Function,
        default: function() {}
      },
      onRemove: {
        type: Function,
        default: function() {}
      }
    },
    data() {
      return {
        mouseover: false
      };
    }
  };
</script>
