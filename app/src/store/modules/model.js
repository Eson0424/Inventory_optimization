import {
  reqModelGetTableData,
  reqModelGetChartData,
  reqModelGetSingleData,
  reqModelSearchTableData,
  reqModelExportTableData,
} from "@/api/inventory/model";

// model模块的数据
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
  ], // x轴数据

  yAxisData: [
    820, 932, 901, 934, 1290, 1330, 1320, 3333, 3333, 4444, 5555, 4432, 3233,
    5500, 3000, 2500, 1700, 4500, 5000,
  ],

  // 表格数据
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
  GET_MODEL_TABLE_DATA(state, data) {
    state.tableData = data;
  },
  GET_MODEL_CHART_DATA(state, data) {
    state.xAxisData = data.xAxisData;
    state.yAxisData = data.yAxisData;
  },
  GET_MODEL_SINGLE_DATA(state, data) {
    let arr = [
      620, 1032, 801, 734, 1090, 1030, 1220, 1333, 4333, 2444, 3555, 6432, 4233,
      4500, 4000, 4500, 2700, 3500, 6000,
    ];

    state.yAxisData = arr;
  },
  SEARCH_MODEL_TABLE_DATA(state, data) {
    state.tableData = data;
  },
};
const actions = {
  // 获取tableData数据
  async modelGetTableData({ commit }) {
    let result = await reqModelGetTableData();
    commit("GET_MODEL_TABLE_DATA", result);
  },
  async modelGetChartData({ commit }) {
    let result = await reqModelGetChartData();
    commit("GET_MODEL_CHART_DATA", result);
  },
  async modelGetSingleData({ commit }) {
    // let result = await reqModelGetSingleData();
    commit("GET_MODEL_SINGLE_DATA");
  },
  async searchModelTableData({ commit, params }) {
    let result = await reqModelSearchTableData(params);
    commit(SEARCH_MODEL_TABLE_DATA, result);
  },
  // 导出操作
  async exportModelTableData({ commit, params }) {
    let result = await reqModelExportTableData(params);
    // commit(EXPORT_MODEL_TABLE_DATA, result);
  },
};

export default {
  state,
  mutations,
  actions,
};