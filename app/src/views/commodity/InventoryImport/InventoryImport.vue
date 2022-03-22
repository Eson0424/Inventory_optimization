<template>
  <div class="commodity-inventory-import-page">
    <SearchComponent
      :isShowUniquelyId="true"
      :isShowSku="true"
      :isShowTargetHouse="true"
      :targetOptions="$enum.SELECTS_OPTIONS"
      :typeOptions="$enum.TYPE_OPTIONS"
      @searchHandle="searchHandle"
      @exportHandle="exportHandle"
    />

    <TableComponent
      :tableData="tableData"
      :tableList="$enum.INVENTORY_IMPORT_HEADER_TITLE"
      class="commodity-inventory-import-page-table"
    />
  </div>
</template>

<script>
import SearchComponent from "@/components/share/SearchComponent";
import TableComponent from "@/components/share/TableComponent";
export default {
  name: "InventoryImport",
  components: {
    SearchComponent,
    TableComponent,
  },
  computed: {
    tableData() {
      return this.$store.state.inventoryImport.tableData;
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
.commodity-inventory-import-page {
  height: 100%;
  display: flex;
  flex-direction: column;

  &-table {
    flex: 1;
  }
}
</style>
