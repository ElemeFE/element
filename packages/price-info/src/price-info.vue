<template>
  <div class="tm-price-info"
       :class="[
        type ? 'tm-price-info--' + type : '',
        size ? 'tm-price-info--' + size : ''
       ]"
  >
    <template v-if="partSum">
      <span v-if="partSum" class="tm-price-info__part-sum">{{ labelPartSum }}</span>
      <span v-if="partSum" class="tm-price-info__change">,{{ labelPartChange }}</span>
      <tm-icon :name="currency" :class="'tm-price-info__currency tm-price-info__currency_' + currency"></tm-icon>
    </template>
    <span class="tm-price-info__sum">{{ labelSum }}</span>
    <span class="tm-price-info__change">,{{ labelChange }}</span>
    <tm-icon :name="currency" :class="'tm-price-info__currency tm-price-info__currency_' + currency"></tm-icon>
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
    sum: {
      type: [Number, String],
      default: null,
      required: true
    },
    partSum: [Number, String],
    type: String,
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
    }
  },
  data() {
    return {
      labelSum: null,
      labelChange: null,
      labelPartSum: null,
      labelPartChange: null
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
    }
    if (this.partSum) {
      let parsedPartSum = this.parsingSum(this.partSum);
      this.labelPartSum = parsedPartSum[0];
      this.labelPartChange = parsedPartSum[1];
    }
  }
};
</script>
