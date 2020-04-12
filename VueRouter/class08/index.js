	
const MainMenu = {
	template:`,
		<router-link to="/">Home</router-link>
		<router-link to="/Product">Product</router-link>
		<router-link to="/About">About</router-link>
		
	`
	
}

const Home = {
	template: `,
		<div>
			<h1>Home</h1>
		</div>
	`
}

const Product = {
	template: `,
		<div>
			<h1>Product</h1>
		</div>
	`
}

const About = {
	template: `,
		<div>
			<h1>About</h1>
		</div>
	`
}

const router = new VueRouter({
	routes: [
		{
			path: '*',
			components: {
				mainMenu: MainMenu,
			}
		},
		{
			path: '/',
			component: Home
		},
		{
			path: '/Product',
			component: Product
		},
		{
			path: '/About',
			component: About
		},
	]
})

new Vue({
	el: '#app',
	router,
})