<template>
  <div class="el-dragger__cover" @click.stop v-if="image">
    <transition name="fade-in">
      <el-progress
        class="el-dragger__cover__progress"
        v-if="image.status === 'uploading'"
        :percentage="image.percentage"
        :show-text="false"
        :status="image.status === 'finished' ? 'success' : ''">
      </el-progress>
    </transition>
    <div
      class="el-dragger__cover__content"
      v-if="image.status === 'finished'"
      @mouseenter="mouseover = true"
      @mouseleave="mouseover = false"
    >
      <img :src="image.url">
      <transition name="fade-in">
        <div v-show="mouseover" class="el-dragger__cover__interact">
          <div class="el-draggeer__cover__btns">
            <span class="btn" @click="$parent.handleClick()"><i class="el-icon-upload2"></i><span>{{ $t('el.upload.continue') }}</span></span>
            <span class="btn" @click="onPreview(image)"><i class="el-icon-view"></i><span>{{ $t('el.upload.preview') }}</span></span>
            <span class="btn" @click="onRemove(image)"><i class="el-icon-delete2"></i><span>{{ $t('el.upload.delete') }}</span></span>
          </div>
        </div>
      </transition>
      <transition name="md-fade-top">
        <h4 v-show="mouseover" class="el-dragger__cover__title">{{image.name}}</h4>
      </transition>
    </div>
  </div>
</template>
<script>
  import Locale from 'element-ui/src/mixins/locale';

  export default {
    mixins: [Locale],

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
