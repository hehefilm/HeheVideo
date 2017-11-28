   
$(document).ready(function(){
	$.get("https://shanxiaxuetang.com/v1.0/usersigned",{
		
	},
    function(data,status){
        if(data.code == 0) {
        	if(data.data.signed == 1) {
        		//已经报名
        		$('#course-sign').html('已报名');
        	} else {
        		//没有报名
        		$('#course-sign').html('立即报名');
        	}
        } else {
        	//网络错误
//      	alert("网络异常！");
        }
        
   });
});

function toCourse() {
	if($('#course-sign').html() == '立即报名') {
        $.get("https://shanxiaxuetang.com/v1.0/resources/avatar",{},
            function(data,status){
                if(data == '' || data.code == 40001) {
                    //没登录
                    if ($(window).width() > 768){
                        //pc端
                        $.get("https://shanxiaxuetang.com/sign/qrconnect_url",{
                
                            },
                            function(data,status){
                                window.location.href=data;
                            }
                        );
                    } else {
                        //手机端
                        if(wxopen.isWeiXin) {
                            //是微信
                            window.location.href = 'https://shanxiaxuetang.com/sign/pub'; 
                        } else {
                            //不是微信
                            alert('请搜索山下学堂官方微信公众号登录报名，或使用PC端浏览官网报名');
                        }   
                    }
                } else {
                    //登录成功了
                    window.location.href = 'signup.html?courseID=course_10001';
                }
            }
        );
	} else {
		alert('你已成功提交2018年春季新人班报名资料，不可重复报名。');
	}
}
