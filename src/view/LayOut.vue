<script setup>
import {ElContainer,ElHeader,ElMain,ElButton} from "element-plus"
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
        <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
            <el-tab-pane label="User" name="first">
                <router-link to="/MainPart">MainPart</router-link>
            </el-tab-pane>
            <el-tab-pane label="Config" name="second">
                <router-link to="/UserPart">UserPart</router-link>
            </el-tab-pane>
            <el-tab-pane label="Role" name="third">Role</el-tab-pane>
            <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
        </el-tabs>
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