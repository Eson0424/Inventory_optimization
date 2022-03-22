<template>
  <div class="dashboard-container">
    <div class="dashboard-header">
      <div class="dashboard-header-title">
        <span class="dashboard-header-title-home">首页</span>
        <span class="dashboard-header-title-sub">总览</span>
      </div>
    </div>
    <div class="dashboard-main">
      <template v-for="(overview, index) in overviews">
        <OverviewComponent
          :key="index"
          :overview="overview"
          :styleOption="styleOptions[index]"
        />
      </template>
    </div>
  </div>
</template>

<script>
import OverviewComponent from "@/components/home/OverviewComponent";
import { mapGetters } from "vuex";

export default {
  name: "Dashboard",
  components: {
    OverviewComponent,
  },
  data() {
    return {
      overviews: [
        {
          overviewId: 1,
          overviewTitle: "最新库存量",
          overviewCount: 150,
          overviewUrl: "#",
        },
        {
          overviewId: 2,
          overviewTitle: "上周销量",
          overviewCount: 53,
          overviewUrl: "#",
        },
        {
          overviewId: 3,
          overviewTitle: "在售SKU数量",
          overviewCount: 44,
          overviewUrl: "#",
        },
        {
          overviewId: 4,
          overviewTitle: "新品数量",
          overviewCount: 65,
          overviewUrl: "#",
        },
      ],
      styleOptions: [
        {
          bgColor: "#00c0ef",
          bgIcon: "el-icon-goods",
        },
        {
          bgColor: "#00a65a",
          bgIcon: "el-icon-s-data",
        },
        {
          bgColor: "#f39c12",
          bgIcon: "el-icon-s-custom",
        },
        {
          bgColor: "#f56954",
          bgIcon: "el-icon-s-promotion",
        },
      ],
    };
  },
  computed: {
    ...mapGetters(["name"]),
  },
};
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    background-color: #fff;
    width: 100%;
    height: 100%;
    padding: 20px;
  }
  &-header {
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    box-shadow: 1px 1px 2px rgb(0 0 0 / 10%);
    margin-bottom: 20px;
    &-title-home {
      font-size: 24px;
      margin-right: 10px;
    }
    &-title-sub {
      font-size: 15px;
      padding-left: 10px;
      font-weight: 300;
      color: #999;
    }
  }
  &-main {
    display: flex;
    justify-content: space-around;
  }
}
</style>
