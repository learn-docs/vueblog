import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	loading: true
}

const mutations = {
  SET_DATA: (state, data)=>{
	  state[data.name] = data.value
  }
}

const actions = {
	showLoading({ commit, state }, isLoading){
		if(isLoading){
			uni.showLoading({
				title: '加载中',
				mask: true
			});
		}else{
			uni.hideLoading()
		}
		commit('SET_DATA',{name:'loading',value:isLoading})
	},
}

export default new Vuex.Store({
	state,
	mutations,
	actions
})
