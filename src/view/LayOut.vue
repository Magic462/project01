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
      <span class="logo">我是logo</span>
        <el-menu
    :default-active="activePath"
    ellipsis
    class="el-menu-vertical-demo"
    mode="horizontal"
    :popper-offset="16"
    style="max-width: 600px"
    router
  >
    <el-menu-item index="/MainPart">MainPart</el-menu-item>
    <el-menu-item index="/UserPart">UserPart</el-menu-item>
    <el-menu-item index="/OneModule">分模块1</el-menu-item>
    <el-menu-item index="/TwoModule">分模块2</el-menu-item>
    <el-menu-item index="/ThreeModule">分模块3</el-menu-item>
    <!-- <el-menu-item index="/ThreeModule">分模块3</el-menu-item> -->
        </el-menu>
        <div class="search">
          <input type="input" placeholder="大学智学网" class="search-content">
          <div class="search-icon">搜索图标</div>
        </div>
        <div class="user">用户</div>
      </el-header>
      <el-container>
        <el-main><router-view></router-view></el-main>
      </el-container>
    </el-container>
</template>

<style scoped>
:deep(.el-header) {
    width: 100vw;
    height: 10vh;
    background-color: #555;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:0 200px;
}
:deep(.el-main) {
    width: 100vw;
}
.logo {
}
:deep(.el-menu) {
  height: 100%;
}
.search {
  position: relative;
}
.search-content {
  width: 360px;
  border-radius: 4px;
}
.search-icon {
  position: absolute;
  top:0;
  right:0;
}
.user {
  background-color: #fff;
  border-radius: 50%;
}
</style>