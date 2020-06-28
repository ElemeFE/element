<template>
    <div style="margin: 20px;">
        <el-radio-group v-model="radioValue"
                        disabled
                        @change="handleChangeRidio">
            <el-radio-button :label="item.value" :key="item.value" v-for="item in radioList">
                {{item.label}}
            </el-radio-button>
        </el-radio-group>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        radioValue: 1,
        radioList: [
          {
            value: 1,
            label: 'radio-1'
          },
          {
            value: 2,
            label: 'radio-2'
          },
          {
            value: 3,
            label: 'radio-3'
          },
          {
            value: 4,
            label: 'radio-4'
          }
        ]
      };
    },
    methods: {
      handleChangeRidio(item) {
        console.log(item)
      }
    }
  };
</script>
