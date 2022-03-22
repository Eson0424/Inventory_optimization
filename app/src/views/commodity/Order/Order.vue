<template>
  <div class="commodity-order-page">
    <SearchComponent
      :isShowSku="true"
      :isShowTargetHouse="true"
      :isShowType="true"
      :isShowRequiredNum="true"
      :isShowDeliver="true"
      :isShowWarehouse="true"
      :targetOptions="$enum.SELECTS_OPTIONS"
      :typeOptions="$enum.TYPE_OPTIONS"
      @searchHandle="searchHandle"
      @exportHandle="exportHandle"
    />

    <TableComponent
      :tableData="tableData"
      :tableList="$enum.ORDER_HEADER_TITLE"
      class="commodity-order-page-table"
    />
  </div>
</template>

<script>
import SearchComponent from "@/components/share/SearchComponent";
import TableComponent from "@/components/share/TableComponent";
export default {
  name: "Order",
  components: {
    SearchComponent,
    TableComponent,
  },
  computed: {
    tableData() {
      return this.$store.state.replenishmentHistory.tableData;
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
.commodity-order-page {
  height: 100%;
  display: flex;
  flex-direction: column;

  &-table {
    flex: 1;
  }
}
</style>
