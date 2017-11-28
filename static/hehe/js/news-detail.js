//page data
$(document).ready(function(){
	
	var urlinfo=window.location.href; //获取当前页面的url 
	var newsid=getURLParameter('nid');//得到参数值 
	getNewsDetail(newsid); 
	
});

function getURLParameter(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null;
}

var next_id,pre_id;

function getNewsDetail(newsid) {
	$.get("https://shanxiaxuetang.com/resources/news/" + newsid,function(rdata, status){
		var jsonobj = $.parseJSON(rdata);
		$('#news-detail').prepend(jsonobj.cnt);
		if(wxopen.isWeiXin){
			var shareLink = "https://shanxiaxuetang.com/static/hehe/news-detail.html?nid="+newsid;
			$.get("https://shanxiaxuetang.com/sign/get_ticket",{
				url:window.location.href
			},
			function(data,status){
				var jdata = $.parseJSON(data);
				wxopen.shareData.appid = jdata.data.appid;
				wxopen.timestamp = jdata.data.timestamp;
				wxopen.nonceStr = jdata.data.noncestr;
				wxopen.signature = jdata.data.signature;
				wxopen.shareData.title = jsonobj.ntitle;
				wxopen.shareData.desc = jsonobj.nsubtitle;
				wxopen.shareData.link = shareLink;
				wxopen.shareData.imgUrl = "http://qnp.shanxiaxuetang.com/sx_logo.png"
				wxopen.config();
			});
		}
		next_id = jsonobj.next_id;
		pre_id = jsonobj.pre_id;
		if(pre_id == '') {
			//没有上一条
			$('#top-list').html('< 返回新闻列表');
		} else {
			$('#top-list').html('< 上一条')
		}
		
		if(next_id == '') {
			$('#next-list').html('end');
		} else {
			$('#next-list').html('下一条 >');
		}
	});
}

function topNews() {
	if(pre_id == '') {
		//没有上一条
		window.location = 'news.html';
	} else {
		window.location = 'news-detail.html?nid='+pre_id;
	}
}

function nextNews() {
	if(next_id != '') {
		window.location = 'news-detail.html?nid='+next_id;
	}
}
