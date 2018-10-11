<template>
  <div style="margin: 20px;">
        <el-table
          empty-text="common.loading"
          :data="tokenlistTableData(tag)"
          :cell-class-name="calcCellClassName"
          height="500px"
          header-cell-class-name="homepage__token-list__table-header">
          <el-table-column
            label="tokenlist.pairid"
            :formatter="pairIdFormatter"
            class-name="token-list__pair-id-cell"
            prop="pairId"/>
          <el-table-column
            label="tokenlist.price"
            :formatter="priceFormatter"
            :min-width="100"
            prop="lastPrice"/>
          <el-table-column
            label="tokenlist.change"
            :formatter="changeFormatter"
            :width="70"
            prop="changePercent24"/>
          <el-table-column
            label="tokenlist.24h-volume"
            :width="70">
            <template slot-scope="slotProps">
              {{ slotProps.row.volume_24 }}
              <span class="token-list__volume-cell--unit">{{ slotProps.row.pairId.split('_')[0] }}</span>
            </template>
          </el-table-column>
        </el-table>
  </div>
</template>
<script>
export default {
  components: {
  },
  data() {
    return {
      tokenListActiveTab: 'All',
      pairList: [{"pairId":"ETH_PAL","cashAddr":"","stockAddr":"","tags":["Hot","New"],"timeMs":"1538632994997","openPrice":"0.0023456789","lastPrice":"0.0034567890","volume24":"10.345","quantity24":"4000.345","change24":"0.0000345890","changePercent24":"-12.56","high24":"0.0023456789","low24":"0.0034567890"},{"pairId":"ETH_NPER","cashAddr":"","stockAddr":"","tags":["Hot"],"timeMs":"1537509062301","openPrice":"0.00014833","lastPrice":"0.00014176","volume24":"123.430","quantity24":"857435.276","change24":"-0.00000657","changePercent24":"-4.429","high24":"0.00015218","low24":"0.00013583"},{"pairId":"ETH_PAI","cashAddr":"","stockAddr":"","tags":["Hot"],"timeMs":"1537508313876","openPrice":"0.00008217","lastPrice":"0.00008893","volume24":"114.855","quantity24":"1338250.882","change24":"0.00000676","changePercent24":"8.227","high24":"0.00008921","low24":"0.00008182"},{"pairId":"ETH_MVC","cashAddr":"","stockAddr":"","tags":["Hot"],"timeMs":"1537507293195","openPrice":"0.00004088","lastPrice":"0.00004000","volume24":"103.474","quantity24":"2552594.912","change24":"-0.00000088","changePercent24":"-2.153","high24":"0.00004124","low24":"0.00003947"},{"pairId":"ETH_MT","cashAddr":"","stockAddr":"","tags":["Hot"],"timeMs":"1537508731236","openPrice":"0.00001648","lastPrice":"0.00001632","volume24":"99.604","quantity24":"6319305.862","change24":"-0.00000016","changePercent24":"-0.971","high24":"0.00001658","low24":"0.00001492"},{"pairId":"ETH_TTC","cashAddr":"","stockAddr":"","tags":["Hot"],"timeMs":"1537508821085","openPrice":"0.00024794","lastPrice":"0.00024897","volume24":"93.804","quantity24":"378071.263","change24":"0.00000103","changePercent24":"0.415","high24":"0.00025572","low24":"0.00024517"},{"pairId":"ETH_SNT","cashAddr":"","stockAddr":"","tags":["Hot"],"timeMs":"1537507803421","openPrice":"0.00016146","lastPrice":"0.00016315","volume24":"86.193","quantity24":"531621.919","change24":"0.00000169","changePercent24":"1.047","high24":"0.00016783","low24":"0.00015987"},{"pairId":"ETH_VITE","cashAddr":"","stockAddr":"","tags":["New"],"timeMs":"1537508821672","openPrice":"0.00016555","lastPrice":"0.00016357","volume24":"65.729","quantity24":"394021.017","change24":"-0.00000198","changePercent24":"-1.196","high24":"0.00017081","low24":"0.00016184"},{"pairId":"ETH_CTXC","cashAddr":"","stockAddr":"","tags":["New"],"timeMs":"1537508425959","openPrice":"0.00136611","lastPrice":"0.00139960","volume24":"54.556","quantity24":"40094.659","change24":"0.00003349","changePercent24":"2.451","high24":"0.00143179","low24":"0.00131595"},{"pairId":"ETH_MEDX","cashAddr":"","stockAddr":"","tags":["New"],"timeMs":"1537506322895","openPrice":"0.00001962","lastPrice":"0.00001861","volume24":"52.080","quantity24":"2702766.264","change24":"-0.00000101","changePercent24":"-5.148","high24":"0.00001962","low24":"0.00001836"},{"pairId":"ETH_MEDY","cashAddr":"","stockAddr":"","tags":["New"],"timeMs":"1537506322895","openPrice":"0.00001962","lastPrice":"0.00001861","volume24":"52.080","quantity24":"2702766.264","change24":"-0.00000101","changePercent24":"-5.148","high24":"0.00001962","low24":"0.00001836"},{"pairId":"ETH_MEDZ","cashAddr":"","stockAddr":"","tags":["New"],"timeMs":"1537506322895","openPrice":"0.00001962","lastPrice":"0.00001861","volume24":"52.080","quantity24":"2702766.264","change24":"-0.00000101","changePercent24":"-5.148","high24":"0.00001962","low24":"0.00001836"},{"pairId":"ETH_RTE","cashAddr":"","stockAddr":"","tags":["Hot","New"],"timeMs":"1537506322895","openPrice":"0.00002753","lastPrice":"0.00002808","volume24":"49.004","quantity24":"1760789.146","change24":"0.00000055","changePercent24":"1.998","high24":"0.00002882","low24":"0.00002696"},{"pairId":"ETH_CHSB","cashAddr":"","stockAddr":"","tags":["Hot","New"],"timeMs":"1537506322895","openPrice":"0.00003844","lastPrice":"0.00004534","volume24":"33.747","quantity24":"786972.756","change24":"0.00000690","changePercent24":"17.950","high24":"0.00004659","low24":"0.00003844"},{"pairId":"ETH_UUU","cashAddr":"","stockAddr":"","tags":["Hot","New"],"timeMs":"1537506322895","openPrice":"0.00000321","lastPrice":"0.00000298","volume24":"30.446","quantity24":"9881537.152","change24":"-0.00000023","changePercent24":"-7.165","high24":"0.00000325","low24":"0.00000291"},{"pairId":"ETH_LOOM","cashAddr":"","stockAddr":"","tags":[],"timeMs":"1537506322895","openPrice":"0.00038550","lastPrice":"0.00038201","volume24":"16.757","quantity24":"43693.576","change24":"-0.00000349","changePercent24":"-0.905","high24":"0.00039267","low24":"0.00037343"},{"pairId":"ETH_XUC","cashAddr":"","stockAddr":"","tags":[],"timeMs":"1537506322895","openPrice":"0.01863665","lastPrice":"0.01861789","volume24":"19.612","quantity24":"1051.034","change24":"-0.00001876","changePercent24":"-0.101","high24":"0.01875084","low24":"0.01859415"}],
    };
  },
  computed: {

  },
  created() {
  },
  mounted() {

  },
  methods: {
    tokenlistTableData(tag) {
      return this.pairList.filter((p) => {
        if (!tag || tag === 'All') {
          return true;
        }
        return p.tags && p.tags.includes(tag);
      });
    },
    calcCellClassName({
      row, column, rowIndex, columnIndex,
    }) {
      const base = 'homepage__token-list__table-cell ';
      if (column.property === 'changePercent24') {
        if (parseFloat(row.changePercent24) > 0) {
          return `${base}token-list__change-cell--up`;
        } else if (parseFloat(row.changePercent24) < 0) {
          return `${base}token-list__change-cell--down`;
        } else {
          return `${base}token-list__change-cell--flat`;
        }
      }
      return base;
    },
    pairIdFormatter(row, column, cellValue, index) {
      return cellValue;
    },
    changeFormatter(row, column, cellValue, index) {
      return cellValue;
    },
    priceFormatter(row, column, cellValue, index) {
      return cellValue;
    },
  },
};
</script>
