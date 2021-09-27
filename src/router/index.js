import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Login_page from '../views/Login_page.vue'
import Registration_page from '../views/Registration_page.vue'
import Offices_page from '../views/Offices_page.vue'
import Organizations_page from '../views/Organizations_page.vue'
import Users_page from '../views/Users_page.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    meta: { title: 'МФЦ' }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login_page,
    meta: { title: 'Войти' }
  },
  {
    path: '/Registration',
    name: 'Registration',
    component: Registration_page,
    meta: { title: 'Регистрация' }
  },
  {
    path: '/Offices',
    name: 'Registration',
    component: Offices_page,
    meta: { title: 'Офисы организаций' }
  },
  {
    path: '/Organizations',
    name: 'Registration',
    component: Organizations_page,
    meta: { title: 'Организации' }
  },
  {
    path: '/Users',
    name: 'Users',
    component: Users_page,
    meta: { title: 'Пользователи' }
  },

  // {
  //   path: '/case',
  //   name: 'Case',
  //   component: () => import( '../views/CasePage.vue')
  // },
  // {
  //   path: '/accounts',
  //   name: 'accounts',
  //   component: () => import( '../views/AccountsPage.vue')
  // }
]

const router = new VueRouter({
  mode: 'hash',
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})


export default router
