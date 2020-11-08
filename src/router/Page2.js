export default [
  {
    path: "/Page2",
    name: "Page2",
    component: () => import(/* webpackChunkName: "Page2" */ "@/views/Page2.vue"),
    redirect: '/Page2/Page2-1',
    children: [
      {
        path: 'Page2-1',
        name: 'Page2-1',
        component: () => import(/* webpackChunkName: "Page2-1" */ "@/components/Page2/Page2-1.vue")
      },
      {
        path: 'Page2-2',
        name: 'Page2-2',
        component: () => import(/* webpackChunkName: "Page2-2" */ "@/components/Page2/Page2-2.vue")
      },
      {
        path: 'Page2-3',
        name: 'Page2-3',
        component: () => import(/* webpackChunkName: "Page2-3" */ "@/components/Page2/Page2-3.vue")
      }
    ]
  }
];
