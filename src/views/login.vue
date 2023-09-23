<template>
  <div>

    <div class="login">


      <el-form class="form" ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" label-width="120px">
        <el-form-item label="手机号:" prop="phone">
          <el-input v-model="ruleForm.phone" type="password" autocomplete="off" />
        </el-form-item>
        <el-form-item label="密码:" prop="checkPass">
          <el-input v-model="ruleForm.checkPass" show-password type="password" autocomplete="off" />
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm(ruleFormRef)">登录</el-button>
          <el-button @click="resetForm(ruleFormRef)">注册</el-button>
        </el-form-item>
      </el-form>

    </div>
  </div>
</template>
<script setup lang='ts'>
import router from '@/router'

import { ref, reactive } from 'vue'
const ruleFormRef = ref<any>()
import { useUserStore } from "@/stores/user";
const User = useUserStore();


const validatePass = (rule: any, value: any, callback: any) => {
  rule = /^1[3-9][0-9]{9}$/
  if (value === '') {
    callback(new Error('请输入手机号'))
  } else {
    if (!rule.test(ruleForm.phone)) {
      callback(new Error('请正确输入'))
    }
    callback()
  }
}
const validatePass2 = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请 输 入 密 码'))
  } else {
    callback()
  }
}

const ruleForm = reactive({
  phone: '13703641830',
  checkPass: '123456',

})

const rules = reactive<any>({
  phone: [{ validator: validatePass, trigger: 'blur' }],
  checkPass: [{ validator: validatePass2, trigger: 'blur' }],

})

const submitForm = (formEl: any | undefined) => {
  if (!formEl) return
  formEl.validate((valid: any) => {
    if (valid) {
      if (User.check(ruleForm.phone, ruleForm.checkPass)) {
        router.push(
            {name:'one'}
          )
         setTimeout(() => {
         location.reload()
         }, 400);
          

      } else {
        return
      }
      console.log('submit!')
    } else {
      console.log('error submit!')
      return false
    }
  })



}

const resetForm = (formEl: any | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>
<style scoped >
.login {
  border-radius: 30px;
  padding: 20px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 900px;
  height: 600px;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login .form {
  text-align: center;
  height: 80%;
  width: 400px;
  justify-content: space-around;
  flex-direction: column;
  display: flex;
}
</style>
