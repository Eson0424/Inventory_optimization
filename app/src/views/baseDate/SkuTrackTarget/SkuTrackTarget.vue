<template>
  <div class="baseDate-sku-track-target-page">
    <SearchComponent
      :isShowSku="true"
      :isShowTargetHouse="true"
      :isShowType="true"
      :isShowOrderDate="true"
      :isShowProductionCycle="true"
      :targetOptions="$enum.SELECTS_OPTIONS"
      :typeOptions="$enum.TYPE_OPTIONS"
    />

    <TableComponent
      :tableData="tableData"
      :tableList="$enum.SKU_TRACK_TARGET_HEADER_TITLE"
      :isShowOperate="isShowOperate"
      :tableTitle="$enum.SKU_TRACK_TARGET_TABLE_TITLE"
      :isShowEdit="true"
      :isShowHeaderAdd="true"
      :isShowHeader="true"
      :isShowEditBtn="true"
      class="baseDate-warehouse-mapping-page-detail"
    />

    <MissDataComponent
      :tableList="$enum.SKU_TRACK_TARGET_HEADER_TITLE"
      :isShowOperate="isShowOperate"
    />
  </div>
</template>

<script>
import TableComponent from "@/components/share/TableComponent";
import SearchComponent from "@/components/share/SearchComponent";
import MissDataComponent from "@/components/share/MissDataComponent";
export default {
  name: "SkuTrackTarget",
  data() {
    return {
      isShowOperate: true,
    };
  },
  components: {
    TableComponent,
    SearchComponent,
    MissDataComponent,
  },
  computed: {
    tableData() {
      return this.$store.state.skuTrackTarget.tableData;
    },
  },
};
</script>

<style lang="scss">
.baseDate-sku-track-target-page {
  height: 100%;
  display: flex;
  flex-direction: column;

  &-table {
    flex: 1;
  }
}
</style>
