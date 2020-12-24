<template>
	<view>
		<map id="myMap" :markers="markers" style="width:100%;height:300px;" :longitude="poi.longitude"
		:latitude="poi.latitude" scale='16' show-location>
		</map>
		<!--地址描述输入框,示例：北京市海淀区彩和坊路海淀西大街74号-->
		<view class="cu-form-group margin-top">
			<view class="title">地址解析</view>
			<input placeholder="输入查询地址" @input="formSubmit" :value="geocoder"></input>
		</view>
		<!--地址描述经纬度展示-->
		<view>地址纬度：{{poi.latitude}}</view>
		<view>地址经度：{{poi.longitude}}</view>
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
			    //调用地址解析接口
			    qqmapsdk.geocoder({
			      //获取表单传入地址 e.detail.value.geocoder
			      address: e.detail.value, //地址参数，例：固定地址，address: '北京市海淀区彩和坊路海淀西大街74号'
			      success: (res)=> {//成功后的回调
			        console.log(res);
			        var res = res.result;
			        var latitude = res.location.lat;
			        var longitude = res.location.lng;
			        //根据地址解析在地图上标记解析地址位置
			         this.markers = [{
			            id: 0,
			            title: res.title,
			            latitude: latitude,
			            longitude: longitude,
			            iconPath: '/static/location.png',//图标路径
			            width: 20,
			            height: 20,
			            callout: { //可根据需求是否展示经纬度
			              content: latitude + ',' + longitude,
			              color: '#000',
			              display: 'ALWAYS'
			            }
			          }],
			          this.poi= { //根据自己data数据设置相应的地图中心坐标变量名称
			            latitude: Number(latitude),
			            longitude:  Number(longitude),
			          }
			      },
			      fail: (error)=> {
			        console.error(error);
			      },
			      complete: (res)=> {
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
