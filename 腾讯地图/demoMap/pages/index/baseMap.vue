<template>
	<view>
		<base-map></base-map>
	</view>
</template>

<script>
	import baseMap from '../../components/baseMap.vue'
	export default {
		components: {
			baseMap,
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

