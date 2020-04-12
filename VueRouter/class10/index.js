
const Home = {
	template: `
	<div>
	 <h1>home</h1>
	 <router-link to="/Products">Products</router-link>
	</div>
	`
}
const Products = {
	beforeRouteEnter (to, from, next) {
		console.log('beforeRouteEnter-->', to, from)
	},
	beforeRouteUpdate (to, from, next) {
		console.log('beforeRouteUpdate-->', to, from)
	},
	beforeRouteLeave (to, from, next) {
		console.log('beforeRouteLeave-->', to, from)
		if(to.path === "/"){
			next()
		}else{
			next("/")
		}
	},
	methods: {
		goHome(){
			this.$router.push("/");
		}
	},
	template: `
	<div>
	 <h1>Products</h1>
	 <router-link to="/About">About</router-link>
	 <button @click="goHome">Home</buton>
	</div>
	`
}
const About = {
	template: `
	<div>
	 <h1>About</h1>
	</div>
	`
}

const Login = {
	template: `
	<div>
	 <h1>Login</h1>
	 <router-link to="/">Home</router-link>
	</div>
	`
}

const router = new VueRouter({
	routes: [
		{
			path: '/',
			component: Home,
			
		},
		{
			path: '/Products',
			component: Products,
			// beforeEnter: (to, from, next) => {
			// 	console.log('beforeEnter-->', to, from)
			// 	if(to.path==="/"){
			// 		next()
			// 	}else{
			// 		next("/login")
			// 	}
			// 	next();
			// }
		},
		{
			path: '/About',
			component: About
		},
		{
			path: '/Login',
			component: Login
		},
	]
})

// router.beforeEach((to, from, next) => {
//   console.log('router.beforeEach-->', to, from)
//   if(to.path === '/Products') {
// 	  // next('/login');
// 	  next({path: "/login", replace: true})
//   }else{
// 	  next();
//   }
// })

// router.afterEach((to, from) => {
//   console.log('router.afterEach-->', to, from)
// })

new Vue({
	el: '#app',
	router,
})