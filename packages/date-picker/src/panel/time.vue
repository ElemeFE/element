<template>
  <div
    v-show="visible"
    transition="md-fade-bottom"
    class="el-time-panel">
    <div class="el-time-panel__content">
      <time-spinner
        v-ref:spinner
        @change="handleChange"
        :show-seconds="showSeconds"
        :hours="hours"
        :minutes="minutes"
        @select-range="setSelectionRange"
        :seconds="seconds">
      </time-spinner>
    </div>
    <div class="el-time-panel__footer">
      <button
        class="el-time-panel__btn
        cancel" @click="handleCancel()">取消</button>
      <button
        class="el-time-panel__btn confirm"
        @click="handleConfirm()">确定</button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { limitRange } from '../util';

  export default {
    components: {
      TimeSpinner: require('../basic/time-spinner')
    },

    props: {
      date: {
        default() {
          return new Date();
        }
      },

      format: {
        default: 'HH:mm:ss'
      },

      value: {},

      visible: Boolean,

      selectableRange: {}
    },

    watch: {
      value(newVal) {
        if (newVal instanceof Date) {
          this.date = newVal;
        } else if (!newVal) {
          this.date = new Date();
        }
      }
    },

    computed: {
      showSeconds() {
        return (this.format || '').indexOf('ss') !== -1;
      },

      hours: {
        get() {
          if (this.date) {
            return this.date.getHours();
          }
          return 0;
        },
        set(hours) {
          if (this.date) {
            this.date.setHours(hours);
          }
        }
      },

      minutes: {
        get() {
          if (this.date) {
            return this.date.getMinutes();
          }
          return 0;
        },
        set(minutes) {
          if (this.date) {
            this.date.setMinutes(minutes);
          }
        }
      },

      seconds: {
        get() {
          if (this.date) {
            return this.date.getSeconds();
          }
          return 0;
        },
        set(seconds) {
          if (this.date) {
            this.date.setSeconds(seconds);
          }
        }
      }
    },

    methods: {
      handleCancel() {
        this.$emit('pick', null);
      },

      handleChange(date) {
        if (date.hours !== undefined) this.hours = date.hours;
        if (date.minutes !== undefined) this.minutes = date.minutes;
        if (date.seconds !== undefined) this.seconds = date.seconds;
        this.handleConfirm(true);
      },

      setSelectionRange(start, end) {
        this.$emit('select-range', start, end);
      },

      handleConfirm(visible = false, first) {
        const spinner = this.$refs.spinner;
        let date = new Date();

        const { hours, minutes, seconds } = spinner;
        date.setHours(hours);
        date.setMinutes(minutes);
        date.setSeconds(seconds);

        this.date = date = limitRange(date, this.selectableRange);
        this.$emit('pick', date, visible, first);
      },

      focusEditor(...args) {
        return this.$refs.spinner.focusEditor(...args);
      },

      ajustScrollTop() {
        return this.$refs.spinner.ajustScrollTop();
      }
    },

    ready() {
      this.$refs.spinner.selectableRange = this.selectableRange;
      this.$nextTick(() => this.handleConfirm(true, true));
    }
  };
</script>
