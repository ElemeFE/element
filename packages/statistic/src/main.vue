<template>
  <div class="el-statistic">
    <div class="head" v-if="title||$slots.title">
      <slot name="title">
        <span class="title">
          {{ title }}
        </span>
      </slot>
    </div>
    <div class="con">
      <span class="prefix" v-if="prefix||$slots.prefix">
        <slot name="prefix" >
          {{ prefix }}
        </slot>
      </span>
      <span class="number" :style="valueStyle">
        <slot name="formatter"> {{ disposeValue }}</slot>
      </span>
      <span class="suffix" v-if="suffix||$slots.suffix">
        <slot name="suffix">
          {{ suffix }}
        </slot>
      </span>
    </div>
  </div>
</template>

<script>
import { isNumber, chain, multiply, padStart, reduce} from 'element-ui/src/utils/lodash';
export default {
  name: 'ElStatistic',
  data() {
    return {
      disposeValue: '',
      timeTask: null,
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
      default: null
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
      let { timeIndices, countDown, dispose} = this;
      timeIndices ? countDown() : dispose();
    },
    magnification(num, mulriple = 1000, groupSeparator = ',') {
      // magnification factor
      const level = String(mulriple).length - 1;
      const reg = new RegExp(`\\d{1,${level}}(?=(\\d{${level}})+$)`, 'g');
      const result = String(num)
        .replace(reg, '$&,')
        .split(',')
        .join(groupSeparator);
      return result;
    },
    dispose() {
      let { value, precision, groupSeparator, rate } = this;
      if (!isNumber(value)) return false;
      let [integer, decimal] = String(value).split('.');
      if (precision) {
        decimal = `${decimal || ''}${(1)
          .toFixed(precision)
          .replace('.', '')
          .slice(1)}`;
        decimal = decimal.slice(0, precision);
      }
      let result = 0;
      // 1000 multiplying power
      if (groupSeparator) {
        integer = this.magnification(integer, rate, groupSeparator);
      }

      result = [integer, decimal].join(
        decimal ? this.decimalSeparator : ''
      );
      this.disposeValue = result;
      return result;
    },
    diffDate(minuend, subtrahend) {
      return Math.max(minuend - subtrahend, 0);
    },
    suspend(isStop) {
      if (isStop) {
        if (this.timeTask) {
          clearInterval(this.timeTask);
          this.timeTask = null;
        }
      } else {
        this.branch();
      }
      return this.disposeValue;
    },
    formatTimeStr: function(time) {
      let {format} = this;
      const escapeRegex = /\[[^\]]*]/g;
      const keepList = (format.match(escapeRegex) || []).map(str => str.slice(1, -1));
      const timeUnits = [
        ['Y', 1000 * 60 * 60 * 24 * 365], // years
        ['M', 1000 * 60 * 60 * 24 * 30], // months
        ['D', 1000 * 60 * 60 * 24], // days
        ['H', 1000 * 60 * 60], // hours
        ['m', 1000 * 60], // minutes
        ['s', 1000], // seconds
        ['S', 1] // million seconds
      ];
      let formatText = reduce(
        timeUnits,
        (con, item) => {
          const name = item[0];
          return con.replace(new RegExp(`${name}+`, 'g'), (match) => {
            let sum = chain(time).divide(item[1]).floor(0).value();
            time -= multiply(sum, item[1]);
            return padStart(String(sum), String(match).length, 0);
          });
        },
        format
      );
      let index = 0;
      return formatText.replace(escapeRegex, () => {
        const match = keepList[index];
        index += 1;
        return match;
      });
    },
    stopTime(time) {
      let result = true; // stop
      if (time) {
        this.$emit('change', time);
        result = false;
      } else {
        result = true;
        this.suspend(true);
        this.$emit('finish', true);
      }
      return result;
    },
    countDown() {
      let {REFRESH_INTERVAL, timeTask, diffDate, formatTimeStr, stopTime, suspend} = this;
      if (timeTask) return;
      let than = this;
      this.timeTask = setInterval(()=> {
        let diffTiem = diffDate(than.value, Date.now());
        than.disposeValue = formatTimeStr(diffTiem);
        stopTime(diffTiem);
      }, REFRESH_INTERVAL);
      this.$once('hook:beforeDestroy', () => {
        suspend(true);
      });

    }
  }
};
</script>
