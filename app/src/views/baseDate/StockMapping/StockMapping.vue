<template>
  <div class="baseDate-stock-mapping-page">
    <TableComponent
      :tableData="tableData"
      :tableList="$enum.STOCK_MAPPING_HEADER_TITLE"
      :tableTitle="$enum.STOCK_MAPPING_TABLE_TITLE"
      :isShowOperate="isShowOperate"
      :isShowHeader="true"
      :isShowEditBtn="true"
      class="baseDate-warehouse-mapping-page-detail"
    />

    <TableComponent
      :tableList="$enum.SKU_MAPPING_MAPPING_HEADER_TITLE"
      :isShowOperate="isShowOperate"
      :tableTitle="tableTitleSecond"
      :isShowHeaderAdd="true"
      :isShowHeader="true"
      class="baseDate-warehouse-mapping-page-table"
    />
  </div>
</template>

<script>
import TableComponent from "@/components/share/TableComponent";
export default {
  name: "StockMapping",
  data() {
    return {
      isShowOperate: true,
      tableTitleSecond: "额外储备量",
    };
  },
  components: {
    TableComponent,
  },
  computed: {
    tableData() {
      return this.$store.state.stockMapping.tableData;
    },
  },
};
</script>

<style lang="scss">
.baseDate-stock-mapping-page {
  height: 100%;
  display: flex;
  flex-direction: column;

  &-table {
    flex: 1;
  }
}
</style>
