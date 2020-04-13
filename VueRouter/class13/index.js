function getPost(id, callback) {
	const err = null;
	
	// const post = {
	// 	id: id,
	// 	title: 'vue',
	// 	body: '魔王哪吒',
	// }
	const postDB = {
		'12': {
			title: 'Vue',
			body: 'dada',
		},
		'13': {
			title: 'Vue',
			body: 'qianduan',
		}
	}
	const post = {
		id: id,
		...postDB[''+id],
	}
	setTimeout(() => {
		callback(err, post)
	})
}

const Post = {
	data() {
		return {
			loading: false,
			error: null,
			post: null,
		}

	},
	created() {
		this.fetchData()
	},
	watch: {
		// 如果路由有变化，会再次执行该方法
		'$route': 'fetchData'
	},
	computed: {
		title(){
			if(this.post){
				return `${this.post.id}.${this.post.title}`
				
			}else{
				return ''
			}
		}
	},
	methods: {
		fetchData() {
			this.error = this.post = null;
			this.loading = true;
			getPost(this.$route.params.id, (err, post) => {
				this.loading = false
				if (err) {
					this.error = err.toString()
				} else {
					this.post = post
				}
			})
		}
	},
	template: `
	<div class="post">
		<div v-if="loading" class="loading">
		  Loading...
		</div>

		<div v-if="error" class="error">
		  {{ error }}
		</div>

		<div v-if="post" class="content">
		  <h2>{{ title }}</h2>
		  <p>{{ post.body }}</p>
		</div>
	</div>
	`
}

const Home = {
	template: `
    <div>
		<router-link to="/post/1">dada</router-link>
		<router-link to="/post/2">dadaqianduan</router-link>
	</div>
  `
}

const router = new VueRouter({
	routes: [{
		path: '/',
		component: Home,
	}, {
		path: '/post/:id',
		component: Post
	}]
})

new Vue({
	el: '#app',
	router,
})
