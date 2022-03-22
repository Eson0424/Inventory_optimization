<template>
  <div class="nav-menu-component">
    <template v-for="navMenu in navMenus">
      <!-- 最后一级菜单 -->
      <el-menu-item
        v-if="!navMenu.childs && navMenu.entity"
        :key="navMenu.entity.id"
        :data="navMenu"
        :index="navMenu.entity.name"
        class="nav-menu-component-item"
      >
        <i :class="navMenu.entity.icon"></i>
        <span slot="title">{{ navMenu.entity.alias }}</span>
      </el-menu-item>

      <!-- 此菜单下还有子菜单 -->
      <el-submenu
        v-if="navMenu.childs && navMenu.entity"
        :key="navMenu.entity.id"
        :data="navMenu"
        :index="navMenu.entity.name"
        class="nav-menu-component-submenu"
      >
        <template slot="title">
          <i :class="navMenu.entity.icon"></i>
          <span> {{ navMenu.entity.alias }}</span>
        </template>
        <!-- 递归 -->
        <NavMenu :navMenus="navMenu.childs"></NavMenu>
      </el-submenu>
    </template>
  </div>
</template>

<script>
export default {
  name: "NavMenu",
  props: ["navMenus"],
};
</script>

<style lang="scss">
.nav-menu-component {
  .el-menu-item.is-active {
    background-image: linear-gradient(270.08deg, #076fff -0.43%, #2b99ff 100%);
    border-radius: 8px;
  }
}

.el-submenu__title.el-menu .nav-menu-component {
  padding: 0 10px;
}
</style>
