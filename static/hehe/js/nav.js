/**
 * 直接创建组件(推荐)
 */
Vue.component('my-nav',{
	template:'<nav class="navbar navbar-inverse navbar-fixed-top nav-out" role="navigation"> <div class="nav-wai"> <a id="pcLogo" class="nav-brand" href="../../static/hehe/index.html#Slider"></a> <ul class="nav-ul"> <li> <a href="../../static/hehe/about.html" title="关于我们">关于我们</a> </li> <li> <a href="../../static/hehe/films.html" title="影视作品">影视作品</a> </li> <li> <a href="../../static/hehe/news.html" title="新闻资讯">新闻资讯</a> </li> <li> <a href="../../static/hehe/business.html" title="商业项目">商业项目</a> </li> <li> <a href="../../static/hehe/cooperation.html" title="合作伙伴">合作伙伴</a> </li> <li> <a href="../../static/hehe/contactus.html" title="联系我们">联系我们</a> </li> </ul> </div> </nav>'
});

var vm=new Vue({ //这里的vm也是一个组件，称为根组件Root
	el:'#my-nav',
	data:{
		msg:'和和影业'
	}
});	

