export default (url,method='GET',data={})=>{
	return new Promise((resolve,reject)=>{
		uni.request({
		    url:`http://localhost:8000/${url}`,
			method:method,
		    data: data,
		    success: (res) => {
		       resolve(res.data)
		    },
			fail:(err) => {
				reject(err.data)
			}
		});
	})
}