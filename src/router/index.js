import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '../views/LandingPage.vue';
import TestApi from '../views/Dashboard/TestApi.vue';
import updateDonatur from '../views/Dashboard/updateDonatur.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LandingPage,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: TestApi,
    },
    {
      path: '/updateDonatur:id',
      name: 'updateDonatur',
      component: updateDonatur,
    },
  ],
});

export default router;
