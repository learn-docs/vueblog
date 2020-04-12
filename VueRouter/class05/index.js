const Home = {
	methods: {
		gotoUser() {
			this.$router.push({
				name: 'user',
				params: {userId:"123456"}
			})
		},
		gotoUserReplace() {
			this.$router.replace({
				name: 'user',
				params: {userId: '888'}
			})
		}
	},
	template: `,
	<div>
		<h1>Home</h1>
		<button @click="gotoUser">gotoUser</button>
		<router-link :to="{ name: 'user', params: { userId: 123 }}">User</router-link>
		
		<button @click="gotoUserReplace">gotoUserReplace</button>
		<router-link :to="{ name: 'user', params: { userId: 123 }}" replace>User</router-link>
	</div>
	`
	
}

const User = {
	template: `,
		<div>
			User {{$route.params.userId}}
		</div>
	`
}

const router = new VueRouter({
	routes: [
		{
			path: '/',
			component: Home
		},
		{
			path: '/user/:userId',
			name: 'user',
			component: User
		}
	]
})


new Vue({
	el: '#app',
	router,
})