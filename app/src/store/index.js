import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters";
import app from "./modules/app";
import settings from "./modules/settings";
import user from "./modules/user";
import model from "./modules/model";
import outOfStock from "./modules/outOfStock";
import salesForecast from "./modules/salesForecast";
import skuAnalyze from "./modules/skuAnalyze";
import replenishment from "./modules/replenishment";
import replenishmentHistory from "./modules/replenishmentHistory";
import order from "./modules/order";
import inventoryImport from "./modules/inventoryImport";
import exportOfHistoryOrders from "./modules/exportOfHistoryOrders";
import warehouseMaintenance from "./modules/warehouseMaintenance";
import warehouseMapping from "./modules/warehouseMapping";
import skuMapping from "./modules/skuMapping";
import skuTeamMapping from "./modules/skuTeamMapping";
import skuTrackTarget from "./modules/skuTrackTarget";
import skuTranslate from "./modules/skuTranslate";
import stockMapping from "./modules/stockMapping";
import accountManage from "./modules/accountManage";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    app,
    settings,
    user,
    model,
    outOfStock,
    salesForecast,
    skuAnalyze,
    replenishment,
    replenishmentHistory,
    order,
    inventoryImport,
    exportOfHistoryOrders,
    warehouseMaintenance,
    warehouseMapping,
    skuMapping,
    skuTeamMapping,
    skuTrackTarget,
    skuTranslate,
    stockMapping,
    accountManage,
  },
  getters,
});

export default store;
