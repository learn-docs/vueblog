const Home = {
	template: `,
	 <div>
		<h1>Home</h1>
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
	 </div>
	`
}

const router = new VueRouter({
	routes: [
		{
			path: '*',
			component: Layout
		},
		{
			path: '/',
			component: Home
		},
		{
			path: '/Category',
			component: Category
		},{
			path: '/Shopcart',
			component: Shopcart
		},{
			path: '/Setting',
			component: Setting
		},
	]
})

new Vue({
	el: '#app',
	router,
})