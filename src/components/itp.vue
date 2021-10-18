<template>
  <div class="add_gist">
    <div class="save_stall">
      <el-button type="primary">保存</el-button>
    </div>
    <el-form label-width="110px" :model="formInline" :rules="rulesFrom" ref="formInline">
      <el-row>
        <el-col :span="6">
          <el-form-item label="单据编号">
            <el-input v-model="formInline.billNo"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="制单人">
            <el-input v-model="formInline.preparer"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="制单人工号">
            <el-input v-model="formInline.preparerCode"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="金额">
            <el-input v-model="formInline.amount"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6">
          <el-form-item label="mes产品线">
            <el-input v-model="formInline.mesProduct"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="plm产品线">
            <el-input v-model="formInline.plmProduct"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="内部用户">
            <el-input v-model="formInline.userName"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="例行检查配置">
            <el-input v-model="formInline.routineCheck"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-form-item label="备注">
            <el-input v-model="formInline.remack"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <el-button type="primary" @click="addInter()">添加型号</el-button>
    <div class="table_wrap">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="总览表型号" name="first">
          <div class="one_left">
            <el-table
              ref="multipleTable"
              :data="InternalModel"
              border
              tooltip-effect="dark"
              style="width: 100%"
              @row-click="rowClick"
              @selection-change="InternalSelection"
            >
              <el-table-column type="selection" width="40"> </el-table-column>
              <el-table-column label="内部型号" prop="name"></el-table-column>
            </el-table>
          </div>
          <div class="one_right">
            <el-table ref="singleTable" border :data="InspectionData" style="width: 100%">
              <el-table-column type="index" width="50" label="序号"></el-table-column>
              <el-table-column label="检验项" prop="inspection"></el-table-column>
              <el-table-column label="子需求选项" prop="requirement"></el-table-column>
              <el-table-column label="需求编码" prop="rementCode"></el-table-column>
              <el-table-column label="子需求配置" prop="subConfig"></el-table-column>
              <el-table-column label="备注">
                <template slot-scope="scope">
                  <el-input v-model="scope.row.remack"></el-input>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-tab-pane>
        <el-tab-pane label="例行检查" name="second">例行检查</el-tab-pane>
        <el-tab-pane label="确认检查" name="third">确认检查</el-tab-pane>
      </el-tabs>
    </div>
    <div>
      <el-dialog title="添加型号" :visible.sync="dialogVisible">
        <el-table ref="dialogTable" :data="tableData" border @selection-change="dialogSelection">
          <el-table-column type="selection" width="40"> </el-table-column>
          <el-table-column label="检验项" prop="inspection"></el-table-column>
          <el-table-column label="子需求选项" prop="requirement"></el-table-column>
          <el-table-column label="需求编码" prop="rementCode"></el-table-column>
          <el-table-column label="子需求配置" prop="subConfig"></el-table-column>
          <el-table-column label="备注">
            <template slot-scope="scope">
              <el-input v-model="scope.row.remack"></el-input>
            </template>
          </el-table-column>
        </el-table>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formInline: {
        billNo: null,
        preparer: null,
        preparerCode: null,
        amount: null,
        mesProduct: null,
        plmProduct: null,
        userName: null,
        routineCheck: null,
        remack: null,
      },
      rulesFrom: {},
      // table
      activeName: 'first',
      // 内部型号
      InternalModel: [
        { id: 1, name: '内部型号1' },
        { id: 2, name: '内部型号2' },
        { id: 3, name: '内部型号3' },
        { id: 4, name: '内部型号4' },
        { id: 5, name: '内部型号5' },
        { id: 6, name: '内部型号6' },
        { id: 7, name: '内部型号7' },
      ],
      InternalMultiple: [], // 内部型号勾选

      InspectionData: [
        // {
        //   id: 121,
        //   inspection: '检验项1',
        //   requirement: '子需求选项1',
        //   rementCode: '需求编码1',
        //   subConfig: '子需求配置1',
        //   remack: '',
        // },
        // {
        //   id: 122,
        //   inspection: '检验项2',
        //   requirement: '子需求选项2',
        //   rementCode: '需求编码2',
        //   subConfig: '子需求配置2',
        //   remack: '',
        // },
        // {
        //   id: 123,
        //   inspection: '检验项3',
        //   requirement: '子需求选项3',
        //   rementCode: '需求编码3',
        //   subConfig: '子需求配置3',
        //   remack: '',
        // },
      ],
      // 弹框
      tableData: [
        {
          id: 121,
          inspection: '检验项1',
          requirement: '子需求选项1',
          rementCode: '需求编码1',
          subConfig: '子需求配置1',
          remack: '',
        },
        {
          id: 122,
          inspection: '检验项2',
          requirement: '子需求选项2',
          rementCode: '需求编码2',
          subConfig: '子需求配置2',
          remack: '',
        },
        {
          id: 123,
          inspection: '检验项3',
          requirement: '子需求选项3',
          rementCode: '需求编码3',
          subConfig: '子需求配置3',
          remack: '',
        },
        {
          id: 124,
          inspection: '检验项4',
          requirement: '子需求选项4',
          rementCode: '需求编码4',
          subConfig: '子需求配置4',
          remack: '',
        },
        {
          id: 125,
          inspection: '检验项5',
          requirement: '子需求选项5',
          rementCode: '需求编码5',
          subConfig: '子需求配置5',
          remack: '',
        },
        {
          id: 126,
          inspection: '检验项6',
          requirement: '子需求选项6',
          rementCode: '需求编码6',
          subConfig: '子需求配置6',
          remack: '',
        },
        {
          id: 127,
          inspection: '检验项7',
          requirement: '子需求选项7',
          rementCode: '需求编码7',
          subConfig: '子需求配置7',
          remack: '',
        },
        {
          id: 128,
          inspection: '检验项8',
          requirement: '子需求选项8',
          rementCode: '需求编码8',
          subConfig: '子需求配置8',
          remack: '',
        },
        {
          id: 129,
          inspection: '检验项9',
          requirement: '子需求选项9',
          rementCode: '需求编码9',
          subConfig: '子需求配置9',
          remack: '',
        },
      ],
      dialogData: [], // 弹框勾选的数据
      dialogVisible: false,
    }
  },
  mounted() {},
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    },
    // 单击内部型号行数据
    rowClick(row, column, event) {
      console.log(row)
      if (!row.ins) {
        return
      }
      // 后台返回的数据
      let bbb = [
        {
          id: 121,
          inspection: '检验项1',
          requirement: '子需求选项1',
          rementCode: '需求编码1',
          subConfig: '子需求配置1',
          remack: '',
        },
        {
          id: 122,
          inspection: '检验项2',
          requirement: '子需求选项2',
          rementCode: '需求编码2',
          subConfig: '子需求配置2',
          remack: '',
        },
      ]
      bbb.forEach((item, index) => {
        item.remack = row.ins[index].remack
      })
      this.InspectionData = bbb
    },
    // 内部型号勾选框
    InternalSelection(val) {
      console.log(val, '内部型号勾选框')
      this.InternalMultiple = val
    },
    // 打开弹框
    addInter() {
      this.$message.closeAll()
      if (this.InternalMultiple.length == 0) {
        this.$message.error('请勾选需要添加的内部型号！')
        return
      }
      this.dialogVisible = true
      if (this.dialogData.length > 0) {
        this.$refs.dialogTable.clearSelection()
      }
    },
    // 弹框
    // 弹框勾选的数据
    dialogSelection(val) {
      console.log(val, '弹框勾选行数据')
      this.dialogData = val
    },
    // 确定
    dialogFormVisible() {
      if (this.dialogData.length == 0) {
        this.$message.error('请您添加行数据！')
        return
      }
      // 取出勾选的id和remack
      let list = []
      this.dialogData.forEach(item => {
        list = [
          ...list,
          {
            id: item.id,
            remack: item.remack,
          },
        ]
      })
      this.InternalModel.forEach(item => {
        this.InternalMultiple.forEach(res => {
          if (item.id == res.id) {
            item.ins = list
          }
        })
      })
      console.log(this.InternalModel)
      this.dialogVisible = false
      this.$refs.multipleTable.clearSelection()
    },
  },
}
</script>

<style>
.save_stall {
  padding: 5px 30px 10px 0;
  margin-bottom: 10px;
  border-bottom: 1px solid #ccc;
}
.table_wrap {
  padding: 10px;
}
#pane-first {
  display: flex;
}
.one_left {
  width: 200px;
}
.one_right {
  width: 85%;
  margin-left: 70px;
}
.el-dialog__wrapper .el-table {
  height: 400px;
  overflow-y: scroll;
}
</style>
