<template>
  <div class="commodity-export-history-orders-page">
    <SearchComponent
      :isShowOrder="true"
      :isShowSku="true"
      :isShowTargetHouse="true"
      :isShowDeliver="true"
      :isShowWarehouse="true"
      :targetOptions="$enum.SELECTS_OPTIONS"
      :typeOptions="$enum.TYPE_OPTIONS"
      @searchHandle="searchHandle"
      @exportHandle="exportHandle"
    />

    <TableComponent
      :tableData="tableData"
      :tableList="$enum.EXPORT_OF_HISTORY_ORDERS_HEADER_TITLE"
      class="commodity-export-history-orders-page-table"
    />
  </div>
</template>

<script>
import SearchComponent from "@/components/share/SearchComponent";
import TableComponent from "@/components/share/TableComponent";
export default {
  name: "ExportHistoryOrders",
  components: {
    SearchComponent,
    TableComponent,
  },
  computed: {
    tableData() {
      return this.$store.state.exportOfHistoryOrders.tableData;
    },
  },
  methods: {
    // 查询操作
    searchHandle(form) {
      // 发送请求
      // this.$store.dispatch();
    },
    // 导出操作
    exportHandle(data) {
      console.log("export");
    },
  },
};
</script>

<style lang="scss">
.commodity-export-history-orders-page {
  height: 100%;
  display: flex;
  flex-direction: column;

  &-table {
    flex: 1;
  }
}
</style>
