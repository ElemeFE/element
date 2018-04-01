<template>
  <tm-dialog
    width="938px"
    top="8vh"
    :visible.sync="galleryDialog"
    center
    simplified>
    <div class="tm-gallery">
      <div class="tm-gallery__content">
        <div class="tm-gallery__image">
          <img :src="images[selected].src" class="vue-lb-modal-image">
        </div>
        <div class="tm-gallery__controls">
          <div class="tm-gallery__counter">{{ selected + 1 }} / {{ countImages }}</div>
          <div class="tm-gallery__buttons">
            <tm-icon name="arrow-left" @click="prev()"></tm-icon>
            <tm-icon name="arrow-right" @click="next()"></tm-icon>
          </div>
        </div>
        <div class="tm-gallery__thumbs">
          <div
            v-for="(image, index) in displayThumbs"
            :class="{ 'tm-gallery__thumb-wrapper--active': thumbSelected === index }"
            class="tm-gallery__thumb-wrapper">
            <div
              v-bind:style="{ 'background-image': 'url(' + image.src + ')' }"
              @click.stop="showImage(index + beginThumbIndex)"
              class="tm-gallery__thumb"></div>
          </div>
        </div>
      </div>
    </div>
  </tm-dialog>
</template>

<script>
export default {
  name: 'TmGallery',
  props: {
    images: {
      type: Array,
      required: true
    },
    startAt: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      galleryDialog: false,
      nThumbs: 6,
      selected: this.startAt,
      thumbSelected: this.startAt,
      displayThumbs: null,
      beginThumbIndex: 0
    };
  },
  computed: {
    countImages() {
      return this.images.length;
    }
  },
  watch: {
    startAt() {
      this.$set(this, 'selected', this.startAt);
      this.$set(this, 'thumbSelected', this.startAt);
    },
    images() {
      this.$set(this, 'displayThumbs', this.images.slice(0, this.nThumbs));
    },

    selected() {
      let halfDown = Math.floor(this.nThumbs / 2);
      let mod = 1 - (this.nThumbs % 2);

      if (this.selected <= halfDown) {
        this.$set(this, 'beginThumbIndex', 0);
        this.$set(this, 'thumbSelected', this.selected);
        this.$set(this, 'displayThumbs', this.images.slice(0, this.nThumbs));
        return;
      }

      if (this.selected >= this.countImages - halfDown) {
        this.$set(this, 'beginThumbIndex', this.countImages - this.nThumbs);
        this.$set(this, 'thumbSelected', this.nThumbs - (this.countImages - this.selected));
        this.$set(this, 'displayThumbs', this.images.slice(-this.nThumbs));
        return;
      }

      this.$set(this, 'beginThumbIndex', this.selected - halfDown + mod);
      this.$set(this, 'thumbSelected', halfDown - mod);
      this.$set(this, 'displayThumbs', this.images.slice(this.selected - halfDown + mod, this.selected + halfDown + 1));
    }
  },
  mounted() {
    this.$set(this, 'displayThumbs', this.images.slice(0, this.nThumbs));
  },
  methods: {
    show: function(event) {
      document.addEventListener('keydown', this.addKeyEvent);
      this.galleryDialog = true;
    },
    hide: function(event) {
      this.galleryDialog = false;
      document.removeEventListener('keydown', this.addKeyEvent);
    },
    next: function(event) {
      this.$set(this, 'selected', (this.selected + 1) % this.countImages);
    },
    prev: function(event) {
      this.$set(this, 'selected', ((this.selected - 1) + this.countImages) % this.countImages);
    },
    showImage(index) {
      this.$set(this, 'selected', index);
    },
    addKeyEvent(event) {
      if (event.keyCode === 37) this.prev();
      if (event.keyCode === 39) this.next();
      if (event.keyCode === 27) this.hide();
    }
  },
  beforeDestroy() {
    document.removeEventListener('keydown', this.addKeyEvent);
  }
};
</script>
