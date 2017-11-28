//page data
var data = {list:[]};
var videosPageCur = 1;

function getNews(page) {
	$.get("https://shanxiaxuetang.com/resources/news?num=3&pg=" + page,function(rdata, status){
	    var moreData = {
		};
		moreData.list = jQuery.parseJSON(rdata);
		if (moreData.list.length > 0) {
			data.list.concat(moreData.list);
			Array.prototype.push.apply(data.list, moreData.list);

			var html = template('tpl-news-item', moreData);
			document.getElementById('news-list').insertAdjacentHTML('beforeend', html);
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