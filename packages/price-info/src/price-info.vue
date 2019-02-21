<template>
  <div :class="[
        'tm-price-info',
        type ? 'tm-price-info--' + type : '',
        size ? 'tm-price-info--' + size : '',
        noDash ? 'tm-price-info--no-dash' : ''
       ]"
  >
    <template v-if="partSum || partSum === 0">
      <span class="tm-price-info__part-sum">{{ labelPartSum }}</span>
      <span v-if="labelPartChange"
            class="tm-price-info__change">,{{ labelPartChange }}</span>
    </template>
    <span v-if="isStartPrice && !partSum"
          class="tm-price-info__starts-prefix">{{ startsPrefix }}</span>
    <div class="tm-price-info__border-wrap"
         :class="{ 'tm-price-info__border-wrap--has-popover': hasPopover }">
        <span class="tm-price-info__sum">{{ labelSum }}</span>
        <span v-if="labelChange"
              class="tm-price-info__change">,{{ labelChange }}</span>
        <span v-if="!hideCurrency"
              class="tm-price-info__currency">{{ currencyUnicode[currency] }}</span>
    </div>
    <span v-if="taxesInfo"
          class="tm-price-info__taxes">
      <span>вкл.</span>
      <span>НДС</span>
    </span>
  </div>
</template>

<script>
// Фикс для случаев, когда в одном месте используется большое количесвтво tm-price-info.
// Проблема заключалась в том, что Number.prototype.toLocaleString занимает много времени на выполнение
const SUM_FORMATTERS = {
  EUR: Intl ? new Intl.NumberFormat('en-150') : false,
  RUB: Intl ? new Intl.NumberFormat('ru-RU') : false,
  USD: Intl ? new Intl.NumberFormat('en-US') : false
};

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
    currencyFormatter: {
      type: [Object, Boolean],
      default: false
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
    },
    hasPopover: {
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
    parseSum(value) {
      if (typeof value === 'number') {
        return value.toFixed(2).split('.');
      } else if (typeof value === 'string') {
        return value.split('.');
      }
      return false;
    },
    formatSum(value) {
      const formatter = SUM_FORMATTERS[this.currency.toUpperCase()];
      return formatter ? formatter.format(value) : value.toLocaleString(this.locale);
    },
    getSumLabel(value) {
      if (value) {
        const parsedSum = Number(this.parseSum(value)[0]);
        return this.formatSum(parsedSum);
      }
      return value === 0 ? value : null;
    },
    getChangeLabel(value) {
      return value ? this.parseSum(value)[1] : null;
    }
  },
  computed: {
    labelSum() {
      return this.getSumLabel(this.sum);
    },
    labelChange() {
      return this.getChangeLabel(this.sum);
    },
    labelPartSum() {
      return this.getSumLabel(this.partSum);
    },
    labelPartChange() {
      return this.getChangeLabel(this.partSum);
    },
    locale() {
      return this.localeMap[this.currency];
    }
  }
};
</script>
