const Home = {
	methods:{
		toA() {
			this.$router.push('/a')
		},
		toB() {
			this.$router.push('/b')
		}
	},
	template: `,
	<div>
		<h1>Home</h1>
		<button @click="toA">toA</button>
		<button @click="toB">toB</button>
	</div>
	`
}

const CompB = {
	template: `,
	<div>
		<h1>CompB</h1>
	</div>
	`
}


const router = new VueRouter({
	routes: [{
			path: '/',
			component: Home
		},
		{
			path: '/b',
			component: CompB,
			alias: '/123'
		},
		{
			path: '/a',
			redirect: '/b'
		},
		{
			path: '/c',
			redirect: ()=> '/b'
		},
		{
			path: '/d',
			redirect: ()=> {return '/b'}
		}
	]
})

new Vue({
	el: '#app',
	router,
})
