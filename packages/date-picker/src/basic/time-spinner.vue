<template>
  <div class="el-time-spinner" :class="columns">
    <template v-if="!arrowControl">
      <el-scrollbar
        v-for="(type, k) in mapping.order"
        :key="k"
        @mouseenter.native="emitSelectRange(type)"
        @mousemove.native="adjustSpinner(type)"
        class="el-time-spinner__wrapper"
        wrap-style="max-height: inherit;"
        view-class="el-time-spinner__list"
        noresize
        tag="ul"
        ref="scroll">
        <li
          v-for="(disabled, val) in disabledList[type]"
          :key="val"
          @click="handleClick(type, { value: val, disabled: disabled })"
          class="el-time-spinner__item"
          :class="{ 'active': val === currVal(type), 'disabled': disabled }">
            {{ valToStr(type, val) }}
        </li>
      </el-scrollbar>
    </template>
    <template v-if="arrowControl">
      <div
        v-for="(type, k) in mapping.order"
        @mouseenter="emitSelectRange(type)"
        class="el-time-spinner__wrapper is-arrow"
        :key="k"
        ref="scroll">
        <i v-repeat-click="decrease" class="el-time-spinner__arrow el-icon-arrow-up"></i>
        <i v-repeat-click="increase" class="el-time-spinner__arrow el-icon-arrow-down"></i>
        <ul class="el-time-spinner__list" ref=type>
          <li
            class="el-time-spinner__item"
            v-for="(val, key) in arrowList[type]"
            :class="{ 'active': val === currVal(type), 'disabled': disabled(type, val) }"
            :key="key">
            {{ valToStr(type, val) }}
          </li>
        </ul>
      </div>
    </template>
  </div>
</template>

<script type="text/babel">
  import { modifyTime, limitTimeRange, parseDate } from '../util';
  import ElScrollbar from 'element-ui/packages/scrollbar';
  import RepeatClick from 'element-ui/src/directives/repeat-click';
  import normalizeWheel from 'normalize-wheel';

  export default {
    components: { ElScrollbar },

    directives: {
      repeatClick: RepeatClick
    },

    props: {
      mapping: {
        type: Object,
        required: true
      },
      date: {},
      defaultValue: {}, // reserved for future use
      steps: {
        type: Date,
        default: null
      },
      selectableRange: {
        type: Array,
        defaultValue: []
      },
      format: {
        type: String,
        default: 'HH:mm:ss'
      },
      arrowControl: Boolean
    },

    computed: {
      hour() {
        return this.date.getHours();
      },
      minute() {
        return this.date.getMinutes();
      },
      second() {
        return this.date.getSeconds();
      },
      millisecond() {
        return this.getConvertedMs(this.date.getMilliseconds(), this.maxMillisecs);
      },
      maxMillisecs() {
        let len = this.mapping.millisecond;
        if (!len) return 1000;
        return Math.round(Math.pow(10, len[1] - len[0]));
      },
      arrowList() {
        var result = {};
        this.mapping.order.forEach((type) => {
          const val = this[type];
          const step = this.numbSteps[type];
          result[type] = [
            val - step >= 0 ? val - step : undefined,
            val,
            val + step < this.maxOfType(type) ? val + step : undefined
          ];
        });
        return result;
      },
      disabledList() {
        return {
          hour: this.getTypesList('hour', this.selectableRange),
          minute: this.getTypesList('minute', this.selectableRange),
          second: this.getTypesList('second', this.selectableRange),
          millisecond: this.getTypesList('millisecond', this.selectableRange)
        };
      },
      el() {
        var result = {};
        this.mapping.order.forEach((type, idx) =>{
          result[type] = this.$refs.scroll[idx];
        });
        return result;
      },
      columns() {
        let val = {};
        val['columns' + this.mapping.order.length] = true;
        return val;
      },
      numbSteps() {
        var result = {};
        const steps = this.steps;
        this.mapping.order.forEach((type) => {
          let val = 0;
          if (steps) {
            switch (type) {
              case 'hour': val = steps.getHours(); break;
              case 'minute': val = steps.getMinutes(); break;
              case 'second': val = steps.getSeconds(); break;
              case 'millisecond': val = this.getConvertedMs(steps.getMilliseconds()); break;
            }
          }
          if (!val) val = 1;
          result[type] = val;
        });
        return result;
      }
    },

    data() {
      return {
        currentScrollbar: null
      };
    },

    watch: {
      mapping() {
        this.$nextTick(() => {
          this.bindScrollEvent();
        });
      }
    },

    mounted() {
      this.$nextTick(() => {
        this.bindScrollEvent();
      });
    },

    methods: {
      disabled(type, val) {
        var list = this.disabledList[type];
        return list ? list[val] : false;
      },

      currVal(type) {
        return this[type];
      },
      maxOfType(type) {
        return type === 'hour' ? 24 : type === 'millisecond' ? this.maxMillisecs : 60;
      },

      valToStr(type, value) {
        if (value === undefined) return '';
        var result = (type === 'hour' && this.mapping.isPm) ? (value = value % 12 || 12) + '' : value + '';
        var len = this.mapping[type][1] - this.mapping[type][0];
        while (result.length < len) result = '0' + result;
        if (type === 'hour') result += this.amPm(value);
        return result;
      },
      increase() {
        this.scrollDown(1);
      },

      decrease() {
        this.scrollDown(-1);
      },

      getModifedDate(type, value) {
        const modTime = (hours, mins, secs, millis) => {
          return modifyTime(this.date, hours, mins, secs, Math.round(millis * 1000 / this.maxMillisecs));
        };
        switch (type) {
          case 'hour': return modTime(value, this.minute, this.second, this.millisecond);
          case 'minute': return modTime(this.hour, value, this.second, this.millisecond);
          case 'second': return modTime(this.hour, this.minute, value, this.millisecond);
          case 'millisecond': return modTime(this.hour, this.minute, this.second, value);
        }
      },
      modifyDateField(type, value) {
        this.$emit('change', this.getModifedDate(type, value));
        this.$nextTick(_ => {this.emitSelectRange(type);});
      },
      getConvertedMs(millisecond, max) {
        return Math.round(millisecond / 1000 * (max || this.maxMillisecs));
      },
      getTypesList(type, ranges) {

        const getVal = (rDate, idx) => {
          var r_h = rDate.getHours();
          var r_m = rDate.getMinutes();
          var r_s = rDate.getSeconds();
          switch (type) {
            case 'hour':
              return r_h;
            case 'minute':
              return r_h === this.hour ? r_m : idx ? 59 : 0;
            case 'second':
              return (r_h === this.hour && r_m === this.minute) ? r_s : idx ? 59 : 0;
            case 'millisecond':
              let r_ms = this.getConvertedMs(rDate.getMilliseconds());
              let val = (r_h === this.hour && r_m === this.minute && r_s === this.second) ? r_ms : idx ? this.getConvertedMs(999) : 0;
              return val;
          };
        };

        const newArray = function(start, end) {
          let result = [];
          for (let i = start; i <= end; i++) {
            result.push(i);
          }
          return result;
        };

        const list = [];
        let enabled = [];

        (ranges || []).forEach(range => {
          const value = range.map(getVal);
          enabled = enabled.concat(newArray(value[0], value[1]));
        });
        if (enabled.length) {
          for (let i = 0; i < this.maxOfType(type); i++) {
            list[i] = enabled.indexOf(i) === -1;
          }
          return list;
        } else {
          if (this.arrowControl) return null;
          for (let i = 0; i < this.maxOfType(type); i++) {
            list.push(false);
          }
          return list;
        }
      },

      handleClick(type, {value, disabled}) {
        if (!disabled) {
          this.modifyDateField(type, value);
          this.adjustSpinner(type, value);
        }
      },

      emitSelectRange(type) {
        var map = this.mapping[type];
        if (map) {
          this.$emit('select-range', map[0], map[1]);
          this.currentScrollbar = type;
        }
      },

      bindScrollEvent() {
        if (this.arrowControl) {
          const isFirefox = typeof navigator !== 'undefined' && navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
          const eventName = isFirefox ? 'DOMMouseScroll' : 'mousewheel';
          this.mapping.order.forEach((type, idx) =>{
            this.el[type].addEventListener(eventName, this.handleMouseWheel, {passive: true});
          });
        } else {
          this.mapping.order.forEach((type, idx) =>{
            this.el[type].wrap.onscroll = (e) => {
              // TODO: scroll is emitted when set scrollTop programatically
              // should find better solutions in the future!
              this.handleScroll(type, e);
            };
          });
        }
      },

      handleMouseWheel(ev) {
        this.scrollDown(normalizeWheel(ev).spinY);
      },

      handleScroll(type) {
        const value = Math.min(Math.floor((this.el[type].wrap.scrollTop - (this.scrollBarHeight(type) * 0.5 - 10) / this.typeItemHeight(type) + 3) / this.typeItemHeight(type)), this.maxOfType(type) - 1);
        this.modifyDateField(type, value);
      },

      // NOTE: used by datetime / date-range panel
      //       renamed from adjustScrollTop
      //       should try to refactory it
      adjustSpinners() {
        this.mapping.order.forEach((type) => {
          this.adjustSpinner(type, this[type]);
        });
      },

      adjustSpinner(type, value) {
        if (!value) value = this[type];
        if (this.arrowControl) return;
        const el = this.el[type].wrap;
        if (el) {
          el.scrollTop = Math.max(0, value * this.typeItemHeight(type));
        }
      },

      scrollDown(step) {
        const nextVal = (type, val, step) => {
          let list = this.disabledList[type];
          let max = this.maxOfType(type);
          let len = max;
          let total = Math.abs(step);
          step = step > 0 ? this.numbSteps[type] : -this.numbSteps[type];
          while (len-- && total) {
            val = (val + step + max) % max;
            if (!list || !list[val]) {
              total--;
            }
          }
          return { val, disabled: list && list[val]};
        };

        const getNextDate = type => {
          let delta = step > 0 ? this.numbSteps[type] : -this.numbSteps[type];
          switch (type) {
            case 'hour': delta = delta * 60 * 60 * 1000;break;
            case 'minute': delta = delta * 60 * 1000;break;
            case 'second': delta = delta * 1000;break;
            case 'millisecond': delta = Math.round(delta * 1000 / this.maxMillisecs);
          }
          const day = this.date.getDate();
          let result = new Date(this.date.getTime() + delta);
          return result.getDate() === day ? result : step > 0 ? parseDate('23:59:59.999', 'HH:mm:ss:SSS') : parseDate('0', 'H');
        };

        if (!this.currentScrollbar) {
          this.emitSelectRange(this.mapping.order[0]);
        }
        let type = this.currentScrollbar;
        let prev = this[type];
        let now = nextVal(type, prev, step);

        if ((step > 0 && now.val < prev) || (step < 0 && now.val > prev) || prev === now.val) {
          const nextDate = limitTimeRange(getNextDate(type), this.selectableRange, this.format);
          if (nextDate.getTime() !== this.date.getTime()) {
            this.$emit('change', nextDate);
            this.$nextTick(_ => {
              this.emitSelectRange(type);
              this.adjustSpinners();
            });
          }
        } else {
          if (now.disabled) return;
          this.modifyDateField(type, now.val);
          this.adjustSpinner(type, now.val);
        }
      },

      amPm(hour) {
        var isPm = this.mapping.isPm;
        if (!isPm) return '';
        let content = (hour < 12) ? ' am' : ' pm';
        if (isPm[2] === 'A') content = content.toUpperCase();
        return content;
      },

      typeItemHeight(type) {
        return this.el[type].$el.querySelector('li').offsetHeight;
      },
      scrollBarHeight(type) {
        return this.el[type].$el.offsetHeight;
      }
    }
  };
</script>
