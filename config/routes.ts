export default [
  { exact: false, path: '/', component: '@/simple/index',
    routes: [
      { exact: true, path: '/', component: '@/pages/index' },
      { exact: true, path: '/dashboard', component: '@/pages/dashboard/index' },
    ],
  },
];
