<script setup>
import { ElContainer,ElHeader,ElMain,ElButton } from "element-plus"
import { ref,watch } from "vue"
import { useRoute } from 'vue-router';
const activePath = ref('');
const route = useRoute(); 
// 侦听路由变化  
watch(  
  () => route.path,  
  (toPath) => {  
    activePath.value=toPath;
    console.log(activePath.value);
  },  
  { immediate: true } // 立即执行一次回调，以处理初始路由  
);
</script>

<template>
  <!-- <div class="common-layout">
    <el-container>
      <el-header>Header</el-header>
      <el-main>Main</el-main>
    </el-container>
  </div> -->
  <el-container>
      <el-header>
  <el-menu
    :default-active="activePath"
    ellipsis
    class="el-menu-vertical-demo"
    mode="horizontal"
    :popper-offset="16"
    style="max-width: 600px"
    router
  >
    <el-menu-item index="/MainPart">Processing Center</el-menu-item>
    <el-menu-item index="/UserPart">Processing Center</el-menu-item>
    <!-- <el-menu-item index="3">Processing Center</el-menu-item> -->
    <!-- <el-menu-item index="4">Processing Center</el-menu-item> -->
  </el-menu>
      </el-header>
      <el-container>
        <el-main><router-view></router-view></el-main>
      </el-container>
    </el-container>
</template>

<style scoped>
 /* {
    width: 100vw;
    height: 100vh;
} */
:deep(.el-header) {
    width: 100vw;
    height: 20vh;
    background-color: #555;
}
:deep(.el-main) {
    width: 100vw;
}
</style>