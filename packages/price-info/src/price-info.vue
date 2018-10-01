<template>
  <div class="tm-price-info"
       :class="[
        type ? 'tm-price-info--' + type : '',
        size ? 'tm-price-info--' + size : '',
        noDash ? 'tm-price-info--no-dash' : ''
       ]"
  >
    <template v-if="partSum || partSum === 0">
      <span class="tm-price-info__part-sum">{{ labelPartSum }}</span>
      <span v-if="labelPartChange" class="tm-price-info__change">,{{ labelPartChange }}</span>
    </template>
    <span class="tm-price-info__starts-prefix" v-if="isStartPrice && !partSum">{{ startsPrefix }}</span>
    <span class="tm-price-info__sum">{{ labelSum }}</span>
    <span v-if="labelChange" class="tm-price-info__change">,{{ labelChange }}</span>
    <span v-if="!hideCurrency" class="tm-price-info__currency">{{ currencyUnicode[currency] }}</span>
    <span v-if="taxesInfo" class="tm-price-info__taxes">
      <span>вкл.</span>
      <span>НДС</span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'TmPriceInfo',
  props: {
    isStartPrice: {
      type: Boolean,
      default: false
    },
    startsPrefix: {
      type: String,
      default: 'от'
    },
    sum: {
      type: [Number, String],
      default: null,
      required: true
    },
    partSum: {
      type: [Number, String],
      default: null
    },
    type: {
      type: String,
      default: 'paid'
    },
    currency: {
      type: String,
      default: 'rub'
    },
    size: {
      type: String,
      default: 'default'
    },
    taxesInfo: {
      type: Boolean,
      default: false
    },
    hideCurrency: {
      type: Boolean,
      default: false
    },
    noDash: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      currencyUnicode: {
        eur: '\u20AC',
        rub: '\u20BD',
        usd: '\u0024'
      },
      localeMap: {
        usd: 'en-US',
        rub: 'ru-RU',
        eur: 'en-150'
      }
    };
  },
  methods: {
    parsingSum(value) {
      if (typeof value === 'number') {
        return (value.toFixed(2).split('.'));
      } else if (typeof value === 'string') {
        return (value.split('.'));
      }
      return false;
    }
  },
  computed: {
    labelSum() {
      if (this.sum) {
        const parsedSum = this.parsingSum(this.sum)[0];
        return Number(parsedSum).toLocaleString(this.locale);
      } else if (this.sum === 0) {
        return this.sum;
      }
      return null;
    },
    labelChange() {
      if (this.sum) {
        return this.parsingSum(this.sum)[1];
      }
      return null;
    },
    labelPartSum() {
      if (this.partSum) {
        const parsedSum = this.parsingSum(this.partSum)[0];
        return Number(parsedSum).toLocaleString(this.locale);
      } else if (this.partSum === 0) {
        return this.partSum;
      }
      return null;
    },
    labelPartChange() {
      if (this.partSum) {
        return this.parsingSum(this.partSum)[1];
      }
      return null;
    },
    locale() {
      return this.localeMap[this.currency];
    }
  }
};
</script>
