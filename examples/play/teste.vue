<template>
  <div>
    <el-container>
      <el-row type="flex">
        <el-col :span="24">
          <el-date-picker
            v-model="value3"
            :type="type"
            format="Week WW"
            placeholder="Pick a week"
            :allowHeader="true">
            <template slot="header">
              <div>
                <el-button @click="changeType">CLICK AKI</el-button>
              </div>
            </template>
          </el-date-picker>
        </el-col>      
      </el-row>
    </el-container>
  </div>
</template>
<script>
	export default {
    data() {
      return {
        value3: '',
        type: 'week'
      }
    },
    methods: {
      changeType () {
        let self = this
        switch (self.type) {
          case 'week':
            this.type = 'daterange'
          break
          case 'daterange':
            this.type = 'week'
          break
        }
        self.$forceUpdate()
      }
    }
	}
</script>
<style lang="scss"></style>