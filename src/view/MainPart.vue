<script setup>
const leftData=[
  '人工智能',
  '关注',
  'Web前端',
  'Server后台',
  'iOS',
  'Android'
]
const midData = [
  
]
</script>


  <template>
  <el-row :gutter="6">
    <el-col :lg="3" class="left-col">
      <ul class="grid-content ep-bg-purple" style="padding: 0;">
        <li  v-for="(item,index) in leftData" :key="index" class="l-child">{{ item}}</li>
      </ul>
    </el-col>
    <el-col :lg="13" class="mid-col">
      <ul class="grid-content ep-bg-purple-light" style="padding: 0;">
        <li class="first">
          <div class="one" style="
           display: inline-block;
           font-size: 16px;
           margin-left: 15px;
          margin-right: 33px;
          ">推荐</div>
           
          <div class="two" style=" display: inline-block;
  font-size: 16px;">最新</div>
        </li>
        <li class="m-child"></li>
        <li class="m-child"></li>
        <li class="m-child"></li>
        <li class="m-child"></li>
        <li class="m-child"></li>
        <li class="m-child"></li>
        <li class="m-child"></li>
      </ul>
    </el-col>
    <el-col  :lg="4" class="rig-col">
      <div class="grid-content ep-bg-purple">
        
      </div>
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
   min-height: 90vh;/*//////////////////////最后删除掉///////////////// */
  background-color: aqua;
}
.el-col.left-col{
  margin-left: 7vw;
  margin-right: 1.5vw;
  /* min-height: 50vh; */
}
.left-col.grid-content,
.mid-col.grid-content,
.rig-col.grid-content{
  display: flex;
  flex-direction: column;
}

.l-child{
  background-color: red;
  height: 9vh;
  flex: 1;
  padding: 0.5vh;
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
}
.rig-col{
  margin-left: 1.5vw;
}
.first{
  display: flex;
  flex-direction: row;
  height: 48px;
  justify-content: left; /* 水平居中 */
  align-items: center; /* 垂直居中 */
}
/* .first.one
.first.two{
  display: inline-block;
  font-size: 20px;
}
.first.one{
  margin-left: 10px;
  margin-right: 10px;
} */
.m-child{
  background-color: green;
  display: flex;
  height: 18vh;
  flex: 1;
}
</style>