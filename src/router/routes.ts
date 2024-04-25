import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/AuthenticatedLayout.vue'),
    children: [
      { path: '', component: () => import('pages/DashboardPage.vue') },
    ],
  },
  {
    name: 'dashboard',
    path: '/dashboard',
    component: () => import('layouts/AuthenticatedLayout.vue'),
    children: [
      { path: '', component: () => import('pages/DashboardPage.vue') },
    ],
  },
  {
    name: 'properties-billings',
    path: '/properties-billings',
    component: () => import('layouts/AuthenticatedLayout.vue'),
    children: [
      { path: '', component: () => import('pages/PropertyBillingPage.vue') },
    ],
  },
  {
    name: 'payments',
    path: '/payments',
    component: () => import('layouts/AuthenticatedLayout.vue'),
    children: [{ path: '', component: () => import('pages/PaymentPage.vue') }],
  },
  {
    name: 'settings',
    path: '/settings',
    component: () => import('layouts/AuthenticatedLayout.vue'),
    children: [{ path: '', component: () => import('pages/SettingsPage.vue') }],
  },
  {
    path: '/auth',
    component: () => import('layouts/AuthLayout.vue'),
    children: [
      { path: 'signin', component: () => import('pages/SigninPage.vue') },
    ],
  },
  {
    path: '/print',
    component: () => import('layouts/PrintLayout.vue'),
    children: [{ path: '', component: () => import('pages/PrintPage.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
