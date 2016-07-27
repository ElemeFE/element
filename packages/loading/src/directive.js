exports.install = Vue => {
  let insertDom = (parent, directive) => {
    if (!directive.domVisible) {
      Object.keys(directive.maskStyle).forEach(property => {
        directive.mask.style[property] = directive.maskStyle[property];
      });

      Object.keys(directive.spinnerStyle).forEach(property => {
        directive.spinner.style[property] = directive.spinnerStyle[property];
      });

      if (directive.originalPosition !== 'absolute') {
        parent.style.position = 'relative';
      }
      if (directive.modifiers.fullscreen) {
        parent.style.overflow = 'hidden';
      }
      directive.mask.style.display = 'block';
      directive.spinner.style.display = 'inline-block';
      directive.domVisible = true;

      parent.appendChild(directive.mask);
      directive.mask.appendChild(directive.spinner);
      directive.domInserted = true;
    }
  };

  Vue.directive('loading', {
    bind: function() {
      this.mask = document.createElement('div');
      this.mask.className = 'el-loading-mask';
      this.maskStyle = {
        position: 'absolute',
        zIndex: '10000',
        backgroundColor: 'rgba(0, 0, 0, .7)',
        margin: '0'
      };

      this.spinner = document.createElement('i');
      this.spinner.className = 'el-icon-loading';
      this.spinnerStyle = {
        color: '#ddd',
        fontSize: '32px',
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: '-19px',
        marginLeft: '-16px',
        zIndex: '10001'
      };
    },

    update: function(val) {
      if (val) {
        Vue.nextTick(() => {
          if (this.modifiers.fullscreen) {
            this.originalPosition = document.body.style.position;
            this.originalOverflow = document.body.style.overflow;

            ['top', 'right', 'bottom', 'left'].forEach(property => {
              this.maskStyle[property] = '0';
            });
            this.maskStyle.position = 'fixed';
            this.spinnerStyle.position = 'fixed';

            insertDom(document.body, this);
          } else {
            if (this.modifiers.body) {
              this.originalPosition = document.body.style.position;

              ['top', 'left'].forEach(property => {
                this.maskStyle[property] = this.el.getBoundingClientRect()[property] + document.body[`scroll${ property[0].toUpperCase() + property.slice(1) }`] + 'px';
              });
              ['height', 'width'].forEach(property => {
                this.maskStyle[property] = this.el.getBoundingClientRect()[property] + 'px';
              });

              insertDom(document.body, this);
            } else {
              this.originalPosition = this.el.style.position;

              ['top', 'right', 'bottom', 'left'].forEach(property => {
                this.maskStyle[property] = '0';
              });

              insertDom(this.el, this);
            }
          }
        });
      } else {
        if (this.domVisible) {
          this.mask.style.display = 'none';
          this.spinner.style.display = 'none';
          this.domVisible = false;

          if (this.modifiers.fullscreen) {
            document.body.style.overflow = this.originalOverflow;
          }
          if (this.modifiers.fullscreen || this.modifiers.body) {
            document.body.style.position = this.originalPosition;
          } else {
            this.el.style.position = this.originalPosition;
          }
        }
      }
    },

    unbind: function() {
      if (this.domInserted) {
        if (this.modifiers.fullscreen || this.modifiers.body) {
          document.body.removeChild(this.mask);
          this.mask.removeChild(this.spinner);
        } else {
          this.el.removeChild(this.mask);
          this.mask.removeChild(this.spinner);
        }
      }
    }
  });
};
