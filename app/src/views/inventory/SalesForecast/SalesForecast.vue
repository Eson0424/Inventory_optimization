<template>
  <div class="inventory-sales-forecast-page">
    <SearchComponent
      :isShowSku="true"
      :isShowTargetHouse="true"
      :isShowClassify="true"
      :targetOptions="$enum.SELECTS_OPTIONS"
      :typeOptions="$enum.TYPE_OPTIONS"
      @searchHandle="searchHandle"
      @exportHandle="exportHandle"
    />

    <LineChart ref="lineChart" :option="option" :chartTitle="chartTitle" />

    <TableComponent
      :tableData="tableData"
      :tableList="$enum.SALE_FORECAST_HEADER_DATA"
      class="inventory-sales-forecast-page-table"
      @handlePreview="handlePreview"
    />
  </div>
</template>

<script>
import LineChart from "@/echarts/LineChart";
import SearchComponent from "@/components/share/SearchComponent";
import TableComponent from "@/components/share/TableComponent";
export default {
  name: "SalesForecast",
  data() {
    return {
      chartTitle: this.$enum.SALE_FORECAST_TABLE_TITLE,
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
          type: "time",
          boundaryGap: false, //坐标轴两边留白策略 默认为 true，这时候刻度只是作为分隔线，标签和数据点都会在两个刻度之间的带(band)中间
          min: new Date("2021-1-1"),
          max: new Date("2022-1-1"),
          maxInterval: 3600 * 24 * 1000 * 7 * 4,
          // interval: 3600000000,
          // splitNumber: 24,
          axisLine: {
            //  坐标轴轴线相关设置。
            show: true, // 是否显示坐标轴轴线
          },
          axisLabel: {
            //  坐标轴刻度标签的相关设置。
            rotate: 0, //设置日期显示样式（倾斜度）
            formatter: function (value) {
              //在这里写你需要的时间格式
              var t_date = new Date(value);
              return [
                t_date.getFullYear(),
                t_date.getMonth() + 1,
                t_date.getDate(),
              ].join("-");
              // + " " + [t_date.getHours(), t_date.getMinutes()].join(':'); 时分
            },
          },
          axisTick: {
            show: false,
          },
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
            data: [
              //总数据
              820, 932, 901, 934, 1290, 1330, 1320, 3333, 3333, 4444, 5555,
              4432, 3233, 5500, 3000, 2500, 1700, 4500, 5000,
            ],
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
      return this.$store.state.salesForecast.tableData;
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
      // 发送请求
      this.$store.dispatch("searchOutOfStockTableData");
    },

    // 预览操作
    handlePreview(row) {
      this.$store.dispatch("modelGetSingleData", {
        params: row.sku,
      });
    },
    // 导出操作
    exportHandle(data) {
      this.$store.dispatch("searchOutOfStockTableData");
    },
  },
};
</script>

<style lang="scss">
.inventory-sales-forecast-page {
  height: 100%;
  display: flex;
  flex-direction: column;

  &-table {
    flex: 1;
  }
}
</style>
