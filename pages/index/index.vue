<template>
	<view class="content">
	<view class="header">
		<image class="logo" src="../../static/images/logo.png"></image>
		<view class="search">
			<text class="iconfont icon-sousuotianchong"></text>
			<input type="text" placeholder="请输入...">
		</view>
		<button>coderz</button>
	</view>
	<!-- 滑块 -->
	<scroll-view class="navScroll" scroll-x="true" enable-flex="true" v-if="indexData.kingKongModule">
		<view class="navItem" :class="{activeItem:navIndex === -1}" @click="navClick(-1,-1)">推荐</view>
		<view class="navItem" :class="{activeItem:navIndex === index}" @click="navClick(index,item.L1Id)" v-for="(item,index) in indexData.kingKongModule.kingKongList" :key="item.L1Id">{{ item.text }}</view>
	</scroll-view>
	<!-- 推荐 -->
	<recommend v-if="navIndex === -1"></recommend>
	<!-- 其他 -->
	<cateList :L1Id="L1Id" v-else></cateList>
	</view>
</template>

<script>
	import request from '../../service/request.js'
	import recommend from '@/components/recommend/recommend.vue'
	import cateList from '@/components/cateList/cateList/cateList.vue'
	export default {
		components:{
			recommend,
			cateList
		},
		data() {
			return {
				// 首页数据
				indexData:{},
				// 高亮下标
				navIndex:-1,
				// L1Id 传给子组件cateList，用来控制显示不同的界面
				L1Id:-1
			}
		},
		onLoad() {
		},
		created(){
		this.getIndexDatas()
		},
		methods: {
			// 点击nav
			navClick(index,id){
				this.navIndex = index
				this.L1Id = id
			},
			// 请求首页数据
			async getIndexDatas(){
				await this.$store.dispatch('home/getIndexData')
				this.indexData = this.$store.state.home.indexData
			}
		}
	}
</script>

<style lang="stylus">
	.header
		display flex
		padding 10rpx 5rpx
		.logo
			width 140rpx
			height 40rpx
			margin 10rpx
		.search
			width 420rpx
			height 60rpx
			background-color #f5f5f5
			position relative
			.iconfont
				position absolute
				top 10rpx
				left 4rpx
				font-size 40rpx
			input
				width 360rpx
				height 60rpx
				margin-left 60rpx
		button
			width 144rpx
			height 60rpx
			font-size 26rpx
			padding 0 4rpx
			line-height 60rpx
			text-align center
			
			
	.navScroll
		display flex
		white-space nowrap
		height 80rpx
		.navItem
			display inline-block
			padding 10rpx
			height 40rpx
			font-size 28rpx
		.activeItem
			border-bottom 3rpx solid #BB2C08
			color #BB2C08
	
	
	
	
	.test
		color red
</style>
