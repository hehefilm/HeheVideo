
var leftWidth = $('.news-body-left').width()/6.57;
//$('.each-cell').height(leftWidth);

var news = [];

var right = {
	rightDetail:{
	        "title": "美人鱼", //片名
	        "director": "徐克", //导演
	        "writer": "周星驰", //编剧
	        "poster": "http://hh.com/something.jpg", //封面图片，海报
	        "release_date": "2017-01-01", //上映日期
	        "genre": "魔幻/喜剧", //类型
	        "duration": 120, //片长
	        "description": "美人鱼不是人。", //简介
	        "stars": "不知道/buzhidao/知道", //主演，演员
	        "clips": ["http://hh.com/1.jpg", "http://hh.com/2.jpg"], //剧照
	        "videos": ["http://hh.com/1.mp4", "http://hh.com/2.mp4"], //宣传视频
	        "store": "http://hehefilm.com", //衍生品di zhi
	        "lang": "普通话", //语言
	        "release_vision": "3D", //荧幕类型
	        "country": "中国", //制作国家
	        "mknown": "小海怪" //又名
	    }
};

new Vue({
	el:'.news-body-left',
	data:{
		news:news,
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
	data:right,
	methods:{
	},
});
