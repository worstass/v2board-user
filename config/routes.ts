export default [
  { exact: true, path: '/', component: '@/pages/intro' },
  {
    path: '/', component: '@/layouts/basic',
    routes: [
      { exact: true, path: '/dashboard', component: 'dashboard' },
      { exact: true, path: '/forget', component: 'forget' },
      { exact: true, path: '/invite', component: 'invite' },
      { exact: true, path: '/knowledge', component: 'knowledge' },
      { exact: true, path: '/login', component: 'login' },
      { exact: true, path: '/order', component: 'order' },
      { exact: true, path: '/plan', component: 'plan' },
      { exact: true, path: '/profile', component: 'profile' },
      { exact: true, path: '/register', component: 'register' },
      { exact: true, path: '/subscribe', component: 'subscribe' },
      { exact: true, path: '/ticket', component: 'ticket' },
      { exact: true, path: '/traffic', component: 'traffic' },
    ],
  },
  { component: '@/pages/404' },
];
