import Vue from 'vue';
import VueRouter from 'vue-router';

import HomePage from '@/views/HomePage.vue';
import LoginPage from '@/views/LoginPage.vue';

import ChatsPage from '@/views/ChatsPage.vue';
import OrganizationsPage from '@/views/OrganizationsPage.vue';
import OrganizationPage from '@/views/OrganizationPage.vue';
import ArticlesPage from '@/views/ArticlesPage.vue';
import ArticlePage from '@/views/ArticlePage.vue';
import EventsPage from '@/views/EventsPage.vue';
import EventPage from '@/views/EventPage.vue';


Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage,
    },
    {
      path: '/chats',
      name: 'ChatsPage',
      component: ChatsPage,
    },
    {
      path: '/organizations',
      name: 'OrganizationsPage',
      component: OrganizationsPage,
    },
    {
      path: '/organizations/:id',
      name: 'OrganizationPage',
      component: OrganizationPage,
      props: true,
    },
    {
      path: '/articles',
      name: 'ArticlesPage',
      component: ArticlesPage,
    },
    {
      path: '/articles/:id',
      name: 'ArticlePage',
      component: ArticlePage,
      props: true,
    },
    {
      path: '/events',
      name: 'EventsPage',
      component: EventsPage,
    },
    {
      path: '/events/:id',
      name: 'EventPage',
      component: EventPage,
      props: true,
    },

    // otherwise redirect to home
    { path: '*', redirect: '/' },
  ],
});

// eslint-disable-next-line consistent-return
router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login'];

  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  if (authRequired && !loggedIn) {
    return next('/login');
  }

  next();
});

export default router;
