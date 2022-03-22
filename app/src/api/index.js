import * as model from "./inventory/model";
import * as outOfStock from "./inventory/outOfStock";
import * as salesForecast from "./inventory/salesForecast";
import * as skuAnalyze from "./inventory/skuAnalyze";
import * as exportOfHistoryOrders from "./commodity/exportOfHistoryOrders";
import * as inventoryImport from "./commodity/inventoryImport";
import * as order from "./commodity/order";
import * as replenishment from "./commodity/replenishment";
import * as replenishmentHistory from "./commodity/replenishmentHistory";
import * as skuMapping from "./baseDate/skuMapping";
import * as accountManage from "./baseDate/accountManage";
import * as skuTeamMapping from "./baseDate/skuTeamMapping";
import * as skuTrackTarget from "./baseDate/skuTrackTarget";
import * as skuTranslate from "./baseDate/skuTranslate";
import * as stockMapping from "./baseDate/stockMapping";
import * as warehouseMaintenance from "./baseDate/warehouseMaintenance";
import * as warehouseMapping from "./baseDate/warehouseMapping";

export default {
  model,
  outOfStock,
  salesForecast,
  skuAnalyze,
  exportOfHistoryOrders,
  inventoryImport,
  order,
  replenishment,
  replenishmentHistory,
  skuMapping,
  accountManage,
  skuTeamMapping,
  skuTrackTarget,
  skuTranslate,
  stockMapping,
  warehouseMaintenance,
  warehouseMapping,
};
