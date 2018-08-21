import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/users',
      name: 'users',
      component: () => import('./views/Users.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/add',
      name: 'add',
      component: () => import('./views/Add.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: () => import('./views/Edit.vue'),
      meta: { requiresAuth: true }
    }
  ]
})

const test = '123'

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // этот путь требует авторизации, проверяем залогинен ли
    // пользователь, и если нет, перенаправляем на страницу логина
    if ('123' !== test) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // всегда так или иначе нужно вызвать next()!
  }
})

export default router
