<template>
	<view id="activeMap">
		<view @tap="activeMarker={}">
			<view class="page-body map-view" style="z-index: 1;position: relative;">
				<view class="page-section page-section-gap map-view">
					<map :markers="shops" id="map1" :show-location="true" :latitude="latitude" :longitude="longitude" @regionchange="regionChange"
					 @markertap="markerTap" @tap="activeMarker={}">
						<!-- @markertap 点击标记点时触发，e.detail = {markerId}-->
						<!-- @tap 点击地图时触发-->
						<!-- @regionchange 视野发生变化时触发-->
					</map>
					<cover-image class="map-image" src="../static/address.png"></cover-image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				latitude: 22.72078000000000,
				longitude: 114.06090205000000,
				shops: [],
				activeMarker: {},
				getShopSwitch: false,
			};
		},
		computed: {
			activeShop() {
				return this.activeMarker.shop || {}
			}
		},
		watch: {
			activeMarker(val, oldVal) {
				val && (val.width = val.height = 44)
				oldVal && (oldVal.width = oldVal.height = 34)
			}
		},
		beforeCreate() {
			console.log('实例已经开始初始化了,但数据还没初始化完成，页面也没开始渲染')
		},
		created() {
			// 在这个里面初始化数据
			console.log('实例创建完成后被立即调用')
			uni.getLocation({
				type: 'gcj02',
				success: res => {
					this.latitude = res.latitude;
					this.longitude = res.longitude;
					uni.getNetworkType({
						success: (res) => {
							console.log(res.networkType);
							//延时开启获取门店，防止触发多次
							setTimeout(_ => {
								// this.getShopSwitch = true
								this.getShops()
							}, 1500)
						},
						fail: () => {},
						complete: () => {
						}
					});
				},
				fail: res => {
					uni.showModal({
						content: '获取位置失败',
						showCancel: false
					})
				}
			})
		},
		methods: {
			moveLocation() { //地图定位到当前位置
				uni.createMapContext('map1', this).moveToLocation();
			},
			getShops(longitude, latitude) {
				longitude || (longitude = this.longitude) // 跟随定点
				latitude || (latitude = this.latitude)

				this.shops = [{
					address: "广东省汕头市xxx区xx大道",
					distance: 122,
					end_time: "1",
					id: 1,
					latitude: "22.72078500000000",
					longitude: "114.06090200000000",
					shop: {
						return: 0
					},
					return: 0,
					height: 34,
					width: 34,
					start_time: "1",
					store_name: "三星大酒店",
					iconPath: '/static/shop.png',
				}]
			},
		},
		regionChange() { // 移动地图后重新获取门店
			uni.createMapContext('map1', this).getCenterLocation({
				success: res => {
					console.log(res.latitude)
					console.log(res.longitude)
					this.shopTimeout = setTimeout(_ => {
						this.shops = [{
							address: "广东省汕头市xxx区xx大道1",
							distance: 122,
							end_time: "1",
							id: 2,
							latitude: "22.72078500009999",
							longitude: "114.36090200009999",
							shop: {
								iconPath: '/static/logo.png',
								id: 3,
								latitude: "22.72078500009999",
								longitude: "114.36090200009999",
								height: 34,
								width: 34,
								shop: {return: 0}
							},
							return: 0,
							height: 34,
							width: 34,
							start_time: "1",
							store_name: "三星大酒店",
							iconPath: '/static/shop.png',
						}]
					}, 500)
				},
				fail: res => {
					uni.showModal({
						content: '获取位置失败',
						showCancel: false
					})
				}
			})
		},
		markerTap(e) { // 点击标记门店图图标时触发
			this.activeMarker = this.shops[e.markerId] || {}
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
	map {
		width: 100%;
		height: calc(100vh) !important;
		z-index: 22 !important;
	}

	.map-image {
		position: absolute;
		left: 50%;
		top: 50%;
		bottom: 50%;
		right: 50%;
		margin-left: -20upx;
		margin-top: -40upx;
		width: 50upx;
		height: 50upx;
		z-index: 1000;
	}
</style>
