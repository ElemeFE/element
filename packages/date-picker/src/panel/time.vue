<template>
  <transition name="el-zoom-in-top" @after-leave="$emit('dodestroy')">
    <div
      v-show="currentVisible"
      class="el-time-panel el-popper"
      :class="popperClass">
      <div class="el-time-panel__content" :class="{ 'has-seconds': showSeconds }">
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
          @click="handleCancel">{{ t('el.datepicker.cancel') }}</button>
        <button
          type="button"
          class="el-time-panel__btn"
          :class="{confirm: !disabled}"
          @click="handleConfirm()">{{ t('el.datepicker.confirm') }}</button>
      </div>
    </div>
  </transition>
</template>

<script type="text/babel">
  import { limitRange } from '../util';
  import Locale from 'element-ui/src/mixins/locale';

  export default {
    mixins: [Locale],

    components: {
      TimeSpinner: require('../basic/time-spinner')
    },

    props: {
      date: {
        default() {
          return new Date();
        }
      },
      visible: Boolean
    },

    watch: {
      visible(val) {
        this.currentVisible = val;
        if (val) {
          this.oldHours = this.hours;
          this.oldMinutes = this.minutes;
          this.oldSeconds = this.seconds;
          this.$nextTick(() => this.$refs.spinner.emitSelectRange('hours'));
        }
      },

      value(newVal) {
        let date;
        if (newVal instanceof Date) {
          date = limitRange(newVal, this.selectableRange);
        } else if (!newVal) {
          date = new Date();
        }

        this.handleChange({
          hours: date.getHours(),
          minutes: date.getMinutes(),
          seconds: date.getSeconds()
        }, true);
        this.$nextTick(_ => this.adjustScrollTop());
      },

      selectableRange(val) {
        this.$refs.spinner.selectableRange = val;
      },

      date(val) {
        if (!val) return;
        this.currentDate = val;
        this.reinitDate();
      }
    },

    data() {
      return {
        popperClass: '',
        format: 'HH:mm:ss',
        value: '',
        hours: 0,
        minutes: 0,
        seconds: 0,
        oldHours: 0,
        oldMinutes: 0,
        oldSeconds: 0,
        selectableRange: [],
        currentDate: this.$options.defaultValue || this.date || new Date(),
        currentVisible: this.visible || false,
        selectionRange: [0, 2],
        disabled: false
      };
    },

    computed: {
      showSeconds() {
        return (this.format || '').indexOf('ss') !== -1;
      }
    },

    methods: {
      handleClear() {
        this.$emit('pick', '', false, true);
      },

      handleCancel() {
        this.currentDate.setHours(this.oldHours);
        this.currentDate.setMinutes(this.oldMinutes);
        this.currentDate.setSeconds(this.oldSeconds);
        this.hours = this.currentDate.getHours();
        this.minutes = this.currentDate.getMinutes();
        this.seconds = this.currentDate.getSeconds();
        const date = new Date(limitRange(this.currentDate, this.selectableRange, 'HH:mm:ss'));
        this.$emit('pick', date, false, true);
      },

      handleChange(date, notUser) {
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
        this.handleConfirm(true, null, notUser);
      },

      setSelectionRange(start, end) {
        this.$emit('select-range', start, end);
        this.selectionRange = [start, end];
      },

      handleConfirm(visible = false, first, notUser = false) {
        if (first) return;
        const date = new Date(limitRange(this.currentDate, this.selectableRange, 'HH:mm:ss'));
        this.$emit('pick', date, visible, !notUser, false);
      },

      adjustScrollTop() {
        return this.$refs.spinner.adjustScrollTop();
      },

      scrollDown(step) {
        this.$refs.spinner.scrollDown(step);
      },

      changeSelectionRange(step) {
        const list = [0, 3].concat(this.showSeconds ? [6] : []);
        const mapping = ['hours', 'minutes'].concat(this.showSeconds ? ['seconds'] : []);
        const index = list.indexOf(this.selectionRange[0]);
        const next = (index + step + list.length) % list.length;
        this.$refs.spinner.emitSelectRange(mapping[next]);
      },

      reinitDate() {
        this.hours = this.currentDate.getHours();
        this.minutes = this.currentDate.getMinutes();
        this.seconds = this.currentDate.getSeconds();
      }
    },

    created() {
      this.reinitDate();
    },

    mounted() {
      this.$nextTick(() => this.handleConfirm(true, true));
      this.$emit('mounted');
    }
  };
</script>
