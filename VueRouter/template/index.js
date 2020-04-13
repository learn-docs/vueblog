
const router = new VueRouter({
	routes: [
		{
			path: '/foo',
			component: Foo,
		}
	]
})

new Vue({
	el: '#app',
	router,
})