<template>
  <div class="commodity-replenishment-page">
    <SearchComponent
      :isShowSku="true"
      :isShowTargetHouse="true"
      :isShowClassify="true"
      :isShowProduce="true"
      :isShowReplenishment="true"
      :targetOptions="$enum.SELECTS_OPTIONS"
      :typeOptions="$enum.TYPE_OPTIONS"
      @searchHandle="searchHandle"
      @exportHandle="exportHandle"
      @tempLoad="tempLoad"
      @order="order"
    />

    <TableComponent
      :tableData="tableData"
      :tableList="$enum.REPLENISHMENT_HEADER_TITLE"
      :isShowOperate="isShowOperate"
      :isShowEditBtn="true"
      @openBatchEditPopUp="openBatchEditPopUp"
      @changeHandle="changeHandle"
      class="commodity-replenishment-page-table"
    />

    <BatchEditPopUp @changeHandle="changeHandle" v-if="false" />
  </div>
</template>

<script>
import SearchComponent from "@/components/share/SearchComponent";
import TableComponent from "@/components/share/TableComponent";
import BatchEditPopUp from "@/components/share/BatchEditPopUp";
export default {
  name: "Replenishment",
  data() {
    return {
      isShowOperate: true,
    };
  },
  components: {
    SearchComponent,
    TableComponent,
    BatchEditPopUp,
  },
  computed: {
    tableData() {
      return this.$store.state.replenishment.tableData;
    },
  },
  created() {
    // 获取数据
    this.getBaseData();
  },
  methods: {
    openBatchEditPopUp() {
      console.log("openBatchEditPopUp");
    },
    // 获取数据
    getBaseData() {
      this.$store.dispatch("getReplenishmentTableData");
    },

    // 查询操作
    searchHandle(form) {
      // 发送请求
      // this.$store.dispatch();
    },
    // 导出操作
    exportHandle(data) {
      console.log("export");
    },
    // 模板下载
    tempLoad() {
      console.log("tempLoad");
    },
    // 下单指令
    order() {
      console.log("order");
    },

    // 修改操作
    changeHandle() {
      console.log("changeHandle");
    },
  },
};
</script>

<style lang="scss">
.commodity-replenishment-page {
  height: 100%;
  display: flex;
  flex-direction: column;

  &-table {
    flex: 1;
  }
}
</style>
