<template>
  <!-- 合并单元格 -->
  <div class="el-home">
    <el-table
      :data="tableData"
      :span-method="objectSpanMethod"
      border
      style="width: 100%; margin-top: 20px"
    >
      <el-table-column prop="id" label="OA" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名"> </el-table-column>
      <el-table-column prop="amount1" label="数值 1（元）"> </el-table-column>
      <el-table-column prop="amount2" label="数值 2（元）"> </el-table-column>
      <el-table-column prop="base" label="百分比"> </el-table-column>
      <el-table-column prop="amount3" label="数值 3（元）"> </el-table-column>
      <el-table-column prop="remarks" label="备注"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          id: '12987122',
          name: '王小虎',
          amount1: '234',
          amount2: '3.2',
          amount3: 10,
          base: '10%',
          remarks: '洒出你',
        },
        {
          id: '12987122',
          name: '王小虎',
          amount1: '165',
          amount2: '4.43',
          amount3: 12,
          base: '10%',
          remarks: '洒出你',
        },
        {
          id: '12987124',
          name: '王小虎',
          amount1: '324',
          amount2: '1.9',
          amount3: 9,
          base: '600%',
          remarks: '洒出你',
        },
        {
          id: '12987125',
          name: '王小虎',
          amount1: '621',
          amount2: '2.2',
          amount3: 17,
          base: '700%',
          remarks: '洒出你',
        },
        {
          id: '12987127',
          name: '王小虎',
          amount1: '539',
          amount2: '4.1',
          amount3: 15,
          base: '190%',
          remarks: '洒出你',
        },
        {
          id: '12987127',
          name: '王小虎',
          amount1: '546',
          amount2: '2.5',
          amount3: 16,
          base: '108%',
          remarks: '洒出你',
        },
        {
          id: '12987128',
          name: '王小虎',
          amount1: '569',
          amount2: '5.1',
          amount3: 24,
          base: '100%',
          remarks: '洒出你',
        },
        {
          id: '12987128',
          name: '王小虎',
          amount1: '569',
          amount2: '5.1',
          amount3: 24,
          base: '100%',
          remarks: '洒出你',
        },
        {
          id: '12987128',
          name: '王小虎',
          amount1: '569',
          amount2: '5.1',
          amount3: 24,
          base: '100%',
          remarks: '洒出你',
        },
        {
          id: '12987128',
          name: '王小虎',
          amount1: '569',
          amount2: '5.1',
          amount3: 24,
          base: '100%',
          remarks: '洒出你',
        },
      ],
    }
  },
  created() {
    this.setrowspans()
  },
  methods: {
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      // if (columnIndex === 0) {
      if (column.label === 'OA' || column.label === '百分比' || column.label === '备注') {
        return {
          rowspan: row.rowspan,
          colspan: 1,
        }
      }
    },
    setrowspans() {
      // 先给所有的数据都加一个v.rowspan = 1
      this.tableData.forEach(v => {
        v.rowspan = 1
      })
      // 双层循环
      for (let i = 0; i < this.tableData.length; i++) {
        // 内层循环，上面已经给所有的行都加了v.rowspan = 1
        // 这里进行判断
        // 如果当前行的id和下一行的id相等
        // 就把当前v.rowspan + 1
        // 下一行的v.rowspan - 1
        for (let j = i + 1; j < this.tableData.length; j++) {
          //此处可根据相同字段进行合并，此处是根据的id
          if (this.tableData[i].base === this.tableData[j].base) {
            this.tableData[i].rowspan++
            this.tableData[j].rowspan--
          }
        }
        // 这里跳过已经重复的数据
        i = i + this.tableData[i].rowspan - 1
      }
    },
  },
}
</script>

<style>
</style>
