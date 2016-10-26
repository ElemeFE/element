<template>
  <div class="el-time-spinner">
    <div
      @mouseenter="emitSelectRange('hours')"
      @mousewheel="handleScroll('hour')"
      class="el-time-spinner__wrapper"
      ref="hour">
      <ul class="el-time-spinner__list">
        <li
          @click="handleClick('hours', { value: hour, disabled: disabled }, true)"
          v-for="(disabled, hour) in hoursList"
          track-by="hour"
          class="el-time-spinner__item"
          :class="{ 'active': hour === hours, 'disabled': disabled }"
          v-text="hour"></li>
      </ul>
    </div>
    <div
      @mouseenter="emitSelectRange('minutes')"
      @mousewheel="handleScroll('minute')"
      class="el-time-spinner__wrapper"
      ref="minute">
      <ul class="el-time-spinner__list">
        <li
          @click="handleClick('minutes', key, true)"
          v-for="(minute, key) in 60"
          class="el-time-spinner__item"
          :class="{ 'active': key === minutes }"
          v-text="key"></li>
      </ul>
    </div>
    <div
      v-show="showSeconds"
      @mouseenter="emitSelectRange('seconds')"
      @mousewheel="handleScroll('second')"
      class="el-time-spinner__wrapper"
      ref="second">
      <ul class="el-time-spinner__list">
        <li
          @click="handleClick('seconds', key, true)"
          v-for="(second, key) in 60"
          class="el-time-spinner__item"
          :class="{ 'active': key === seconds }"
          v-text="key"></li>
      </ul>
    </div>
  </div>
</template>

<script type="text/babel">
  import { getRangeHours } from '../util';

  export default {
    props: {
      hours: {
        type: Number,
        default: 0
      },

      minutes: {
        type: Number,
        default: 0
      },

      seconds: {
        type: Number,
        default: 0
      },

      showSeconds: {
        type: Boolean,
        default: true
      }
    },

    watch: {
      hoursPrivate(newVal, oldVal) {
        if (!(newVal >= 0 && newVal <= 23)) {
          this.hoursPrivate = oldVal;
        }
        this.$refs.hour.scrollTop = Math.max(0, (this.hoursPrivate - 2.5) * 32 + 80);
        this.$emit('change', { hours: newVal });
      },

      minutesPrivate(newVal, oldVal) {
        if (!(newVal >= 0 && newVal <= 59)) {
          this.minutesPrivate = oldVal;
        }
        this.$refs.minute.scrollTop = Math.max(0, (this.minutesPrivate - 2.5) * 32 + 80);
        this.$emit('change', { minutes: newVal });
      },

      secondsPrivate(newVal, oldVal) {
        if (!(newVal >= 0 && newVal <= 59)) {
          this.secondsPrivate = oldVal;
        }
        this.$refs.second.scrollTop = Math.max(0, (this.secondsPrivate - 2.5) * 32 + 80);
        this.$emit('change', { seconds: newVal });
      }
    },

    computed: {
      hoursList() {
        return getRangeHours(this.selectableRange);
      }
    },

    data() {
      return {
        hoursPrivate: 0,
        minutesPrivate: 0,
        secondsPrivate: 0,
        selectableRange: []
      };
    },

    methods: {
      handleClick(type, value, disabled) {
        if (value.disabled) {
          return;
        }

        this[type + 'Private'] = value.value >= 0 ? value.value : value;

        this.emitSelectRange(type);
      },

      emitSelectRange(type) {
        if (type === 'hours') {
          this.$emit('select-range', 0, 2);
        } else if (type === 'minutes') {
          this.$emit('select-range', 3, 5);
        } else if (type === 'seconds') {
          this.$emit('select-range', 6, 8);
        }
      },

      handleScroll(type) {
        const ajust = {};

        ajust[`${type}s`] = Math.min(Math.floor((this.$refs[type].scrollTop - 80) / 32 + 3), 59);
        this.$emit('change', ajust);
      },

      ajustScrollTop() {
        this.$refs.hour.scrollTop = Math.max(0, (this.hours - 2.5) * 32 + 80);
        this.$refs.minute.scrollTop = Math.max(0, (this.minutes - 2.5) * 32 + 80);
        this.$refs.second.scrollTop = Math.max(0, (this.seconds - 2.5) * 32 + 80);
      }
    }
  };
</script>
