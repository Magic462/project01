<script setup>

</script>


  <template>
  <el-row :gutter="10">
    <el-col :offset="1" :xs="8" :sm="6" :md="4" :lg="30" :xl="1">
      <div class="grid-content ep-bg-purple" />
    </el-col>
    <el-col :offset="5" :xs="10" :sm="6" :md="8" :lg="10" :xl="11">
      <div class="grid-content ep-bg-purple-light" />
    </el-col>
    <el-col :xs="4" :sm="6" :md="8" :lg="4" :xl="11">
      <div class="grid-content ep-bg-purple" />
    </el-col>
  </el-row>

</template>

<style scoped>
.el-row{
  width: 100vw;
  flex: wrap;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 90vh;
  background-color: aqua;
}
</style>