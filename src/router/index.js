import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '../views/LandingPage.vue';
import updateDonatur from '../views/Dashboard/updateDonatur.vue';
import dashboardAdmin from '../views/Dashboard/dashboardAdmin.vue';

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
      component: dashboardAdmin,
    },
    {
      path: '/updateDonatur:id',
      name: 'updateDonatur',
      component: updateDonatur,
    },
  ],
});

export default router;
