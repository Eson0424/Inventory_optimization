<template>
  <div class="sidebar-component" v-show="isShow">
    <el-menu
      text-color="#1F4173"
      active-text-color="#F7F7F7"
      :default-active="activeIndex"
      class="sidebar-component-el-menu"
      router
    >
      <NavMenu :navMenus="menuData"></NavMenu>
    </el-menu>
  </div>
</template>

<script>
import NavMenu from "./NavMenu";
export default {
  name: "SidebarComponent",
  props: {
    menuData: {
      type: Array,
      require: true,
      default: function () {
        return {};
      },
    },
    activeIndex: {
      type: String,
      require: true,
      default: "",
    },
  },
  components: {
    NavMenu,
  },
  data() {
    return {
      isShow: true,
    };
  },
  mounted() {
    this.$eventBus.$off("closeSideNav");
    this.$eventBus.$on("closeSideNav", () => {
      this.isShow = !this.isShow;
    });
  },
};
</script>

<style lang="scss">
.sidebar-component {
  width: 235px;
  min-width: 235px;
  height: calc(100vh - 90px);
  min-height: calc(100vh - 90px);
  box-sizing: border-box;
  padding: 10px;
  border-radius: 8px;
  overflow: hidden;
  overflow-y: auto;
  background-color: #fff;
  margin-right: 10px;

  &-el-menu.el-menu {
    height: 100%;
    border: none;
  }
}
</style>
