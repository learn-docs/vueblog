<template>
	<view>
		<view class="cu-form-group margin-top">
			<view class="title">省份数据</view>
		</view>
		<view class="cu-form-group margin-top">
			<view class="title">城市数据</view>
		</view>
		<view class="cu-form-group margin-top">
			<view class="title">区县数据</view>
		</view>
	</view>
</template>

<script>
	import QQMapWX from '../../js_sdk/wxmp-qqmap/qqmap-wx-jssdk.js';
	var qqmapsdk;
	export default {
		components: {},
		data() {
			return {
				a: '',
				b: '',
				c: '',
			}
		},
		onLoad() {
			console.log('页面加载了') // 实例化API核心类
			qqmapsdk = new QQMapWX({ // key: '申请的key'
			});
		},
		onShow() {
			console.log('页面显示了')
			//调用获取城市列表接口
			qqmapsdk.getCityList({
				success: (res) => { //成功后的回调
					console.log(res);
					console.log('省份数据：', res.result[0]); //打印省份数据
					this.a = res.result[0]
					console.log('城市数据：', res.result[1]); //打印城市数据
					this.b = res.result[1]
					console.log('区县数据：', res.result[2]); //打印区县数据
					this.c = res.result[2]
				},
				fail: (error) => {
					console.error(error);
				},
				complete: (res) => {
					console.log(res);
				}
			});
		},
		onReady() {
			console.log('页面初次渲染完成了')
		},
		methods: {

		},
		onHide() {
			console.log('页面隐藏了')
		},
	}
</script>

<style lang="scss" scoped>
</style>
