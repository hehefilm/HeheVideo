
new Vue({
	el:'#news-detail',
	data:{
		newsdetail:"",
	},
	created: function() {
		var urlinfo=window.location.href; //获取当前页面的url 
		var newsid=this.getURLParameter('nid');//得到参数值 
		this.getNewsDetail(newsid); 
	},
	methods:{
		getURLParameter(name) {
		    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null;
		},
		getNewsDetail(newsid){
			axios.get(`http://staging.hehefilm.com/resources/news/${newsid}`)
			.then(resp => {
				var jsonobj = $.parseJSON(rdata);
				this.newsdetail = jsonobj;
				console.log(resp.data);
			}).catch(err => {
				console.log('请求失败：'+err.status+','+err.statusText);
			});
		},
	},
});

function getNewsDetail(newsid) {
	$.get("https://shanxiaxuetang.com/resources/news/" + newsid,function(rdata, status){
		var jsonobj = $.parseJSON(rdata);
		$('#news-detail').prepend(jsonobj.cnt);
		
	});
}
