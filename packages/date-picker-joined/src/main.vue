<template>
  <div class="tm-date-picker-joined" @click.stop="onDateFocus">
    <tm-input
      :suffix-icon="suffixIcon"
      :prefix-icon="prefixIcon"
      v-model="dateLabel"
      placeholder="Период пребывания"></tm-input>
    <tm-date-picker
      :type="type"
      v-model="date"></tm-date-picker>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'TmDatePickerJoined',
  data() {
    return {
      dateFormat: 'DD MMMM'
    };
  },
  props: {
    locale: {
      type: String,
      default: 'ru'
    },
    type: {
      type: String,
      default: 'daterange'
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
      type: Array,
      default: null
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
      return this.date && this.date.length
        ? this.formatDate(this.date[0]) + ' - ' + this.formatDate(this.date[1])
        : '';
    }
  },
  methods: {
    onDateFocus() {
      this.$el
        .querySelector('.tm-date-editor')
        .click();
    },
    formatDate(date) {
      return moment(date).format(this.dateFormat);
    }
  },
  mounted() {
    moment.locale(this.locale);
  }
};
</script>
