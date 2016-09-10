<template>
  <transition name="md-fade-bottom">
    <div
      v-show="currentVisible"
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
          type="button"
          class="el-time-panel__btn cancel"
          @click="handleCancel()">取消</button>
        <button
          type="button"
          class="el-time-panel__btn confirm"
          @click="handleConfirm()">确定</button>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import { limitRange } from '../util';
  import Vue from 'vue';

  export default {
    components: {
      TimeSpinner: require('../basic/time-spinner')
    },

    props: {
      date: {
        default: new Date()
      },

      visible: Boolean
    },

    watch: {
      visible(val) {
        this.currentVisible = val;
      },

      value(newVal) {
        let date;
        if (newVal instanceof Date) {
          date = limitRange(newVal, this.selectableRange);
        } else if (!newVal) {
          date = new Date();
        }

        this.hours = date.getHours();
        this.minutes = date.getMinutes();
        this.seconds = date.getSeconds();
        this.handleConfirm(true);
      },

      selectableRange(val) {
        this.$refs.spinner.selectableRange = val;
      }
    },

    data() {
      return {
        format: 'HH:mm:ss',
        value: '',
        hours: 0,
        minutes: 0,
        seconds: 0,
        selectableRange: [],
        currentDate: this.$options.defaultValue || this.date,
        currentVisible: this.visible
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
          this.currentDate.setHours(date.hours);
          this.hours = this.currentDate.getHours();
        }
        if (date.minutes !== undefined) {
          this.currentDate.setMinutes(date.minutes);
          this.minutes = this.currentDate.getMinutes();
        }
        if (date.seconds !== undefined) {
          this.currentDate.setSeconds(date.seconds);
          this.seconds = this.currentDate.getSeconds();
        }

        this.handleConfirm(true);
      },

      setSelectionRange(start, end) {
        this.$emit('select-range', start, end);
      },

      handleConfirm(visible = false, first) {
        const date = new Date(limitRange(this.currentDate, this.selectableRange));

        this.$emit('pick', date, visible, first);
      },

      focusEditor(val) {
        return this.$refs.spinner.focusEditor(val);
      },

      ajustScrollTop() {
        return this.$refs.spinner.ajustScrollTop();
      }
    },

    created() {
      !this.currentDate && Vue.set(this, 'currentDate', new Date());
      !this.currentVisible && Vue.set(this, 'currentVisible', false);

      this.hours = this.currentDate.getHours();
      this.minutes = this.currentDate.getMinutes();
      this.seconds = this.currentDate.getSeconds();
    },

    mounted() {
      this.$nextTick(() => this.handleConfirm(true, true));
    }
  };
</script>
