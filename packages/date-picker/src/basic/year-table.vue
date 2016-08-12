<template>
  <table @click="handleYearTableClick" class="el-year-table">
    <tbody>
    <tr>
      <td class="available" :class="{ current: year === startYear }">
        <a class="cell">{{ startYear }}</a>
      </td>
      <td class="available" :class="{ current: year === startYear + 1 }">
        <a class="cell">{{ startYear + 1 }}</a>
      </td>
      <td class="available" :class="{ current: year === startYear + 2 }">
        <a class="cell">{{ startYear + 2 }}</a>
      </td>
      <td class="available" :class="{ current: year === startYear + 3 }">
        <a class="cell">{{ startYear + 3 }}</a>
      </td>
    </tr>
    <tr>
      <td class="available" :class="{ current: year === startYear + 4 }">
        <a class="cell">{{ startYear + 4 }}</a>
      </td>
      <td class="available" :class="{ current: year === startYear + 5 }">
        <a class="cell">{{ startYear + 5 }}</a>
      </td>
      <td class="available" :class="{ current: year === startYear + 6 }">
        <a class="cell">{{ startYear + 6 }}</a>
      </td>
      <td class="available" :class="{ current: year === startYear + 7 }">
        <a class="cell">{{ startYear + 7 }}</a>
      </td>
    </tr>
    <tr>
      <td class="available" :class="{ current: year === startYear + 8 }">
        <a class="cell">{{ startYear + 8 }}</a>
      </td>
      <td class="available" :class="{ current: year === startYear + 9 }">
        <a class="cell">{{ startYear + 9 }}</a>
      </td>
      <td></td>
      <td></td>
    </tr>
    </tbody>
  </table>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      year: {
        type: Number
      }
    },

    computed: {
      startYear() {
        return Math.floor(this.year / 10) * 10;
      }
    },

    methods: {
      nextTenYear() {
        this.$emit('pick', this.year + 10, false);
      },

      prevTenYear() {
        this.$emit('pick', this.year - 10, false);
      },

      handleYearTableClick(event) {
        const target = event.target;
        if (target.tagName === 'A') {
          const year = parseInt(target.textContent || target.innerText, 10);
          this.$emit('pick', year);
        }
      }
    }
  };
</script>
