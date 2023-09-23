import { ref, computed,h } from 'vue'
import { defineStore } from 'pinia'
import { ElNotification } from 'element-plus'

export const useUserStore = defineStore('User', () => {
 const User1=[
  {
    name:"麻衣",
    phone:"13703641830",
    password:"123456"
  },
  {
    name:"猪头",
    phone:"13713641831",
    password:"123456"
  }]
  const name=ref('');
  const check=(phone:string,password:string):boolean=>{
    let bol=false;
    User1.forEach(el=>{
      if (phone===el.phone) {
        if (password===el.password) {
          ElNotification({
            title: '登录成功',
            message: h('i', { style: 'color: teal' }, '跳转主页'),
          })
          localStorage.setItem("User",JSON.stringify(el));
          bol=true
          return true;
        }
       
      }
    })
   if (!bol) {
    ElNotification({
      title: '登录失败',
      message: h('i', { style: 'color: red' }, '请重新输入'),
    })
    return false
   }else{
    return true
   }
    
  }
 

  return { check,name }
})
