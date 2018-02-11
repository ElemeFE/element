<template>
    <span>
    <transition :name="transition" @after-leave="doDestroy">
      <div
        class="el-popover el-popper"
        :class="[popperClass, content && 'el-popover--plain']"
        ref="popper"
        v-show="!disabled && showPopper"
        :style="{ width: width + 'px' }"
        role="tooltip"
        :id="tooltipId"
        :aria-hidden="(disabled || !showPopper) ? 'true' : 'false'"
      >
        <div class="el-popover__title" v-if="title" v-text="title"></div>
        <slot>{{ content }}</slot>
      </div>
    </transition>
    <slot name="reference"></slot>
  </span>
</template>
<script>
import Popper from 'element-ui/src/utils/vue-popper';
import { on, off } from 'element-ui/src/utils/dom';
import { addClass, removeClass } from 'element-ui/src/utils/dom';
import { generateId } from 'element-ui/src/utils/util';

export default {
  name: 'ElPopover',

  mixins: [Popper],
  props: {
    trigger: {
      type: String,
      default: 'click',
      validator: value => ['click', 'focus', 'hover', 'manual'].indexOf(value) > -1
    },
    openDelay: {
      type: Number,
      default: 0
    },
    title: String,
    disabled: Boolean,
    content: String,
    reference: {},
    popperClass: String,
    width: {},
    visibleArrow: {
      default: true
    },
    arrowOffset: {
      type: Number,
      default: 0
    },
    transition: {
      type: String,
      default: 'fade-in-linear'
    }
  },
  data() {
    return {
      referenceElm: ''
    };
  },
  computed: {
    tooltipId() {
      return `el-popover-${generateId()}`;
    }
  },
  watch: {
    showPopper(val) {
      val ? this.$emit('show') : this.$emit('hide');
    },
    referenceElm(Elm) {
      if (this.popperJS) {
        this.popperJS._reference = this.referenceElm;
      }
      this.updatePopper();
    }
  },

  mounted() {
    var _this = this;

    if (!this.$refs.reference) {
      this.$refs.reference = [];
    }
    let reference = this.reference ? [this.reference] : this.$refs.reference;
    const popper = this.popper || this.$refs.popper;

    if (!reference.length && this.$slots.reference && this.$slots.reference[0]) {
      reference = [this.$slots.reference[0].elm];
    }
    this.referenceElm = reference[0];
    // 可访问性
    if (reference) {
      reference.forEach(function(reference, index, arry) {

        addClass(reference, 'el-popover__reference');

        reference.setAttribute('aria-describedby', _this.tooltipId);
        reference.setAttribute('tabindex', 0); // tab序列
        popper.setAttribute('tabindex', 0);

        if (_this.trigger !== 'click') {
          on(reference, 'focusin', function() {
            _this.referenceElm = reference;
            _this.handleFocus(this);
          });
          on(popper, 'focusin', function() {
            _this.referenceElm = reference;
            _this.handleFocus(this);
          });

          on(reference, 'focusout', function() {
            _this.referenceElm = reference;
            _this.handleBlur(this);
          });

          on(popper, 'focusout', function() {
            _this.referenceElm = reference;
            _this.handleBlur(this);
          });

        }
        on(reference, 'keydown', function() {
          _this.referenceElm = reference;
          _this.handleKeydown(this);
        });

        on(reference, 'click', function() {
          _this.referenceElm = reference;
          _this.handleClick(this);
        });
        if (_this.trigger === 'click') {
          on(reference, 'click', function() {

            _this.referenceElm = reference;
            _this.doToggle();

          });
        } else if (_this.trigger === 'hover') {
          on(reference, 'mouseenter',
            function() {
              _this.referenceElm = reference;
              _this.handleMouseEnter();
            }

          );
          on(popper, 'mouseenter', function() {
            _this.referenceElm = reference;
            _this.handleMouseEnter();
          });
          on(reference, 'mouseleave', function() {
            _this.referenceElm = reference;
            _this.handleMouseLeave();
          });
          on(popper, 'mouseleave', function() {
            _this.referenceElm = reference;
            _this.handleMouseLeave();
          });
        } else if (_this.trigger === 'focus') {
          let found = false;
          if ([].slice.call(reference.children).length) {
            const children = reference.childNodes;
            const len = children.length;
            for (let i = 0; i < len; i++) {
              if (children[i].nodeName === 'INPUT' ||
                                children[i].nodeName === 'TEXTAREA') {
                on(children[i], 'focusin',
                  function() {
                    _this.referenceElm = reference;

                    _this.doShow();
                  });
                on(children[i], 'focusout', function() {
                  _this.referenceElm = reference;
                  _this.doClose();
                });
                found = true;
                break;
              }
            }
          }
          if (found) return;
          if (reference.nodeName === 'INPUT' ||
                        reference.nodeName === 'TEXTAREA') {
            on(reference, 'focusin', function() {
              _this.referenceElm = reference;
              _this.doShow();
            });
            on(reference, 'focusout', function() {
              _this.referenceElm = reference;
              _this.doClose();
            });
          } else {
            on(reference, 'mousedown', function() {
              _this.referenceElm = reference;
              _this.doShow();
            });
            on(reference, 'mouseup', function() {

              _this.referenceElm = reference;
              _this.doClose();
            });
          }
        }
      });
    }
    if (this.trigger === 'click') {
      on(document, 'click', this.handleDocumentClick);
    }

  },

  methods: {
    doToggle() {
      this.showPopper = !this.showPopper;
    },
    doShow() {
      this.showPopper = true;
    },
    doClose() {
      this.showPopper = false;
    },
    handleFocus(Elm) {
      addClass(Elm, 'focusing');
      if (this.trigger !== 'manual') this.showPopper = true;
    },
    handleClick(Elm) {
      removeClass(Elm, 'focusing');
    },
    handleBlur(Elm) {
      removeClass(Elm, 'focusing');
      if (this.trigger !== 'manual') this.showPopper = false;
    },
    handleMouseEnter() {
      clearTimeout(this._timer);
      if (this.openDelay) {
        this._timer = setTimeout(() => {
          this.showPopper = true;
        }, this.openDelay);
      } else {
        this.showPopper = true;
      }
    },
    handleKeydown(ev) {
      if (ev.keyCode === 27 && this.trigger !== 'manual') { // esc
        this.doClose();
      }
    },
    handleMouseLeave() {
      clearTimeout(this._timer);
      this._timer = setTimeout(() => {
        this.showPopper = false;
      }, 200);
    },
    handleDocumentClick(e) {

      if (!this.$refs.reference) {
        this.$refs.reference = [];
      }

      let reference = this.reference ? [this.reference] : this.$refs.reference;
      const popper = this.popper || this.$refs.popper;

      if (!reference.length && this.$slots.reference && this.$slots.reference[0]) {
        reference = [this.$slots.reference[0].elm];
      }
      if (!this.$el ||
                !reference.length ||
                this.$el.contains(e.target) ||
                this.referenceElm.contains(e.target) ||
                !popper ||
                popper.contains(e.target)) return;
      this.showPopper = false;
    }
  },

  destroyed() {
    let reference = this.reference ? [this.reference] : this.$refs.reference;

    var _this = this;
    reference.forEach(function(reference, index, arry) {

      off(reference, 'click', _this.doToggle);
      off(reference, 'mouseup', _this.doClose);
      off(reference, 'mousedown', _this.doShow);
      off(reference, 'focusin', _this.doShow);
      off(reference, 'focusout', _this.doClose);
      off(reference, 'mouseleave', _this.handleMouseLeave);
      off(reference, 'mouseenter', _this.handleMouseEnter);
    });

    off(document, 'click', _this.handleDocumentClick);
  }
};
</script>