// model page table data
const MODEL_TABLE_HEADER_DATA = ['sku', '目的仓库', '平均库存'];

// out of stock page table data
const OUT_OF_STOCK_HEADER_DATA = ['sku', '目的仓库', '缺货数量'];

// sku analysis page table data
const SKU_ANALYSIS_HEADER_DATA = ['sku', '目的仓库', '周均销量'];

// sale forecast page table data
const SALE_FORECAST_HEADER_DATA = ['日期', '2021/10/24', '2021/10/25', '2021/11/08', '2021/11/17', '2021/11/27', '2021/12/07', '2021/12/08', '2021/12/22', '2021/12/30', '2022/01/02', '2022/01/02', '2022/01/02', '2022/01/12', '2022/01/22', '2022/02/02', '2022/02/12'];

// replenishment page table data
const REPLENISHMENT_HEADER_TITLE = ['日期', 'SKU', '目标仓库', '目标库存', '类型', '库存余量', '生产在途数量', '运输在途数量', '预期销量', '目标日期', '需补货数量', '理论补货数量', '主观修正值', '补货数量', '销售状态'];

// replenishmentHistory page table data
const REPLENISHMENT_HISTORY_HEADER_TITLE = ['下单日期', 'SKU', '目标仓库', '产成日期', '预计入库日期', '目标库存', '第一周预测销量', '第二周预测销量', '第三周预测销量', '第四周预测销量', '最新目标库存', '在售状态']

// order page table data
const ORDER_HEADER_TITLE = ['日期', 'SKU', '类型', '目标库存', '通用补货数量', 'Unice需补货数量', '需补货总数量', '平滑通用需补货数量', '平滑Unice需补货数量', '平滑需补货总数量', '交付日期', '预计入库日期'];

// inventoryImport page table data
const INVENTORY_IMPORT_HEADER_TITLE = ['日期', '唯一标识', 'SKU', '目标仓库', '生产在途', '运输在途'];

// exportOfHistoryOrders page table data
const EXPORT_OF_HISTORY_ORDERS_HEADER_TITLE = ['日期', 'SKU', '类型', '目标仓库', '数量', '交付日期', '预计入库日期'];

// warehouseMaintenance page table data
const WAREHOUSE_MAINTENANCE_HEADER_TITLE = ['发货仓仓库名称', '补货周期（周）'];
const WAREHOUSE_MAINTENANCE_TABLE_TITLE = '发货仓库数据';

// warehouseMapping page table data
const WAREHOUSE_MAPPING_HEADER_TITLE = ['店铺', '国家', '地区', '归属仓库'];
const WAREHOUSE_MAPPING_TABLE_TITLE = '明细数据';

// skuMapping page table data
const SKU_MAPPING_MAPPING_HEADER_TITLE = ['订单SKU', '模型识别SKU'];
const SKU_MAPPING_MAPPING_TABLE_TITLE_FIRST = '明细数据';

// skuTeamMapping page table data
const SKU_TEAM_MAPPING_MAPPING_HEADER_TITLE_FIRST = ['外部SKU', '内部SKU', '数量'];
const SKU_TEAM_MAPPING_MAPPING_HEADER_TITLE_SECOND = ['外部SKU', '半成品SKU', '数量'];
const SKU_TEAM_MAPPING_MAPPING_TABLE_TITLE_FIRST = '明细数据';

// skuTrackTarget page table data
const SKU_TRACK_TARGET_HEADER_TITLE = ['模型识别的SKU', '目的仓', '类型', '上架时间', '在售状态', '生产周期（周）'];
const SKU_TRACK_TARGET_TABLE_TITLE = '明细数据';

// skuTranslate page table data
const SKU_TRANSLATE_HEADER_TITLE = ['SKU', '数量', '内部SKU', '对应数量'];
const SKU_TRANSLATE_TABLE_TITLE = '明细数据';

// stockMapping page table data
const STOCK_MAPPING_HEADER_TITLE = ['要素', '内容'];
const STOCK_MAPPING_TABLE_TITLE = '年备货设置';

// accountManage page table data
const ACCOUNT_MANAGE_HEADER_TITLE = ['账户名称', '仓库', '权限功能', '更新时间'];
const ACCOUNT_MANAGE_TABLE_TITLE = '账户管理';

export {
  MODEL_TABLE_HEADER_DATA,

  OUT_OF_STOCK_HEADER_DATA,

  SKU_ANALYSIS_HEADER_DATA,

  SALE_FORECAST_HEADER_DATA,

  REPLENISHMENT_HEADER_TITLE,

  REPLENISHMENT_HISTORY_HEADER_TITLE,

  ORDER_HEADER_TITLE,

  INVENTORY_IMPORT_HEADER_TITLE,

  EXPORT_OF_HISTORY_ORDERS_HEADER_TITLE,

  WAREHOUSE_MAINTENANCE_HEADER_TITLE,
  WAREHOUSE_MAINTENANCE_TABLE_TITLE,

  WAREHOUSE_MAPPING_HEADER_TITLE,
  WAREHOUSE_MAPPING_TABLE_TITLE,

  SKU_MAPPING_MAPPING_HEADER_TITLE,
  SKU_MAPPING_MAPPING_TABLE_TITLE_FIRST,

  SKU_TEAM_MAPPING_MAPPING_HEADER_TITLE_FIRST,
  SKU_TEAM_MAPPING_MAPPING_HEADER_TITLE_SECOND,
  SKU_TEAM_MAPPING_MAPPING_TABLE_TITLE_FIRST,

  SKU_TRACK_TARGET_HEADER_TITLE,
  SKU_TRACK_TARGET_TABLE_TITLE,

  SKU_TRANSLATE_HEADER_TITLE,
  SKU_TRANSLATE_TABLE_TITLE,

  STOCK_MAPPING_HEADER_TITLE,
  STOCK_MAPPING_TABLE_TITLE,

  ACCOUNT_MANAGE_HEADER_TITLE,
  ACCOUNT_MANAGE_TABLE_TITLE,
}