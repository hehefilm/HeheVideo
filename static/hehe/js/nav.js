function stopBubble(e) {
	var e = e || window.event;
	if (e.stopPropagation) {
		e.stopPropagation();
	} else {
		e.cancelable();
	}
}

var mo = function(e) {e.preventDefault();};
function openMask() {
    $("body").css({overflow: "hidden"});
    document.addEventListener("touchmove", mo, false);
}
function closeMask() {
    $("body").css({overflow: "auto"});
    document.removeEventListener("touchmove", mo, false);        
}

var timeout;
var isLogin;
function pushNav(event) {
	var isActive = event.dataset.isActive;
	if(isActive==="true") {
		event.dataset.isActive = false;
		$('#phone-navbar')[0].dataset.isActive = false;
		$('#phone-ul')[0].dataset.isActive = false;
		$('#phone-topright')[0].dataset.isActive = false;
		timeout = setTimeout(function(){
			$('.nav-wai-phone').css('display','none');
		},800);
		closeMask();
	} else {
		event.dataset.isActive = true;
		$('#phone-navbar')[0].dataset.isActive = true;
		$('#phone-ul')[0].dataset.isActive = true;
		$('#phone-topright')[0].dataset.isActive = true;
		$('.nav-wai-phone').css('display','flex');
		clearTimeout(timeout);
		openMask();
	}
}

$(document).ready(function(){
	$.get("https://shanxiaxuetang.com/v1.0/resources/avatar",{
			
		},
	    function(data,status){
			if(data == '' || data.code == 40001) {
				//没登录
				isLogin = false;
				if ($(window).width() > 768){
					//pc端
					$('.nav-login').css('display','flex');
					$('.nav-avatar').css('display','none');
				} else {
					//手机端
					if(wxopen.isWeiXin) {
						//是微信
						$('.nav-avatar').css('display','block');
						$('.nav-avatar').attr('href','https://shanxiaxuetang.com/sign/pub'); 
					} else {
						//不是微信
						$('.nav-avatar').css('display','block');
						$(".nav-avatar").click(function(){
						  alert('请在微信或者pc端打开');
						});
					}
					
				}
							
			} else {
				//登录成功了
				isLogin = true;
				$('.nav-login').css('display','none');
				$('.nav-avatar').css('display','block');
				$('.nav-avatar').css('background-image','url('+data+')');
				$('.nav-avatar').attr('href','https://shanxiaxuetang.com/static/hehe/homepage.html');
			}
	    }
	);
})

function signup() {
	$.get("https://shanxiaxuetang.com/sign/qrconnect_url",{
			
		},
	    function(data,status){
			window.location=data;
	    }
	);
	
	
}

$('.sxScroll').click(function () {
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
    return false;
});

function phoneTabClick(event) {
    var id = event.id;
    $('#' + oldId).css('border-bottom', '0px solid white');
    $('#' + id).css('border-bottom', '2px solid white');
    oldId = id;
    $('html, body').animate({
        scrollTop: $($.attr(event, 'href')).offset().top - $('.nav-wai').height()
    }, 500);
    return false;
}