<template>
  <div class="tm-date-picker-joined" @click.stop="onDateFocus">
    <tm-input
      :suffix-icon="suffixIcon"
      :prefix-icon="prefixIconName"
      :required="required"
      :clearable="clearable"
      :size="size"
      readonly
      v-model="dateLabel"
      :placeholder="placeholder"></tm-input>
    <tm-date-picker
      ref="originPicker"
      :type="type"
      v-model="date">
      <template v-for="(value, key) in $scopedSlots" slot-scope="props" :slot="key">
        <slot v-bind="props" :name="key" />
      </template>
    </tm-date-picker>
  </div>
</template>

<script>
import '../../date-picker/';
import moment from 'moment';

export default {
  name: 'TmDatePickerJoined',
  props: {
    format: {
      type: String,
      default: 'DD MMMM'
    },
    locale: {
      type: String,
      default: 'ru'
    },
    suffixIcon: {
      type: String,
      default: ''
    },
    prefixIcon: {
      type: String,
      default: 'calendar'
    },
    value: {
      type: [Array, Date, String],
      default: null
    },
    type: {
      type: String,
      default: 'daterange'
    },
    size: {
      type: String,
      default: 'large'
    },
    placeholder: {
      type: String,
      default: 'Дата'
    },
    required: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    prefixIconName() {
      return this.suffixIcon ? '' : this.prefixIcon;
    },
    date: {
      get() {
        return this.value;
      },
      set(newVal) {
        this.$emit('input', newVal);
      }
    },
    dateLabel: {
      get() {
        if (this.type === 'daterange') {
          return this.getRangeDateLabel();
        } else {
          return this.getSingleDateLabel();
        }
      },
      set(newVal) {
        if (newVal === '') {
          this.$refs.originPicker.clear();
        }
      }
    }
  },
  methods: {
    onDateFocus() {
      this.$refs.originPicker.focus();
    },
    formatDate(date) {
      return moment(date).format(this.format);
    },
    getRangeDateLabel() {
      return this.date && this.date.length
        ? this.formatDate(this.date[0]) + ' - ' + this.formatDate(this.date[1])
        : '';
    },
    getSingleDateLabel() {
      return this.date
        ? this.formatDate(this.date)
        : '';
    }
  },
  mounted() {
    moment.locale(this.locale);
  }
};
</script>
