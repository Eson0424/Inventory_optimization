<template>
  <div class="baseDate-warehouse-mapping-page">
    <SearchComponent :isShowSearchContent="true" />

    <TableComponent
      :tableData="tableData"
      :tableList="$enum.WAREHOUSE_MAPPING_HEADER_TITLE"
      :tableTitle="$enum.WAREHOUSE_MAPPING_TABLE_TITLE"
      :isShowOperate="isShowOperate"
      :isShowHeader="true"
      :isShowEditBtn="true"
      class="baseDate-warehouse-mapping-page-detail"
    />

    <MissDataComponent
      :tableList="$enum.WAREHOUSE_MAPPING_HEADER_TITLE"
      :isShowOperate="isShowOperate"
    />
  </div>
</template>

<script>
import TableComponent from "@/components/share/TableComponent";
import SearchComponent from "@/components/share/SearchComponent";
import MissDataComponent from "@/components/share/MissDataComponent";
export default {
  name: "WarehouseMapping",
  data() {
    return {
      isShowOperate: true,
      isShowMissData: false,
    };
  },
  components: {
    TableComponent,
    SearchComponent,
    MissDataComponent,
  },
  computed: {
    tableData() {
      return this.$store.state.warehouseMapping.tableData;
    },
  },
};
</script>

<style lang="scss">
.baseDate-warehouse-mapping-page {
  height: 100%;
  display: flex;
  flex-direction: column;

  &-detail {
    margin-bottom: 10px;
    flex: 1;
  }

  &-table {
    flex: 1;
  }
}
</style>
