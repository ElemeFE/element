<template   >
  <div class="el-statistic">
    <div class="head">
      <slot name="title">
        <span class="title">
          {{ title }}
        </span>
      </slot>
    </div>
    <div class="con">
      <span class="prefix">
        <slot name="prefix">
          {{ prefix }}
        </slot>
      </span>


      <span class="number" :style="valueStyle">
        <slot name="formatter"> {{ disposeValue }}</slot>
      </span>
      <span class="suffix">
        <slot name="suffix">
          {{ suffix }}
        </slot>
      </span>

    </div>
  </div>
</template>

<script>

import _ from 'lodash';
// const dayjs = require('dayjs');

export default {
  name: 'ElStatistic',
  data() {
    return {
      disposeValue: '',
      timeTask: undefined,
      REFRESH_INTERVAL: 1000 / 30
    };
  },
  props: {
    decimalSeparator: {
      type: String,
      default: '.'
    },
    groupSeparator: {
      type: String,
      default: ''
    },
    precision: {
      type: Number,
      default: 0
    },
    value: {
      type: [String, Number],
      default: ''
    },
    prefix: {
      type: String,
      default: ''
    },
    suffix: {
      type: String,
      default: ''
    },
    title: {
      type: [String, Number],
      default: ''
    },
    timeIndices: {
      type: Boolean,
      default: false
    },
    valueStyle: {
      type: Object,
      default: function() {
        return {};
      }
    },
    format: {
      type: String,
      default: 'HH:mm:ss:SSS'
    },
    rate: {
      type: Number,
      default: 1000
    }

  },
  created() {
    this.branch();

  },
  watch: {
    value: function() {
      this.branch();
    }
  },
  methods: {
    branch() {
      if (this.timeIndices) {
        clearInterval(this.timeTask);
        this.countDown();
      } else {
        this.dispose();
      }
    },
    magnification(num, _mulriple = 1000, _groupSeparator = ',') { // magnification factor
      const level = String(_mulriple).length - 1;
      const reg = new RegExp(`\\d{1,${level}}(?=(\\d{${level}})+$)`, 'g');
      const result = String(num)
        .replace(reg, '$&,')
        .split(',')
        .join(_groupSeparator);
      return result;
    },
    dispose() {
      let { value, precision, groupSeparator, rate } = this;

      if (!_.isNumber(value)) return false;
      if (precision) {
        value = _.ceil(value, precision);
      }

      let integer = String(value).split('.')[0];
      let decimals = String(value).split('.')[1] || (precision ? _.fill(Array(precision), 0).join('') : '');
      let result = 0;
      // 1000 multiplying power
      if (groupSeparator) {
        integer = this.magnification(integer, rate, groupSeparator);
      }

      result = [integer, decimals].join(
        decimals ? this.decimalSeparator || '.' : ''
      );
      this.disposeValue = result;
      return result;
    },
    diffDate(minuend, subtrahend) {
      return _.subtract(minuend, subtrahend);
    },
    suspend(isStop) {
      if (isStop) {
        clearInterval(this.timeTask);

      } else {
        this.branch();
      }
      return this.disposeValue;
    },
    countDown() {
      let { format, value, REFRESH_INTERVAL, diffDate, suspend } = this;
      let diffTiem = diffDate(value, Date.now());
      let formatTimeStr = function(format, time) {
        const timeUnits = [
          ['Y', 1000 * 60 * 60 * 24 * 365], // years
          ['M', 1000 * 60 * 60 * 24 * 30], // months
          ['D', 1000 * 60 * 60 * 24], // days
          ['H', 1000 * 60 * 60], // hours
          ['m', 1000 * 60], // minutes
          ['s', 1000], // seconds
          ['S', 1] // million seconds
        ];
        return _.reduce(timeUnits, (con, item) => {
          let name = item[0];
          return con.replace(new RegExp(`${name}+`, 'g'), (match) => {
            let sum = _.chain(time).divide(item[1]).floor().value();
            time -= _.multiply(sum, item[1]);
            sum = _.padStart(String(sum), String(match).length, 0); // autoCompletion
            if (!sum)suspend();
            return sum;

          });
        }, format);
      };
      let than = this;
      let disappearTime = function(time) {
        let result = true;// stop
        if (value > Date.now()) {
          than.$emit('change', time);

          result = false;
        } else {
          result = true;

          than.$emit('finish', true);
        }
        return (result);
      };
      this.timeTask = setInterval(function() {
        if (disappearTime(diffTiem)) clearInterval(than.timeTask);
        diffTiem = diffTiem < REFRESH_INTERVAL ? 0 : diffTiem - REFRESH_INTERVAL;
        than.disposeValue = formatTimeStr(format, diffTiem);
      }, REFRESH_INTERVAL);

    }
  }
};
</script>
