<template>
	<view>
		<view class="UCenter-bg">
			<view class='space'>
				<view class="stars ">
					<view class="star "></view>
					<view class="star pink "></view>
					<view class="star blue "></view>
					<view class="star yellow "></view>
				</view>
			</view>
			<image src='/static/logo.jpg' class="cu-avatar xs round shadow" mode='widthFix'></image>
			<view class='text-xl padding-top-xl'>腾讯地图应用开发</view>
			<view class='margin-top-sm'>
				<text>by：Jeskson</text>
			</view>
			<image src='../../static/shuiboheng.gif' mode='scaleToFill' class='gif-wave'></image>
		</view>
		
		<view class="cu-list menu card-menu margin-top-xl margin-bottom-xl shadow-lg" style=''>
			<navigator url="./baseMap" class="cu-item arrow">
				<view class='content'>
					<text class='cuIcon-locationfill text-green'></text>
					<text class='text-grey'>baseMap</text>
				</view>
			</navigator>
			<navigator url="./chooseMap" class="cu-item arrow">
				<view class='content'>
					<text class='cuIcon-locationfill text-green'></text>
					<text class='text-grey'>地图地址搜索chooseLocation</text>
				</view>
			</navigator>
			<navigator url="./activeMap" class="cu-item arrow">
				<view class='content'>
					<text class='cuIcon-locationfill text-green'></text>
					<text class='text-grey'>获取附近的动态，点聚合</text>
				</view>
			</navigator>
			<navigator url="./peopleMap" class="cu-item arrow">
				<view class='content'>
					<text class='cuIcon-locationfill text-green'></text>
					<text class='text-grey'>地图上标注附近的人</text>
				</view>
			</navigator>
			<navigator url="./shopMap" class="cu-item arrow">
				<view class='content'>
					<text class='cuIcon-locationfill text-green'></text>
					<text class='text-grey'>定位附近门店</text>
				</view>
			</navigator>
		</view>
		
	</view>
</template>

<script>
	export default {
		components: {
		},
		data() {
			return {
				flag: true,
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
			checkTest() {
				this.flag = !this.flag
			}
		},
	}
</script>

<style lang="scss" scoped>
	@import url("./stars.css");
</style>
