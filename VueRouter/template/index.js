

const Foo = {
	template: `
	<div>
	 <h1>Foo</h1>
	 <router-view></router-view>
	</div>
	`
}

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