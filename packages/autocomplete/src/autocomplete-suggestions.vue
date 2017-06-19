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
        <template v-for="(item, index) in suggestions" v-else>
          <li
            v-if="!parent.customItem"
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
  import Popper from 'element-ui/src/utils/vue-popper';
  import Emitter from 'element-ui/src/mixins/emitter';
  import ElScrollbar from 'element-ui/packages/scrollbar';

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
        this.dispatch('ElAutocomplete', 'item-click', item);
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
