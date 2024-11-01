<script setup>
import { ElContainer,ElHeader,ElMain,ElButton } from "element-plus"
import { ref,watch,computed } from "vue"

//路由跳转
import { useRoute } from 'vue-router';
const activePath = ref('');
const route = useRoute(); 
// 侦听路由变化  
watch(  
  () => route.path,  
  (toPath) => {  
    activePath.value=toPath;
    // console.log(activePath.value);
  },  
  { immediate: true } // 立即执行一次回调，以处理初始路由  
);

//搜索框部分

//控制搜索框高亮
const isActive = ref(false);
//控制创作者中心的隐藏
const isHidden = ref(false);
// 控制搜索列表的显示
const showList = ref(false); 
//定义响应式placeholder值
const content=ref('大学智学网')
// 定义响应式的搜索查询和项目列表
const inputValue = ref('');
const items = ref([
  { id: 1, name: 'Apple' },
  { id: 2, name: 'ab' },
  { id: 3, name: 'acskj' },
  { id: 4, name: 'jdsva' },
  { id: 5, name: 'aknvv' },
  { id: 6, name: 'nkdjsvacd' },
]);

// 更新 placeholder 的函数
const handleClick = e =>{
  isActive.value = true;
  isHidden.value = true;
  content.value ='搜索你感兴趣的任何事'
}
const handleBlur = e =>{
  isActive.value = false;
  isHidden.value = false;
  content.value ='大学智学网'
    // 使用 setTimeout 防止 blur 事件在点击列表项时触发
    setTimeout(() => {
    showList.value = false;
  }, 100);
}
// 计算属性过滤项目
const filteredItems = computed(() => {
  if (!inputValue.value) return [];
  return items.value.filter(item =>
    item.name.toLowerCase().includes(inputValue.value.toLowerCase())
    //includes() 方法用于判断一个字符串是否包含另一个字符串
    //toLowerCase属性：转换为小写字母
  );
});
const handleInput= e =>{
  // listHidden.value = true;
}
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
      <span class="logo"><img src="../assets/Logo.png" alt="大学智学网"></span>
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
        <div class="search"
        :class="{ active: isActive }"
        >
        <input 
          type="text" 
          :placeholder="content" 
          class="search-content"
          @blur="handleBlur"
          @click="handleClick"
          @input="handleInput"
          @focus="showList = true"
          v-model="inputValue"
          >
          <ul v-if="showList && filteredItems.length > 0" class="search-list" :class="{ hidden:listHidden }">
            <li v-for="item in filteredItems" :key="item.id">{{ item.name }}</li>
          </ul>
          <div class="search-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 24 24"><path fill="none" stroke="#666666" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314"/></svg>
          </div>
        </div>
        <div class="creat" :class="{ hidden:isHidden }">创作者中心</div>
        <div class="user">用户</div>
      </el-header>
      <el-container>
        <el-main><router-view></router-view></el-main>
      </el-container>
    </el-container>
</template>

<style scoped>
:deep(.el-container){
  width: 100vw;
}

:deep(.el-header) {
    width: 100vw;
    height: 10vh;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:0 200px;
}

:deep(.el-main) {
    width: 100vw;
}

.logo {
  height: 100%;
  overflow: hidden;
}

.logo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index:100;
}

:deep(.el-menu) {
  /* width: 500px; */
  height: 100%;
  position: relative;
}

.search {
  position: relative;
  border:2px solid #ccced6;
  width: 240px;
  border-radius: 4px;
}

.search-content {
  width: 100%;
  height: 100%;
  border: none;
  padding: 0;
  padding-left:8px;
}

.search.active {
  border:2px solid #4662d9;
  transition:ease .4s;
  width: 360px;
}

.search input:focus {
  outline: none;
}

.search-icon {
  position: absolute;
  top:3px;
  right:3px;
}

.search-list {
  list-style: none;
  padding: 0;
  border:2px solid #ccced6;
  border-radius: 4px;
  width: 360px;
  max-width: 360px;
  background: white;
  position: absolute;
  top:30px;
  z-index: 100;
}

.search-list li {
  padding: 8px;
  cursor: pointer;
}

.search-list li:hover {
  background-color: #f0f0f0;
}

.creat {
  border-radius: 4px;
  background-color: #a1cc3d;
  flex-basis: 150px;
}

.creat.hidden {
  display:none;
}

.user {
  background-color: #5a4141;
  border-radius: 50%;
  cursor: pointer;
  color:#fff;
}
</style>