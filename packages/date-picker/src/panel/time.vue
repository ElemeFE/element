<template>
  <div
    v-show="visible"
    transition="md-fade-bottom"
    class="el-time-panel">
    <div class="el-time-panel__content">
      <time-spinner
        ref="spinner"
        @change="handleChange"
        :show-seconds="showSeconds"
        @select-range="setSelectionRange"
        :hours="hours"
        :minutes="minutes"
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

    data() {
      return {
        date: new Date(),
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    },

    computed: {
      showSeconds() {
        return (this.format || '').indexOf('ss') !== -1;
      }
    },

    methods: {
      handleCancel() {
        this.$emit('pick', null);
      },

      handleChange(date) {
        if (date.hours !== undefined) {
          this.date.setHours(date.hours);
          this.hours = this.date.getHours();
        }
        if (date.minutes !== undefined) {
          this.date.setMinutes(date.minutes);
          this.minutes = this.date.getMinutes();
        }
        if (date.seconds !== undefined) {
          this.date.setSeconds(date.seconds);
          this.seconds = this.date.getSeconds();
        }

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

    created() {
      this.hours = this.date.getHours();
      this.minutes = this.date.getMinutes();
      this.seconds = this.date.getSeconds();
    },

    mounted() {
      this.$refs.spinner.selectableRange = this.selectableRange;
      this.$nextTick(() => this.handleConfirm(true, true));
    }
  };
</script>
