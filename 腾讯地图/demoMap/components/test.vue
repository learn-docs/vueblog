<template>
	<view id="">
	</view>
</template>
 
<script>
	export default {
		data() {
			return {
			};
		},
		beforeCreate() {
			console.log('实例已经开始初始化了,但数据还没初始化完成，页面也没开始渲染')
		},
		created() {
			// 在这个里面初始化数据
			console.log('实例创建完成后被立即调用')
		},
		beforeMount() {
			console.log('在挂载开始前被调用')
		},
		mounted() {
			// 在这个里面操作dom
			console.log('挂载已完成')
		},
		destroyed() {
			console.log('组件销毁了')
		}
	}
</script>
 
<style lang="scss" scoped>
 
</style>