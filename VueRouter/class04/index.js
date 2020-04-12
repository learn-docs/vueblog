const Layout = {
	methods: {
		go(count){
			this.$route.go(count)
		}
	},
	template: `,
	 <div>
		<router-link to="/home">Home</router-link>
		<router-link to="/Category">Category</router-link>
		<router-link to="/Shopcart">Shopcart</router-link>
		<router-link to="/Setting">Setting</router-link>
		<router-view></router-view>
		
		<button @click="go(-1)">go(-1)</button>
		<button @click="go(1)">go(1)</button>
	 </div>
	`
}

const Home = {
	methods: {
		goToShopcart() {
			this.$router.push('Shopcart')
		},
		goToSetting() {
			this.$router.push({
				name: 'Setting',
				params: {userId:123,}
			})
		}
	},
	template: `,
	 <div>
		<h1>Home</h1>
		<button @click="goToShopcart">购物车</button>
		<button @click="goToSetting">设置页</button>
	 </div>
	`
}

const Category = {
	template: `,
	 <div>
		<h1>Category</h1>
	 </div>
	`
}

const Shopcart = {
	template: `,
	 <div>
		<h1>Shopcart</h1>
	 </div>
	`
}

const Setting = {
	template: `,
	 <div>
		<h1>Setting</h1>
		<h4>{{$route.params.userId}}</h4>
	 </div>
	`
}

const router = new VueRouter({
	routes: [
		{
			path: '/',
			component: Layout,
			children: [
				{
					path: '/home',
					component: Home
				},
				{
					path: '/Category',
					component: Category
				},{
					path: '/Shopcart',
					component: Shopcart
				},{
					name: 'Setting',
					path: '/Setting',
					component: Setting
				},
			]
		},
		
	]
})

new Vue({
	el: '#app',
	router,
})