<template>
  <div
    @mouseenter="emitSelectRange('hours')"
    class="el-time-spinner__wrapper"
    v-el:hour>
    <ul class="el-time-spinner__list">
      <li
        @click="handleClick('hours', { value: hour, disabled: disabled }, true)"
        v-for="(hour, disabled) in hoursList"
        track-by="$index"
        class="el-time-spinner__item"
        :class="{ 'active': hour === hours, 'disabled': disabled }"
        v-text="hour"></li>
    </ul>
  </div>
  <div
    @mouseenter="emitSelectRange('minutes')"
    class="el-time-spinner__wrapper"
    v-el:minute>
    <ul class="el-time-spinner__list">
      <li
        @click="handleClick('minutes', minute, true)"
        v-for="minute in 60"
        class="el-time-spinner__item"
        :class="{ 'active': minute === minutes }"
        v-text="minute"></li>
    </ul>
  </div>
  <div
    @mouseenter="emitSelectRange('seconds')"
    class="el-time-spinner__wrapper"
    v-el:second>
    <ul class="el-time-spinner__list">
      <li
        @click="handleClick('seconds', second, true)"
        v-for="second in 60"
        class="el-time-spinner__item"
        :class="{ 'active': second === seconds }"
        v-text="second"></li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
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
      },

      selectableRange: {}
    },

    watch: {
      hours(newVal, oldVal) {
        if (!(newVal >= 0 && newVal <= 23)) {
          this.hours = oldVal;
        }
        this.$els.hour.scrollTop = Math.max(0, (this.hours - 2.5) * 32 + 80);
        this.$emit('change', { hours: newVal });
      },

      minutes(newVal, oldVal) {
        if (!(newVal >= 0 && newVal <= 59)) {
          this.minutes = oldVal;
        }
        this.$els.minute.scrollTop = Math.max(0, (this.minutes - 2.5) * 32 + 80);
        this.$emit('change', { minutes: newVal });
      },

      seconds(newVal, oldVal) {
        if (!(newVal >= 0 && newVal <= 59)) {
          this.seconds = oldVal;
        }
        this.$els.second.scrollTop = Math.max(0, (this.seconds - 2.5) * 32 + 80);
        this.$emit('change', { seconds: newVal });
      }
    },

    computed: {
      hoursList() {
        return getRangeHours(this.selectableRange);
      }
    },

    methods: {
      focusEditor(type) {
        const editor = this.$els[type + 'Editor'];
        if (editor) {
          editor.focus();
        }
      },

      handleClick(type, value, disabled) {
        if (value.disabled) {
          return;
        }

        this[type] = value.value >= 0 ? value.value : value;

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

      ajustScrollTop() {
        this.$els.hour.scrollTop = Math.max(0, (this.hours - 2.5) * 32 + 80);
        this.$els.minute.scrollTop = Math.max(0, (this.minutes - 2.5) * 32 + 80);
        this.$els.second.scrollTop = Math.max(0, (this.seconds - 2.5) * 32 + 80);
      }
    }
  };
</script>
