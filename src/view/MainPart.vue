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
          <div class="one">推荐</div>
           
          <div class="two">最新</div>
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
        <ul class="rig-1">
          <li class="r-first1"></li>
          <li class="r-child1"></li>
          <li class="r-child1"></li>
          <li class="r-child1"></li>
          <li class="r-child1"></li>
          <li class="r-child1"></li>
          <li class="r-first2"></li>
        </ul>
        <ul class="rig-2">
          <li class="r-first3"></li>
          <li class="r-child2"></li>
          <li class="r-child2"></li>
          <li class="r-child2"></li>
          <li class="r-child2"></li>
          <li class="r-child2"></li>
          <li class="r-first4"></li>
        </ul>
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
  /* background-color: aqua; */
  background-color: white;
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
.rig-col .grid-content{
  background-color: rgb(242, 243, 245);
}
.l-child{
  /* background-color: red; */
  height: 9vh;
  flex: 1;
  padding: 0.5vh;
  display: flex;
  justify-content: left; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  font-size: 18px;
  margin:3px  8px;
  border-radius: 5px;
}
.l-child:hover{
  background-color: hsl(0, 0%, 96%);
  cursor: pointer;
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
  border-bottom: 1px solid  hsl(0, 0%, 84%);
}
 .one{
  color: #a9a9a9;
  display: inline-block;
  font-size: 18px;
  margin-left: 25px;
  margin-right: 40px;
}
.two{
  display: inline-block;
  font-size: 18px;
  color: #a9a9a9;
} 
 .one:hover,
 .two:hover{
  cursor: pointer;
  color:rgb(30,128,255);
 }
.m-child{
  /* background-color: green; */
  display: flex;
  height: 18vh;
  flex: 1;
}
.m-child:hover{
  cursor: pointer;
  background-color: hsl(0, 0%, 96%) ;
}
.rig-1,
.rig-2{
  /* background-color: green; */
  min-height: 320px;
  background-color: white;
  flex: 1;
  padding: 0;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
}
.r-child1{
  flex: 1;
  height: 20px;
  display: flex;
  border-radius: 4px;
  margin: 2px 5px;
}
.r-child1:hover{
  background-color: hsl(0, 0%, 96%);
  cursor: pointer;
}
.r-first1{
  border-radius: 0px;
  height: 55px;
  border-bottom: 1px solid  hsl(0, 0%, 84%);
}
.r-first2{
  height: 45px;
  border-top: 1px solid hsl(0, 0%, 84%);
}
.r-child2{
  display: flex;
  flex: 1;
  border-radius: 4px;
  margin: 2px 5px;
}
.r-child2:hover{
  background-color: hsl(0, 0%, 96%);
  cursor: pointer;
}
.r-first3{
  height: 50px;
  border-bottom: 1px solid  hsl(0, 0%, 84%);
}
.r-first4{
  height: 45px;
  border-top: 1px solid hsl(0, 0%, 84%);
}
</style>