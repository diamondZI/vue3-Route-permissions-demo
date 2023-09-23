import { createRouter, createWebHistory } from 'vue-router'
import { ElNotification } from 'element-plus'
import {h} from 'vue';
const token=localStorage.getItem("User")
const tokenism=():boolean=>{
  let bol:boolean=true;
  if(token){
    let value=JSON.parse(token)  
    if (value.name==="麻衣") {
      bol=true
    }else{
      bol=false
    }
  }

  return bol
}
const message=()=>{
  ElNotification({
    title: '无法访问',
    message: h('i', { style: 'color: teal' }, '没有访问权限'),
  })
}
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component:() => import('../views/login.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/home.vue'),
      children:[  
        {
      path: '',
      name:'one',
      component: () => import('../views/one.vue'),
      beforeEnter: (to, from) => { 
        if (!tokenism()&&to.name==='one') {

          message()
          return { name: 'three' }
        }
      }
        },
    {
      path: 'two',
      name:'two',
      component: () => import('../views/two.vue'),
      beforeEnter: (to, from) => { 
        if (
          // 检查用户是否已登录
          !tokenism() 
        ) {
  
          message()
          // 将用户重定向到登录页面
          return { name: 'three' }
        }
      }
    },
    {
      path: 'three',
      name:'three',
      component: () => import('../views/Three.vue'),
       beforeEnter: (to, from) => { 
  if (
    // 检查用户是否已登录
    tokenism()&&to.name==='three'
  ) {
    console.log( tokenism() );
    
    // 将用户重定向到登录页面
    message()
    return { name: 'one' }
  }
}
                // reject the navigation
              
     },
    {
      path: 'four',
     name:'four',
      component: () => import('../views/four.vue'),
      beforeEnter: (to, from) => {
        if (
          tokenism()
        ) {
          message()
          return { name: 'one' }
        }

     },
    }]
    },
  
  ]
})


router.beforeEach((to, from) => {
console.log(tokenism());

  if (
    // 检查用户是否已登录
    !token &&
    // ❗️ 避免无限重定向
    to.name !== 'login'
  ) {
    // 将用户重定向到登录页面
    return { name: 'login' }
  }
})

export default router
