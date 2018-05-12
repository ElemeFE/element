<template>
  <ul @click="onPagerClick" class="tm-pager">
    <li
      :class="{ active: currentPage === 1 }"
      v-if="pageCount > 0"
      class="number">1</li>
    <li
      class="more btn-quickprev"
      :class="[quickprevIconClass]"
      v-if="showPrevMore"
      @mouseenter="quickprevIconClass = 'arrow-left'"
      @mouseleave="quickprevIconClass = 'dots-horizontal'">
      <tm-icon :name="quickprevIconClass"></tm-icon>
    </li>
    <li
      v-for="pager in pagers"
      :key="pager"
      :class="{ active: currentPage === pager }"
      class="number">{{ pager }}</li>
    <li
      class="more btn-quicknext"
      :class="[quicknextIconClass]"
      v-if="showNextMore"
      @mouseenter="quicknextIconClass = 'arrow-right'"
      @mouseleave="quicknextIconClass = 'dots-horizontal'">
      <tm-icon :name="quicknextIconClass"></tm-icon>
    </li>
    <li
      :class="{ active: currentPage === pageCount }"
      class="number"
      v-if="pageCount > 1">{{ pageCount }}</li>
  </ul>
</template>

<script type="text/babel">
  export default {
    name: 'TmPager',

    props: {
      currentPage: Number,

      pageCount: Number
    },

    watch: {
      showPrevMore(val) {
        if (!val) this.quickprevIconClass = 'dots-horizontal';
      },

      showNextMore(val) {
        if (!val) this.quicknextIconClass = 'dots-horizontal';
      }
    },

    methods: {
      onPagerClick(event) {
        let target = event.target;
        console.log('TAG', target.tagName);
        if (target.tagName === 'UL') {
          return;
        }
        if (target.tagName !== 'LI') {
          while (target.tagName !== 'LI') {
            target = target.parentNode;
          }

        }

        let newPage = Number(event.target.textContent);
        const pageCount = this.pageCount;
        const currentPage = this.currentPage;

        if (target.className.indexOf('more') !== -1) {
          if (target.className.indexOf('quickprev') !== -1) {
            newPage = currentPage - 5;
          } else if (target.className.indexOf('quicknext') !== -1) {
            newPage = currentPage + 5;
          }
        }

        /* istanbul ignore if */
        if (!isNaN(newPage)) {
          if (newPage < 1) {
            newPage = 1;
          }

          if (newPage > pageCount) {
            newPage = pageCount;
          }
        }

        if (newPage !== currentPage) {
          this.$emit('change', newPage);
        }
      }
    },

    computed: {
      pagers() {
        const pagerCount = 7;

        const currentPage = Number(this.currentPage);
        const pageCount = Number(this.pageCount);

        let showPrevMore = false;
        let showNextMore = false;

        if (pageCount > pagerCount) {
          if (currentPage > pagerCount - 3) {
            showPrevMore = true;
          }

          if (currentPage < pageCount - 3) {
            showNextMore = true;
          }
        }

        const array = [];

        if (showPrevMore && !showNextMore) {
          const startPage = pageCount - (pagerCount - 2);
          for (let i = startPage; i < pageCount; i++) {
            array.push(i);
          }
        } else if (!showPrevMore && showNextMore) {
          for (let i = 2; i < pagerCount; i++) {
            array.push(i);
          }
        } else if (showPrevMore && showNextMore) {
          const offset = Math.floor(pagerCount / 2) - 1;
          for (let i = currentPage - offset ; i <= currentPage + offset; i++) {
            array.push(i);
          }
        } else {
          for (let i = 2; i < pageCount; i++) {
            array.push(i);
          }
        }

        this.showPrevMore = showPrevMore;
        this.showNextMore = showNextMore;

        return array;
      }
    },

    data() {
      return {
        current: null,
        showPrevMore: false,
        showNextMore: false,
        quicknextIconClass: 'dots-horizontal',
        quickprevIconClass: 'dots-horizontal'
      };
    }
  };
</script>
