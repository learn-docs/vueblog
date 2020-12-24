<template>
	<view>
		<view class="page-body">
			<view class="page-section page-section-gap">
				<map id="myMap" :latitude="latitude" :longitude="longitude" :markers="markers"
				 show-location enable-scroll @tap="bindtap" @callouttap="callouttap" @regionchange="regionchange" 
				 @updated="updated">
				 <!-- enable-scroll 是否支持拖动-->
				 <!-- @tap 点击地图时触发-->
				 <!-- @regionchange 视野发生变化时触发-->
				 <!-- @callouttap 点击标记点对应的气泡时触发，e.detail = {markerId}-->
				 <!-- @updated 在地图渲染更新完成时触发-->
				</map>
			</view>
			<view class="store-tips">
				<cover-view class="store-des-box" v-if="storeFlag" @tap="storeDesEvn">
					<!-- <cover-image class="store-img" src="../../static/shop.jpg"></cover-image> -->
					<cover-view class="store-des">
						<cover-view class="store-name">{{store.name}}</cover-view>
						<cover-view class="store-address">地址:{{store.address}}</cover-view>
						<cover-view class="store-tel">电话:{{store.tel}}</cover-view>
					</cover-view>
				</cover-view>
				
				<cover-image v-if="storeAdFlag" class="store-ad" src="../../static/shop.png"></cover-image>
				<cover-image v-if="storeAdFlag" class="store-clear" @tap="hideAd" src="../../static/shop.png"></cover-image>
			</view>
			<cover-view class="near-num">距离最近的门店{{distanceL}}千米</cover-view>
			<cover-image class="address-icon" src="../../static/shop.png"></cover-image>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			storeData: {
				type: Array,
				default: []
			},
			markers: {
				type: Array,
				default: []
			}
		},
		data() {
			return {
				store: {},
				storeFlag: false,
				storeAdFlag: true, // 是否显示门店广告
				distanceL: 0, //附近店门的距离
				latitude: 39.909,
				longitude: 116.39742,
				controls: []
			}
		},
		methods: {
			// 点击了门店信息
			storeDesEvn() {
				uni.showToast({
					title: "自己自定义跳门店详情页介绍",
					duration: 2000,
					icon: "none"
				})
			},
			// 点击气泡
			callouttap(e) {
				this.storeFlag = true // 显示门店信息
				this.storeAdFlag = false // 关闭广告
				for (let i = 0; i < this.storeData.length; i++) {
					const ele = this.storeData[i]
					if (ele.id == e.detail.markerId) {
						this.store = ele
						break
					}
				}
			},
			// 点击地图
			bindtap(id) {
				this.storeFlag = false
				// this.storeAdFlag=true;
			},
			// 隐藏广告图片
			hideAd() {
				this.storeAdFlag = false
			},
			updated() {
				wx.getLocation({
					type: "gcj02", //返回可以用于wx.openLocation的经纬度
					success: (res) => {
						this.latitude = res.latitude
						this.longitude = res.longitude
						// 计算最近的距离
						this.nearDistance(this.markers, this.latitude, this.longitude)
					},
					fail: (err) => {
						console.log(err)
					}
				})
			},
			// 改变视野时改变经纬度
			regionchange(e) {
				// 使用 wx.createMapContext 获取 map 上下文 this必须要写
				var mapCtx = wx.createMapContext("myMap", this)
				mapCtx.getCenterLocation({
					// 获取当前地图中心的经纬度，返回的是 gcj02 坐标系，可以用于 uni.openLocation
					success: (res) => {
						this.centerLatitude = res.latitude
						this.centerLongitude = res.longitude
						this.nearDistance(
							this.markers,
							this.centerLatitude,
							this.centerLongitude
						)
					},
					fail: (err) => {
						console.log(err)
					}
				}) //获取当前地图的中心经纬度
			},
			// 两点间距离
			distance(la1, lo1, la2, lo2) {
				var La1 = (la1 * Math.PI) / 180.0
				var La2 = (la2 * Math.PI) / 180.0
				var La3 = La1 - La2
				var Lb3 = (lo1 * Math.PI) / 180.0 - (lo2 * Math.PI) / 180.0
				var s =
					2 *
					Math.asin(
						Math.sqrt(
							Math.pow(Math.sin(La3 / 2), 2) +
							Math.cos(La1) * Math.cos(La2) * Math.pow(Math.sin(Lb3 / 2), 2)
						)
					)
				s = s * 6378.137 //地球半径
				s = Math.round(s * 10000) / 10000
				return s
			},
			// 计算最近的距离
			nearDistance(array, centerLatitude, centerLongitude) {
				let temp = []
				for (let i = 0, l = array.length; i < l; i++) {
					const element = array[i]
					let d = this.distance(
						element.latitude,
						element.longitude,
						centerLatitude,
						centerLongitude
					)
					temp.push(d)
				}
				this.distanceL = Math.min.apply(null, temp)
			}
		},
		onShow() {},
		onReady() {}
	}
</script>

<style lang="scss" scoped>
	map {
		width: 100%;
		height: calc(100vh) !important;
	}
	.content {
		text-align: center;
		height: 400rpx;
	}

	.page-section {
		z-index: 0;
	}

	.store-tips {
		width: 600rpx;
		height: 100rpx;
		margin: 10rpx auto;
		border-radius: 10rpx;
		position: absolute;
		top: 10rpx;
		left: 50%;
		transform: translate(-50%, 0);
		z-index: 2;
		overflow: hidden;

		.store-des-box {
			background: #fff;
		}

		.store-img {
			width: 80rpx;
			height: 80rpx;
			border-radius: 10rpx;
			margin: 10rpx;
			float: left;
		}

		.store-des {
			padding-top: 8rpx;
			float: left;
			line-height: 1;
			font-size: 22rpx;
			color: #666;
			padding-left: 20rpx;

			.store-name {
				font-weight: 600;
				color: deeppink;
			}
		}

		.store-clear {
			width: 30rpx;
			height: 30rpx;
			position: absolute;
			top: 7rpx;
			right: 7rpx;
			margin: 30rpx;
		}
	}

	.address-icon {
		width: 38rpx;
		height: 40rpx;
		position: absolute;
		top: 22%;
		left: 50%;
		z-index: 2;
		margin-bottom: -20rpx;
		margin-left: -20rpx;
	}

	.near-num {
		padding: 10rpx 20rpx;
		border-radius: 10rpx;
		position: absolute;
		top: 17%;
		left: 50%;
		z-index: 2;
		font-size: 24rpx;
		background: #fff;
		transform: translate(-50%, 0);
	}
</style>
