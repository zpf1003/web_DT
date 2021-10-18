<template>
  <div class="el-home">
    <!-- 表格套表单 -->
    <div class="stall-top">
      <div class="increased" @click="addRow()">
        <el-button type="primary">新增行</el-button>
      </div>
      <div class="delete" @click="delData()">
        <el-button type="primary">删除行</el-button>
      </div>
    </div>
    <div class="tab_bottom">
      <el-form :rules="expense.rules" :model="expense" ref="expense">
        <el-table
          :data="expense.tableData"
          ref="table"
          tooltip-effect="dark"
          border
          style="width: 100%"
          @selection-change="selectRow"
        >
          <el-table-column type="selection" width="45" align="center"></el-table-column>
          <el-table-column label="单据编号" align="center">
            <template slot-scope="scope">
              <el-form-item :prop="'tableData.' + scope.$index + '.billNo'">
                <el-input v-model="scope.row.billNo" placeholder="请输入单据编号"></el-input>
              </el-form-item>
            </template>
          </el-table-column>
          <el-table-column label="物料编号" align="center">
            <template slot-scope="scope">
              <el-form-item :prop="'tableData.' + scope.$index + '.itemNumber'">
                <el-input v-model="scope.row.itemNumber" placeholder="请输入单据编号"></el-input>
              </el-form-item>
            </template>
          </el-table-column>
          <el-table-column label="物料代码" align="center">
            <template slot-scope="scope">
              <el-form-item :prop="'tableData.' + scope.$index + '.materialCode'">
                <el-input v-model="scope.row.materialCode" placeholder="请输入单据编号"></el-input>
              </el-form-item>
            </template>
          </el-table-column>
        </el-table>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rowNum: 1,
      selectlistRow: [], // 删除行
      expense: {
        rules: {},
        tableData: [],
      },
    }
  },
  methods: {
    // 新增行
    addRow() {
      this.rowNum += 1
      let list = {
        rowNum: this.rowNum,

        billNo: '',
        itemNumber: '',
        materialCode: '',
      }
      this.expense.tableData.push(list)
    },
    // 删除行
    delData() {
      if (this.selectlistRow.length === 0) {
        this.$message({
          type: 'error',
          message: '请您勾选行!',
        })
      }
      if (this.$route.query.id) {
        this.selectlistRow.forEach((item, index) => {
          this.expense.tableData.forEach((val, i) => {
            if (item.id) {
              if (item.id === val.id) {
                this.expense.tableData.splice(i, 1)
              }
            } else {
              if (val.rowNum === item.rowNum) {
                // i 为选中的索引
                this.expense.tableData.splice(i, 1)
              }
            }
          })
        })
      } else {
        for (let i = 0; i < this.selectlistRow.length; i++) {
          let val = this.selectlistRow
          val.forEach((val, index) => {
            this.expense.tableData.forEach((v, i) => {
              if (val.rowNum === v.rowNum) {
                this.expense.tableData.splice(i, 1)
              }
            })
          })
        }
      }

      // 关联单号，自定义的数组的时候，将单号push进去后，在删除行的时候，需要将这条单号给去掉
      this.arrNumbe = []
      this.expense.tableData.forEach((item, index) => {
        if (item.paymentDocNo && this.arrNumbe.indexOf(item.paymentDocNo) < 0) {
          this.arrNumbe.push(item.paymentDocNo)
        }
      })

      // 删除完数据之后清除勾选框
      this.$refs.table.clearSelection()
    },
    // 获取表格选中时的数据
    selectRow(val) {
      this.selectlistRow = val
    },
  },
}
</script>

<style scoped lang='css'>
.stall-top {
  display: flex;
  margin-bottom: 10px;
}
.increased {
  margin-right: 10px;
}
.el-form-item {
  margin-bottom: 0px;
}
</style>
