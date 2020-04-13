
const Foo = {
  template: `
    <transition name="slide">
      <div class="foo">foo
	  <router-link to="/bar">Bar</router-link>
	  </div>
    </transition>
  `
}

const Bar = {
  template: `
    <transition name="fade" duration="1000">
      <div class="bar">bar
	  <router-link to="/foo">Foo</router-link>
	  </div>
    </transition>
  `
}

const router = new VueRouter({
	routes: [
		{
			path: '/foo',
			component: Foo,
		},
		{
			path: '/bar',
			component: Bar,
		},
	]
})

new Vue({
	el: '#app',
	router,
})