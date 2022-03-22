<template>
  <div
    v-if="isShowEditPopup && editOptions.length"
    class="edit-popup-component"
  >
    <div class="edit-popup-component-content">
      <div
        v-for="(option, index) in editOptions"
        :key="index"
        class="edit-popup-component-content-option"
      >
        <div class="edit-popup-component-content-option-title">
          {{ option }}:
        </div>
        <el-input
          v-model="editContent[index]"
          class="edit-popup-component-content-option-value"
        ></el-input>
      </div>
      <div class="edit-popup-component-content-btn">
        <el-button
          v-if="!isAddOption"
          size="mini"
          type="primary"
          @click="handleEdit(true)"
          >确认</el-button
        >

        <el-button
          v-if="isAddOption"
          size="mini"
          type="primary"
          @click="addOperate()"
          >添加</el-button
        >
        <el-button size="mini" @click="handleEdit(false)">取消</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EditPopupComponent",
  props: {
    // 显示隐藏
    isShowEditPopup: {
      type: Boolean,
      default: false,
    },
    // 增加
    isAddOption: {
      type: Boolean,
      default: false,
    },
    // 表格标题
    editOptions: {
      type: Array,
      default: [],
    },
    // 要修改的内容
    editContent: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      newOption: [],
      modelData: this.isAddOption ? this.newOption : this.editContent,
    };
  },

  methods: {
    handleEdit(flag) {
      if (flag) {
        // 确定修改
        this.$emit("changeHandle", this.modelData);
      } else {
        //  取消修改
      }
      this.$emit("changeIsShowEditPopup", false);
    },
    addOperate() {
      alert("添加成功");
      let optionData = this.editContent;
      this.$emit("changeIsShowEditPopup", false, true, optionData);
    },
  },
};
</script>
<style lang="scss">
.edit-popup-component {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);

  &-content {
    width: 50%;
    background-color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    border-radius: 10px;

    &-option {
      display: flex;
      align-items: center;
      margin-bottom: 10px;

      &-title {
        width: 150px;
        text-align: right;
        margin-right: 20px;
        white-space: nowrap;
      }
    }

    &-btn {
      margin-top: 20px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
  }
}
</style>
