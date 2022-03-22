<template>
  <div v-if="isShowBatchEditPopUp" class="batch-edit-pop-up">
    <div class="batch-edit-pop-up-main">
      <div class="batch-edit-pop-up-main-header">
        <div class="batch-edit-pop-up-main-header-title">批量修改</div>
        <div class="batch-edit-pop-up-main-header-close" @click="closePopup">
          X
        </div>
      </div>

      <div class="batch-edit-pop-up-main-content">
        <!-- 目的仓库 -->
        <div class="batch-edit-pop-up-main-content-select">
          <div class="batch-edit-pop-up-main-content-title">目的仓库:</div>

          <MultipleSelect
            :label="optionsLabel"
            :selectOptions="$enum.SELECTS_OPTIONS"
            :mulSelectLoading="mulSelectLoading"
            :mulSelecteds="mulSelecteds"
            @update:updateMultipleSelect="(val) => (mulSelecteds = val)"
          />

          <el-checkbox
            class="batch-edit-pop-up-main-content-checkbox"
            v-model="targetChecked"
            >是否批量修改</el-checkbox
          >
        </div>

        <!-- 上架时间 -->
        <div class="">
          <p class="batch-edit-pop-up-main-content-title">上架时间:</p>
          <el-date-picker
            v-model="dateTime"
            type="date"
            placeholder="选择日期"
          ></el-date-picker>
          <el-checkbox
            class="batch-edit-pop-up-main-content-checkbox"
            v-model="dateChecked"
            >是否批量修改</el-checkbox
          >
        </div>

        <!-- 在售状态 -->
        <div class="">
          <div class="batch-edit-pop-up-main-content-title">在售状态:</div>
          <el-select v-model="stocking" filterable placeholder="请选择">
            <el-option label="全部" value="全部"></el-option>
            <!-- <el-option v-for="item in typeOptions" :key="item.value" :label="item.label" :value="item.value" :selected="item.selected"></el-option> -->
          </el-select>
          <el-checkbox
            class="batch-edit-pop-up-main-content-checkbox"
            v-model="stockingChecked"
            >是否批量修改</el-checkbox
          >
        </div>

        <!-- 生产周期： -->
        <div class="">
          <div class="batch-edit-pop-up-main-content-title">生产周期:</div>
          <el-select v-model="production" filterable placeholder="请选择">
            <el-option label="全部" value="全部"></el-option>
            <!-- <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" :selected="item.selected"></el-option> -->
          </el-select>
          <el-checkbox
            class="batch-edit-pop-up-main-content-checkbox"
            v-model="productionChecked"
            >是否批量修改</el-checkbox
          >
        </div>
      </div>
      <div class="batch-edit-pop-up-main-footer">
        <el-button type="primary" @click="handleDefinite">确定</el-button>
        <el-button @click="handleCancel">取消</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import MultipleSelect from "./MultipleSelect.vue";
export default {
  name: "BatchEditPopUp",
  data() {
    return {
      isShowBatchEditPopUp: true,
      mulSelectLoading: false,
      mulSelecteds: [],
      optionsLabel: "目的仓",
      targetChecked: true,
      dateChecked: true,
      stockingChecked: true,
      productionChecked: true,
      dateTime: "",
      stocking: "",
      production: "",
    };
  },

  components: {
    MultipleSelect,
  },

  computed: {},

  created() {},

  mounted() {},

  methods: {
    closePopup() {
      this.isShowBatchEditPopUp = !this.isShowBatchEditPopUp;
    },
    handleDefinite(param) {
      this.$emit("changeHandle", param);
    },
    handleCancel() {
      this.closePopup();
      // reset input
    },
  },
};
</script>

<style lang="scss">
.batch-edit-pop-up {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;

  &-main {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    padding: 25px;
    border-radius: 20px;

    &-header {
      display: flex;

      &-title {
        flex: 1;
        font-weight: bold;
        font-size: 16px;
        color: #333333;
      }

      &-close {
        cursor: pointer;
      }
    }

    &-content {
      padding: 25px;

      & > div {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      & > div:not(:last-child) {
        margin-bottom: 20px;
      }

      &-title {
        text-align: right;
        flex: 15% 0 0;
        font-size: 14px;
        line-height: 37px;
        color: #333333;
        margin-right: 15px;
      }

      &-checkbox {
        margin-left: 15px;
      }
    }

    &-footer {
      display: flex;
      justify-content: flex-end;
    }
  }
}
</style>
