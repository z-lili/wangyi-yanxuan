import request from '../../service/request.js'

const state = {
	// 首页数据
	indexData:{},
}

const mutations = {
	// 更改首页数据
	changeIndexData(state,val){
		state.indexData = val
	}
}

const actions = {
	// 请求首页数据
	async getIndexData({commit}){
		const res = await request('index','get')
		commit('changeIndexData',res.indexData)
	}
}

const getters = {
	
}

export default {
	namespaced:true,
	state,
	mutations,
	actions,
	getters
}