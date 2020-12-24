<template>
	<view>
		<active-map></active-map>
	</view>
</template>

<script>
	import activeMap from '../../components/activeMap.vue'
	export default {
		components: {
			activeMap,
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

