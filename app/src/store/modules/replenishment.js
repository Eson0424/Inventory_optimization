// replenishment 模块的数据
import { reqReplenishmentGetTableData } from "@/api/commodity/replenishment";
const state = {
  tableData: [
    [
      "2021/12/10",
      "直接销量",
      705,
      2722,
      "直接",
      712,
      4758,
      112,
      3228,
      "2021/12/10",
      3301,
      1226,
      548,
      644,
      "销售中",
    ],
  ],
};
const mutations = {
  GET_REPLENISHMENT_TABLE_DATA(state, data) {
    state.tableData = data;
  },
};
const actions = {
  // 获取tableData数据
  async getReplenishmentTableData({ commit }) {
    let result = await reqReplenishmentGetTableData();
    commit("GET_REPLENISHMENT_TABLE_DATA", result);
  },
};

export default {
  state,
  mutations,
  actions,
};