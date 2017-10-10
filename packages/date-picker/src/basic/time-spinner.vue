<template>
  <div class="el-time-spinner" :class="{ 'has-seconds': showSeconds }">
    <el-scrollbar
      @mouseenter.native="emitSelectRange('hours')"
      class="el-time-spinner__wrapper"
      wrap-style="max-height: inherit;"
      view-class="el-time-spinner__list"
      noresize
      tag="ul"
      ref="hours">
      <li
        @click="handleClick('hours', { value: hour, disabled: disabled })"
        v-for="(disabled, hour) in hoursList"
        track-by="hour"
        class="el-time-spinner__item"
        :class="{ 'active': hour === hours, 'disabled': disabled }">{{ ('0' + hour).slice(-2) }}</li>
    </el-scrollbar>
    <el-scrollbar
      @mouseenter.native="emitSelectRange('minutes')"
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
  </div>
</template>

<script type="text/babel">
  import { getRangeHours, modifyTime } from '../util';
  import ElScrollbar from 'element-ui/packages/scrollbar';

  export default {
    components: { ElScrollbar },

    props: {
      date: {},
      defaultValue: {},  // reserved for future use
      showSeconds: {
        type: Boolean,
        default: true
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
        this.bindScrollEvent();
      });
    },

    methods: {
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
          this.adjustSpinner('minutes', this.minutes);
          this.adjustSpinner('seconds', this.seconds);
        } else if (type === 'minutes') {
          this.$emit('select-range', 3, 5);
          this.adjustSpinner('hours', this.hours);
          this.adjustSpinner('seconds', this.seconds);
        } else if (type === 'seconds') {
          this.$emit('select-range', 6, 8);
          this.adjustSpinner('minutes', this.minutes);
          this.adjustSpinner('hours', this.hours);
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

      adjustSpinner(type, value) {
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
      }
    }
  };
</script>
