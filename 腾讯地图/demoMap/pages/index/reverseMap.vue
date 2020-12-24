<template>
	<view>
		<map id="myMap" :markers="markers" style="width:100%;height:300px;" :longitude="poi.longitude" :latitude="poi.latitude"
		 scale='16' show-location>
		</map>
		<view class="cu-form-group margin-top">
			<view class="title">查询地址</view>
			<input placeholder="输入查询地址" @input="formSubmit" :value="backfill"></input>
		</view>
		<view>当前位置为：{{markers[0].title}}</view>
	</view>
</template>

<script>
	import QQMapWX from '../../js_sdk/wxmp-qqmap/qqmap-wx-jssdk.js';
	var qqmapsdk;
	export default {
		components: {},
		data() {
			return {
				backfill: '',
				markers: [],
				poi: {
					latitude: 39.984060,
					longitude: 16.307520
				},
			}
		},
		onLoad() {
			console.log('页面加载了') // 实例化API核心类
			qqmapsdk = new QQMapWX({ // key: '申请的key'
			});
		},
		onShow() {
			console.log('页面显示了')
		},
		onReady() {
			console.log('页面初次渲染完成了')
		},
		methods: {
			formSubmit(e) {
				qqmapsdk.reverseGeocoder({
					location: e.detail.value.reverseGeo || '',
					//获取表单传入的位置坐标,不填默认当前位置,示例为string格式
					//get_poi: 1, //是否返回周边POI列表：1.返回；0不返回(默认),非必须参数
					success: (res) => {
						console.log(res);
						var res = res.result;
						var mks = [];
						/**
						 *  当get_poi为1时，检索当前位置或者location周边poi数据并在地图显示，可根据需求是否使用
						 *
						    for (var i = 0; i < result.pois.length; i++) {
						    mks.push({ // 获取返回结果，放到mks数组中
						        title: result.pois[i].title,
						        id: result.pois[i].id,
						        latitude: result.pois[i].location.lat,
						        longitude: result.pois[i].location.lng,
						        iconPath: './resources/placeholder.png', //图标路径
						        width: 20,
						        height: 20
						    })
						    }
						*
						**/
						//当get_poi为0时或者为不填默认值时，检索目标位置，按需使用
						mks.push({ // 获取返回结果，放到mks数组中
							title: res.address,
							id: 0,
							latitude: res.location.lat,
							longitude: res.location.lng,
							iconPath: '/static/location.png', //图标路径
							width: 20,
							height: 20,
							callout: { //在markers上展示地址名称，根据需求是否需要
								content: res.address,
								color: '#000',
								display: 'ALWAYS'
							}
						});
						this.markers = mks;
						this.poi = {
							latitude: res.location.lat,
							longitude: res.location.lng
						}
					},
					fail: (error) => {
						console.error(error);
					},
					complete: (res) => {
						console.log(res);
					}
				})
			}
		},
		onHide() {
			console.log('页面隐藏了')
		},
	}
</script>

<style lang="scss" scoped>
</style>
