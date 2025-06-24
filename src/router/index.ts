import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/:pathMatch(.*)*',
      redirect: { name: 'FullLayout' },
    },
    {
      path: '/',
      name: 'FullLayout',
      component: () => import('../view/home.vue'),
    },
    {
      path: '/calculate1',
      name: 'calculate1',
      component: () => import('../view/calculate1.vue'),
    },
    {
      path: '/calculate2',
      name: 'calculate2',
      component: () => import('../view/calculate2.vue'),
    },
  ],
})
