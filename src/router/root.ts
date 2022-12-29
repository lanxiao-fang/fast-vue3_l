export default [
  {
    path: '/',
    component: () => import('/@/views/login/index.vue'),
  },
  {
    path: '/demo',
    component: () => import('/@/views/demo/index.vue'),
  },
  {
    path: '/table',
    component: () => import('/@/views/table/index.vue'),
  },
  {
    path: '/myTable',
    // name: 'myTable',
    component: () => import('/@/views/myTable/index.vue'),
    // redirect: '/myTable/baseTable',
    children: [
      {
        path: 'baseTable',
        // name: 'baseTable',
        component: () => import('/@/views/baseTable/index.vue'),
      },
      {
        path: 'renderTable',
        // name: 'baseTable',
        component: () => import('/@/views/renderTable/index.vue'),
      },
      //
      {
        path: 'paginationTable',
        // name: 'baseTable',
        component: () => import('/@/views/paginationTable/index.vue'),
      },
      {
        path: 'manyHeaderTable',
        // name: 'baseTable',
        component: () => import('/@/views/manyHeaderTable/index.vue'),
      },
    ],
  },
];
