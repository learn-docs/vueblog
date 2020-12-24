<template>
	<view id="baseMap">
		<view class="page-body">
			<view class="page-section page-section-gap">
				<map :scale="scale" style="width: 100%; height: 100%;"
				enable-3D="false" show-compass="false" enable-overlooking="false"
				:enable-satellite="false" :enable-traffic="false" show-location="false"
				 :latitude="latitude" :longitude="longitude" :markers="markers">
				</map>
			</view>
		</view>
	</view>
</template>
 
<script>
	export default {
		data() {
			return {
				id:0, // 使用 marker点击事件 需要填写id
				title: 'map',
				scale: '14',
				latitude: 39.909,
				longitude: 116.39742,
				markers: [{
					id: 1, // Number
					title: '1', // String-标注点名
					rotate: 180, // Number - 顺时针旋转的角度，范围 0 ~ 360，默认为 0
					alpha: 0.5, // 默认1，无透明，范围 0 ~ 1
					latitude: 39.899,
					longitude: 116.39742,
					width: 30,
					height: 30,
					// callout: {
					// 	display: "BYCLICK",
					// 	padding: 10,
					// 	borderRadius: 5,
					// 	content: '',
					// },
					// anchor: {},
					iconPath: '../../../static/location.png', // 显示的图标
				}, {
					id: 2,
					title: '2', // String
					latitude: 39.90,
					longitude: 116.39,
					callout: {
						color: '#007AFF', // 文本颜色
						bgColor: '#563BFF', // 背景色
						display: "ALWAYS", // 'BYCLICK':点击显示; 'ALWAYS':常显
						fontSize: 15,
						textAlign: 'left', // 文本对齐方式。有效值: left, right, center
						padding: 10, // 文本边缘留白
						borderRadius: 5,
						content: '腾讯地图',
					},
					label: {
						content: 'Jeskson',
						color: '#000000',
						fontSize: 12,
						borderWidth: 12,
						borderColor: '#007AFF',
						borderRadius: 5,
						padding: 5,
						textAlign: 'center',
						bgColor: '#563BFF',
					},
					iconPath: '../../../static/location.png'
				}]
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
	}
</style>