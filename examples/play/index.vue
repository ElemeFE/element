<template>
  <div style="margin: 20px;">
    <el-select v-model="selected">
      <template slot="suffix">
        <span style="color: black;">{{ available }}</span>
      </template>
      <el-option v-for="option in options" :key="option.warehouse" :value="option.warehouse">
        <span>{{ option.warehouse }}</span>
        <span style="float: right;">{{ option.available }}</span>
      </el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: "",
      options: [
        {
          warehouse: "01 - North York",
          available: 28,
        },
        {
          warehouse: "02 - Missisagua",
          available: 12,
        }
      ]
    };
  },

  computed: {
    available() {
      return this.selected ? this.options.filter((d) => d.warehouse === this.selected)[0].available : 0
    }
  }
};
</script>
