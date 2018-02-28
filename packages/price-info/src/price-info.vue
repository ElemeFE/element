<template>
  <div class="tm-price-info"
       :class="[
        type ? 'tm-price-info--' + type : '',
        size ? 'tm-price-info--' + size : ''
       ]"
  >
    <span class="tm-price-info__sum">{{ parsingSum[0] }}</span>
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
    type: String,
    currency: String,
    size: String,
    taxesInfo: {
      type: Boolean,
      default: false
    },
    partiallyPaid: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    parsingSum: function() {
      return this.sum.split(',');
    }
  }
};
</script>
