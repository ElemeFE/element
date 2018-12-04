<template>
  <transition
    name="el-zoom-in-top"
    @after-leave="$emit('dodestroy')">
    <div
      v-show="visible"
      class="el-time-range-picker el-picker-panel el-popper"
      :class="popperClass">
      <div class="el-time-range-picker__content">
        <div class="el-time-range-picker__cell">
          <div class="el-time-range-picker__header">{{ t('el.datepicker.startTime') }}</div>
          <div
            :class="{ columns, 'is-arrow': arrowControl }"
            class="el-time-range-picker__body el-time-panel__content">
            <time-spinner
              ref="minSpinner"
              :mapping="minMapping"
              :steps="parsedSteps"
              @change="handleMinChange"
              :arrow-control="arrowControl"
              :selectable-range="minSelectableRange"
              @select-range="setMinSelectionRange"
              :date="minDate">
            </time-spinner>
          </div>
        </div>
        <div class="el-time-range-picker__cell">
          <div class="el-time-range-picker__header">{{ t('el.datepicker.endTime') }}</div>
          <div
            :class="{ columns, 'is-arrow': arrowControl }"
            class="el-time-range-picker__body el-time-panel__content">
            <time-spinner
              ref="maxSpinner"
              :mapping="maxMapping"
              :steps="parsedSteps"
              @change="handleMaxChange"
              :arrow-control="arrowControl"
              :selectable-range="maxSelectableRange"
              @select-range="setMaxSelectionRange"
              :date="maxDate">
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
  import {
    parseDate,
    limitTimeRange,
    transformTime,
    timeWithinRange,
    getTimeMapping
  } from '../util';
  import Locale from 'element-ui/src/mixins/locale';
  import TimeSpinner from '../basic/time-spinner';

  export default {
    mixins: [Locale],

    components: { TimeSpinner },

    computed: {
      offset() {
        let order = this.minMapping.order;
        return this.minMapping[order[order.length - 1]][1] + 3;
      },

      spinner() {
        return this.selectionRange[0] < this.offset ? this.$refs.minSpinner : this.$refs.maxSpinner;
      },

      btnDisabled() {
        return this.minDate.getTime() > this.maxDate.getTime();
      },
      MIN_TIME() {
        return limitTimeRange(parseDate('00:00', 'HH:mm'), this.selectableRange, this.format);
      },
      MAX_TIME() {
        return limitTimeRange(parseDate('23:59:59.999', 'HH:mm:ss.SSS'), this.selectableRange, this.format);
      },
      minMapping() {
        return getTimeMapping(this.format, this.minDate);
      },
      maxMapping() {
        return getTimeMapping(this.format, this.maxDate);
      },
      columns() {
        let val = {};
        val['columns' + this.minMapping.order.length] = true;
        return val;
      },
      minSelectableRange() {
        return [[this.MIN_TIME, this.maxDate]];
      },
      maxSelectableRange() {
        return [[this.minDate, this.MAX_TIME]];
      },
      parsedSteps() {
        return this.steps ? parseDate(this.steps, this.format) : null;
      }
    },

    data() {
      return {
        popperClass: '',
        minDate: new Date(),
        maxDate: new Date(),
        value: [],
        oldValue: [new Date(), new Date()],
        selectableRange: [],
        defaultValue: null,
        format: 'HH:mm:ss',
        visible: false,
        selectionRange: [0, 2],
        arrowControl: false,
        steps: ''
      };
    },

    watch: {
      value(value) {
        var minDate;
        var maxDate;
        if (Array.isArray(value)) {
          minDate = new Date(value[0]);
          maxDate = new Date(value[1]);
        } else {
          if (Array.isArray(this.defaultValue)) {
            minDate = new Date(this.defaultValue[0]);
            maxDate = new Date(this.defaultValue[1]);
          } else if (this.defaultValue) {
            minDate = new Date(this.defaultValue);
            maxDate = this.advanceTime(new Date(this.defaultValue), 60 * 60 * 1000);
          } else {
            minDate = new Date();
            maxDate = this.advanceTime(new Date(), 60 * 60 * 1000);
          }
        }
        this.minDate = this.transform(minDate);
        this.maxDate = this.transform(maxDate);
      },

      format() {
        this.minDate = this.transform(this.minDate);
        this.maxDate = this.transform(this.maxDate);
        this.handleChange();
      },

      visible(val) {
        if (val) {
          this.oldValue = this.value;
          this.$nextTick(() => this.$refs.minSpinner.emitSelectRange(this.minMapping.order[0]));
        }
      }
    },

    methods: {
      transform(date) {
        return transformTime(date, this.format);
      },
      advanceTime(date, amount) {
        return new Date(Math.min(this.transform(date).getTime() + amount, this.MAX_TIME.getTime()));
      },

      handleClear() {
        this.$emit('pick', null);
      },

      handleCancel() {
        this.$emit('pick', this.oldValue);
      },

      handleMinChange(date) {
        this.minDate = this.transform(date);
        this.handleChange();
      },

      handleMaxChange(date) {
        this.maxDate = this.transform(date);
        this.handleChange();
      },

      handleChange() {
        if (this.isValidValue([this.minDate, this.maxDate])) {
          this.$emit('pick', [this.minDate, this.maxDate], true);
        }
      },

      setMinSelectionRange(start, end) {
        this.$emit('select-range', start, end, 'min');
        this.selectionRange = [start, end];
      },

      setMaxSelectionRange(start, end) {
        this.$emit('select-range', start, end, 'max');
        this.selectionRange = [start + this.offset, end + this.offset];
      },

      handleConfirm(visible = false) {
        this.minDate = limitTimeRange(this.minDate, this.minSelectableRange, this.format);
        this.maxDate = limitTimeRange(this.maxDate, this.maxSelectableRange, this.format);
        this.$emit('pick', [this.minDate, this.maxDate], visible);
      },

      adjustSpinners() {
        this.$refs.minSpinner.adjustSpinners();
        this.$refs.maxSpinner.adjustSpinners();
      },

      changeSelectionRange(step) {
        const order = this.minMapping.order;

        const getList = (mapping, delta) => {
          return order.map(type => {return mapping[type][0] + delta;});
        };

        const list = getList(this.minMapping, 0).concat(getList(this.maxMapping, this.offset));
        const index = list.indexOf(this.selectionRange[0]);
        const next = (index + step + list.length) % list.length;
        const half = list.length / 2;
        if (next < half) {
          this.$refs.minSpinner.emitSelectRange(order[next]);
        } else {
          this.$refs.maxSpinner.emitSelectRange(order[next - half]);
        }
      },

      isValidValue(date) {
        return date.length === 2 &&
          timeWithinRange(date[0], this.minSelectableRange, this.format) &&
          timeWithinRange(date[1], this.maxSelectableRange, this.format);
      },

      handleKeydown(event) {
        const keyCode = event.keyCode;
        const mapping = { 38: -1, 40: 1, 37: -1, 39: 1 };

        // Left or Right
        if (keyCode === 37 || keyCode === 39) {
          const step = mapping[keyCode];
          this.changeSelectionRange(step);
          event.preventDefault();
          return;
        }

        // Up or Down
        if (keyCode === 38 || keyCode === 40) {
          const step = mapping[keyCode];
          this.spinner.scrollDown(step);
          event.preventDefault();
          return;
        }
      }
    }
  };
</script>
