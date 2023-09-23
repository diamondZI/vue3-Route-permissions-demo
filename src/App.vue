<template>
<div>

  <RouterView>
    
  </RouterView>
</div>
</template>
<script setup lang='ts'>

import {ref} from 'vue'
import {usedataStore} from '@/stores/counter';
const usedataStoreA=usedataStore();
const a=usedataStoreA.data
console.log(a.a);
</script>
<style scoped>
 </style>
@/stores/data2
