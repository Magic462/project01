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
      <el-header>Header</el-header>
      <el-main>Main</el-main>
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