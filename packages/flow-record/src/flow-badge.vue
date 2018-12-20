<template>
    <div class="badge" style="margin-bottom: 29px">
        <table style="width: 100%;">
            <tr>
                <td style="width: 70px;font-weight: bold;">样品流程</td>
                <td>
                    <span style="display: inline-block; border-top: 1px solid #eee; width: 100%;padding-left: 20px"></span>
                </td>
                <td style="width: 130px; text-align: right">
                    <i :id="fold_icons" class="el-icon-arrow-up"></i>
                    <a href="javascript:void(0)" @click="operation">收起/展开</a>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
  export default {
    data: function() {
      return {
        fold_icons: this.contentBoxId + '_fold_icon'
      };
    },
    methods: {
      operation: function() {
        let recordsObj = document.getElementById(this.contentBoxId);
        let iconObj = document.getElementById(this.fold_icons);
        let showValue = recordsObj.getAttribute('show');
        if (showValue === '1') {
          recordsObj.setAttribute('show', '0');
          iconObj.setAttribute('class', 'el-icon-arrow-down');
        } else {
          recordsObj.setAttribute('show', '1');
          iconObj.setAttribute('class', 'el-icon-arrow-up');
        }

      }
    },
    props: {
      'content-box-id': [String]
    }
  };
</script>

<style scoped>
    .badge {
        margin-bottom: 29px;
    }

    a,
    .el-icon-arrow-down,
    .el-icon-arrow-up {
        color: #67BCFF;
    }

    .el-icon-arrow-down,
    .el-icon-arrow-up {
        font-size: 18px;
        font-weight: bold;
        padding: 0 10px;
    }

</style>

