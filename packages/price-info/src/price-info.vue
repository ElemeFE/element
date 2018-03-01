<template>
  <div class="tm-price-info"
       :class="[
        type ? 'tm-price-info--' + type : '',
        size ? 'tm-price-info--' + size : ''
       ]"
  >
    <span v-if="partSum" class="tm-price-info__part-sum">{{ parsingPartSum[0] }}</span>
    <span v-if="partSum" class="tm-price-info__change">,{{ parsingPartSum[1] }}</span>
    <tm-icon v-if="currency&&partSum" :name="currency" class="tm-price-info__currency"></tm-icon>
    <span class="tm-price-info__sum"><span v-if="partSum">/</span> {{ parsingSum[0] }}</span>
    <span class="tm-price-info__change">,{{ parsingSum[1] }}</span>
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
    sum: String,
    partSum: String,
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
      return (this.sum.split(','));
    },
    parsingPartSum: function() {
      return (this.partSum.split(','));
    }
  }
};
</script>
