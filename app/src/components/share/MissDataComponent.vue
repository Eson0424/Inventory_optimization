<template>
  <div class="missing-data">
    <div class="missing-data-header">
      <div class="missing-data-header-title">
        缺失数据({{ missingDataCount }})
      </div>
      <div class="missing-data-header-btn" @click="showMissData">
        <span class="missing-data-header-btn-text">{{ btnText }}</span>
        <i class="missing-data-header-btn-icon el-icon-arrow-down"></i>
      </div>
    </div>
    <TableComponent
      v-show="isShowMissData"
      :tableList="tableList"
      :isShowOperate="isShowOperate"
      currentHeight="auto"
      class="missing-data-content"
    />
  </div>
</template>

<script>
import TableComponent from "@/components/share/TableComponent";
export default {
  name: "MissDataComponent",
  components: {
    TableComponent,
  },
  data() {
    return {
      isShowMissData: false,
      isShowOperate: true,
    };
  },
  props: {
    missingDataCount: {
      type: Number,
      default: 0,
    },
    tableList: {
      type: Array,
      default() {
        return [];
      },
    },
    footerData: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  computed: {
    btnText() {
      return this.isShowMissData ? "隐藏缺失数据" : "显示缺失数据";
    },
  },
  methods: {
    showMissData() {
      if (this.isShowMissData) {
        document.getElementsByClassName(
          "missing-data-header-btn-icon"
        )[0].style.transform = "rotateZ(0deg)";
      } else {
        document.getElementsByClassName(
          "missing-data-header-btn-icon"
        )[0].style.transform = "rotateZ(180deg)";
      }
      this.isShowMissData = !this.isShowMissData;
    },
  },
};
</script>

<style lang="scss">
.missing-data {
  width: 100%;
  background-color: #fff;
  box-sizing: border-box;
  border-radius: 8px;

  &-header {
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &-btn {
      cursor: pointer;

      &-text {
        margin-right: 10px;
      }

      &-icon {
        transition: transform 0.3s;
      }
    }
  }

  &-content {
    overflow: hidden;
    padding-top: 0;
    box-sizing: border-box;
  }

  .is-scrolling-none {
    display: none;
  }
}
</style>
