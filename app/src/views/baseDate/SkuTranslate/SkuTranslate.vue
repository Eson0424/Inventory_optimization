<template>
  <div class="baseDate-sku-translate-page">
    <SearchComponent :isShowSku="true" />

    <TableComponent
      :tableData="tableData"
      :tableList="$enum.SKU_TRANSLATE_HEADER_TITLE"
      :tableTitle="$enum.SKU_TRANSLATE_TABLE_TITLE"
      :isShowHeaderAdd="true"
      :isShowHeader="true"
      :isShowEditBtn="true"
      class="baseDate-warehouse-mapping-page-table"
    />
  </div>
</template>

<script>
import TableComponent from "@/components/share/TableComponent";
import SearchComponent from "@/components/share/SearchComponent";
export default {
  name: "SkuTranslate",
  data() {
    return {
      isShowOperate: true,
    };
  },
  components: {
    TableComponent,
    SearchComponent,
  },
  computed: {
    tableData() {
      return this.$store.state.skuTranslate.tableData;
    },
  },
};
</script>

<style lang="scss">
.baseDate-sku-translate-page {
  height: 100%;
  display: flex;
  flex-direction: column;

  &-table {
    flex: 1;
  }
}
</style>
