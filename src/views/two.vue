<template>
  <div>
    <el-select v-model="form.value1" placeholder="please select your zone">
      <el-option label="Zone one" value="one" />
      <el-option label="Zone two" value="one1" />
    </el-select>
    <el-button @click="SETdata()">确认</el-button>
    <el-divider content-position="left">数据展示{{form.value1}}</el-divider>
    <el-table :data="datavalue" style="width: 100%">
      <el-table-column prop="name" label="Date" width="280" />
      <el-table-column prop="title" label="Name" width="280" />
      <el-table-column prop="address" label="Address" />
    </el-table>
  </div>
  </template>
  <script setup lang='ts'>
  import {usedataStore} from '@/stores/counter';

  import {ref,reactive,onMounted,computed} from 'vue'
  const form=reactive({
    value1:'one',
  })
  const  dataV=()=>{
  let element=new Array();
    for (const key in  Data[form.value1]) {
     element=element.concat(Data[form.value1][key])
    }
    return element
}
  const Data:any=usedataStore().data;
  const datavalue=ref(dataV())
  const SETdata=()=>{
    console.log(dataV());
    datavalue.value=dataV()
  }

  </script>
  <style scoped>
   </style>
  