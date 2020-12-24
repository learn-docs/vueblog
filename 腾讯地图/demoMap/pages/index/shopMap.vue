<template>
	<view>
		<!-- 传入门店信息，标记点 -->
		<da-position :storeData="storeData" :markers="markers"></da-position>
	</view>
</template>

<script>
	import daPosition from '../../components/da-position/da-position.vue'
	export default {
		components: {
			daPosition,
		},
		data() {
			return {
				// 门店信息展示
				storeData:[{
						id:1,
						name: '门店dadaqianduan1号',
						address:'深圳市号',
						tel:'12345678956',
					},{
						id:2,
						name:'门店dadaqianduan2号',
						address:'深圳市号2号',
						tel:'12522222222',
					},
				],
				//门店在地图上的标记
				markers: [{
					id:1,
				    latitude: 24.4483294023427,
				    longitude: 118.08479034393311,
				    iconPath: '../../static/shop.png',
					callout:{
						content:"门店XXXXX1号店",
						borderRadius:10,
						padding:10,
						display:"ALWAYS",
					}
				}, {
					id:2,
				    latitude: 24.45580,
				    longitude: 118.12266,
				    iconPath: '../../static/shop.png',
					callout:{
						content:"门店XXXXX2号店",
						borderRadius:10,
						padding:10,
						display:"ALWAYS",
					}
				}],
			}
		},
		onLoad() {
			console.log('页面加载了')
		},
		onShow() {
			console.log('页面显示了')
		},
		onReady() {
			console.log('页面初次渲染完成了')
		},
		onHide() {
			console.log('页面隐藏了')
		},
		methods: {
			
		},
	}
</script>

<style lang="scss" scoped>
</style>
