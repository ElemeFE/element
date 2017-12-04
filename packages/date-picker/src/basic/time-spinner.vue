<template>
  <div class="el-time-spinner" :class="{ 'has-seconds': showSeconds }">
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
          :class="{ 'active': hour === hours, 'disabled': disabled }">{{ ('0' + (amPmMode ? (hour % 12 || 12) : hour )).slice(-2) }}{{ amPm(hour) }}</li>
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
          v-for="(minute, key) in 60"
          class="el-time-spinner__item"
          :class="{ 'active': key === minutes }">{{ ('0' + key).slice(-2) }}</li>
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
          :class="{ 'active': key === seconds }">{{ ('0' + key).slice(-2) }}</li>
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
            v-for="hour in arrowHourList">{{ hour === undefined ? '' : ('0' + (amPmMode ? (hour % 12 || 12) : hour )).slice(-2) + amPm(hour) }}</li>
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
            v-for="minute in arrowMinuteList">
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
            class="el-time-spinner__item"
            :class="{ 'active': second === seconds }"
            v-for="second in arrowSecondList">
            {{ second === undefined ? '' : ('0' + second).slice(-2) }}
          </li>
        </ul>
      </div>
    </template>
  </div>
</template>

<script type="text/babel">
  import { getRangeHours, modifyTime } from '../util';
  import ElScrollbar from 'element-ui/packages/scrollbar';
  import RepeatClick from 'element-ui/src/directives/repeat-click';

  export default {
    components: { ElScrollbar },

    directives: {
      repeatClick: RepeatClick
    },

    props: {
      date: {},
      defaultValue: {},  // reserved for future use
      showSeconds: {
        type: Boolean,
        default: true
      },
      arrowControl: Boolean,
      amPmMode: {
        type: String,
        default: '' // 'a': am/pm; 'A': AM/PM
      }
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
      hoursList() {
        return getRangeHours(this.selectableRange);
      },
      arrowHourList() {
        const hours = this.hours;
        return [
          hours > 0 ? hours - 1 : undefined,
          hours,
          hours < 23 ? hours + 1 : undefined
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
        if (type === 'hours') {
          this.$emit('select-range', 0, 2);
        } else if (type === 'minutes') {
          this.$emit('select-range', 3, 5);
        } else if (type === 'seconds') {
          this.$emit('select-range', 6, 8);
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
      },

      handleScroll(type) {
        const value = Math.min(Math.floor((this.$refs[type].wrap.scrollTop - 80) / 32 + 3), (type === 'hours' ? 23 : 59));
        this.modifyDateField(type, value);
      },

      // NOTE: used by datetime / date-range panel
      //       renamed from adjustScrollTop
      //       should try to refactory it
      adjustSpinners() {
        this.adjustSpinner('hours', this.hours);
        this.adjustSpinner('minutes', this.minutes);
        this.adjustSpinner('seconds', this.seconds);
      },

      adjustCurrentSpinner(type) {
        this.adjustSpinner(type, this[type]);
      },

      adjustSpinner(type, value) {
        if (this.arrowControl) return;
        const el = this.$refs[type].wrap;
        if (el) {
          el.scrollTop = Math.max(0, (value - 2.5) * 32 + 80);
        }
      },

      scrollDown(step) {
        if (!this.currentScrollbar) {
          this.emitSelectRange('hours');
        }

        const label = this.currentScrollbar;
        const hoursList = this.hoursList;
        let now = this[label];

        if (this.currentScrollbar === 'hours') {
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
      },
      amPm(hour) {
        let shouldShowAmPm = this.amPmMode.toLowerCase() === 'a';
        if (!shouldShowAmPm) return '';
        let isCapital = this.amPmMode === 'A';
        let content = (hour < 12) ? ' am' : ' pm';
        if (isCapital) content = content.toUpperCase();
        return content;
      }
    }
  };
</script>
