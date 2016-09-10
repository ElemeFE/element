<template>
  <transition name="md-fade-bottom">
    <div
      v-show="visible"
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
          type="button"
          class="el-time-panel__btn cancel"
          @click="handleCancel()">取消</button>
        <button
          type="button"
          class="el-time-panel__btn confirm"
          @click="handleConfirm()"
          :disabled="btnDisabled">确定</button>
      </div>
    </div>
  </transition>
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

    computed: {
      showSeconds() {
        return (this.format || '').indexOf('ss') !== -1;
      }
    },

    data() {
      let defaultValue = this.$options.defaultValue;
      defaultValue = Array.isArray(defaultValue) ? defaultValue : [defaultValue];
      const minTime = defaultValue[0] || new Date();
      const date = new Date();
      date.setHours(date.getHours() + 1);
      const maxTime = defaultValue[1] || date;

      return {
        minTime: minTime,
        maxTime: maxTime,
        btnDisabled: isDisabled(minTime, maxTime),
        maxHours: maxTime.getHours(),
        maxMinutes: maxTime.getMinutes(),
        maxSeconds: maxTime.getSeconds(),
        minHours: minTime.getHours(),
        minMinutes: minTime.getMinutes(),
        minSeconds: minTime.getSeconds(),
        format: 'HH:mm:ss',
        visible: false
      };
    },

    methods: {
      handleCancel() {
        this.$emit('pick');
      },

      handleChange() {
        this.$refs.minSpinner.selectableRange = [[MIN_TIME, this.maxTime]];
        this.$refs.maxSpinner.selectableRange = [[this.minTime, MAX_TIME]];
        this.handleConfirm(true);
      },

      handleMaxChange(date) {
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

      handleMinChange(date) {
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

      focusEditor(val) {
        return this.$refs.minSpinner.focusEditor(val);
      }
    },

    mounted() {
      this.$nextTick(() => this.handleConfirm(true, true));
    }
  };
</script>
