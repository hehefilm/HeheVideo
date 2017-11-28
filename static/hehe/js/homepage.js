   
$(document).ready(function(){
		$.get("https://shanxiaxuetang.com/v1.0/usercourses",{
			
		},
	    function(data,status){
//			var data = '{"code": 0,"msg": "ok","data": {"uc_li": [{"course_id": "1234","created": 1234567890,"status": "info" } ] } }'
		    
		    var jsonobj = data;
		    $.each(jsonobj.data.uc_li, function (i, each){
				jsonobj.data.uc_li[i].time = formatDate(each.created);
				jsonobj.data.uc_li[i].created = "";
			});
//			if(jsonobj.data.uc_li.length == 0) {
//				return;
//			}
		    
	    	if ($(window).width() > 768){
	    		$('#avatar').attr('src',jsonobj.data.user.avatar);
	    		$('#nickname').html(jsonobj.data.user.nickname);
	    		var html = template('tpl-course-item-pc', jsonobj.data);
				document.getElementById('tb').insertAdjacentHTML('beforeend', html);
			} else {
				$('#avatar-phone').attr('src',jsonobj.data.user.avatar);
	    		$('#nickname-phone').html(jsonobj.data.user.nickname);
				var html = template('tpl-course-item-phone', jsonobj.data);
				document.getElementById('phone-msg').insertAdjacentHTML('beforeend', html);
			}
	    });
	    
});

function formatDate(time) {
    var date = new Date(time*1000);
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (month.length <= 1) {
      month = "0" + month;
    }
    var day = date.getDate();
    if (day.length <= 1) {
      day = "0" + day;
    }
    return year + "." + month + "." + day ;
    
}



