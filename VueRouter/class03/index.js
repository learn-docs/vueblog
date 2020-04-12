const User = {
  template: `
    <div class="user">
		<h1>User</h1>
		<div>
			<router-link to="/1"">1001</router-link>
			<router-link to="/2">1002</router-link>
		</div>
		<router-view></router-view>
    </div>
  `
}

const UserDetails = {
	template: `
	  <div class="user">
		<h2>Detail{{$route.params.id}}</h2>
		<div>
		<router-link to="/profile">profile</router-link>
		<router-link to="/posts">posts</router-link>
		</div>
	    <router-view></router-view>
	  </div>
	`
}

const UserProfile = {
  template: `
    <div class="user">
      <h2>UserProfile{{$route.params.id}}</h2>
      <router-view></router-view>
    </div>
  `
}

const UserPosts = {
  template: `
    <div class="user">
      <h2>UserPosts{{$route.params.id}}</h2>
      <router-view></router-view>
    </div>
  `
}

const router = new VueRouter({
  routes: [
    { path: '', component: User,
      children: [
		  {
			  path: ':id',
			  component: UserDetails,
			  children: [
			    {
			      path: '/profile',
			      component: UserProfile
			    },
			    {
			      path: '/posts',
			      component: UserPosts
			    }
			  ]
		  }
	  ]
    }
  ]
})

const app = new Vue({
	router
}).$mount('#app')