<template>
  <div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column
        :prop="item.prop"
        :label="item.label"
        width="150"
        v-for="(item, index) in list"
        :key="index"
      >
        <el-table-column
          :prop="i.prop"
          :label="i.label"
          width="120"
          v-for="(i, m) in item.children"
          :key="m"
        >
        </el-table-column>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1517 弄',
          zip: 200333,
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1519 弄',
          zip: 200333,
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1516 弄',
          zip: 200333,
        },
      ],
      list: [
        {
          label: '日期',
          prop: 'date',
        },
        {
          label: '姓名',
          prop: 'name',
        },
        {
          label: '省份',
          prop: 'province',
        },
        {
          label: '市区',
          prop: 'city',
        },
        {
          label: '内部型号1',
          children: [
            {
              label: '市区',
              prop: 'city',
            },
            {
              label: '市区',
              prop: 'city',
            },
          ],
        },
        {
          label: '内部型号2',
          children: [
            {
              label: '市区',
              prop: 'city',
            },
            {
              label: '市区',
              prop: 'city',
            },
          ],
        },
        {
          label: '内部型号3',
          children: [
            {
              label: '市区',
              prop: 'city',
            },
            {
              label: '市区',
              prop: 'city',
            },
          ],
        },
      ],
    }
  },
}
</script>

<style scoped>
.el-table .cell .a {
  position: absolute;
  left: 0;
  top: 0px;
  width: 260px;
  height: 48px;
  border-right: 1px solid #abcdef;
  line-height: 48px;
  padding: 0px 10px;
}
.el-table .cell .b {
  position: absolute;
  left: 301px;
  top: 0px;
  height: 48px;
  width: 200px;
  line-height: 48px;
}
</style>
