<template>
  <div class="tm-collapse-item">
    <div
      role="tab"
      :aria-expanded="isActive"
      :aria-controls="`tm-collapse-content-${id}`"
      :aria-describedby ="`tm-collapse-content-${id}`"
    >
      <div
        class="tm-collapse-item__header"
        @click="handleHeaderClick"
        role="button"
        :id="`tm-collapse-head-${id}`"
        tabindex="0"
        @keyup.space.enter.stop="handleEnterClick"
        :class="{
          'focusing': focusing,
          'is-active': isActive
        }"
        @focus="handleFocus"
        @blur="focusing = false"
      >
        <tm-icon
          name="arrow-right"
          class="tm-collapse-item__arrow tm-icon--arrow-right"
          :class="{'is-active': isActive}" />
        <slot name="title">{{title}}</slot>
      </div>
    </div>
    <tm-collapse-transition>
      <div
        class="tm-collapse-item__wrap"
        v-show="isActive"
        role="tabpanel"
        :aria-hidden="!isActive"
        :aria-labelledby="`tm-collapse-head-${id}`"
        :id="`tm-collapse-content-${id}`"
      >
        <div class="tm-collapse-item__content">
          <slot></slot>
        </div>
      </div>
    </tm-collapse-transition>
  </div>
</template>
<script>
  import TmCollapseTransition from 'tmconsulting-ui/src/transitions/collapse-transition';
  import Emitter from 'tmconsulting-ui/src/mixins/emitter';
  import { generateId } from 'tmconsulting-ui/src/utils/util';

  export default {
    name: 'TmCollapseItem',

    componentName: 'TmCollapseItem',

    mixins: [Emitter],

    components: { TmCollapseTransition },

    data() {
      return {
        contentWrapStyle: {
          height: 'auto',
          display: 'block'
        },
        contentHeight: 0,
        focusing: false,
        isClick: false
      };
    },

    inject: ['collapse'],

    props: {
      title: String,
      name: {
        type: [String, Number],
        default() {
          return this._uid;
        }
      }
    },

    computed: {
      isActive() {
        return this.collapse.activeNames.indexOf(this.name) > -1;
      },
      id() {
        return generateId();
      }
    },

    methods: {
      handleFocus() {
        setTimeout(() => {
          if (!this.isClick) {
            this.focusing = true;
          } else {
            this.isClick = false;
          }
        }, 50);
      },
      handleHeaderClick() {
        this.dispatch('TmCollapse', 'item-click', this);
        this.focusing = false;
        this.isClick = true;
      },
      handleEnterClick() {
        this.dispatch('TmCollapse', 'item-click', this);
      }
    }
  };
</script>
