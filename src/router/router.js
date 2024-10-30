import { createRouter, createWebHistory } from 'vue-router';
// import Home from './views/Home.vue'; // 假设你有 Home.vue 组件
// import About from './views/About.vue'; // 假设你有 About.vue 组件

const router = createRouter({
  history: createWebHistory(),
  routes:[
    {
      path:'/',
      component: ()=>import('@/view/Layout/index.vue'),
    //   redirect:'/MainPart',
    //   children:[
    //     {
    //       path:'/AboutMyself',
    //       component: ()=>import('@/views/AboutMyself.vue')
    //     },
    //     {
    //       path:'/SettingPart',
    //       component: ()=>import('@/views/SettingPart.vue')
    //     },
    //     {
    //       path:'/pages/notes/StudyNotes',
    //       component: ()=>import('@/views/pages/notes/StudyNotes.vue')
    //     },
    //     {
    //       path:'/pages/Algorithm/LeetCode',
    //       component: ()=>import('@/views//pages/Algorithm/LeetCode.vue')
    //     },
    //     {
    //       path:'/MainPart',
    //       component: ()=>import('@/views/MainPart.vue')
    //     },
    //   ]
    },
  ]
});

export default router;