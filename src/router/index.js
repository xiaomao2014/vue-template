import Vue from "vue";
import VueRouter from "vue-router";
import Page2Routes from './Page2'

Vue.use(VueRouter);

const routes = [
  // 根路由
  {
    path: '/',
    redirect: 'Home'
  },
  {
    path: "/Home",
    name: "Home",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Home" */ "@/views/Home.vue")
  },
  ...Page2Routes,
  /*{
    path: "/Page2",
    name: "Page2",
    component: () => import(/!* webpackChunkName: "Page2" *!/ "@/views/Page2.vue"),
    redirect: '/Page2/Page2-1',
    children: [
      {
        path: 'Page2-1',
        name: 'Page2-1',
        component: () => import(/!* webpackChunkName: "Page2-1" *!/ "@/components/Page2/Page2-1.vue")
      },
      {
        path: 'Page2-2',
        name: 'Page2-2',
        component: () => import(/!* webpackChunkName: "Page2-2" *!/ "@/components/Page2/Page2-2.vue")
      },
      {
        path: 'Page2-3',
        name: 'Page2-3',
        component: () => import(/!* webpackChunkName: "Page2-3" *!/ "@/components/Page2/Page2-3.vue")
      }
    ]
  },*/
  {
    path: "/Page3",
    name: "Page3",
    component: () => import(/* webpackChunkName: "Page3" */ "../views/Page3.vue")
  },
  {
    path: "/Page4",
    name: "Page4",
    component: () => import(/* webpackChunkName: "Page4" */ "../views/Page4.vue")
  },
  {
    path: "/Page5",
    name: "Page5",
    component: () => import(/* webpackChunkName: "Page5" */ "../views/Page5.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
