// salesForecast 模块的数据
import {
  reqSaleForecastGetTableData,
  reqSaleForecastGetChartData,
  reqSaleForecastGetSingleData,
} from "@/api/inventory/salesForecast";
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
  tableData: [
    [
      "销量",
      2881,
      705,
      2722,
      4963,
      712,
      4758,
      112,
      3228,
      2521,
      3301,
      1226,
      548,
      644,
      1226,
      548,
      644,
    ],
    [
      "库存",
      1617,
      1218,
      2041,
      2407,
      3261,
      1271,
      2548,
      2943,
      1753,
      2435,
      1724,
      3478,
      175,
      1724,
      3478,
      175,
    ],
  ],
};
const mutations = {
  GET_SALE_FORECAST_TABLE_DATA(state, data) {
    state.tableData = data;
  },
  GET_SALE_FORECAST_CHART_DATA(state, data) {
    state.xAxisData = data.xAxisData;
    state.yAxisData = data.yAxisData;
  },
  GET_SALE_FORECAST_SINGLE_DATA(state, data) {
    let arr = [
      620, 1032, 1111, 734, 1090, 1030, 2222, 5000, 4333, 2444, 3555, 6000,
      4233, 4500, 4000, 4500, 2700, 3500, 6000,
    ];

    state.yAxisData = arr;
  },
};
const actions = {
  // 获取tableData数据
  async getSaleForecastTableData({ commit }) {
    let result = await reqSaleForecastGetTableData();
    commit("GET_SALE_FORECAST_TABLE_DATA", result);
  },
  // 获取折线图数据
  async getSaleForecastChartData({ commit }) {
    let result = await reqSaleForecastGetChartData();
    commit("GET_SALE_FORECAST_CHART_DATA", result);
  },
  async getSaleForecastSingleData({ commit }) {
    let result = await reqSaleForecastGetSingleData();
    commit("GET_SALE_FORECAST_SINGLE_DATA");
  },
};

export default {
  state,
  mutations,
  actions,
};