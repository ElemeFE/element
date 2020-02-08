<template>
  <transition name="el-zoom-in-top" @before-enter="handleMenuEnter" @after-leave="$emit('dodestroy')">
    <div
      ref="popper"
      v-show="visible"
      :style="{ width: width + 'px' }"
      :class="popperClass"
      class="el-picker-panel time-select el-popper">
      <el-scrollbar noresize wrap-class="el-picker-panel__content">
        <div class="time-select-item"
          v-for="item in items"
          :class="{ selected: value === item.value, disabled: item.disabled, default: item.value === defaultValue }"
          :disabled="item.disabled"
          :key="item.value"
          @click="handleClick(item)">{{ item.value }}</div>
      </el-scrollbar>
    </div>
  </transition>
</template>

<script type="text/babel">
  import ElScrollbar from 'element-ui/packages/scrollbar';
  import scrollIntoView from 'element-ui/src/utils/scroll-into-view';

  const parseTime = function(time) {
    const values = (time || '').split(':');
    if (values.length >= 2) {
      const hours = parseInt(values[0], 10);
      const minutes = parseInt(values[1], 10);

      return {
        hours,
        minutes
      };
    }
    /* istanbul ignore next */
    return null;
  };

  const compareTime = function(time1, time2) {
    const value1 = parseTime(time1);
    const value2 = parseTime(time2);

    const minutes1 = value1.minutes + value1.hours * 60;
    const minutes2 = value2.minutes + value2.hours * 60;

    if (minutes1 === minutes2) {
      return 0;
    }

    return minutes1 > minutes2 ? 1 : -1;
  };

  const formatTime = function(time) {
    return (time.hours < 10 ? '0' + time.hours : time.hours) + ':' + (time.minutes < 10 ? '0' + time.minutes : time.minutes);
  };

  const nextTime = function(time, step) {
    const timeValue = parseTime(time);
    const stepValue = parseTime(step);

    const next = {
      hours: timeValue.hours,
      minutes: timeValue.minutes
    };

    next.minutes += stepValue.minutes;
    next.hours += stepValue.hours;

    next.hours += Math.floor(next.minutes / 60);
    next.minutes = next.minutes % 60;

    return formatTime(next);
  };

  export default {
    components: { ElScrollbar },

    watch: {
      value(val) {
        if (!val) return;
        this.$nextTick(() => this.scrollToOption());
      }
    },

    methods: {
      handleClick(item) {
        if (!item.disabled) {
          this.$emit('pick', item.value);
        }
      },

      handleClear() {
        this.$emit('pick', null);
      },

      scrollToOption(selector = '.selected') {
        const menu = this.$refs.popper.querySelector('.el-picker-panel__content');
        scrollIntoView(menu, menu.querySelector(selector));
      },

      handleMenuEnter() {
        const selected = this.items.map(item => item.value).indexOf(this.value) !== -1;
        const hasDefault = this.items.map(item => item.value).indexOf(this.defaultValue) !== -1;
        const option = (selected && '.selected') || (hasDefault && '.default') || '.time-select-item:not(.disabled)';
        this.$nextTick(() => this.scrollToOption(option));
      },

      scrollDown(step) {
        const items = this.items;
        const length = items.length;
        let total = items.length;
        let index = items.map(item => item.value).indexOf(this.value);
        while (total--) {
          index = (index + step + length) % length;
          if (!items[index].disabled) {
            this.$emit('pick', items[index].value, true);
            return;
          }
        }
      },

      isValidValue(date) {
        return this.items.filter(item => !item.disabled).map(item => item.value).indexOf(date) !== -1;
      },

      handleKeydown(event) {
        const keyCode = event.keyCode;
        if (keyCode === 38 || keyCode === 40) {
          const mapping = { 40: 1, 38: -1 };
          const offset = mapping[keyCode.toString()];
          this.scrollDown(offset);
          event.stopPropagation();
          return;
        }
      }
    },

    data() {
      return {
        popperClass: '',
        start: '09:00',
        end: '18:00',
        step: '00:30',
        value: '',
        defaultValue: '',
        visible: false,
        minTime: '',
        maxTime: '',
        width: 0
      };
    },

    computed: {
      items() {
        const start = this.start;
        const end = this.end;
        const step = this.step;

        const result = [];

        if (start && end && step) {
          let current = start;
          while (compareTime(current, end) <= 0) {
            result.push({
              value: current,
              disabled: compareTime(current, this.minTime || '-1:-1') <= 0 ||
                compareTime(current, this.maxTime || '100:100') >= 0
            });
            current = nextTime(current, step);
          }
        }

        return result;
      }
    }
  };
</script>
