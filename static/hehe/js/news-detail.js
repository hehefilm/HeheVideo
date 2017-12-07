//page data
$(document).ready(function(){
	
	var urlinfo=window.location.href; //获取当前页面的url 
	var newsid=getURLParameter('nid');//得到参数值 
	getNewsDetail(newsid); 
	
});

function getURLParameter(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null;
}

function getNewsDetail(newsid) {
	$.get("https://shanxiaxuetang.com/resources/news/" + newsid,function(rdata, status){
		var jsonobj = $.parseJSON(rdata);
		$('#news-detail').prepend(jsonobj.cnt);
		
	});
}
