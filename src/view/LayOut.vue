<script setup>
import { ElContainer,ElHeader,ElMain,ElButton } from "element-plus"
import { ref,watch } from "vue"

//路由跳转
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

//搜索框部分

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
    :ellipsis="false"
    class="el-menu-vertical-demo"
    mode="horizontal"
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
          <div class="search-icon"><svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 24 24"><path fill="none" stroke="#333333" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314"/></svg></div>
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
    background-color: #fff;
    /* background-color: #555; */
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
  border:1px solid #4662d9;
  border-radius: 4px;
}
.search-content {
  width: 360px;
  height: 100%;
  border: none;
  padding: 0;
}
.search input:hover {
  border-color: #a7aab5;
}
.search input:focus {
  border: none;
}
.search-icon {
  position: absolute;
  top:3px;
  right:3px;
}
.user {
  background-color: #fff;
  border-radius: 50%;
  cursor: pointer;
}
</style>