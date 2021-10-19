<template>
  <!-- 跳转页 -->
  <div class="box_login">
    <div class="contant_info">
      <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px" class="demo-dynamic">
        <el-form-item
          prop="email"
          label="账号"
          :rules="[
            { required: true, message: '账号不能为空', trigger: 'blur' }
          ]"
        >
          <el-input v-model="dynamicValidateForm.email"></el-input>
        </el-form-item>
        <el-form-item
          v-for="(domain, index) in dynamicValidateForm.domains"
          :label="'密码' + index"
          :key="domain.key"
          :prop="'domains.' + index + '.value'"
          :rules="{
            required: true, message: '密码不能为空', trigger: 'blur'
          }"
        >
          <el-input v-model="domain.value"></el-input><el-button @click.prevent="removeDomain(domain)">删除</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login('dynamicValidateForm')">登录</el-button>
          <el-button @click="addDomain">新增密码</el-button>
          <el-button @click="resetForm('dynamicValidateForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      dynamicValidateForm: {
        domains: [{
          value: ''
        }],
        email: ''
      }
    }
  },
  methods: {
    login(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$router.push('/home')
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    removeDomain(item) {
      var index = this.dynamicValidateForm.domains.indexOf(item)
      if (index !== -1) {
        this.dynamicValidateForm.domains.splice(index, 1)
      }
    },
    addDomain() {
      this.dynamicValidateForm.domains.push({
        value: '',
        key: Date.now()
      });
    },
  }
}
</script>

<style lang='less' scoped>
.box_login {
  width: 100%;
  height: 100%;
  .contant_info {
    width: 430px;
    height: 100%;
    margin: 290px auto 0px;
    /deep/.el-form {
      .el-form-item {
        .el-form-item__content {
          display: flex;
        }
      }
    }
  }
}
</style>
