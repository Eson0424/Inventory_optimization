<template>
  <div class="baseDate-sku-team-mapping-page">
    <SearchComponent :isShowSku="true" />

    <TableComponent
      :tableData="tableData"
      :tableList="$enum.SKU_TEAM_MAPPING_MAPPING_HEADER_TITLE_FIRST"
      :isShowOperate="isShowOperate"
      :tableTitle="$enum.SKU_TEAM_MAPPING_MAPPING_TABLE_TITLE_FIRST"
      :isShowHeaderAdd="true"
      :isShowHeader="true"
      :isShowEditBtn="true"
      class="baseDate-warehouse-mapping-page-detail"
    />

    <MissDataComponent
      :tableList="$enum.SKU_TEAM_MAPPING_MAPPING_HEADER_TITLE_SECOND"
      :isShowOperate="isShowOperate"
    />
  </div>
</template>

<script>
import TableComponent from "@/components/share/TableComponent";
import SearchComponent from "@/components/share/SearchComponent";
import MissDataComponent from "@/components/share/MissDataComponent";
export default {
  name: "SkuTeamMapping",
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
      return this.$store.state.skuTeamMapping.tableData;
    },
  },
};
</script>

<style lang="scss">
.baseDate-sku-team-mapping-page {
  height: 100%;
  display: flex;
  flex-direction: column;

  &-table {
    flex: 1;
  }
}
</style>
