import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

/* Layout */
import Layout from "@/layout";

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [{
    path: "/login",
    component: () =>
      import ("@/views/login/index"),
    hidden: true,
  },

  {
    path: "/404",
    component: () =>
      import ("@/views/404"),
    hidden: true,
  },

  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    children: [{
      path: "dashboard",
      name: "Dashboard",
      component: () =>
        import ("@/views/dashboard/index"),
      meta: { title: "首页", icon: "el-icon-menu" },
    }, ],
  },
  {
    path: "/inventory",
    component: Layout,
    name: "Inventory",
    meta: { title: "库存情况统计分析", icon: "el-icon-menu" },
    children: [{
        path: "model",
        name: "Model",
        component: () =>
          import ("@/views/inventory/Model/Model.vue"),
        meta: { title: "模型库存统计", icon: "el-icon-menu" },
      },
      {
        path: "outOfStock",
        name: "OutOfStock",
        component: () =>
          import ("@/views/inventory/OutOfStock/OutOfStock.vue"),
        meta: { title: "缺货统计", icon: "el-icon-menu" },
      },
      {
        path: "salesForecast",
        name: "SalesForecast",
        component: () =>
          import ("@/views/inventory/SalesForecast/SalesForecast.vue"),
        meta: { title: "SKU分析", icon: "el-icon-menu" },
      },
      {
        path: "skuAnalyze",
        name: "SkuAnalyze",
        component: () =>
          import ("@/views/inventory/SkuAnalyze/SkuAnalyze.vue"),
        meta: { title: "销量预测", icon: "el-icon-menu" },
      },
    ],
  },
  {
    path: "/commodity",
    component: Layout,
    name: "Commodity",
    meta: { title: "补货指令", icon: "el-icon-menu" },
    children: [{
        path: "replenishment",
        name: "Replenishment",
        component: () =>
          import ("@/views/commodity/Replenishment/Replenishment.vue"),
        meta: { title: "补货指令", icon: "el-icon-menu" },
      },
      {
        path: "replenishmentHistory",
        name: "ReplenishmentHistory",
        component: () =>
          import (
            "@/views/commodity/ReplenishmentHistory/ReplenishmentHistory.vue"
          ),
        meta: { title: "历史补货查询", icon: "el-icon-menu" },
      },
      {
        path: "order",
        name: "Order",
        component: () =>
          import ("@/views/commodity/Order/Order.vue"),
        meta: { title: "下单指令", icon: "el-icon-menu" },
      },
      {
        path: "inventoryImport",
        name: "InventoryImport",
        component: () =>
          import ("@/views/commodity/InventoryImport/InventoryImport.vue"),
        meta: { title: "在途库存导入", icon: "el-icon-menu" },
      },
      {
        path: "exportOfHistoryOrders",
        name: "ExportOfHistoryOrders",
        component: () =>
          import (
            "@/views/commodity/ExportOfHistoryOrders/ExportOfHistoryOrders.vue"
          ),
        meta: { title: "历史订单导出", icon: "el-icon-menu" },
      },
    ],
  },
  {
    path: "/baseDate",
    component: Layout,
    name: "BaseDate",
    meta: { title: " 基础数据维护", icon: "el-icon-menu" },
    children: [{
        path: "warehouseMaintenance",
        name: "WarehouseMaintenance",
        component: () =>
          import (
            "@/views/baseDate/WarehouseMaintenance/WarehouseMaintenance.vue"
          ),
        meta: { title: "发货仓库维护", icon: "el-icon-menu" },
      },
      {
        path: "warehouseMapping",
        name: "WarehouseMapping",
        component: () =>
          import ("@/views/baseDate/WarehouseMapping/WarehouseMapping.vue"),
        meta: { title: "仓库映射关系", icon: "el-icon-menu" },
      },
      {
        path: "skuMapping",
        name: "SkuMapping",
        component: () =>
          import ("@/views/baseDate/SkuMapping/SkuMapping.vue"),
        meta: { title: "SKU映射关系", icon: "el-icon-menu" },
      },
      {
        path: "skuTeamMapping",
        name: "SkuTeamMapping",
        component: () =>
          import ("@/views/baseDate/SkuTeamMapping/SkuTeamMapping.vue"),
        meta: { title: "SKU组合映射", icon: "el-icon-menu" },
      },
      {
        path: "skuTrackTarget",
        name: "SkuTrackTarget",
        component: () =>
          import ("@/views/baseDate/SkuTrackTarget/SkuTrackTarget.vue"),
        meta: { title: "SKU追踪目标", icon: "el-icon-menu" },
      },
      {
        path: "skuTranslate",
        name: "SkuTranslate",
        component: () =>
          import ("@/views/baseDate/SkuTranslate/SkuTranslate.vue"),
        meta: { title: "SKU翻译", icon: "el-icon-menu" },
      },
      {
        path: "stockMapping",
        name: "StockMapping",
        component: () =>
          import ("@/views/baseDate/StockMapping/StockMapping.vue"),
        meta: { title: "额外备货设置", icon: "el-icon-menu" },
      },
      {
        path: "accountManage",
        name: "AccountManage",
        component: () =>
          import ("@/views/baseDate/AccountManage/AccountManage.vue"),
        meta: { title: "账号管理", icon: "el-icon-menu" },
      },
    ],
  },
  // 404 page must be placed at the end !!!
  { path: "*", redirect: "/404", hidden: true },
];

const createRouter = () =>
  new Router({
    mode: "history", // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes,
  });

const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;