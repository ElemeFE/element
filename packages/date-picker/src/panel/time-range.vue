<template>
  <transition
    name="el-zoom-in-top"
    @before-enter="panelCreated"
    @after-leave="$emit('dodestroy')">
    <div
      v-show="visible"
      :style="{ width: width + 'px' }"
      class="el-time-range-picker el-picker-panel el-popper"
      :class="popperClass">
      <div class="el-time-range-picker__content">
        <div class="el-time-range-picker__cell">
          <div class="el-time-range-picker__header">{{ t('el.datepicker.startTime') }}</div>
          <div
            :class="{ 'has-seconds': showSeconds }"
            class="el-time-range-picker__body el-time-panel__content">
            <time-spinner
              ref="minSpinner"
              :show-seconds="showSeconds"
              @change="handleMinChange"
              @select-range="setMinSelectionRange"
              :hours="minHours"
              :minutes="minMinutes"
              :seconds="minSeconds">
            </time-spinner>
          </div>
        </div>
        <div class="el-time-range-picker__cell">
          <div class="el-time-range-picker__header">{{ t('el.datepicker.endTime') }}</div>
          <div
            :class="{ 'has-seconds': showSeconds }"
            class="el-time-range-picker__body el-time-panel__content">
            <time-spinner
              ref="maxSpinner"
              :show-seconds="showSeconds"
              @change="handleMaxChange"
              @select-range="setMaxSelectionRange"
              :hours="maxHours"
              :minutes="maxMinutes"
              :seconds="maxSeconds">
            </time-spinner>
          </div>
        </div>
      </div>
      <div class="el-time-panel__footer">
        <button
          type="button"
          class="el-time-panel__btn cancel"
          @click="handleCancel()">{{ t('el.datepicker.cancel') }}</button>
        <button
          type="button"
          class="el-time-panel__btn confirm"
          @click="handleConfirm()"
          :disabled="btnDisabled">{{ t('el.datepicker.confirm') }}</button>
      </div>
    </div>
  </transition>
</template>

<script type="text/babel">
  import { parseDate, limitRange } from '../util';
  import Locale from 'element-ui/src/mixins/locale';
  import TimeSpinner from '../basic/time-spinner';

  const MIN_TIME = parseDate('00:00:00', 'HH:mm:ss');
  const MAX_TIME = parseDate('23:59:59', 'HH:mm:ss');
  const isDisabled = function(minTime, maxTime) {
    const minValue = minTime.getHours() * 3600 + minTime.getMinutes() * 60 + minTime.getSeconds();
    const maxValue = maxTime.getHours() * 3600 + maxTime.getMinutes() * 60 + maxTime.getSeconds();

    return minValue > maxValue;
  };
  const clacTime = function(time) {
    time = Array.isArray(time) ? time : [time];
    const minTime = time[0] || new Date();
    const date = new Date();
    date.setHours(date.getHours() + 1);
    const maxTime = time[1] || date;

    if (minTime > maxTime) return clacTime();
    return { minTime, maxTime };
  };

  export default {
    mixins: [Locale],

    components: { TimeSpinner },

    computed: {
      showSeconds() {
        return (this.format || '').indexOf('ss') !== -1;
      },

      offset() {
        return this.showSeconds ? 11 : 8;
      },

      spinner() {
        return this.selectionRange[0] < this.offset ? this.$refs.minSpinner : this.$refs.maxSpinner;
      }
    },

    props: ['value'],

    data() {
      const time = clacTime(this.$options.defaultValue);

      return {
        popperClass: '',
        minTime: time.minTime,
        maxTime: time.maxTime,
        btnDisabled: isDisabled(time.minTime, time.maxTime),
        maxHours: time.maxTime.getHours(),
        maxMinutes: time.maxTime.getMinutes(),
        maxSeconds: time.maxTime.getSeconds(),
        minHours: time.minTime.getHours(),
        minMinutes: time.minTime.getMinutes(),
        minSeconds: time.minTime.getSeconds(),
        format: 'HH:mm:ss',
        visible: false,
        width: 0,
        selectionRange: [0, 2]
      };
    },

    watch: {
      value(newVal) {
        this.panelCreated();
        this.$nextTick(_ => this.adjustScrollTop());
      },

      visible(val) {
        if (val) {
          this.$nextTick(() => this.$refs.minSpinner.emitSelectRange('hours'));
        }
      }
    },

    methods: {
      panelCreated() {
        const time = clacTime(this.value);
        if (time.minTime === this.minTime && time.maxTime === this.maxTime) {
          return;
        }

        this.handleMinChange({
          hours: time.minTime.getHours(),
          minutes: time.minTime.getMinutes(),
          seconds: time.minTime.getSeconds()
        }, true);
        this.handleMaxChange({
          hours: time.maxTime.getHours(),
          minutes: time.maxTime.getMinutes(),
          seconds: time.maxTime.getSeconds()
        }, true);
      },

      handleClear() {
        this.handleCancel();
      },

      handleCancel() {
        this.$emit('pick');
      },

      handleChange(notUser) {
        if (this.minTime > this.maxTime) return;
        MIN_TIME.setFullYear(this.minTime.getFullYear());
        MIN_TIME.setMonth(this.minTime.getMonth(), this.minTime.getDate());
        MAX_TIME.setFullYear(this.maxTime.getFullYear());
        MAX_TIME.setMonth(this.maxTime.getMonth(), this.maxTime.getDate());
        this.$refs.minSpinner.selectableRange = [[MIN_TIME, this.maxTime]];
        this.$refs.maxSpinner.selectableRange = [[this.minTime, MAX_TIME]];
        this.handleConfirm(true, false, notUser);
      },

      handleMaxChange(date, notUser) {
        if (date.hours !== undefined) {
          this.maxTime.setHours(date.hours);
          this.maxHours = this.maxTime.getHours();
        }
        if (date.minutes !== undefined) {
          this.maxTime.setMinutes(date.minutes);
          this.maxMinutes = this.maxTime.getMinutes();
        }
        if (date.seconds !== undefined) {
          this.maxTime.setSeconds(date.seconds);
          this.maxSeconds = this.maxTime.getSeconds();
        }
        this.handleChange();
      },

      handleMinChange(date, notUser) {
        if (date.hours !== undefined) {
          this.minTime.setHours(date.hours);
          this.minHours = this.minTime.getHours();
        }
        if (date.minutes !== undefined) {
          this.minTime.setMinutes(date.minutes);
          this.minMinutes = this.minTime.getMinutes();
        }
        if (date.seconds !== undefined) {
          this.minTime.setSeconds(date.seconds);
          this.minSeconds = this.minTime.getSeconds();
        }

        this.handleChange();
      },

      setMinSelectionRange(start, end) {
        this.$emit('select-range', start, end);
        this.selectionRange = [start, end];
      },

      setMaxSelectionRange(start, end) {
        this.$emit('select-range', start + this.offset, end + this.offset);
        this.selectionRange = [start + this.offset, end + this.offset];
      },

      handleConfirm(visible = false, first = false, notUser = false) {
        const minSelectableRange = this.$refs.minSpinner.selectableRange;
        const maxSelectableRange = this.$refs.maxSpinner.selectableRange;

        this.minTime = limitRange(this.minTime, minSelectableRange);
        this.maxTime = limitRange(this.maxTime, maxSelectableRange);

        if (first) return;
        this.$emit('pick', [this.minTime, this.maxTime], visible, !notUser);
      },

      adjustScrollTop() {
        this.$refs.minSpinner.adjustScrollTop();
        this.$refs.maxSpinner.adjustScrollTop();
      },

      scrollDown(step) {
        this.spinner.scrollDown(step);
      },

      changeSelectionRange(step) {
        const list = this.showSeconds ? [0, 3, 6, 11, 14, 17] : [0, 3, 8, 11];
        const mapping = ['hours', 'minutes'].concat(this.showSeconds ? ['seconds'] : []);
        const index = list.indexOf(this.selectionRange[0]);
        const next = (index + step + list.length) % list.length;
        const half = list.length / 2;
        if (next < half) {
          this.$refs.minSpinner.emitSelectRange(mapping[next]);
        } else {
          this.$refs.maxSpinner.emitSelectRange(mapping[next - half]);
        }
      }
    },

    mounted() {
      this.$nextTick(() => this.handleConfirm(true, true));
    }
  };
</script>
