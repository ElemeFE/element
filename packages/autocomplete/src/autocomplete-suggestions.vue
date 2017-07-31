<template>
  <transition name="el-zoom-in-top" @after-leave="doDestroy">
    <div
      v-show="showPopper"
      class="el-autocomplete-suggestion"
      :class="{ 'is-loading': parent.loading }"
      :style="{ width: dropdownWidth }"
    >
      <el-scrollbar
        tag="ul"
        wrap-class="el-autocomplete-suggestion__wrap"
        view-class="el-autocomplete-suggestion__list"
      >
        <li v-if="parent.loading"><i class="el-icon-loading"></i></li>
        <li v-else-if='suggestions.length==0 && dropNone'>查无数据</li>
        <template v-for="(item, index) in suggestions" v-else>
          <li
            v-if="!parent.customItem&&html"
            :class="{'highlighted': parent.highlightedIndex === index,'disabled':item.openType?(item.openType=='0'?true:false):false}"
            :title="item.openType?(item.openType=='0'?'暂不支持爬取，如有需求请联系客服人员':''):''"
            @click="select(item)"
            v-html='item[props.label]'
          >
          </li>
          <li
            v-if="!parent.customItem&&!html"
            :class="{'highlighted': parent.highlightedIndex === index}"
            @click="select(item)"
          >
            {{item[props.label]}}
          </li>
          <component
            v-else
            :class="{'highlighted': parent.highlightedIndex === index}"
            @click="select(item)"
            :is="parent.customItem"
            :item="item"
            :index="index">
          </component>
        </template>
      </el-scrollbar>
    </div>
  </transition>
</template>
<script>
  import Popper from 'my-element-ui/src/utils/vue-popper';
  import Emitter from 'my-element-ui/src/mixins/emitter';
  import ElScrollbar from 'my-element-ui/packages/scrollbar';

  export default {
    components: { ElScrollbar },
    mixins: [Popper, Emitter],

    componentName: 'ElAutocompleteSuggestions',

    data() {
      return {
        parent: this.$parent,
        dropdownWidth: ''
      };
    },

    props: {
      props: Object,
      suggestions: Array,
      html: Boolean,
      dropNone: Boolean,
      options: {
        default() {
          return {
            forceAbsolute: true,
            gpuAcceleration: false
          };
        }
      }
    },

    methods: {
      select(item) {
        if (item.openType) {
          if (item.openType === 1) {
            this.dispatch('ElAutocomplete', 'item-click', item);
          }
        }
      }
    },

    updated() {
      this.$nextTick(_ => {
        this.updatePopper();
      });
    },

    mounted() {
      this.popperElm = this.$el;
      this.referenceElm = this.$parent.$refs.input.$refs.input;
    },

    created() {
      this.$on('visible', (val, inputWidth) => {
        this.dropdownWidth = inputWidth + 'px';
        this.showPopper = val;
      });
    }
  };
</script>
