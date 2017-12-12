
var leftWidth = $('.news-body-left').width()/6.57;

new Vue({
	el:'.news-body-left',
	data:{
		news:[],
		leftWidth:leftWidth
	},
	created: function() {
		this.getNewsBypg(1);
	},
	methods:{
		getNewsBypg(pg){
			axios.get(`http://staging.hehefilm.com/resources/news?pg=${pg}&num=6`)
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

new Vue({
	el:'.news-body-right',
	data:{
		rightDetail:{}
	},
	created: function() {
		this.getMove();
	},
	methods:{
		getMove(){
			axios.get(`http://staging.hehefilm.com/resources/movie_recommend`)
			.then(resp => {
				this.rightDetail = resp.data;
				console.log(resp.data);
			}).catch(err => {
				console.log('请求失败：'+err.status+','+err.statusText);
			});
		},
	},
});
