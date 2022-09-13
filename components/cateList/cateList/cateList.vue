<template>
	<view>
		<!-- 轮播图 -->
		<swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="800" v-if="cateList.category">
			<swiper-item v-for="(item,index) in cateList.category.bannerUrlList" :key="index">
				<view class="swiper-item">
					<image class="swiper-img" :src="item" mode=""></image>
				</view>
			</swiper-item>
		</swiper>
		<!-- 标题 -->
		<view class="title">{{ cateList.category.frontName }}</view>
		<view class="desc">{{ cateList.category.frontDesc }}</view>
		<!-- 商品列表 -->
		<view class="goods-list">
			<view @tap="toGoodsDetail(item)" class="goods-list-item" v-for="item in cateList.itemList" :key="item.id">
				<image class="goods-list-img" :src="item.primaryPicUrl"></image>
				<view class="goods-desc">{{ item.name }}</view>
				<view class="goods-price">{{ item.retailPrice }}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import request from '@/service/request.js'
	export default {
		props:['L1Id'],
		data() {
			return {
				// cateList数据
				cateListData:[]
			}
		},
		created() {
			this.getCateList('index/cateList')
		},
		methods: {
			// 获取cateList数据
			async getCateList(url){
				const data = await request(url)
				this.cateListData = data.indexCateList
			},
			// 去商品详情,并且把商品详情数据传递过去
			toGoodsDetail(item){
				wx.navigateTo({
					url:'/pages/goodsDetail/goodsDetail?goodsDetail='+encodeURIComponent(JSON.stringify(item))
				})
			}
		},
		computed:{
			cateList(){
				return this.cateListData.find((item)=>{
					return item.category.parentId === this.L1Id
				})
			}
		},
	}
</script>

<style lang="stylus">
	.swiper
		height 360rpx
		.swiper-img
			height 360rpx
			width 100%
	.title
		font-size 40rpx
		color #333
		line-height 80rpx
		text-align center
	.desc
		font-size 30rpx
		color #666
		line-height 40rpx
		text-align center
	.goods-list
		display flex
		flex-wrap wrap
		justify-content space-around
		&::after
			content ''
			width 344rpx
		.goods-list-item
			width 344rpx
			height 480rpx
			.goods-list-img
				width 344rpx
				height 344rpx
			.goods-price
				font-size 36rpx
				color: red
</style>
