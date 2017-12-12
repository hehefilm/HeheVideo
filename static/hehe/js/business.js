
new Vue({
	el:'.news-left-right',
	data:{
		project:[],
	},
	created: function() {
		this.getBusinessBypg(1);
	},
	methods:{
		getBusinessBypg(pg){
			axios.get(`http://staging.hehefilm.com/resources/project?pg=${pg}&num=5`)
			.then(resp => {
				this.project = resp.data.project_li;
				console.log(resp.data);
			}).catch(err => {
				console.log('请求失败：'+err.status+','+err.statusText);
			});
		},
		toBusinessDetail(pid){
			window.location.href = "business-detail.html?pid="+pid;
		}
	},
});

