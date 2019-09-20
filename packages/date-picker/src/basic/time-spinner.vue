<template>
  <div class="el-time-spinner" :class="{ 'has-seconds': showSeconds, 'has-am-pm': showAmPm }">
    <template v-if="!arrowControl">
      <el-scrollbar
        @mouseenter.native="emitSelectRange('hours')"
        @mousemove.native="adjustCurrentSpinner('hours')"
        class="el-time-spinner__wrapper"
        wrap-style="max-height: inherit;"
        view-class="el-time-spinner__list"
        noresize
        tag="ul"
        ref="hours">
        <li
          @click="handleClick('hours', { value: hour, disabled: disabled })"
          v-for="(disabled, hour) in hoursList"
          class="el-time-spinner__item"
          :key="hour"
          :class="{ 'active': hour === hours, 'disabled': disabled }">{{ ('0' + (twelveHourClock ? (hour % 12 || 12) : hour )).slice(-2) }}{{ getAmPm(hour, { prefix: ' ' }) }}</li>
      </el-scrollbar>
      <el-scrollbar
        @mouseenter.native="emitSelectRange('minutes')"
        @mousemove.native="adjustCurrentSpinner('minutes')"
        class="el-time-spinner__wrapper"
        wrap-style="max-height: inherit;"
        view-class="el-time-spinner__list"
        noresize
        tag="ul"
        ref="minutes">
        <li
          @click="handleClick('minutes', { value: key, disabled: false })"
          v-for="(enabled, key) in minutesList"
          :key="key"
          class="el-time-spinner__item"
          :class="{ 'active': key === minutes, disabled: !enabled }">{{ ('0' + key).slice(-2) }}</li>
      </el-scrollbar>
      <el-scrollbar
        v-show="showSeconds"
        @mouseenter.native="emitSelectRange('seconds')"
        @mousemove.native="adjustCurrentSpinner('seconds')"
        class="el-time-spinner__wrapper"
        wrap-style="max-height: inherit;"
        view-class="el-time-spinner__list"
        noresize
        tag="ul"
        ref="seconds">
        <li
          @click="handleClick('seconds', { value: key, disabled: false })"
          v-for="(second, key) in 60"
          class="el-time-spinner__item"
          :class="{ 'active': key === seconds }"
          :key="key">{{ ('0' + key).slice(-2) }}</li>
      </el-scrollbar>
      <el-scrollbar
        v-show="showAmPm"
        @mouseenter.native="emitSelectRange('amPm')"
        @mousemove.native="adjustCurrentSpinner('amPm')"
        class="el-time-spinner__wrapper"
        wrap-style="max-height: inherit;"
        view-class="el-time-spinner__list"
        noresize
        tag="ul"
        ref="amPm">
        <li
          @click="handleClick('amPm', { value: key, disabled: false })"
          v-for="(value, key) in amPmList"
          class="el-time-spinner__item"
          :class="{ 'active': key === amPm }"
          :key="key">{{ key ? getAmPm(12) : getAmPm(0) }}</li>
      </el-scrollbar>
    </template>
    <template v-if="arrowControl">
      <div
        @mouseenter="emitSelectRange('hours')"
        class="el-time-spinner__wrapper is-arrow">
        <i v-repeat-click="decrease" class="el-time-spinner__arrow el-icon-arrow-up"></i>
        <i v-repeat-click="increase" class="el-time-spinner__arrow el-icon-arrow-down"></i>
        <ul class="el-time-spinner__list" ref="hours">
          <li
            class="el-time-spinner__item"
            :class="{ 'active': hour === hours, 'disabled': hoursList[hour] }"
            v-for="(hour, key) in arrowHourList"
            :key="key">{{ hour === undefined ? '' : ('0' + (twelveHourClock ? (hour % 12 || 12) : hour )).slice(-2) + (showAmPm ? '' : getAmPm(hour, { prefix: ' ' })) }}</li>
        </ul>
      </div>
      <div
        @mouseenter="emitSelectRange('minutes')"
        class="el-time-spinner__wrapper is-arrow">
        <i v-repeat-click="decrease" class="el-time-spinner__arrow el-icon-arrow-up"></i>
        <i v-repeat-click="increase" class="el-time-spinner__arrow el-icon-arrow-down"></i>
        <ul class="el-time-spinner__list" ref="minutes">
          <li
            class="el-time-spinner__item"
            :class="{ 'active': minute === minutes }"
            v-for="(minute, key) in arrowMinuteList"
            :key="key">
            {{ minute === undefined ? '' : ('0' + minute).slice(-2) }}
          </li>
        </ul>
      </div>
      <div
        @mouseenter="emitSelectRange('seconds')"
        class="el-time-spinner__wrapper is-arrow"
        v-if="showSeconds">
        <i v-repeat-click="decrease" class="el-time-spinner__arrow el-icon-arrow-up"></i>
        <i v-repeat-click="increase" class="el-time-spinner__arrow el-icon-arrow-down"></i>
        <ul class="el-time-spinner__list" ref="seconds">
          <li
            v-for="(second, key) in arrowSecondList"
            class="el-time-spinner__item"
            :class="{ 'active': second === seconds }"
            :key="key">
            {{ second === undefined ? '' : ('0' + second).slice(-2) }}
          </li>
        </ul>
      </div>
      <div
        @mouseenter="emitSelectRange('amPm')"
        class="el-time-spinner__wrapper is-arrow"
        v-if="showAmPm">
        <i v-repeat-click="decrease" class="el-time-spinner__arrow el-icon-arrow-up"></i>
        <i v-repeat-click="increase" class="el-time-spinner__arrow el-icon-arrow-down"></i>
        <ul class="el-time-spinner__list" ref="amPm">
          <li
            v-for="(amOrPm, key) in arrowAmPmList"
            class="el-time-spinner__item"
            :class="{ 'active': amOrPm === amPm }"
            :key="key">
            {{ amOrPm === undefined ? '' : (amOrPm ? getAmPm(12) : getAmPm(0)) }}
          </li>
        </ul>
      </div>
    </template>
  </div>
</template>

<script type="text/babel">
  import { getRangeHours, getRangeMinutes, modifyTime } from 'element-ui/src/utils/date-util';
  import ElScrollbar from 'element-ui/packages/scrollbar';
  import RepeatClick from 'element-ui/src/directives/repeat-click';

  export default {
    components: { ElScrollbar },

    directives: {
      repeatClick: RepeatClick
    },

    props: {
      date: {},
      defaultValue: {}, // reserved for future use
      showSeconds: {
        type: Boolean,
        default: true
      },
      showAmPm: {
        type: Boolean,
        default: false
      },
      arrowControl: Boolean,
      amPmMode: {
        type: String,
        default: '' // 'a': am/pm; 'A': AM/PM
      },
      twelveHourClock: Boolean,
      zeroPadHour: Boolean
    },

    computed: {
      hours() {
        return this.date.getHours();
      },
      minutes() {
        return this.date.getMinutes();
      },
      seconds() {
        return this.date.getSeconds();
      },
      amPm() {
        return this.date.getHours() >= 12 ? 1 : 0;
      },
      hoursList() {
        return getRangeHours(this.selectableRange);
      },
      minutesList() {
        return getRangeMinutes(this.selectableRange, this.hours);
      },
      amPmList() {
        return [0, 1];
      },
      arrowHourList() {
        const hours = this.hours;
        // Only show 12 hours if toggling AM/PM
        const minHour = this.showAmPm ? (this.amPm ? 12 : 0) : 0;
        const maxHour = this.showAmPm ? (this.amPm ? 23 : 11) : 23;
        return [
          hours > minHour ? hours - 1 : undefined,
          hours,
          hours < maxHour ? hours + 1 : undefined
        ];
      },
      arrowMinuteList() {
        const minutes = this.minutes;
        return [
          minutes > 0 ? minutes - 1 : undefined,
          minutes,
          minutes < 59 ? minutes + 1 : undefined
        ];
      },
      arrowSecondList() {
        const seconds = this.seconds;
        return [
          seconds > 0 ? seconds - 1 : undefined,
          seconds,
          seconds < 59 ? seconds + 1 : undefined
        ];
      },
      arrowAmPmList() {
        var list = this.amPmMode ? [0, 1] : [];
        // Since there are only two options for AM/PM, prepend or append
        // a blank option depending on what is currently selected
        if (list.length) {
          if (this.amPm) {
            list.push(undefined);
          } else {
            list.splice(0, 0, undefined);
          }
        }
        return list;
      }
    },

    data() {
      return {
        selectableRange: [],
        currentScrollbar: null
      };
    },

    mounted() {
      this.$nextTick(() => {
        !this.arrowControl && this.bindScrollEvent();
      });
    },

    methods: {
      increase() {
        this.scrollDown(1);
      },

      decrease() {
        this.scrollDown(-1);
      },

      modifyDateField(type, value) {
        switch (type) {
          case 'hours': this.$emit('change', modifyTime(this.date, value, this.minutes, this.seconds)); break;
          case 'minutes': this.$emit('change', modifyTime(this.date, this.hours, value, this.seconds)); break;
          case 'seconds': this.$emit('change', modifyTime(this.date, this.hours, this.minutes, value)); break;
          case 'amPm': this.$emit('change', modifyTime(this.date, this.hours % 12 + (value ? 12 : 0), this.minutes, this.seconds)); break;
        }
      },

      handleClick(type, {value, disabled}) {
        if (!disabled) {
          this.modifyDateField(type, value);
          this.emitSelectRange(type);
          this.adjustSpinner(type, value);
        }
      },

      emitSelectRange(type) {
        const hoursLen = !this.zeroPadHour && (this.twelveHourClock ? (this.date.getHours() % 12 || 12) : this.date.getHours()) < 10 ? 1 : 2;
        const secondsOffset = this.showSeconds ? 3 : 0;
        if (type === 'hours') {
          this.$emit('select-range', 0, hoursLen);
        } else if (type === 'minutes') {
          this.$emit('select-range', 3 - (2 - hoursLen), 5 - (2 - hoursLen));
        } else if (type === 'seconds') {
          this.$emit('select-range', 6 - (2 - hoursLen), 8 - (2 - hoursLen));
        } else if (type === 'amPm') {
          this.$emit('select-range', 6 + secondsOffset - (2 - hoursLen), 8 + secondsOffset - (2 - hoursLen));
        }
        this.currentScrollbar = type;
      },

      bindScrollEvent() {
        const bindFuntion = (type) => {
          this.$refs[type].wrap.onscroll = (e) => {
            // TODO: scroll is emitted when set scrollTop programatically
            // should find better solutions in the future!
            this.handleScroll(type, e);
          };
        };
        bindFuntion('hours');
        bindFuntion('minutes');
        bindFuntion('seconds');
        bindFuntion('amPm');
      },

      handleScroll(type) {
        const value = Math.min(Math.round((this.$refs[type].wrap.scrollTop - (this.scrollBarHeight(type) * 0.5 - 10) / this.typeItemHeight(type) + 3) / this.typeItemHeight(type)), (type === 'hours' ? 23 : 59));
        this.modifyDateField(type, value);
      },

      // NOTE: used by datetime / date-range panel
      //       renamed from adjustScrollTop
      //       should try to refactory it
      adjustSpinners() {
        this.adjustSpinner('hours', this.hours);
        this.adjustSpinner('minutes', this.minutes);
        this.adjustSpinner('seconds', this.seconds);
        this.adjustSpinner('amPm', this.amPm);
      },

      adjustCurrentSpinner(type) {
        this.adjustSpinner(type, this[type]);
      },

      adjustSpinner(type, value) {
        if (this.arrowControl) return;
        const el = this.$refs[type].wrap;
        if (el) {
          el.scrollTop = Math.max(0, value * this.typeItemHeight(type));
        }
      },

      scrollDown(step) {
        if (!this.currentScrollbar) {
          this.emitSelectRange('hours');
        }

        var label = this.currentScrollbar;
        const hoursList = this.hoursList;
        let now = this[label];

        if (label === 'amPm') {
          if (now === 0) {
            step = 12;
            label = 'hours';
            now = this.hours;
          } else if (now === 1) {
            step = -12;
            label = 'hours';
            now = this.hours;
          } else {
            return;
          }
        }

        if (label === 'hours') {
          let total = Math.abs(step);
          step = step > 0 ? 1 : -1;
          let length = hoursList.length;
          while (length-- && total) {
            now = (now + step + hoursList.length) % hoursList.length;
            if (hoursList[now]) {
              continue;
            }
            total--;
          }
          if (hoursList[now]) return;
        } else {
          now = (now + step + 60) % 60;
        }

        this.modifyDateField(label, now);
        this.adjustSpinner(label, now);
        this.$nextTick(() => this.emitSelectRange(this.currentScrollbar));
      },
      getAmPm(hour, options) {
        const prefix = options && typeof options.prefix === 'string' ? options.prefix : '';
        let shouldShowAmPm = this.amPmMode.toLowerCase() === 'a';
        if (!shouldShowAmPm) return '';
        let isCapital = this.amPmMode === 'A';
        let content = (hour < 12) ? 'am' : 'pm';
        if (isCapital) content = content.toUpperCase();
        return prefix + content;
      },
      typeItemHeight(type) {
        return this.$refs[type].$el.querySelector('li').offsetHeight;
      },
      scrollBarHeight(type) {
        return this.$refs[type].$el.offsetHeight;
      }
    }
  };
</script>
