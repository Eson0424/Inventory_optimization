<template>
  <div class="table-component">
    <template>
      <div v-if="isShowHeader" class="table-component-header">
        <p class="table-component-header-title">{{ tableTitle }}</p>
        <div>
          <el-button
            v-if="isShowHeaderAdd"
            type="primary"
            class="table-component-header-add"
            @click="onAddDate"
            >新 增</el-button
          >

          <el-button
            v-if="isShowEdit"
            type="primary"
            class="table-component-header-add"
            @click="onAddDate"
            >批量修改</el-button
          >
        </div>
      </div>
      <el-table :data="tableData" border :height="currentHeight">
        <el-table-column v-if="isShowOrder" label="序号" width="60px">
          <template slot-scope="scope">
            <span>{{ tableData.indexOf(scope.row) }}</span>
          </template>
        </el-table-column>

        <template v-for="(item, index) in tableList">
          <el-table-column :key="index" :label="item">
            <template slot-scope="scope">
              <span>{{ scope.row[Object.keys(scope.row)[index]] }}</span>
            </template>
          </el-table-column>
        </template>
        <el-table-column v-if="isShowOperate" label="操作">
          <template slot-scope="scope">
            <el-button
              v-if="isShowPreviewBtn"
              size="mini"
              class="table-component-btn"
              type="primary"
              @click="handlePreview(scope.$index, scope.row)"
              >预览</el-button
            >

            <el-button
              v-if="isShowEditBtn"
              size="mini"
              class="table-component-btn"
              type="primary"
              @click="handleEdit(scope.$index, scope.row)"
              >修改</el-button
            >

            <el-button
              v-if="isShowResetPwd"
              size="mini"
              class="table-component-btn"
              type="primary"
              @click="handleEdit(scope.$index, scope.row)"
              >重置密码</el-button
            >

            <el-button
              v-if="isShowDeleteBtn"
              size="mini"
              class="table-component-btn"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </template>
    <EditPopup
      :isShowEditPopup="isShowEditPopup"
      :editOptions="tableList"
      :editContent="editContent"
      :isAddOption="isAddOption"
      @changeIsShowEditPopup="changeIsShowEditPopup"
      @changeHandle="changeHandle"
    />
  </div>
</template>

<script>
import EditPopup from "./EditPopup.vue";
export default {
  name: "TableComponent",
  components: {
    EditPopup,
  },
  props: {
    // 序号
    isShowOrder: {
      type: Boolean,
      default: false,
    },

    // 操作
    isShowOperate: {
      type: Boolean,
      default: false,
    },

    // 数据
    tableData: {
      type: Array,
      require: true,
    },

    // 表格表头
    tableList: {
      type: Array,
      require: true,
    },

    // 表格标题
    tableTitle: {
      type: String,
      default: "",
    },

    // 是否显示表格标题
    isShowHeader: {
      type: Boolean,
      default: false,
    },
    // 显示编辑按钮
    isShowEdit: {
      type: Boolean,
      default: false,
    },

    // 显示修改按钮
    isShowEditBtn: {
      type: Boolean,
      default: false,
    },

    // 显示新增按钮
    isShowHeaderAdd: {
      type: Boolean,
      default: false,
    },

    // 显示预览按钮
    isShowPreviewBtn: {
      type: Boolean,
      default: false,
    },

    // 显示重置密码按钮
    isShowResetPwd: {
      type: Boolean,
      default: false,
    },

    // 显示删除按钮
    isShowDeleteBtn: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      currentHeight: 270,
      isShowEditPopup: false,
      isAddOption: false,
      editContent: [],
    };
  },
  mounted() {
    // 获取窗口高度
    let clientHeight = document.documentElement.clientHeight;

    // header 高度
    let headerHeight = 70;

    // searchComponent 高度
    let searchHeight = 80;

    // lineChart 高度
    let chartHeight = 440;

    this.currentHeight = `${
      clientHeight - headerHeight - searchHeight - chartHeight - 80
    }`;
  },
  methods: {
    openBatchEditPopUp() {
      console.log(11111);
    },
    handlePreview(index, row) {
      this.$emit("handlePreview", row);
    },
    handleEdit(index, row) {
      this.isShowEditPopup = true;
      this.editContent = row;
    },
    changeHandle(data) {
      console.log("handle");
      this.$emit("changeHandle", data);
    },
    handleDelete(index, row) {
      alert("删除");
      console.log(index, row);
    },

    onAddDate() {
      this.isShowEditPopup = true;
      this.isAddOption = true;
    },

    onSave() {
      alert("保存");
    },

    changeIsShowEditPopup(flag, isAdd, data) {
      this.isShowEditPopup = flag;
      this.isAddOption = flag;
      if (!isAdd) return;
      this.tableData.push(data);
    },
  },
};
</script>

<style lang="scss">
.table-component {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;

  &-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;

    &-title {
      font-weight: bold;
      font-size: 14px;
      line-height: 18px;
      color: #333333;
      align-self: flex-end;
    }
  }

  .has-gutter tr th {
    background-color: #f8fbff;
  }
}

.el-table th.el-table__cell > .cell {
  font-weight: bold;
  font-size: 12px;
  line-height: 20px;
  color: rgba(0, 0, 0, 0.85);
}

.el-table td > .cell span {
  font-size: 12px;
  line-height: 20px;
  color: #595959;
}

.el-table td > .cell .table-component-btn span {
  color: #fff;
}

.el-table .el-table__cell {
  padding: 5px 0;
}
.el-table th > .cell {
  white-space: nowrap;
}
</style>
