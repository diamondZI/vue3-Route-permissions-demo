<template>
<div> 
  <div class="common-layout">
    <el-container>
      <el-aside class="aside" >
    <h1 style="margin:20px">项目页面</h1>
       <ul>
      <li v-for="el in routerlist" @click="goto(el.path)">
        {{el.name}}</li>
      </ul>

      </el-aside>
      <el-container>
       
        <el-main>
         
          <RouterView></RouterView>
        </el-main>
      </el-container>
    </el-container>
  </div>

</div>
</template>
<script setup lang='ts'>
import {ref,reactive} from 'vue'
import {useRouter} from 'vue-router';
const router =useRouter()
const goto=(path:string)=>{
  router.push(path)
}
const routerlist=reactive([{
  name:"第一页面",
  path:"/home"
},{
  name:"第二页面",
  path:"/home/two"
},{
  name:"第三页面",
  path:"/home/three"
},{
  name:"第四页面",
  path:"/home/four"
}])
</script>
<style scoped>
.aside{
  box-shadow: 0 0 4px black ;
  background: #ffffff;
 transition: linear .4s;
  width: 200px;
  height: 100vh;
  text-align: center;
}
.aside ul {
  justify-content: space-around;
  height: 80vh;
  flex-direction: column;
  display: flex;
  list-style: none;
}
.aside ul li{
  margin: 20px;
  padding: 20px;
background: rgb(156, 242, 201);
}
.aside ul li:hover{
  cursor: pointer;
  margin: 20px;
  padding: 20px;
background: rgb(180, 232, 131);
}

 </style>
