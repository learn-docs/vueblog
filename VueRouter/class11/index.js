const Foo = {
	template: `
	<div>
	 <h1>Foo</h1>
	 <router-view></router-view>
	</div>
	`
}

const Bar = {
	template: `
	<div>
	 <h1>Bar</h1>
	</div>
	`
}

const Login = {
	template: `
	<div>
	 <h1>Login</h1>
	</div>
	`
}

const auth = {
	loggedIn(){
		return false
	}
}

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!auth.loggedIn()) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // 确保一定要调用 next()
  }
})

const router = new VueRouter({
	routes: [
		{
			path: '/foo',
			component: Foo,
			children: [
				{
					path: 'bar',
					component: Bar,
					meta: {requiresAuth: true}
				}
			]
		},
		{
			path: '/login',
			component: Login
		}
	]
})

new Vue({
	el: '#app',
	router,
})