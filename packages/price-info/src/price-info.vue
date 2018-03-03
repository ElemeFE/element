<template>
  <div class="tm-price-info"
       :class="[
        type ? 'tm-price-info--' + type : '',
        size ? 'tm-price-info--' + size : ''
       ]"
  >
    <template v-if="partSum">
      <span v-if="partSum" class="tm-price-info__part-sum">{{ parsingPartSum }}</span>
      <span v-if="partSum" class="tm-price-info__change">,{{ parsingPartSum }}</span>
      <tm-icon v-if="currency" :name="currency" class="tm-price-info__currency"></tm-icon>
    </template>
    <span class="tm-price-info__sum">{{ parsingSum }}</span>
    <span class="tm-price-info__change">,{{ parsingSum }}</span>
    <tm-icon v-if="currency" :name="currency" class="tm-price-info__currency"></tm-icon>
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
      type: Number,
      required: true,
      default: 0
    },
    partSum: Number,
    type: String,
    currency: String,
    size: String,
    taxesInfo: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    parsingSum: function() {
      // return (this.sum.split(','));
      return this.sum;
    },
    parsingPartSum: function() {
      // return (this.partSum.split(','));
      return this.partSum;
    }
  }
};
</script>
