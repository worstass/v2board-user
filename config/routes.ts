export default [
  { exact: true, path: '/', component: '@/pages/intro' },
  {
    path: '/', component: '@/layouts/basic',
    routes: [
      { exact: true, path: '/dashboard', component: 'dashboard' },
      { exact: true, path: '/404', component: '@/pages/404' },
    ],
  },
];
