<template>
	<view>
		<view class="padding flex flex-direction">
			<button @click="nearbySearchBtn" class="cu-btn bg-blue margin-tb-sm lg">搜索周边KFC</button>
		</view>
		<!--地图容器-->
		<map id="myMap" :markers="markers" style="width:100%;height:300px;" :longitude="116.313972" :latitude="39.980014"
		 scale='16'>
		</map>

		<!--绑定输入事件-->
		<view class="cu-form-group margin-top">
			<view class="title">查询地址</view>
			<input placeholder="输入查询地址" @input="getsuggest" :value="backfill"></input>
		</view>
		<!--关键词输入提示列表渲染-->
		<view v-for="(item, index) in suggestion" :key="index">
			<!--绑定回填事件-->
			<view>
				<!--根据需求渲染相应数据-->
				<!--渲染地址title-->
				<view style="text-align:center;" @click="backfillBtn" :id="index">{{item.title}}</view>
				<!--渲染详细地址-->
				<view style="font-size:12px;color:#666;text-align:center;">{{item.addr}}</view>
			</view>
		</view>

	</view>
</template>

<script>
	// 引入SDK核心类，js文件根据自己业务，位置可自行放置
	// var QQMapWX = require('../../js_sdk/wxmp-qqmap/qqmap-wx-jssdk.js');
	import QQMapWX from '../../js_sdk/wxmp-qqmap/qqmap-wx-jssdk.js';
	var qqmapsdk;
	export default {
		components: {},
		data() {
			return {
				backfill: '',
				markers: [],
				suggestion: [],
			}
		},
		onLoad() {
			console.log('页面加载了') // 实例化API核心类
			qqmapsdk = new QQMapWX({ // key: '申请的key'
				key:'自己的key'
			});
		},
		onShow() {
			console.log('页面显示了') // 调用接口dadaqianduan
			qqmapsdk.search({
				keyword: '酒店',
				success: (res) => {
					console.log(res);
				},
				fail: (err) => {
					console.log(err);
				},
				complete: (cres) => {
					console.log(cres);
				}
			})
		},
		onReady() {
			console.log('页面初次渲染完成了')
		},
		methods: {
			getsuggest(e) {
				console.log(e.detail.value)
			    qqmapsdk.getSuggestion({
			      keyword: e.detail.value, //用户输入的关键词，可设置固定值,如keyword:'KFC'
			      //region:'北京', //设置城市名，限制关键词所示的地域范围，非必填参数
			      success: (res) => {//搜索成功后的回调
			        console.log(res);
			        var sug = [];
			        for (var i = 0; i < res.data.length; i++) {
			          sug.push({ // 获取返回结果，放到sug数组中
			            title: res.data[i].title,
			            id: res.data[i].id,
			            addr: res.data[i].address,
			            city: res.data[i].city,
			            district: res.data[i].district,
			            latitude: res.data[i].location.lat,
			            longitude: res.data[i].location.lng
			          });
			        }
			         this.suggestion = sug
			      },
			      fail: (error)=> {
			        console.error(error);
			      },
			      complete: (res)=> {
			        console.log(res);
			      }
			    });
			},
			backfillBtn(e) {
				var id = e.currentTarget.id;
				for (var i = 0; i < this.suggestion.length; i++) {
					if (i == id) {
						this.backfill = this.suggestion[i].title
					}
				}
			},
			// 地点搜索
			nearbySearchBtn() {
				qqmapsdk.search({
					keyword: 'kfc', //搜索关键词
					location: '39.980014,116.313972', //设置周边搜索中心点
					success: (res) => {
						var mks = []
						for (var i = 0; i < res.data.length; i++) {
							mks.push({ // 获取返回结果，放到mks数组中
								title: res.data[i].title,
								id: res.data[i].id,
								latitude: res.data[i].location.lat,
								longitude: res.data[i].location.lng,
								iconPath: "/static/location.png", //图标路径
								width: 20,
								height: 20
							})
						}
						this.markers = mks
					},
					fail: (res) => {
						console.log(res);
					},
					complete: (res) => {
						console.log(res);
					}
				});
			},
		},
		onHide() {
			console.log('页面隐藏了')
		},
	}
</script>

<style lang="scss" scoped>
</style>
