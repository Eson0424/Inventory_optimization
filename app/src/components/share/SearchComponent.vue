<template>
  <div class="search-component">
    <el-form :model="form" class="search-component-form">
      <!-- sku分类 -->
      <div v-if="isShowClassify" class="search-component-select sku-classify">
        <div class="search-component-title">SKU分类:</div>
        <el-select
          v-model="form.search_SKU_type"
          filterable
          placeholder="请选择"
        >
          <el-option
            v-for="item in skuOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            :selected="item.selected"
          >
          </el-option>
        </el-select>
      </div>

      <!-- 查询内容 -->
      <template v-if="isShowSearchContent">
        <el-input
          class="search-component-content"
          v-model="form.search_content"
          placeholder="输入查询内容"
        ></el-input>
      </template>

      <!-- 唯一标识 -->
      <template v-if="isShowUniquelyId">
        <el-input
          class="search-component-input uniquely-input"
          v-model="form.search_uniquely"
          placeholder="唯一标识"
        >
          <template slot="prepend">唯一标识:</template>
        </el-input>
      </template>

      <!-- sku -->
      <el-input
        v-if="isShowSku"
        class="search-component-input"
        v-model="form.search_sku"
        placeholder="输入SKU"
      >
        <template slot="prepend">SKU:</template>
      </el-input>

      <!-- 目的仓库 -->
      <div v-if="isShowTargetHouse" class="search-component-select">
        <div class="search-component-title">目的仓:</div>
        <MultipleSelect
          :label="optionsLabel"
          :selectOptions="targetOptions"
          :mulSelectLoading="mulSelectLoading"
          :mulSelecteds="mulSelecteds"
          @update:updateMultipleSelect="(val) => (mulSelecteds = val)"
        />
      </div>

      <!-- 类型 -->
      <div v-if="isShowType" class="search-component-select search-type-select">
        <div class="search-component-title">类型:</div>
        <el-select v-model="form.search_type" filterable placeholder="请选择">
          <el-option
            v-for="item in typeOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            :selected="item.selected"
          >
          </el-option>
        </el-select>
      </div>

      <!-- 需补货数 -->
      <template v-if="isShowRequiredNum">
        <el-input
          class="search-component-input"
          v-model="form.search_need_count"
          placeholder="请输入"
        >
          <template slot="prepend">需补货数:</template>
        </el-input>
      </template>

      <!-- 平均库存 -->
      <div v-if="isShowAverageInventory" class="search-component-average">
        <div class="search-component-title">平均库存:</div>
        <div class="search-component-average-content">
          <el-input
            class="search-component-average-content-first"
            v-model="form.search_average_small"
            placeholder="最小值"
          ></el-input>
          <div class="search-component-average-content-line">~</div>
          <el-input
            class="search-component-average-content-last"
            v-model="form.search_average_bigger"
            placeholder="最大值"
          ></el-input>
        </div>
      </div>

      <!-- 缺货数量 -->
      <div v-if="isShowOutOfStock" class="search-component-average">
        <div class="search-component-title">缺货数量:</div>
        <div class="search-component-average-content">
          <el-input
            class="search-component-average-content-first"
            v-model="form.search_lack_small"
            placeholder="最小值"
          ></el-input>
          <div class="search-component-average-content-line">~</div>
          <el-input
            class="search-component-average-content-last"
            v-model="form.search_lack_bigger"
            placeholder="最大值"
          ></el-input>
        </div>
      </div>

      <!-- 周均销量 -->
      <div v-if="isShowSkuAnalysis" class="search-component-average">
        <div class="search-component-title">周均销量:</div>
        <div class="search-component-average-content">
          <el-input
            class="search-component-average-content-first"
            v-model="form.search_week_avg_small"
            placeholder="最小值"
          ></el-input>
          <div class="search-component-average-content-line">~</div>
          <el-input
            class="search-component-average-content-last"
            v-model="form.search_week_avg_bigger"
            placeholder="最大值"
          ></el-input>
        </div>
      </div>

      <!-- 下单日期 -->
      <template v-if="isShowOrder">
        <div class="search-component-produce-date-picker">
          <p class="search-component-title">下单日期:</p>
          <el-date-picker
            v-model="form.search_order_date"
            type="date"
            placeholder="选择日期"
          >
          </el-date-picker>
        </div>
      </template>

      <!-- 上架时间 -->
      <template v-if="isShowOrderDate">
        <div class="search-component-produce-date-picker">
          <p class="search-component-title">上架时间:</p>
          <el-date-picker
            v-model="form.search_added_time"
            type="date"
            placeholder="选择日期"
          >
          </el-date-picker>
        </div>
      </template>

      <!-- 产成日期 -->
      <template v-if="isShowProduce">
        <div class="search-component-produce-date-picker">
          <p class="search-component-title">产成日期:</p>
          <el-date-picker
            v-model="form.search_produce_date"
            type="date"
            placeholder="选择日期"
          >
          </el-date-picker>
        </div>
      </template>

      <!-- 交付日期 -->
      <template v-if="isShowDeliver">
        <div
          class="search-component-produce-date-picker warehousing-date-picker"
        >
          <p class="search-component-title">交付日期:</p>
          <el-date-picker
            v-model="form.search_deliver_date"
            type="date"
            placeholder="选择日期"
          >
          </el-date-picker>
        </div>
      </template>

      <!-- 生产周期： -->
      <div v-if="isShowProductionCycle" class="search-component-select">
        <div class="search-component-title">生产周期:</div>
        <el-select
          v-model="form.production_cycle"
          filterable
          placeholder="请选择"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            :selected="item.selected"
          >
          </el-option>
        </el-select>
      </div>

      <!-- 预计入库日期 -->
      <template v-if="isShowWarehouse">
        <div
          class="search-component-produce-date-picker warehousing-date-picker"
        >
          <p class="search-component-title">预计入库日期:</p>
          <el-date-picker
            v-model="form.search_warehousing_date"
            type="date"
            placeholder="选择日期"
          >
          </el-date-picker>
        </div>
      </template>

      <!-- 目标日期 -->
      <template v-if="isShowReplenishment">
        <div class="search-component-produce-date-picker">
          <p class="search-component-title">目标日期:</p>
          <el-date-picker
            v-model="form.search_target_date"
            type="date"
            placeholder="选择日期"
          >
          </el-date-picker>
        </div>
      </template>

      <!-- 时间 -->
      <template v-if="isShowTimePicker">
        <div class="search-component-date-picker">
          <div class="search-component-title">时间:</div>
          <el-date-picker
            v-model="form.search_time"
            range-separator="~"
            type="daterange"
            :start-placeholder="form.search_time_start"
            :end-placeholder="form.search_time_end"
            :default-time="[form.search_time_current, '23:59:59']"
          >
          </el-date-picker>
        </div>
      </template>

      <el-button type="primary" @click="onSearch">查询</el-button>
      <el-button plain @click="onExport">导出</el-button>
      <el-button v-if="isShowReplenishment" plain @click="onTempLoad"
        >在途模板下载</el-button
      >
      <el-button v-if="isShowReplenishment" plain @click="onOrder"
        >生成下单指令</el-button
      >
      <el-button v-if="false" plain @click="onReimport">重新导入</el-button>
    </el-form>
  </div>
</template>

<script>
import MultipleSelect from "./MultipleSelect.vue";
export default {
  name: "SearchComponent",
  props: {
    targetOptions: {
      type: Array,
      default: function () {
        return [];
      },
    },
    typeOptions: {
      type: Array,
      default: function () {
        return [];
      },
    },
    skuOptions: {
      type: Array,
      default: function () {
        return [];
      },
    },
    options: {
      type: Array,
      default: function () {
        return [];
      },
    },
    isShowClassify: {
      type: Boolean,
      default: false,
    },
    isShowSearchContent: {
      type: Boolean,
      default: false,
    },
    isShowUniquelyId: {
      type: Boolean,
      default: false,
    },
    isShowSku: {
      type: Boolean,
      default: false,
    },
    isShowTargetHouse: {
      type: Boolean,
      default: false,
    },
    isShowType: {
      type: Boolean,
      default: false,
    },
    isShowRequiredNum: {
      type: Boolean,
      default: false,
    },
    isShowAverageInventory: {
      type: Boolean,
      default: false,
    },
    isShowOutOfStock: {
      type: Boolean,
      default: false,
    },
    isShowSkuAnalysis: {
      type: Boolean,
      default: false,
    },
    isShowOrder: {
      type: Boolean,
      default: false,
    },
    isShowProduce: {
      type: Boolean,
      default: false,
    },
    isShowDeliver: {
      type: Boolean,
      default: false,
    },
    isShowWarehouse: {
      type: Boolean,
      default: false,
    },
    isShowReplenishment: {
      type: Boolean,
      default: false,
    },
    isShowTimePicker: {
      type: Boolean,
      default: false,
    },
    isShowProductionCycle: {
      type: Boolean,
      default: false,
    },
    isShowOrderDate: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    MultipleSelect,
  },
  data() {
    return {
      mulSelectLoading: false,
      mulSelecteds: [],
      optionsLabel: "目的仓",
      form: {
        search_SKU_type: "", // SKU分类
        search_content: "", // 查询内容
        search_uniquely: "", // 唯一标识
        search_sku: "", // sku
        search_type: "", // 类型
        search_need_count: "", // 需补货数
        search_average_small: "", // 平均库存
        search_average_bigger: "", // 平均库存
        search_lack_small: "", // 缺货数量
        search_lack_bigger: "", // 缺货数量
        search_week_avg_small: "", // 周均销量
        search_week_avg_bigger: "", // 周均销量
        search_order_date: "", // 下单日期
        search_added_time: "", // 上架时间
        search_produce_date: "", // 产成日期
        search_deliver_date: "", // 交付日期
        production_cycle: "", // 生产周期
        search_warehousing_date: "", // 预计入库时间
        search_target_date: "", // 目标日期
        search_time: "", // 时间
      },
    };
  },

  created() {
    // 获取当前的时间
    this.getCurrentTime();
  },

  methods: {
    // 提交btn
    onSearch() {
      this.$emit("searchHandle", this.form);
    },

    // 导出btn
    onExport() {
      this.$emit("exportHandle");
    },

    // 在途模板下载
    onTempLoad() {
      this.$emit("tempLoad");
    },

    // 生成下单指令
    onOrder() {
      this.$emit("order");
    },

    // 重新导入
    onReimport() {
      alert("重新导入");
    },

    // 获取当前时间
    getCurrentTime() {
      let _this = this;
      let yy = new Date().getFullYear();
      let mm = new Date().getMonth() + 1;
      let dd = new Date().getDate();
      let hh = new Date().getHours();
      let mf =
        new Date().getMinutes() < 10
          ? "0" + new Date().getMinutes()
          : new Date().getMinutes();
      let ss =
        new Date().getSeconds() < 10
          ? "0" + new Date().getSeconds()
          : new Date().getSeconds();
      _this.form.search_time_start = yy + "-" + mm + "-" + dd;
      _this.form.search_time_end = yy + "-" + mm + "-" + (dd + 1);
      _this.form.search_time_current = hh + ":" + mf + ":" + ss;
      _this.form.search_produce_date = yy + "-" + mm + "-" + dd;
      _this.form.search_target_date = yy + "-" + mm + "-" + dd;
      _this.form.search_order_date = yy + "-" + mm + "-" + dd;
      _this.form.search_warehousing_date = yy + "-" + mm + "-" + dd;
    },
  },
};
</script>

<style lang="scss">
.search-component {
  padding: 20px;
  border-radius: 8px;
  background-color: #fff;
  display: flex;
  margin-bottom: 10px;

  &-form {
    width: 100%;
    display: flex;
  }

  &-title {
    font-size: 14px;
    line-height: 17px;
    white-space: nowrap;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #333333;
    padding: 0 0 0 10px;
    border: 1px solid #dcdfe6;
    border-right: none;
    border-radius: 4px 0 0 4px;
    height: 100%;
    box-sizing: border-box;
  }

  /* sku */
  &-input {
    margin-right: 20px;
    max-width: 150px;
    min-width: 130px;
  }

  /* 唯一标志 */
  &-input.uniquely-input {
    width: 165px;
    max-width: none;
  }

  /* 目的仓/类型/sku分类 */
  &-select {
    max-width: 250px;
    min-width: 165px;
    margin-right: 20px;
    display: flex;
    overflow: hidden;

    .el-input__inner {
      border-radius: 0 4px 4px 0;
      border-color: #dcdfe6;
    }
  }

  &-select.search-type-select {
    width: 140px;
  }

  /* sku 分类 */
  .sku-classify {
    width: 180px;
    max-width: none;
    min-width: none;
  }

  /* 平均库存 */
  &-average {
    max-width: 230px;
    min-width: 165px;
    margin-right: 20px;
    display: flex;
    flex-wrap: nowrap;
    box-sizing: border-box;

    &-content {
      display: flex;
      align-items: center;
      border-left: none;

      &-line {
        height: 100%;
        border: 1px solid #dcdfe6;
        border-left: none;
        border-right: none;
        box-sizing: border-box;
        line-height: 45px;
      }

      &-first {
        .el-input__inner {
          border-right: none;
        }
      }

      .el-input__inner {
        border-radius: 0;
      }

      &-last {
        .el-input__inner {
          border-radius: 0 4px 4px 0;
        }
      }
    }
  }

  /* 产成时间/目标时间/下单时间/预计入库时间 */
  &-produce-date-picker {
    width: 190px;
    display: flex;
    align-items: center;
    margin-right: 20px;

    .el-input__inner {
      padding: 0 15px;
      border-radius: 0 4px 4px 0;
    }

    .el-input__prefix {
      display: none;
    }
  }

  /* 预计入库时间 */
  .warehousing-date-picker {
    width: 215px;
  }

  /* 时间 */
  &-date-picker {
    max-width: 275px;
    min-width: 165px;
    margin-right: 20px;
    display: flex;

    .el-date-editor .el-range__icon {
      display: none;
    }
  }

  .el-select__tags {
    flex-wrap: nowrap;
    overflow: hidden;
  }

  .el-input__inner {
    border-left: none;
    border-color: #dcdfe6;
    font-size: 14px;
    line-height: 17px;
    color: #77849d;
    height: 47px;

    &:focus {
      border-color: #dcdfe6;
    }

    &:hover {
      border-color: #dcdfe6;
    }
  }

  .el-input-group__prepend {
    border-right: none;
    background-color: #fff;
    font-size: 14px;
    line-height: 17px;
    color: #333333;
    padding: 0 0 0 10px;
  }

  .el-select .el-input.is-focus .el-input__inner {
    border-color: #dcdfe6;
  }

  /* 查询内容 */

  &-content {
    margin-right: 20px;
    max-width: 150px;
    min-width: 130px;

    .el-input__inner {
      border: 1px solid #dcdfe6;
    }
  }
  .el-date-editor .el-range-separator {
    line-height: 47px;
  }
}
</style>
