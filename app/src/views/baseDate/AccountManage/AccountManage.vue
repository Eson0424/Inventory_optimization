<template>
  <div class="baseDate-account-manage-page">
    <TableComponent
      :tableData="tableData"
      :tableList="$enum.ACCOUNT_MANAGE_HEADER_TITLE"
      :isShowOperate="isShowOperate"
      :tableTitle="$enum.ACCOUNT_MANAGE_TABLE_TITLE"
      :isShowOrder="true"
      :isShowEditBtn="true"
      :isShowResetPwd="true"
      :isShowDeleteBtn="true"
      class="baseDate-account-manage-page-table"
    />
  </div>
</template>

<script>
import TableComponent from "@/components/share/TableComponent";
export default {
  name: "AccountManage",
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
      return this.$store.state.accountManage.tableData;
    },
  },
};
</script>

<style lang="scss">
.baseDate-account-manage-page {
  height: 100%;
  display: flex;
  flex-direction: column;

  &-table {
    flex: 1;
  }
}
</style>
