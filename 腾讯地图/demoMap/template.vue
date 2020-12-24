<template>
	<view>
		<test v-if="flag"></test>
		<button type="primary" @click="checkTest">切换test组件</button>
	</view>
</template>

<script>
	// import test from '../../components/test.vue'
	export default {
		components: {
			test,
		},
		data() {
			return {
				flag: true,
			}
		},
		onLoad() {
			console.log('页面加载了')
		},
		onShow() {
			console.log('页面显示了')
		},
		onReady() {
			console.log('页面初次渲染完成了')
		},
		onHide() {
			console.log('页面隐藏了')
		},
		methods: {
			checkTest() {
				this.flag = !this.flag
			}
		},
	}
</script>

<style lang="scss" scoped>
</style>
