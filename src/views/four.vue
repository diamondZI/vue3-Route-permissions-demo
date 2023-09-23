<template>
  <div>
    <el-divider content-position="left">数据展示</el-divider>
  <KeepAlive>
    <el-table :data="datavalue" style="width: 100%">
      <el-table-column label="Date" width="150">
        <template #default="scope">
          <div style="display: flex; align-items: center">
            <el-icon><timer /></el-icon>
            <span style="margin-left: 10px">{{ scope.row.title }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="Name" width="150">
        <template #default="scope">
          <el-popover effect="light" trigger="hover" placement="top" width="auto">
            <template #default>
              <div>name: {{ scope.row.name }}</div>
              <div>address: {{ scope.row.address }}</div>
            </template>
            <template #reference>
              <el-tag>{{ scope.row.name }}</el-tag>
            </template>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="address" width="150">
        <template #default="scope">
          <div style="display: flex; align-items: center">
            <el-icon><timer /></el-icon>
            <span style="margin-left: 10px">{{ scope.row.address }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="address" width="150">
        <template #default="scope">
          <div style="display: flex; align-items: center">
            <el-icon><timer /></el-icon>
            <span style="margin-left: 10px">{{ scope.row.address }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="address" width="180">
        <template #default="scope">
          <div style="display: flex; align-items: center">
            <el-icon><timer /></el-icon>
            <span style="margin-left: 10px">{{ scope.row.address }}</span>
          </div>
        </template>
      </el-table-column>

     
    </el-table>
   
  </KeepAlive>
   
  </div>
  </template>
  <script setup lang='ts'>
  import {Userdata} from '@/stores/Userdata.js'
  import {ref,reactive,onMounted,computed} from 'vue'
  const form=reactive({
    value1:'0',
    value2:'2'
  })
  const Data=Userdata;
  const datavalue=ref(Data['0']['2'])
  const SETdata=()=>{
    datavalue.value=Data[form.value1][form.value2]
  }
  console.log(Data);
  onMounted(()=>{
    console.log();
    console.log(   Data[form.value1] );
  
  })
  </script>
  <style scoped>
   </style>
  