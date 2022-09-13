<template>
	<view class="category">
		<view class="header">
			<view class="search">
				搜索商品
			</view>
		</view>
		<!-- 内容 -->
		<view class="contain">
			<view class="contain-left">
				<scroll-view class="contain-left-scroll" scroll-y="true" enable-flex="true">
					<view @tap="tachLeftItem(index)" :class="{ active:activeIndex === index }" class="left-item" v-for="(item,index) in categoryDatas" :key="item.id">{{ item.name }}</view>
				</scroll-view>
			</view>
			<view class="contain-right">
				<scroll-view class="contain-right-scroll" scroll-y="true" enable-flex="true">
					<!-- 大图 -->
					<image class="bigCateImg" :src="cateObj.imgUrl" mode=""></image>
					<!-- 列表 -->
					<view class="goodsList">
						<view class="goodsItem" v-for="item in cateObj.subCateList" :key="item.id">
							<image class="goodsImg" :src="item.wapBannerUrl" mode=""></image>
							<view class="goodsName">
								{{ item.name }}
							</view>
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
	import request from '@/service/request.js'
	export default {
		data() {
			return {
				// 分类数据
				categoryDatas:[],
				activeIndex:0
			}
		},
		created() {
			this.getCategoryData()
		},
		methods: {
			// 请求分类数据
			async getCategoryData(){
				const res = await request('category')
				this.categoryDatas = res
				console.log(this.categoryDatas)
			},
			// 点击左侧item
			tachLeftItem(index){
				this.activeIndex = index
			}
		},
		computed:{
			cateObj(){
				return this.categoryDatas[this.activeIndex]
			}
		}
	}
</script>

<style lang="stylus">
	.category
		.header
			padding 10rpx 0rpx
			.search
				width 90%
				height 60rpx
				line-height: 60rpx
				background-color #ddd
				border-radius: 4rpx
				text-align: center
				margin: 0 auto
		.contain
			display: flex
			.contain-left
				width 20%
				height calc(100vh - 82rpx)
				border-right 1px solid #ccc
				border-top 1px solid #ccc
				.contain-left-scroll
					height calc(100vh - 82rpx)
				.left-item
					height 70rpx
					line-height 70rpx
					font-size: 30rpx
					text-align: center
					position: relative
				.active 
					color: #BB2C08
			.contain-right
				width 80%
				height calc(100vh - 82rpx)
				border-top 1rpx solid #ccc
				.contain-right-scroll
					height 100%
					.bigCateImg
						height 200rpx
						width 520rpx
						display: block
						margin 10rpx auto
					.goodsList
						display: flex
						flex-wrap: wrap
						.goodsItem
							width: 33.33%
							height 200rpx
							text-align: center
							.goodsImg
								width 90%
								height 140rpx
							.goodsName
								font-size: 24rpx
								text-align: center
							
</style>
