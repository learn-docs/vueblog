const Home = {
	template: `
	<div>
	 <h1>Home</h1>
	 <div>
	  <p>
	  使用前端路由
	  </p>
	  <p>
	  使用前端路由
	  </p>
	  <p>
	  使用前端路由
	  <p>
	  使用前端路由
	  <p>
	  使用前端路由
	  </p>
	  <p>
	  使用前端路由
	  </p>
	  <p>
	  使用前端路由
	  </p>
	  <p>
	  使用前端路由
	  </p>
	  <p>
	  使用前端路由
	  </p>
	  <p>
	  使用前端路由
	  </p>
	  <p>
	  使用前端路由
	  </p>
	  <p>
	  使用前端路由
	  </p>
	 </div>
	 <router-link to="/about">about</router-link>
	</div>
	`
}

const About = {
	template: `
	 <div>
	  <h1>About</h1>
	  <h1>About</h1>
	  <h1>About</h1>
	  <h1>About</h1>
	  <h1>About</h1>
	  <h1>About</h1>
	  <h1>About</h1>
	  <h1>About</h1>
	  <h1>About</h1>
	  <h1>About</h1>
	  <h1>About</h1>
	  <h1>About</h1>
	  <router-link to="/">about</router-link>
	 </div>
	`
}

const router = new VueRouter({
	routes: [{
		path: '/',
		component: Home,
	}, {
		path: '/about',
		component: About
	}],
	scrollBehavior(to, from, savedPosition) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve({
					x: 0,
					y: 0
				})
			}, 500)
		})

		// return 期望滚动到哪个的位置
		// return { x: 0, y: 0 }
		// if (savedPosition) {
		//     return savedPosition
		//   } else {
		//     return { x: 0, y: 30 }
		//   }
	}
})

new Vue({
	el: '#app',
	router,
})
