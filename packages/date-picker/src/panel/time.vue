<template>
  <transition name="md-fade-bottom">
    <div
      v-show="visible"
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
          class="el-time-panel__btn cancel"
          @click="handleCancel()">取消</button>
        <button
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

      visible: false
    },

    watch: {
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
        selectableRange: []
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
        const date = new Date(limitRange(this.date, this.selectableRange));

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
      !this.date && Vue.set(this, 'date', new Date());
      !this.visible && Vue.set(this, 'visible', false);

      this.hours = this.date.getHours();
      this.minutes = this.date.getMinutes();
      this.seconds = this.date.getSeconds();
    },

    mounted() {
      this.$nextTick(() => this.handleConfirm(true, true));
    }
  };
</script>
