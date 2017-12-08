//page data

//$(document).ready(function(){
//	
//	
//	
//});
//
//$('#news-left').carousel({
//  interval: 2000
//})

// var width = $(window).width();
// var hei = width/2.18;
// $('.news-div').height(hei);
var allnews = {
		news:[
			{id:9527,time:'2017-10-03',title:'死亡不是永别，忘记才是',content:'作为一个郁郁寡话的创作者，时常会思考为什么皮克斯能把最简单的故事讲得那么极致，'},
			{id:1001,time:'2017-12-22',title:'电影结束时，我已泪流满面，学会告别',content:'大学同学相聚，饭后闲来无事，挑选了时间上最便利的一部电影去看，没想到却哭成傻逼。'},
			{id:1002,time:'2017-06-30',title:'套路背后，无数泪光闪烁',content:'其实我们都清楚皮克斯动画善于直击人心最柔软的部分，不论什么包装成什么样的题材，皮克斯动画的核心主题都非常的简单，无外乎成长、友谊、亲情三大类，'},
			{id:1001,time:'2017-03-03',title:'看完这部电影，我觉得更丧了',content:'中肯地说，这是一部制作精良的动画片，墓地、花瓣桥、亡灵之地等景色非常美。'},
			{id:9527,time:'2017-04-01',title:'万寿菊铺就的回忆，会否有人记得你？',content:'只是不要忘记啊。不要忘记那些此生哪怕只有一刻曾经对你重要过的人。'}
		]
};
new Vue({
	el:'.news-left',
	data:allnews,
	methods:{
	},
});

new Vue({
	el:'.news-right',
	data:allnews,
	methods:{
	},
});


var data = {list:[]};
var videosPageCur = 1;

function getNews(page) {
	$.get("https://shanxiaxuetang.com/resources/news?num=3&pg=" + page,function(rdata, status){
	    var moreData = {
		};
		moreData.list = jQuery.parseJSON(rdata);
		if (moreData.list.length > 0) {
			// data.list.concat(moreData.list);
			// Array.prototype.push.apply(data.list, moreData.list);

			// var html = template('tpl-news-item', moreData);
			// document.getElementById('news-list').insertAdjacentHTML('beforeend', html);
		}  else {
	    	$(".news-more").css('visibility', 'hidden');
		}
	});
}

getNews(videosPageCur);

function moreNews(event) {
    videosPageCur++;
    getNews(videosPageCur);
}

