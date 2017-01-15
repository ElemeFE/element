<template>
  <transition name="el-zoom-in-top" @after-leave="doDestroy">
    <ul
      v-show="showPopper"
      class="el-autocomplete__suggestions"
      :class="{ 'is-loading': parent.loading }"
      :style="{ width: dropdownWidth }"
    >
      <li v-if="parent.loading"><i class="el-icon-loading"></i></li>
      <template v-for="(item, index) in suggestions" v-else>
        <li
          v-if="!parent.customItem"
          :class="{'highlighted': parent.highlightedIndex === index}"
          @click="select(item)"
        >
          {{item.value}}
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
    </ul>
  </transition>
</template>
<script>
  import Popper from 'element-ui/src/utils/vue-popper';
  import Emitter from 'element-ui/src/mixins/emitter';
  export default {
    mixins: [Popper, Emitter],

    componentName: 'ElAutocompleteSuggestions',

    data() {
      return {
        parent: this.$parent,
        dropdownWidth: ''
      };
    },

    props: {
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
