<template>
  <div class="inventory-out-of-stock-page">
    <SearchComponent
      :isShowSku="true"
      :isShowTargetHouse="true"
      :isShowType="true"
      :isShowOutOfStock="true"
      :isShowTimePicker="true"
      :targetOptions="$enum.SELECTS_OPTIONS"
      :typeOptions="$enum.TYPE_OPTIONS"
      @searchHandle="searchHandle"
      @exportHandle="exportHandle"
    />

    <LineChart ref="lineChart" :option="option" :chartTitle="chartTitle" />

    <TableComponent
      :tableData="tableData"
      :tableList="$enum.OUT_OF_STOCK_HEADER_DATA"
      :isShowOrder="true"
      :isShowOperate="true"
      :isShowPreviewBtn="true"
      class="inventory-out-of-stock-page-table"
      @handlePreview="handlePreview"
    />
  </div>
</template>

<script>
import LineChart from "@/echarts/LineChart";
import SearchComponent from "@/components/share/SearchComponent";
import TableComponent from "@/components/share/TableComponent";
export default {
  name: "OutOfStock",
  data() {
    return {
      chartTitle: this.$enum.OUT_OF_STOCK_TABLE_TITLE,
      option: {
        // option 每个属性是一类组件
        title: {
          // 图标题
          text: "",
        },
        tooltip: {
          trigger: "axis", //提示框组件，坐标轴触发
        },
        //图例组件，
        legend: {
          data: [""],
        },
        //直角坐标系内绘图网格
        grid: {
          left: "3%", //grid 组件离容器左侧的距离
          right: "4%",
          bottom: "3%",
          containLabel: true, //grid 区域是否包含坐标轴的刻度标签
        },
        // 如果有多个同类组件，那么就是个数组。例如这里有三个 X 轴。
        xAxis: {
          type: "category",
          boundaryGap: false, //坐标轴两边留白策略 默认为 true，这时候刻度只是作为分隔线，标签和数据点都会在两个刻度之间的带(band)中间
          data: this.$store.state.outOfStock.xAxisData, // x轴数据
        },

        yAxis: [
          {
            // 纵轴标尺固定
            type: "value",
            show: true,
            scale: true,
            max: 6000,
            min: 0,
            splitNumber: 5,
            boundaryGap: [0.2, 0.2],
          },
        ],

        // 这里有多个系列，也是构成一个数组。[表示实际数据]
        series: [
          {
            name: "销量",
            type: "line",
            stack: "总量",
            data: this.$store.state.outOfStock.yAxisData,
            areaStyle: {
              color: "#0797ff",
              opacity: 0.1,
            },
            lineStyle: {
              width: 2,
              // type: 'dotted',
            },
          },
        ],
      },
    };
  },
  components: {
    LineChart,
    SearchComponent,
    TableComponent,
  },
  computed: {
    // 表格数据
    tableData() {
      return this.$store.state.outOfStock.tableData;
    },
    yAxisData() {
      return this.$store.state.outOfStock.yAxisData;
    },
  },
  watch: {
    yAxisData: {
      handler(n) {
        this.$refs.lineChart.changedData(n);
      },
      deep: true,
    },
  },
  created() {
    // 获取页面初始数据
    this.getBaseData();
  },
  methods: {
    // 获取页面初始数据
    getBaseData() {
      this.$store.dispatch("getOutOfStockTableData");
      this.$store.dispatch("getOutOfStockChartData");
    },
    // 查询操作
    searchHandle(form) {
      console.log("outOfStock");
      console.log(form);
      // 发送请求
      this.$store.dispatch("searchOutOfStockTableData");
    },

    // 预览操作
    handlePreview(row) {
      console.log("outOfStock");
      this.$store.dispatch("getOutOfStockSingleData", {
        params: row.sku,
      });
    },
    // 导出操作
    exportHandle(data) {
      console.log("export");
      this.$store.dispatch("exportOutOfStockTableData");
    },
  },
};
</script>

<style lang="scss">
.inventory-out-of-stock-page {
  height: 100%;
  display: flex;
  flex-direction: column;

  &-table {
    flex: 1;
  }
}
</style>
