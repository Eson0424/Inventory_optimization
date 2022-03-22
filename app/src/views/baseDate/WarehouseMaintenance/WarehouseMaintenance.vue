<template>
  <div class="baseDate-warehouse-maintenance-page">
    <TableComponent
      :tableData="tableData"
      :tableList="$enum.WAREHOUSE_MAINTENANCE_HEADER_TITLE"
      :tableTitle="$enum.WAREHOUSE_MAINTENANCE_TABLE_TITLE"
      :isShowOperate="isShowOperate"
      :isShowHeader="true"
      :isShowEditBtn="true"
      :isShowHeaderAdd="true"
      class="baseDate-warehouse-maintenance-page-table"
    />
  </div>
</template>

<script>
import TableComponent from "@/components/share/TableComponent";
export default {
  name: "WarehouseMaintenance",
  data() {
    return {
      isShowOperate: true,
    };
  },
  components: {
    TableComponent,
  },
  computed: {
    tableData() {
      return this.$store.state.warehouseMaintenance.tableData;
    },
  },
};
</script>

<style lang="scss">
.baseDate-warehouse-maintenance-page {
  height: 100%;
  display: flex;
  flex-direction: column;

  &-table {
    flex: 1;
  }
}
</style>
