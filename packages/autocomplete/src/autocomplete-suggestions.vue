<template>
  <transition name="tm-zoom-in-top" @after-leave="doDestroy">
    <div
      v-show="showPopper"
      class="tm-autocomplete-suggestion tm-popper"
      :class="{ 'is-loading': parent.loading }"
      :style="{ width: dropdownWidth }"
      role="region"
    >
      <tm-scrollbar
        tag="ul"
        wrap-class="tm-autocomplete-suggestion__wrap"
        view-class="tm-autocomplete-suggestion__list"
      >
        <li v-if="parent.loading">
          <tm-icon name="loader"></tm-icon>
        </li>
        <slot v-else>
        </slot>
      </tm-scrollbar>
    </div>
  </transition>
</template>
<script>
  import Popper from 'tmconsulting-ui/src/utils/vue-popper';
  import Emitter from 'tmconsulting-ui/src/mixins/emitter';
  import TmScrollbar from 'tmconsulting-ui/packages/scrollbar';

  export default {
    components: { TmScrollbar },
    mixins: [Popper, Emitter],

    componentName: 'TmAutocompleteSuggestions',

    data() {
      return {
        parent: this.$parent,
        dropdownWidth: ''
      };
    },

    props: {
      options: {
        default() {
          return {
            gpuAcceleration: false
          };
        }
      },
      id: String
    },

    methods: {
      select(item) {
        this.dispatch('TmAutocomplete', 'item-click', item);
      }
    },

    updated() {
      this.$nextTick(() => {
        this.updatePopper();
      });
    },

    mounted() {
      this.$parent.popperElm = this.popperElm = this.$el;
      this.referenceElm = this.$parent.$refs.input.$refs.input;
      this.referenceList = this.$el.querySelector('.tm-autocomplete-suggestion__list');
      this.referenceList.setAttribute('role', 'listbox');
      this.referenceList.setAttribute('id', this.id);
    },

    created() {
      this.$on('visible', (val, inputWidth) => {
        this.dropdownWidth = inputWidth + 'px';
        this.showPopper = val;
      });
    }
  };
</script>
