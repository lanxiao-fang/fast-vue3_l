export default [
  {
    path: '/',
    component: () => import('@/pages/login/index.vue'),
  },
  {
    path: 'shi',
    component: () => import('@/pages/shi/index.vue'),
  },
  {
    path: 'demo',
    component: () => import('@/pages/demo/index.vue'),
  },
  {
    path: 'table',
    component: () => import('@/pages/table/index.vue'),
  },
];
