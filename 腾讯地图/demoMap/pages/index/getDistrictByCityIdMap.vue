<template>
	<view>
		<view class="cu-form-group">
			<view class="title">接口调用说明</view>
		</view>
		<view class="cu-form-group">
			<textarea class="title">   
			getDistrictByCityId(options:Object)方法调用接口服务如下：
			/ws/district/v1/getchildren 行政区划:子级
			超过日调用量和并发数的开发者，可通过以下途径解决：
			1.对于多频次的相同请求，可通过缓存结果，并定时访问更新的方式，减少对在线服务调用的依赖；
			2.企业开发者的配额高于个人开发者，申请企业认证后，需要在控制台->配额申请中免费申请你需要的配额。
			我们将对您的申请进行评估并进行审批（3个工作日内），审批通过后将会获得您申请的配额。
			3.对于切实需要大配额来满足应用需求的，请在控制台->配额管理中提交购买配额申请，我们的商务会与您取得联系。</textarea>
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

			}
		},
		onLoad() {
			console.log('页面加载了') // 实例化API核心类
			qqmapsdk = new QQMapWX({ // key: '申请的key'
				key: ''
			});
		},
		onShow() {
			console.log('页面显示了')
			//调用获取城市列表接口
			qqmapsdk.getCityList({
				success: (res) => { //成功后的回调
					console.log(res);
					console.log('省份数据：', res.result[0])
					var city = res.result[0];
					//根据对应接口getCityList返回数据的Id获取区县数据（以北京为例）
					qqmapsdk.getDistrictByCityId({
						// 传入对应省份ID获得城市数据，传入城市ID获得区县数据,依次类推
						id: city[0].id, //对应接口getCityList返回数据的Id，如：北京是'110000'
						success: (res) => { //成功后的回调
							console.log(res);
							console.log('对应城市ID下的区县数据(以北京为例)：', res.result[0]);
						},
						fail: (error) => {
							console.error(error);
						},
						complete: (res) => {
							console.log(res);
						}
					});
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
