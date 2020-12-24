<template>
	<view id="chooseMap">
		<view class="cu-form-group input-view">
			<label class="titleText">门店位置：</label>
			<input class="input" v-model="query.address" disabled @click="chooseLocation" placeholder="请输入门店位置">
			<text class="cuIcon-search fontText"></text>
			</input>
		</view>
		
	</view>
</template>
 
<script>
	export default {
		data() {
			return {
				query: {
					address: '',
					latitude: '',
					longitude: '',
					province: '',
					city: '',
					district: '',
				}
			};
		},
		beforeCreate() {
			console.log('实例已经开始初始化了,但数据还没初始化完成，页面也没开始渲染')
		},
		created() {
			// 在这个里面初始化数据
			console.log('实例创建完成后被立即调用')
		},
		methods: {
			chooseLocation(e) { //打开地图选择位置
				uni.chooseLocation({
					success: res => {
						console.log('位置名称：' + res.name);
						console.log('详细地址：' + res.address);
						console.log('纬度：' + res.latitude);
						console.log('经度：' + res.longitude);
						uni.getLocation({
							type: 'gcj02',
							altitude:true,
							geocode:true,
							success: function(res) {
								console.log('当前位置的经度：' + res.longitude);
								console.log('当前位置的纬度：' + res.latitude);
							}
						});
						console.log('省：' + res.address.slice(0, res.address.indexOf('省') + 1));
						console.log('市：' + res.address.slice(res.address.indexOf('省') + 1, res.address.indexOf('市') + 1));
						console.log('区：' + res.address.slice(res.address.indexOf('市') + 1, res.address.indexOf('区') + 1));
						this.query.address = res.address;
						this.query.latitude = res.latitude;
						this.query.longitude = res.longitude;
						this.query.province = res.address.slice(0, res.address.indexOf('省') + 1)
						this.query.city = res.address.slice(res.address.indexOf('省') + 1, res.address.indexOf('市') + 1)
						this.query.district = res.address.slice(res.address.indexOf('市') + 1, res.address.indexOf('区') + 1)
					}
				});
			},
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
	page {
		background-color: #FFFFFF;
	}
	label::before {
		content: '* ';
		color: red;
	}
	.input-view .input {
		display: flex;
		align-items: center;
		border-radius: 10upx;
		border: 1upx solid;
		height: 70upx;
		line-height: 60upx;
		padding: 1% 3%;
		font-size: 30upx;
		margin: 25upx 0;
	}
</style>