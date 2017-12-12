
new Vue({
	el:'.news-left-right',
	data:{
		news:[],
	},
	created: function() {
		this.getNewsBypg(1);
	},
	methods:{
		getNewsBypg(pg){
			axios.get(`http://staging.hehefilm.com/resources/news?pg=${pg}&num=5`)
			.then(resp => {
				var newList = resp.data.news_li;
				this.news = newList;
				console.log(resp.data);
			}).catch(err => {
				console.log('请求失败：'+err.status+','+err.statusText);
			});
		},
	},
});


