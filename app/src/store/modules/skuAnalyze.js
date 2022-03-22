// skuAnalyze 模块的数据
import {
  reqSkuAnalyzeGetTableData,
  reqSkuAnalyzeGetChartData,
  reqSkuAnalyzeGetSingleData,
} from "@/api/inventory/skuAnalyze";
const state = {
  // 折线图数据
  xAxisData: [
    "2021/11/02",
    "2021/11/09",
    "2021/11/16",
    "2021/11/23",
    "2021/11/30",
    "2021/12/01",
    "2021/12/08",
    "2021/12/15",
    "2021/12/22",
    "2021/12/29",
    "2021/11/09",
    "2021/11/16",
    "2021/11/23",
    "2021/11/30",
    "2021/12/01",
    "2021/12/08",
    "2021/12/15",
    "2021/12/22",
    "2021/12/29",
  ],

  yAxisData: [
    820, 932, 901, 934, 1290, 1330, 1320, 3333, 3333, 4444, 5555, 4432, 3233,
    5500, 3000, 2500, 1700, 4500, 5000,
  ],
  tableData: [{
      sku: "Eduardo",
      storehouse: "Big Kahuna Burger Ltd.",
      average: 703,
    },
    {
      sku: "Debra",
      storehouse: "Acme Co.",
      average: 816,
    },
    {
      sku: "Mitchell",
      storehouse: "Barone LLC.",
      average: 798,
    },
    {
      sku: "Arlene",
      storehouse: "Biffco Enterprises Ltd.",
      average: 185,
    },
    {
      sku: "Mitchell",
      storehouse: "Barone LLC.",
      average: 798,
    },
    {
      sku: "Mitchell",
      storehouse: "Barone LLC.",
      average: 798,
    },
    {
      sku: "Mitchell",
      storehouse: "Barone LLC.",
      average: 798,
    },
  ],
};
const mutations = {
  GET_SKU_ANALYZE_TABLE_DATA(state, data) {
    state.tableData = data;
  },
  GET_SKU_ANALYZE_CHART_DATA(state, data) {
    state.xAxisData = data.xAxisData;
    state.yAxisData = data.yAxisData;
  },
  GET_SKU_ANALYZE_SINGLE_DATA(state, data) {
    let arr = [
      1300, 1032, 1111, 734, 1090, 1030, 2222, 5000, 4333, 2444, 3555, 6000,
      4233, 4500, 4000, 4500, 2700, 3500, 6000,
    ];

    state.yAxisData = arr;
  },
};
const actions = {
  // 获取tableData数据
  async getSkuAnalyzeTableData({ commit }) {
    let result = await reqSkuAnalyzeGetTableData();
    commit("GET_SKU_ANALYZE_TABLE_DATA", result);
  },
  // 获取折线图数据
  async getSkuAnalyzeChartData({ commit }) {
    let result = await reqSkuAnalyzeGetChartData();
    commit("GET_SKU_ANALYZE_CHART_DATA", result);
  },
  async getSkuAnalyzeSingleData({ commit }) {
    // let result = await reqSkuAnalyzeGetSingleData();
    commit("GET_SKU_ANALYZE_SINGLE_DATA");
  },
};

export default {
  state,
  mutations,
  actions,
};