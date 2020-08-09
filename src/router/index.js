import Vue from 'vue'
import VueRouter from 'vue-router'
import { ROUTER_NAMES } from '../const/routerConst'

const Home = () => import('../pages/Home.vue')
const About = () => import('../pages/About.vue')
const Tags = () => import('../pages/Tags.vue')
const Archives = () => import('../pages/Archives.vue')
const Category = () => import('../pages/Category.vue')
// const Friendship = () => import('../pages/Friendship.vue')
const Article = () => import('../pages/Article.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: { name: 'home' }
  },
  {
    path: '/home',
    name: ROUTER_NAMES.HOME,
    component: Home
  },
  {
    path: '/tags',
    name: ROUTER_NAMES.TAGS,
    component: Tags
  },
  {
    path: '/tags/:name',
    name: ROUTER_NAMES.TAGS_DETAIL,
    component: Archives
  },
  {
    path: '/category',
    name: ROUTER_NAMES.CATEGORY,
    component: Category
  },
  {
    path: '/category/:name',
    name: ROUTER_NAMES.CATEGORY_DETAIL,
    component: Archives
  },
  {
    path: '/archives',
    name: ROUTER_NAMES.ARCHIVES,
    component: Archives
  },
  {
    path: '/about',
    name: ROUTER_NAMES.ABOUT,
    component: About
  },
  // {
  //   path: '/friendship',
  //   name: 'friendship',
  //   component: Friendship
  // },
  {
    path: '/article/:articleId',
    name: ROUTER_NAMES.ARTICLE,
    component: Article
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})
export default router
