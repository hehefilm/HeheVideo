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
		<footer style="background-color: #f6f6f5 !important;" class="no-phone">\
		    <div id="pc-footer" class="footer-bottom">\
		        <div class="footer-bottom-qr-view">\
		            <div class="footer-bottom-qr-container">\
		                <img class="footer-show-er" src="http://qnp.shanxiaxuetang.com/sx-wx.jpg"/>\
		                <!--<p>官方微信公众平台</p>-->\
		            </div>\
		        </div>\
		        <div class="footer-bottom-div">\
		            <!--<img src="../../static/hehe/images/demo_footer2.png"/>-->\
		            <!--<img src="../../static/hehe/images/demo_footer1.png"/>-->\
		            <div>\
		                <div class="footer-bottom-icon-view">\
		                    <img src="/images/email-icon.png" class="email-icon">\
		                    <p class="footer-bottom-email">\
		                        <!--<span style="color: #66BBFF;">-->\
		                        <a href="mailto:shanxia@shanxiaxuetang.com" style="color: #646464;">\
		                            shanxia@shanxiaxuetang.com</a>\
		                        <!--</span>-->\
		                    </p>\
		                    <img src="/images/wx-icon.png" class="wx-icon">\
		                    <p class="footer-bottom-email">\
		                        山下学堂\
		                    </p>\
		                </div>\
		                <hr/>\
		                <div style="width: 100%; display: flex; justify-content: space-between; flex-wrap: wrap;">\
		                    <span class="footer-bottom-address">版权所有: 北京山下艺术中心有限公司&nbsp;" 京ICP备17055698号</span>\
		                    <span class="footer-bottom-copyright">CopyRight © 2017 The Dome Studio,All Rights Reserved</span>\
		                </div>\
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