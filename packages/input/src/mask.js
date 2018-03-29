export default {
  data() {
    return {
      maskOptions: null,
      maskState: {
        maskDigitPosMap: {},
        maskDigitPosMapOld: null,
        keyCode: null,
        previousValue: null,
        previousCaretPos: 0,
        regexMask: null
      }
    };
  },
  props: {
    mask: [String, Object]
  },
  watch: {
    mask(val) {
      this.maskInit(val);
    }
  },
  mounted() {
    if (this.mask) {
      this.maskInit(this.mask);
    }
  },
  methods: {
    maskInit(val) {
      const defaultMaskOptions = {
        keyStrokeCompensation: 10,
        byPassKeys: [9, 16, 17, 18, 36, 37, 38, 39, 40, 91],
        translation: {
          '0': {pattern: /\d/},
          '9': {pattern: /\d/, optional: true},
          '#': {pattern: /\d/, recursive: true},
          'A': {pattern: /[a-zA-Z0-9]/},
          'S': {pattern: /[a-zA-Z]/}
        },
        reverse: false,
        clearIfNotMatch: false
      };

      if (typeof val === 'string') {
        defaultMaskOptions.mask = val;
      } else if (typeof val === 'object') {
        for (let key in val) {
          if (val.hasOwnProperty(key)) {
            if (key === 'translation') {
              for (let k in val[key]) {
                if (val[key].hasOwnProperty(k)) {
                  defaultMaskOptions[key][k] = val[key][k];
                }
              }
            } else {
              defaultMaskOptions[key] = val[key];
            }
          }
        }
      }

      if (!defaultMaskOptions.mask) {
        console.error('mask must be defined in mask options');
      }

      this.maskOptions = defaultMaskOptions;

      this.maskState.regexMask = this.getRegexMask();

      this.maskBehaviour();
    },
    getCaret() {
      try {
        let pos = 0;
        const dSel = document.selection;
        const ctrl = this.$refs.input || this.$refs.textarea;
        const cSelStart = ctrl.selectionStart;

        if (dSel && navigator.appVersion.indexOf('MSIE 10') === -1) {
          const sel = dSel.createRange();
          sel.moveStart('character', -this.getInputValue().length);
          pos = sel.text.length;
        } else if (cSelStart || cSelStart === '0') {
          pos = cSelStart;
        }

        return pos;
      } catch (e) {}
    },
    setCaret(pos) {
      try {
        if (this.focused) {
          const ctrl = this.$refs.input || this.$refs.textarea;

          if (ctrl.setSelectionRange) {
            ctrl.setSelectionRange(pos, pos);
          } else { // IE
            const range = ctrl.createTextRange();
            range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();
          }
        }
      } catch (e) {}
    },
    calculateCaretPosition() {
      const oldVal = this.maskState.previousValue || '';
      const newVal = this.getInputValue();
      let caretPosNew = this.getCaret();

      if (oldVal !== newVal) {
        let caretPosOld = this.maskState.previousCaretPos || 0;
        const newValLen = newVal.length;
        const oldValLen = oldVal.length;
        let maskDigitsBeforeCaret = 0;
        let maskDigitsAfterCaret = 0;
        let maskDigitsBeforeCaretAll = 0;
        let maskDigitsBeforeCaretAllOld = 0;

        for (let i = caretPosNew; i < newValLen; i++) {
          if (!this.maskState.maskDigitPosMap[i]) {
            break;
          }
          maskDigitsAfterCaret++;
        }

        for (let i = caretPosNew - 1; i >= 0; i--) {
          if (!this.maskState.maskDigitPosMap[i]) {
            break;
          }
          maskDigitsBeforeCaret++;
        }

        for (let i = caretPosNew - 1; i >= 0; i--) {
          if (this.maskState.maskDigitPosMap[i]) {
            maskDigitsBeforeCaretAll++;
          }
        }

        for (let i = caretPosOld - 1; i >= 0; i--) {
          if (this.maskState.maskDigitPosMapOld[i]) {
            maskDigitsBeforeCaretAllOld++;
          }
        }

        if (caretPosNew > oldValLen) {
          caretPosNew = newValLen * 10;
        } else if (caretPosOld >= caretPosNew && caretPosOld !== oldValLen) {
          if (!this.maskState.maskDigitPosMapOld[caretPosNew]) {
            const caretPos = caretPosNew;
            caretPosNew -= maskDigitsBeforeCaretAllOld - maskDigitsBeforeCaretAll;
            caretPosNew -= maskDigitsBeforeCaret;

            if (this.maskState.maskDigitPosMap[caretPosNew]) {
              caretPosNew = caretPos;
            }
          }
        } else if (caretPosNew > caretPosOld) {
          caretPosNew += maskDigitsBeforeCaretAll - maskDigitsBeforeCaretAllOld;
          caretPosNew += maskDigitsAfterCaret;
        }
      }
      return caretPosNew;
    },
    maskBehaviour(val) {
      const keyCode = this.maskState.keyCode;
      const ctrl = this.$refs.input || this.$refs.textarea;
      const value = val === undefined ? ctrl.value : val;

      if (this.maskOptions.byPassKeys.indexOf(keyCode) === -1) {
        const newVal = this.getMasked(false, value);
        const caretPos = this.getCaret();

        setTimeout(() => {
          this.setCaret(this.calculateCaretPosition());
        }, this.maskOptions.keyStrokeCompensation);

        this.setCurrentValue(newVal);
        ctrl.value = newVal;
        this.setCaret(caretPos);

        return newVal;
      }
      return null;
    },
    getMasked(skipMaskChars, val) {
      const buf = [];
      const value = val === undefined ? this.getInputValue() : val + '';
      const valLen = value.length;
      let m = 0;
      let v = 0;
      let offset = 1;
      let addMethod = 'push';
      let resetPos = -1;
      let maskDigitCount = 0;
      let lastMaskChar;
      const maskDigitPosArr = [];
      const mask = this.maskOptions.mask;
      const maskLen = mask.length;
      let check;

      if (this.maskOptions.reverse) {
        addMethod = 'unshift';
        offset = -1;
        lastMaskChar = 0;
        m = maskLen - 1;
        v = valLen - 1;
        check = () => m > -1 && v > -1;
      } else {
        lastMaskChar = maskLen - 1;
        check = () => m < maskLen && v < valLen;
      }

      let lastUntranslatedMaskChar;
      while (check()) {
        const maskDigit = mask.charAt(m);
        const valDigit = value.charAt(v);
        const translation = this.maskOptions.translation[maskDigit];

        if (translation) {
          if (valDigit.match(translation.pattern)) {
            buf[addMethod](valDigit);
            if (translation.recursive) {
              if (resetPos === -1) {
                resetPos = m;
              } else if (m === lastMaskChar && m !== resetPos) {
                m = resetPos - offset;
              }

              if (lastMaskChar === resetPos) {
                m -= offset;
              }
            }

            m += offset;
          } else if (valDigit === lastUntranslatedMaskChar) {
            maskDigitCount--;
            lastUntranslatedMaskChar = undefined;
          } else if (translation.optional) {
            m += offset;
            v -= offset;
          } else if (translation.fallback) {
            buf[addMethod](translation.fallback);
            m += offset;
            v -= offset;
          } else {
            // this.maskState.invalid.push({ p: v, v: valDigit, e: translation.pattern });
          }
          v += offset;
        } else {
          if (!skipMaskChars) {
            buf[addMethod](maskDigit);
          }

          if (valDigit === maskDigit) {
            maskDigitPosArr.push(v);
            v += offset;
          } else {
            lastUntranslatedMaskChar = maskDigit;
            maskDigitPosArr.push(v + maskDigitCount);
            maskDigitCount++;
          }

          m += offset;
        }
      }

      const lastMaskCharDigit = mask.charAt(lastMaskChar);

      if (maskLen === valLen + 1 && !this.maskOptions.translation[lastMaskCharDigit]) {
        buf.push(lastMaskCharDigit);
      }

      const newVal = buf.join('');
      this.mapMaskDigitPositions(newVal, maskDigitPosArr, valLen);

      return newVal;
    },
    mapMaskDigitPositions(newVal, maskDigitPosArr, valLen) {
      const maskDiff = this.maskOptions.reverse ? newVal.length - valLen : 0;
      this.maskState.maskDigitPosMap = {};
      for (let pos of maskDigitPosArr) {
        this.maskState.maskDigitPosMap[pos + maskDiff] = 1;
      }
    },
    getInputValue() {
      const ctrl = this.$refs.input || this.$refs.textarea;
      return ctrl.value;
    },
    getRegexMask() {
      const maskChunks = [];
      const mask = this.maskOptions.mask;
      let oRecursive;

      for (let i = 0; i < mask.length; i++) {
        const translation = this.maskOptions.translation[mask.charAt(i)];

        if (translation) {
          const pattern = translation.pattern.toString().replace(/.{1}$|^.{1}/g, '');
          const optional = translation.optional;
          const recursive = translation.recursive;

          if (recursive) {
            maskChunks.push(mask.charAt(i));
            oRecursive = { digit: mask.charAt(i), pattern };
          } else {
            maskChunks.push(!optional && !recursive ? pattern : (pattern + '?'));
          }

        } else {
          maskChunks.push(mask.charAt(i).replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'));
        }
      }

      let reg = maskChunks.join('');

      if (oRecursive) {
        reg = reg.replace(new RegExp('(' + oRecursive.digit + '(.*' + oRecursive.digit + ')?)'), '($1)?')
          .replace(new RegExp(oRecursive.digit, 'g'), oRecursive.pattern);
      }

      return new RegExp(reg);
    }
  }
};
