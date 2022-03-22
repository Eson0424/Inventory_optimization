<template>
  <div class="inventory-model-page">
    <!-- search component -->
    <SearchComponent
      :isShowSku="true"
      :isShowTargetHouse="true"
      :isShowType="true"
      :isShowAverageInventory="true"
      :isShowTimePicker="true"
      :targetOptions="$enum.SELECTS_OPTIONS"
      :typeOptions="$enum.TYPE_OPTIONS"
      @searchHandle="searchHandle"
      @exportHandle="exportHandle"
    />

    <!-- line chart -->
    <LineChart ref="lineChart" :option="option" :chartTitle="chartTitle" />

    <!-- table data -->
    <TableComponent
      :tableData="tableData"
      :tableList="$enum.MODEL_TABLE_HEADER_DATA"
      :isShowOrder="true"
      :isShowOperate="true"
      :isShowPreviewBtn="true"
      class="inventory-model-page-table"
      @handlePreview="handlePreview"
    />
  </div>
</template>

<script>
import LineChart from "@/echarts/LineChart";
import SearchComponent from "@/components/share/SearchComponent";
import TableComponent from "@/components/share/TableComponent";
export default {
  name: "Model",
  data() {
    return {
      chartTitle: this.$enum.MODEL_TABLE_TITLE,
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
          boundaryGap: false,
          data: this.$store.state.model.xAxisData,
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
            data: this.$store.state.model.yAxisData,
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
      return this.$store.state.model.tableData;
    },

    yAxisData() {
      return this.$store.state.model.yAxisData;
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
    // 获取数据
    this.getBaseData();
  },
  methods: {
    // 获取数据
    getBaseData() {
      this.$store.dispatch("modelGetChartData");
      this.$store.dispatch("modelGetTableData");
    },

    // 查询操作
    searchHandle(form) {
      console.log("model");
      console.log(form);
      // 发送请求
      this.$store.dispatch("searchModelTableData");
    },

    // 预览操作
    handlePreview(row) {
      console.log("model");
      this.$store.dispatch("modelGetSingleData", {
        params: row.sku,
      });
    },
    // 导出操作
    exportHandle(data) {
      console.log("export");
      this.$store.dispatch("exportModelTableData");
    },
  },
};
</script>

<style lang="scss">
.inventory-model-page {
  height: 100%;
  display: flex;
  flex-direction: column;

  &-table {
    flex: 1;
  }
}
</style>
