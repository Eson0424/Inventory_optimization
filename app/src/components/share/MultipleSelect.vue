<template>
  <el-select 
    multiple 
    filterable
    :disabled="disabled"
    v-model='selectedArr' 
    :loading="mulSelectLoading"
    :collapse-tags="collapseTags"
    placeholder='请选择'
    @change='changeSelect' 
    @remove-tag='removeTag'
  >

    <el-option
      v-if="selectOptions.length"
      label='全部'
      value='全部'
      @click.native='selectAll'
    ></el-option>

    <el-option
      v-for='item in selectOptions'
      :key='item.value'
      :label='item.label'
      :value='item.value'
    ></el-option>

  </el-select>
</template>

<script>
export default {
  name: 'MultipleSelect',
  data() {
    return {
      selectedArr: [],
    }
  },
  props:{
    // 选项
    selectOptions:{
      type:Array,
      default(){
        return []
      }
    },
    // 是否禁用
    disabled:{
      type:Boolean,
      default:false
    },
    // 已选中选项
    mulSelecteds:{
      type:Array,
      default(){
        return []
      }
    },
    mulSelectLoading:{
      type:Boolean,
      default:false
    },
    collapseTags:{
      type:Boolean,
      default:true   
    }
  },
  mounted() {
    this.selectAll();
  },
  methods: {
    selectAll() {
      if (this.selectedArr.length < this.selectOptions.length) {
        this.selectedArr = []
        this.selectOptions.map((item) => {
          this.selectedArr.push(item.value)
        })
        this.selectedArr.unshift('全部');
      } else {   // 取消全部
        this.selectedArr = [];
      }
      this.$emit('update:updateMultipleSelect',this.selectedArr);
    },
    changeSelect(val) {
      if (!val.includes('全部') && val.length === this.selectOptions.length) {
        this.selectedArr.unshift('全部')
      } else if (val.includes('全部') && (val.length - 1) < this.selectOptions.length) {
        this.selectedArr = this.selectedArr.filter((item) => { return item !== '全部'})
      }
      this.$emit('update:updateMultipleSelect',this.selectedArr);
    },
    removeTag(val) {
      if (val === '全部') {
        this.selectedArr = [];
        this.$emit('update:updateMultipleSelect',this.selectedArr);
      }
    }
  },
  watch:{
    mulSelecteds:{
      handler(newVal){
        this.selectedArr = newVal;
        if (!this.selectedArr.includes('全部') && 
             this.selectedArr.length && 
             this.selectedArr.length === this.selectOptions.length) 
        {
          this.selectedArr.unshift('全部')
        }
      },
      immediate: true
    }
  }
}
</script>
