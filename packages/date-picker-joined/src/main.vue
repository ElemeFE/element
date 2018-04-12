<template>
  <div class="tm-date-picker-joined" @click.stop="onDateFocus">
    --{{value}}
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
      type: String,
      default: null
    }
  },
  computed: {
    date: {
      get() {
        return this.value;
      },
      set(newVal) {
        this.date = newVal;
      }
    },
    dateLabel() {
      return this.date && this.date.length
        ? this.formatDate(this.date[0]) + ' -+- ' + this.formatDate(this.date[1])
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
      this.$emit('input', this.date);
      return moment(date).format(this.dateFormat);
    }
  },
  mounted() {
    moment.locale(this.locale);
  }
};
</script>
