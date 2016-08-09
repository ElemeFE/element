<template>
  <div
    v-show="visible"
    transition="md-fade-bottom"
    class="el-time-range-picker el-picker-panel">
    <div class="el-time-range-picker__content">
      <div class="el-time-range-picker__cell">
        <div class="el-time-range-picker__header">开始时间</div>
        <div class="el-time-range-picker__body el-time-panel__content">
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
        <div class="el-time-range-picker__header">结束时间</div>
        <div class="el-time-range-picker__body el-time-panel__content">
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
        class="el-time-panel__btn cancel"
        @click="handleCancel()">取消</button>
      <button
        class="el-time-panel__btn confirm"
        @click="handleConfirm()"
        :disabled="btnDisabled">确定</button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { parseDate, limitRange } from '../util';

  const MIN_TIME = parseDate('00:00:00', 'HH:mm:ss');
  const MAX_TIME = parseDate('23:59:59', 'HH:mm:ss');
  const isDisabled = function(minTime, maxTime) {
    const minValue = minTime.getHours() * 3600 + minTime.getMinutes() * 60 + minTime.getSeconds();
    const maxValue = maxTime.getHours() * 3600 + maxTime.getMinutes() * 60 + maxTime.getSeconds();

    return minValue > maxValue;
  };

  export default {
    components: {
      TimeSpinner: require('../basic/time-spinner')
    },

    props: {
      minTime: {
        default() {
          return new Date();
        }
      },

      maxTime: {
        default() {
          const date = new Date();
          date.setHours(date.getHours() + 1);
          return date;
        }
      },

      format: {
        default: 'HH:mm:ss'
      },

      visible: Boolean
    },

    computed: {
      showSeconds() {
        return (this.format || '').indexOf('ss') !== -1;
      },

      minHours: {
        get() {
          if (this.minTime) {
            return this.minTime.getHours();
          }
          return 0;
        },
        set(hours) {
          if (this.minTime) {
            this.minTime.setHours(hours);
          }
        }
      },

      minMinutes: {
        get() {
          if (this.minTime) {
            return this.minTime.getMinutes();
          }
          return 0;
        },
        set(minutes) {
          if (this.minTime) {
            this.minTime.setMinutes(minutes);
          }
        }
      },

      minSeconds: {
        get() {
          if (this.minTime) {
            return this.minTime.getSeconds();
          }
          return 0;
        },
        set(seconds) {
          if (this.minTime) {
            this.minTime.setSeconds(seconds);
          }
        }
      },

      maxHours: {
        get() {
          if (this.maxTime) {
            return this.maxTime.getHours();
          }
          return 0;
        },
        set(hours) {
          if (this.maxTime) {
            this.maxTime.setHours(hours);
          }
        }
      },

      maxMinutes: {
        get() {
          if (this.maxTime) {
            return this.maxTime.getMinutes();
          }
          return 0;
        },
        set(minutes) {
          if (this.maxTime) {
            this.maxTime.setMinutes(minutes);
          }
        }
      },

      maxSeconds: {
        get() {
          if (this.maxTime) {
            return this.maxTime.getSeconds();
          }
          return 0;
        },
        set(seconds) {
          if (this.maxTime) {
            this.maxTime.setSeconds(seconds);
          }
        }
      }
    },

    data() {
      return {
        btnDisabled: isDisabled(this.minTime, this.maxTime)
      };
    },

    methods: {
      handleCancel() {
        this.$emit('pick', null);
      },

      handleChange() {
        this.$refs.minSpinner.selectableRange = [[MIN_TIME, this.maxTime]];
        this.$refs.maxSpinner.selectableRange = [[this.minTime, MAX_TIME]];
        this.handleConfirm(true);
      },

      handleMaxChange(date) {
        if (date.hours !== undefined) this.maxHours = date.hours;
        if (date.minutes !== undefined) this.maxMinutes = date.minutes;
        if (date.seconds !== undefined) this.maxSeconds = date.seconds;
        this.handleChange();
      },

      handleMinChange(date) {
        if (date.hours !== undefined) this.minHours = date.hours;
        if (date.minutes !== undefined) this.minMinutes = date.minutes;
        if (date.seconds !== undefined) this.minSeconds = date.seconds;
        this.handleChange();
      },

      setMinSelectionRange(start, end) {
        this.$emit('select-range', start, end);
      },

      setMaxSelectionRange(start, end) {
        this.$emit('select-range', start + 11, end + 11);
      },

      handleConfirm(visible = false, first = false) {
        const minSelectableRange = this.$refs.minSpinner.selectableRange;
        const maxSelectableRange = this.$refs.maxSpinner.selectableRange;

        this.minTime = limitRange(this.minTime, minSelectableRange);
        this.maxTime = limitRange(this.maxTime, maxSelectableRange);

        this.$emit('pick', [this.minTime, this.maxTime], visible, first);
      },

      ajustScrollTop() {
        this.$refs.minSpinner.ajustScrollTop();
        this.$refs.maxSpinner.ajustScrollTop();
      },

      focusEditor(...args) {
        return this.$refs.minSpinner.focusEditor(...args);
      }
    },

    ready() {
      this.$nextTick(() => this.handleConfirm(true, true));
    }
  };
</script>
