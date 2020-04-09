const User = {
	computed: {
		username() {
			console.log(this.$route)
			return this.$route.params.username
		}
	},
	watch: {
		'$route'(to,from) {
			console.log('to', to)
			console.log('from', from)
		}
	},
	beforeRouteUpdate(to, from, next) {
		console.log('--',to, from, next)
		next()
	},
	template: '<div>User: {{username}} - id: {{$route.params.id}}</div>'
}

const router = new VueRouter({
	routes: [
		{path: '/user/:username/:id', component: User}
	]
})

new Vue({
	el: '#app',
	router,
})