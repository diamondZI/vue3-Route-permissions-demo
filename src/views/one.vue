<template>
<div>
  <el-select v-model="form.value1" placeholder="please select your zone">
    <el-option label="Zone one" value="one" />
    <el-option label="Zone two" value="one1" />
  </el-select>
  <el-select v-model="form.value2" placeholder="please select your zone">
    <el-option label="Zone one" value="two" />
    <el-option label="Zone one" value="three" />
    <el-option label="Zone two" value="four" />
  </el-select>
  <el-button @click="SETdata()">确认</el-button>
  <el-divider content-position="left">数据展示</el-divider>

  <el-table :data="datavalue" style="width: 100%">
    <el-table-column type="index"  />
  
    <el-table-column prop="name" label="Date" width="280" />
    <el-table-column prop="title" label="Name" width="280" />
    <!-- <el-table-column prop="address" label="Address" /> -->
  </el-table>
 
</div>
</template>
<script setup lang='ts'>
import {usedataStore} from '@/stores/counter'
import {ref,reactive,onMounted,computed} from 'vue'
const usedata=usedataStore()
const form=reactive({
  value1:'one',
  value2:'two'
})
const Data:any=usedata.data
const datavalue=ref(Data['one']['two'])
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
@/stores/data2
