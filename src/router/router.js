import { createRouter, createWebHistory } from 'vue-router';
// import Home from './views/Home.vue'; // 假设你有 Home.vue 组件
// import About from './views/About.vue'; // 假设你有 About.vue 组件

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
  routes:[
    {
      path:'/',
      component: ()=>import('@/view/LayOut.vue'),
      redirect:'/UserPart',
      children:[
        {
          path:'/UserPart',
          component: ()=>import('@/view/UserPart.vue')
        },
        {
          path:'/MainPart',
          component: ()=>import('@/view/MainPart.vue')
        },
        // {
        //   path:'/SettingPart',
        //   component: ()=>import('@/views/SettingPart.vue')
        // },
        // {
        //   path:'/pages/notes/StudyNotes',
        //   component: ()=>import('@/views/pages/notes/StudyNotes.vue')
        // },
        // {
        //   path:'/pages/Algorithm/LeetCode',
        //   component: ()=>import('@/views//pages/Algorithm/LeetCode.vue')
        // },
        // {
        //   path:'/MainPart',
        //   component: ()=>import('@/views/MainPart.vue')
        // },
      ]
    },
  ]
});

export default router;