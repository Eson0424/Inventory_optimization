<template>
  <div
    class="overview-component"
    :style="{ backgroundColor: styleOption.bgColor }"
  >
    <div class="overview-component-main">
      <div class="overview-component-main-info">
        <div class="main-info-count">{{ overview.overviewCount }}</div>
        <div class="main-info-title">{{ overview.overviewTitle }}</div>
      </div>
      <div class="overview-component-main-icon">
        <i :class="styleOption.bgIcon"></i>
      </div>
    </div>
    <router-link :to="overview.overviewUrl" class="overview-component-more">
      More info
      <!-- <i class="el-icon-caret-right"></i> -->
    </router-link>
  </div>
</template>

<script>
export default {
  name: "OverviewComponent",
  props: {
    overview: {
      type: Object,
      require: true,
    },
    styleOption: {
      type: Object,
      require: true,
    },
  },
};
</script>

<style lang="scss">
.overview-component {
  width: 22%;
  min-width: 125px;
  box-sizing: border-box;
  border-radius: 2px;

  &-main {
    display: flex;
    justify-content: space-between;
    padding: 15px;

    &-info {
      white-space: nowrap;
      color: #fff;

      .main-info {
        &-count {
          font-size: 38px;
          font-weight: bold;
          margin-bottom: 10px;
        }

        &-title {
          font-size: 16px;
          margin-bottom: 10px;
        }
      }
    }

    &-icon {
      align-self: flex-end;
      font-size: 80px;
      color: rgba(0, 0, 0, 0.15);
      transform: scale(1);
      transition: transform 700ms;
      position: relative;

      i {
        position: absolute;
        bottom: -10px;
        right: 0;
      }
    }
  }

  &-more {
    display: block;
    padding: 3px 0;
    color: rgba(255, 255, 255, 0.8);
    background: rgba(0, 0, 0, 0.1);
    text-align: center;
  }
}
.overview-component-more:hover {
  color: #fff;
  background: rgba(0, 0, 0, 0.15);
}
.overview-component:hover {
  .overview-component-main-icon {
    transform: scale(1.2);
  }
}
</style>
