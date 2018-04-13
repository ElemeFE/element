<template>
  <div class="tm-date-picker-joined" @click.stop="onDateFocus">
    <tm-input
      :suffix-icon="suffixIcon"
      :prefix-icon="prefixIcon"
      readonly
      v-model="dateLabel"
      placeholder="Период пребывания"></tm-input>
    <tm-date-picker
      ref="originPicker"
      :type="type"
      v-model="date"></tm-date-picker>
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
      default: null
    },
    prefixIcon: {
      type: String,
      default: null
    },
    value: {
      type: [Array, Date],
      default: null
    },
    type: {
      type: String,
      default: 'daterange'
    }
  },
  computed: {
    date: {
      get() {
        return this.value;
      },
      set(newVal) {
        this.$emit('input', newVal);
      }
    },
    dateLabel() {
      if (this.type === 'daterange') {
        return this.getRangeDateLabel();
      } else {
        return this.getSingleDateLabel();
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
