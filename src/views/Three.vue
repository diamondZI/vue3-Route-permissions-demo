<template>
  <div>
    <el-divider content-position="left">数据展示
    </el-divider>
  <KeepAlive>
    <el-table :data="datavalue" style="width: 100%">
      <el-table-column label="Date" width="180">
        <template #default="scope">
          <div style="display: flex; align-items: center">
            <el-icon><timer /></el-icon>
            <span style="margin-left: 10px">{{ scope.row.title }}</span>
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
      <el-table-column label="Name" width="180">
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
      <el-table-column label="Operations">
        <template #default="scope">
          <el-button size="small" 
           @click="handleEdit(scope.$index, scope.row)" >编辑</el-button
          >
          <el-button
            size="small"
            type="danger"
            @click="Delete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  
   </KeepAlive>
 
  <el-dialog
  v-model="dialogVisible"
  title="Tips"
  width="30%"
  :before-close="handleClose"
>
  
  <span>
    <label for="name">name</label>
 <el-input v-model="row.name"></el-input>
  </span>

  <span>
    <label for="title">title</label>
 <el-input v-model="row.title"></el-input>
  </span>
 
  <span>
    <label for="address">address</label>
 <el-input v-model="row.address"></el-input>
  </span>

  <template #footer>
    <span class="dialog-footer">
      <el-button @click="dialogVisible = false">Cancel</el-button>
      <el-button type="primary" @click="Confirm()">
        Confirm
      </el-button>
    </span>
  </template>
</el-dialog>
  </div>
  </template>
  <script setup lang='ts'>
    import {usedataStore} from '@/stores/counter';
  import {ref,reactive,h,onMounted,computed} from 'vue'
  import { ElMessage, ElMessageBox } from 'element-plus'
  const usedata =usedataStore()
  const data:any=usedata.data
  const dataV=()=>{
  let element=new Array();
    for (const key in  data) {
    for (const Twokey in  data[key]) {
     element=element.concat(data[key][Twokey])
    }
    }
    return element
  }
 
 
  const datavalue=ref(dataV())

  const Index=ref(0)
  const row=reactive({
  name:'name',
  title:'name',
  address:'name'
}
)
  function handleEdit(index:number, rowl:any) {
    // handleClose()
    dialogVisible.value = true
    for (const key in rowl) {
     row[key]=rowl[key]
    }
    Index.value=index
  }
  const dialogVisible = ref(false)
function SETHandleEdit() {

  for (const key in  datavalue.value[Index.value]) {
    datavalue.value[Index.value][key]=row[key]
  }
 
}
function Confirm() {
 
 for (const key in  datavalue.value[Index.value]) {
   datavalue.value[Index.value][key]=row[key]
 }
dialogVisible.value=false
}

function Delete(index:number, row:any){
  console.log(index);
  datavalue.value.splice(index,1)
}
const handleClose = (done: () => void,) => {
  ElMessageBox.confirm('Are you sure to close this dialog?')
    .then(() => {
      SETHandleEdit()
      done()
    })
    .catch(() => {
      // catch error
    })
}
  onMounted(()=>{
    setTimeout(() => {
  
    }, 1000);
console.log(dataV());

  
  })
  </script>
  <style scoped>
  .dialog-footer button:first-child {
    margin-right: 10px;
  }
   </style>
  @/stores/data2
