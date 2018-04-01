<template>
  <div class="tm-gallery">
    <div class="tm-gallery__content">
      <div class="tm-gallery__image">
        <img src="https://s3-us-west-1.amazonaws.com/powr/defaults/image-slider2.jpg" class="vue-lb-modal-image">
      </div>
      <div class="tm-gallery__controls">
        controls
      </div>
      <div class="tm-gallery_thumbs">
        thumbs
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TmGallery',
  methods: {
    tst: function(event) {
      console.log('RUNS');
    }
  }
};
</script>
