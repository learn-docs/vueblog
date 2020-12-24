<template>
	<view>
		<choose-map></choose-map>
	</view>
</template>

<script>
	import chooseMap from '../../components/chooseMap.vue'
	export default {
		components: {
			chooseMap,
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

