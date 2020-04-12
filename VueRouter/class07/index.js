const User2 = {
	template:`,
		<div>User{{$route.params.id}}</div>
	`
}

const User = {
	props: ['id'],
	template:`,
		<div>User: {{id}}</div>
	`
}

const Sidebar = {
	props: ['title'],
	template:`,
		<div>Sidebar: {{title}}</div>
	`
}

const router = new VueRouter({
	routes: [
		{
			path: '/user/:id',
			component: User,
			props: true
		},
		{
			path: '/user2',
			component: User,
			props: {id:123}
		},
		{
			path: '/user3',
			component: User,
			props: (route)=>{
				return {"id":111}
			}
		},
		{
			path: '/user4',
			component: User,
			props: (route)=>({"id":111})
		},
		{
			path: '/user5/:id',
			component: User,
			props: (route)=>{
				return {'id': route.params.id};
			}
		},
		{
			path:'/specil',
			components:{
				default: User,
				sidebar: Sidebar
			},
			props:{
				default: {id:666},
				sidebar: {title: 'dadaqianduan'}
			}
		},
		{
			path:'/specil/:id',
			components:{
				default: User,
				sidebar: Sidebar
			},
			props:{
				default: (route)=>{
					return {"id":route.params.id}
				},
				sidebar: {title: 'dadaqianduan'}
			}
		},
		{
			path:'/web/:id',
			components:{
				default: User,
				sidebar: Sidebar
			},
			props:{
				default: true,
				sidebar: {title: 'dadaqianduan'}
			}
		}
	]
})

new Vue({
	el: '#app',
	router,
})