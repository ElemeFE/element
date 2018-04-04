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
    partSum: [Number, String],
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
      default: 'medium'
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
      labelSum: null,
      labelChange: null,
      labelPartSum: null,
      labelPartChange: null,
      currencyUnicode: {
        eur: '\u20AC',
        rub: '\u20BD',
        usd: '\u0024'
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
  mounted() {
    if (this.sum) {
      let parsedSum = this.parsingSum(this.sum);
      this.labelSum = parsedSum[0];
      this.labelChange = parsedSum[1];
    } else {
      this.labelSum = 0;
    }
    if (this.partSum) {
      let parsedPartSum = this.parsingSum(this.partSum);
      this.labelPartSum = parsedPartSum[0];
      this.labelPartChange = parsedPartSum[1];
    } else {
      this.labelPartSum = 0;
    }
  }
};
</script>
