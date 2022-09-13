import Vue from 'vue'
const state = {
	cartList:[
		{
					"isSelected": true,
					"count": 2,
					"promId": 0,
					"showPoints": false,
					"itemTagList": [{
						"itemId": 1535004,
						"tagId": 128111157,
						"freshmanExclusive": false,
						"name": "暖冬特惠",
						"subType": 204,
						"forbidJump": false,
						"type": 2
					}],
					"rank": 1,
					"id": 1535004,
					"sellVolume": 4001,
					"primaryPicUrl": "https://yanxuan-item.nosdn.127.net/f79906f1b1fe86420ea40473de66ec0e.png",
					"soldOut": false,
					"sortFlag": 0,
					"commentCount": 0,
					"onSaleTime": 1538101761748,
					"picMode": 1,
					"commentWithPicCount": 0,
					"underShelf": false,
					"status": 2,
					"couponConflict": true,
					"forbiddenBuy": false,
					"promotionDesc": "暖冬特惠",
					"limitedFlag": 204,
					"pieceNum": 0,
					"itemSizeTableDetailFlag": false,
					"forbidExclusiveCal": false,
					"rewardShareFlag": false,
					"updateTime": 1575893634989,
					"showCommentEntrance": true,
					"pieceUnitDesc": "件",
					"specialPromTag": "",
					"counterPrice": 299,
					"categoryL2Id": 0,
					"retailPrice": 209,
					"primarySkuPreSellPrice": 0,
					"preLimitFlag": 0,
					"itemPromValid": true,
					"promTag": "暖冬特惠",
					"source": 0,
					"points": 0,
					"primarySkuPreSellStatus": 0,
					"extraServiceFlag": 0,
					"flashPageLink": "",
					"autoOnsaleTimeLeft": 0,
					"innerData": {},
					"saleCenterSkuId": 0,
					"pointsStatus": 0,
					"extraPrice": "",
					"colorNum": 0,
					"showTime": 0,
					"autoOnsaleTime": 0,
					"preemptionStatus": 1,
					"isPreemption": 0,
					"zcSearchFlag": false,
					"name": "男式色拉姆内衣套装2.0",
					"appExclusiveFlag": false,
					"itemType": 1,
					"listPicUrl": "https://yanxuan-item.nosdn.127.net/c2eeb1b872af1b8efc179a7515aacdaa.png",
					"pointsPrice": 0,
					"simpleDesc": "色拉姆发热面料，加厚升级",
					"seoTitle": "",
					"newItemFlag": false,
					"buttonType": 0,
					"primarySkuId": 1636062,
					"displaySkuId": 1636056,
					"productPlace": "",
					"itemSizeTableFlag": false
				},
				{
					"isSelected": true,
					"count": 1,
					"promId": 0,
					"showPoints": false,
					"itemTagList": [{
						"itemId": 1536001,
						"tagId": 128111157,
						"freshmanExclusive": false,
						"name": "暖冬特惠",
						"subType": 204,
						"forbidJump": false,
						"type": 2
					}],
					"rank": 1,
					"id": 1536001,
					"sellVolume": 3634,
					"primaryPicUrl": "https://yanxuan-item.nosdn.127.net/32b8b2d07b1c4327593a4a70993eeac2.png",
					"soldOut": false,
					"sortFlag": 0,
					"commentCount": 0,
					"onSaleTime": 1538101896296,
					"picMode": 1,
					"commentWithPicCount": 0,
					"underShelf": false,
					"status": 2,
					"couponConflict": true,
					"forbiddenBuy": false,
					"promotionDesc": "暖冬特惠",
					"limitedFlag": 204,
					"pieceNum": 0,
					"itemSizeTableDetailFlag": false,
					"forbidExclusiveCal": false,
					"rewardShareFlag": false,
					"updateTime": 1575894115275,
					"showCommentEntrance": true,
					"pieceUnitDesc": "件",
					"specialPromTag": "",
					"counterPrice": 299,
					"categoryL2Id": 0,
					"retailPrice": 209,
					"primarySkuPreSellPrice": 0,
					"preLimitFlag": 0,
					"itemPromValid": true,
					"promTag": "暖冬特惠",
					"source": 0,
					"points": 0,
					"primarySkuPreSellStatus": 0,
					"extraServiceFlag": 0,
					"flashPageLink": "",
					"autoOnsaleTimeLeft": 0,
					"innerData": {},
					"saleCenterSkuId": 0,
					"pointsStatus": 0,
					"extraPrice": "",
					"colorNum": 0,
					"showTime": 0,
					"autoOnsaleTime": 0,
					"preemptionStatus": 1,
					"isPreemption": 0,
					"zcSearchFlag": false,
					"name": "女式色拉姆内衣套装2.0",
					"appExclusiveFlag": false,
					"itemType": 1,
					"listPicUrl": "https://yanxuan-item.nosdn.127.net/02b61fb5700aed6761b7524d98ed0837.png",
					"pointsPrice": 0,
					"simpleDesc": "色拉姆发热面料，加厚升级",
					"seoTitle": "",
					"newItemFlag": false,
					"buttonType": 0,
					"primarySkuId": 1634105,
					"displaySkuId": 1634104,
					"productPlace": "",
					"itemSizeTableFlag": false
				}
	]
}

const mutations = {
	// 添加商品到购物车
	addGoods(state,val){
		// 如果购物车已经有了该商品，商品数量加一
		// 购物车没有，才push到商品数组中，并且商品数量设置为 1
		const res = state.cartList.find(item=>item.id === val.id)
		if(res){
			res.count += 1
		}else{
			// val.count = 1
			// val.isSelected = true
			// 变成响应式
			Vue.set(val,'count',1)
			Vue.set(val,'isSelected',true)
			state.cartList.push(val)
		}
	},
	// 修改选中状态
	changeSelect(state,val){
		state.cartList[val.index].isSelected = val.isSelected
	},
	// 加减购物车数量
	changeCartNum(state,{isadd,index}){
		if(isadd){
			if(state.cartList[index].count > 1){
				state.cartList[index].count -= 1
			}else {
				wx.showModal({
					title:'提示',
					content:'您确定要删除该商品吗?',
					success(res) {
						if(res.confirm){
							state.cartList.splice(index,1)
						}
					}
				})
			}
		}else {
			state.cartList[index].count += 1
		}
	},
	// 全选或者全不选
	isALLSelected(state,isAllSelect){
		return state.cartList.forEach(item=>item.isSelected = isAllSelect)
	}
}

const actions = {
	
}

const getters = {
	// （反选功能）购物车是否全选，使用数组的every方法判断每一项是否为true
	isSelect(state){
		return state.cartList.every(item=>item.isSelected == true)
	},
	// 商品总数量
	totalCount(state){
		return state.cartList.reduce((pre,item)=>{
			return pre+=item.count
		},0)
	},
	// 商品总价格
	totalPrice(state){
		return state.cartList.reduce((pre,item)=>{
			return pre+=item.retailPrice*item.count
		},0)
	}
}

export default {
	namespaced:true,
	state,
	mutations,
	actions,
	getters
}