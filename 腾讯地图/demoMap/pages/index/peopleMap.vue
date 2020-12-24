<template>
	<view>
		<map id="map" ref="map" :style="'width: ' + width + '; height: ' + height + ';'" :scale="map.scale" 
		@regionchange="regionchange" @updated="updated" 
		:latitude="map.latitude" :longitude="map.longitude" :markers="covers"
		@callouttap="dada" @markertap="dada">
		<!-- @callouttap 点击标记点对应的气泡时触发，e.detail = {markerId}-->
		<!-- @markertap 点击标记点时触发，e.detail = {markerId}-->
		</map>
	</view>
</template>

<script>
	var map;
	export default {
		data() {
			return {
				height: '500px',
				width: '500px',
				map: {
					scale: 16,
					latitude: 27.267520999,
					longitude: 111.727120999,
				},
				covers: [{
					latitude: 27.267520999,
					longitude: 111.7271209,
					iconPath: '/static/address.png',
				}],
				list: [{
					id: 1264640,
					user_id: 335187,
					place: "Jeskson市",
					text: "dadaqianduan.cn",
					latitude: "27.267520",
					longitude: "111.727120",
					status: "normal",
					nickname: "dada",
					avatar: "https://image.aishencn.com/2020/10/20/002207441_40845724-user.jpg",
					distance: 13419,
				}, {
					id: 1272720,
					user_id: 36950,
					place: "dadaqianduan市",
					text: "dadaqianduan.cn",
					latitude: "27.257640",
					longitude: "111.747910",
					deletetime: null,
					status: "normal",
					nickname: "dadaqianduan",
					avatar: "https://image.aishencn.com/2020/04/09/004135379_37869100-user.jpg",
					distance: 27070,
				}, {
					id: 1316740,
					user_id: 366172,
					place: "dadaqianduan.cn",
					text: "dadaqianduan.cn",
					images: "https://image.aishencn.com/2020/11/04/215134979_98197351-bbs.jpg",
					latitude: "27.257430",
					longitude: "111.732960",
					status: "normal",
					nickname: "dada",
					avatar: "https://image.aishencn.com/2020/11/04/182622730_98197351-user.venus/cache/ext/crop/1604518314542_jpg",
					distance: 27190,
					images_arr: ["https://image.aishencn.com/2020/11/04/215134979_98197351-bbs.jpg"]
				}],
				// load: true
			};
		},
		onLoad() {
			map = uni.createMapContext('map', this);
			uni.getSystemInfo({
				success: res => {
					this.height = res.windowHeight + 'px';
					this.width = res.windowWidth + 'px';
				}
			});
			// this.location();
		},
		methods: {
			//定位当前
			location() {
				console.log('开始获取地址');
				uni.getLocation({
					type: 'gcj02',
					success: res => {
						map.moveToLocation({
							latitude: res.latitude,
							longitude: res.longitude
							
						})
					},
					fail: () => {
						console.log('地理位置获取失败');
					}
				});
			},
			test() {
				// 获取当前地图的视野范围
				map.getRegion({
					success: res => {
						// 获取当前地图的缩放级别
						map.getScale({
							success: ress => {
								this.covers = this.getFortMatMarkerList(res.northeast, res.southwest, ress.scale, this.list)
							}
						})
					}
				})
			},
			//根据东北 西南经纬度 以及后台返回标记点 格式化成小程序marker点
			getFortMatMarkerList(northeast, southwest, scale, backendMarkerList) {
				//屏幕中显示的经度的长度和纬度的长度
				let mapWidth = southwest.longitude - northeast.longitude;
				let mapHeight = northeast.latitude - southwest.latitude;
				//将屏幕中地图分割的横向 格子数和 纵向格子数
				let widthSize = scale;
				let heightSize = widthSize + parseInt(scale / 2);
				//计算每个格子的经纬度的长度
				let unitWidth = mapWidth / widthSize ;
				let unitHeight = mapHeight / heightSize ;
				console.log(widthSize,heightSize)
				console.log(unitWidth,unitHeight)
				let pointData = {};
				backendMarkerList.forEach(latLng => {
					//如果点在显示范围内
					if (latLng.latitude < northeast.latitude && latLng.latitude > southwest.latitude &&
						latLng.longitude < northeast.longitude && latLng.longitude > southwest.longitude) {
						let relativeX = latLng.longitude - northeast.longitude;
						let relativeY = latLng.latitude - southwest.latitude;
						//计算出这个点，处于哪个格子
						let x = parseInt(Math.floor(relativeX / unitWidth));
						let y = parseInt(Math.floor(relativeY / unitHeight));
						if (x < 0 || y < 0) {
							console.log('点位不在格子内', '失败');
						}
						//生成单元格点位数据
						let pointKey = x + ',' + y;
						if (pointData[pointKey] == undefined) {
							pointData[pointKey] = [];
						}
							pointData[pointKey].push(latLng);
					}
				});
				console.log('pointData', pointData.length);

				let resultMapArray = [];
				for (let y = 0; y < heightSize; y++) {
					for (let x = 0; x < widthSize; x++) {
						let pointKey = x + ',' + y;
						//筛选没有充电站点位的格子
						if (pointData[pointKey] != undefined) {
							let markerItem = {};
							//聚合点与单点共存 , 长度等于一 不聚合点
							if (pointData[pointKey].length == 1) {
								// console.log('不聚合点', pointData[pointKey][0]);

								markerItem = {
									id: pointData[pointKey][0].id,
									
									latitude: pointData[pointKey][0].latitude,
									longitude: pointData[pointKey][0].longitude,
									iconPath: pointData[pointKey][0].avatar,
									width: 30,
									height: 30
								}
								//长度大于一 聚合点
							} else if (pointData[pointKey].length > 1) {
								// console.log('聚合点');
								markerItem = {
									id: pointData[pointKey][0].id,
									latitude: pointData[pointKey][0].latitude,
									longitude: pointData[pointKey][0].longitude,
									iconPath: '/static/address.png',
									width: 30,
									height: 30
								}
							}
							resultMapArray.push(markerItem);
						}
					}
				}
				console.log('resultMapArray', resultMapArray.length);
				return resultMapArray;
			},
			
			getList(la = 0, lo = 0) {
				var arr = [];
				// 获取当前地图中心的经纬度，返回的是 gcj02 坐标系，可以用于 uni.openLocation
				map.getCenterLocation({
					success: res => {
						let latitude = res.latitude
						let longitude = res.longitude
						if (la !== 0) {
							latitude = la
							longitude = lo
						}
						console.log('当前中心坐标', latitude + ',' + longitude);
						uni.request({
							data: {
								latitude: latitude,
								longitude: longitude
							},
							method: 'POST',
							url: '',
							success: res => {
								console.log('完成请求', res);
								if (res.data.code) {
									res = res.data.data;
									for (var i = 0; i < res.list.length; i++) {
										this.list = res.list;
									}
								} else {
									uni.showToast({
										title: res.data.msg,
										icon: 'none'
									});
								}
								console.log('arr', arr)
							},
							complete: () => {
								this.load = false;
							}
						});
					}
				});

			},
			updated() {
				console.log('渲染完成');
			},
			regionchange() {
				console.log('当视野发生改变');
				this.test();
			},
			dada(e) {
				var id = e.detail.markerId
				for(var i = 0; i<this.list.length; i++) {
					if(id == this.list[i].id) {
						uni.showModal({
							title: '用户：' + this.list[i].nickname,
							content: this.list[i].text
						});
					}
				}
			},
		}
	};
</script>

<style lang="scss" scoped>
	
</style>
