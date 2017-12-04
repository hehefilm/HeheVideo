/**
 * 直接创建组件(推荐)
 */
Vue.component('my-nav',{
	template:'\
		<nav class="navbar navbar-inverse navbar-fixed-top nav-out" role="navigation">\
			<div class="nav-wai">\
				<a id="pcLogo" class="nav-brand" href="../../static/hehe/index.html#Slider">\
					<img class="nav-brand" src="../../static/hehe/images/logo.png"/>\
				</a>\
				<ul class="nav-ul">\
					<li>\
						<a href="../../static/hehe/about.html" title="关于我们">关于我们</a>\
					</li>\
					<li>\
						<a href="../../static/hehe/films.html" title="影视作品">影视作品</a>\
					</li>\
					<li>\
						<a href="../../static/hehe/news.html" title="新闻资讯">新闻资讯</a>\
					</li>\
					<li>\
						<a href="../../static/hehe/business.html" title="商业项目">商业项目</a>\
					</li>\
					<li>\
						<a href="../../static/hehe/cooperation.html" title="合作伙伴">合作伙伴</a>\
					</li>\
					<li>\
						<a href="../../static/hehe/contactus.html" title="联系我们">联系我们</a>\
					</li>\
				</ul>\
				<div class="nav-search">\
					<input placeholder="搜索" />\
					<img src="../../static/hehe/images/search.png"/>\
				</div>\
			</div>\
		</nav>'
});


var vm=new Vue({ //这里的vm也是一个组件，称为根组件Root
	el:'#my-nav',
	data:{
		msg:'和和影业'
	}
});	

Vue.component('my-footer',{
	template:'\
		<footer>\
	        <div class="footer-container">\
	            <hr>\
	            <div class="footer-content">\
	                <div class="footer-info">\
	                    和和（上海）影业有限公司<br>\
	                    北京市朝阳区姚家园南路1号惠通时代广场7号楼C座5楼<br>\
	                    Hehe ( Shanghai ) Pictures Co., Ltd<br>\
	                    5th Floor, Zone C, Builing No.7, HuiTong Office Park<br>\
	                    No.1 Yaojiayuan South Road, Chaoyang District, 100025 Beijing, China<br>\
	                    电话：010-85565969\
	                </div>\
	                <div class="footer-link">\
	                    友情链接Links<br>\
	                    <a href="http://www.alibabapictures.com/">阿里巴巴影业</a>     \
	                    <a href="http://www.firstfilm.org.cn/">FIRST青年电影展</a>     \
	                    <a href="http://weibo.com/u/5754144206">并驰影业</a>     \
	                    <a href="javascript:void(0)">和和基金</a>     \
	                    <a href="javascript:void(0)">麦特</a>     \
	                    <a href="javascript:void(0)">至乐汇粹</a>     \
	                    <a href="javascript:void(0)">黑蚂蚁</a>     \
	                    <a href="javascript:void(0)">FOTISSIMO</a>     \
	                    <a href="javascript:void(0)">坤哥文化</a>     \
	                    <a href="javascript:void(0)">春和</a>     \
	                    <a href="javascript:void(0)">和和花园</a>     \
	                    <a href="javascript:void(0)">球和头</a>     \
	                    <a href="javascript:void(0)">和曦文化</a>     \
	                    <a href="javascript:void(0)">三目童子</a>     \
	                    <a href="javascript:void(0)">原来影像</a>     \
	                    <a href="javascript:void(0)">形影相随</a>     \
	                    <a href="javascript:void(0)">屋顶世界</a>     \
	                </div>\
	                <div class="footer-qr">\
	                    <img src="../../static/hehe/images/hehe-wb.jpg">\
	                    <img src="../../static/hehe/images/hehe-wx.jpg">\
	                </div>\
	            </div>\
	        </div>\
	    </footer>'
});
new Vue({ //这里的vm也是一个组件，称为根组件Root
	el:'#my-footer',
	data:{
		msg:'和和影业'
	}
});	