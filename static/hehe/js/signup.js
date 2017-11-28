function getUrlParms() {
    var args = new Object();   
    var query = location.search.substring(1);
    var pairs = query.split("&");
    for (var i = 0 ; i < pairs.length ; i++ ) {   
        var pos = pairs[i].indexOf('=');
        if ( pos == -1 ) continue;
        var argname = pairs[i].substring(0, pos);
        var value = pairs[i].substring(pos + 1);
        args[argname] = unescape(value);
    }
    return args;
}

var args = getUrlParms();

$.get("https://shanxiaxuetang.com/v1.0/resources/avatar",{},
	    function(data,status){
			if(data == '' || data.code == 40001 || args['courseID'] == undefined) {
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
						alert('请在微信或者pc端打开');
                        window.location.href = 'course-new-detail.html';
					}
					
				}
				
				
			} else {
				//登录成功了
				switch (args['courseID']) {
			        case 'course_10001':
			            $('.signup-caption > .font-blue')[0].innerText = '2018年春季新人班';
			        break;
			        case 'course_10002':
			            $('.signup-caption > .font-blue')[0].innerText = '职业演员班';
			        break;
			    }
			}
	    }
	);

if ($(window).width() > 768){
    $.datetimepicker.setLocale('zh');
    jQuery('#datetime').datetimepicker({
        timepicker: false,
        todayButton: false,
        defaultDate: '1999/01/01',
        format: 'Y-m-d',
        maxDate: 0,
        scrollMonth:false,
        scrollTime:false,
        scrollInput:false,
        yearStart: 1950,
        yearEnd: 2020,
        onChangeDateTime: function(e) {
            // Revalidate the date field
            $('.signup-step1').formValidation('revalidateField', 'birthday');
        }
    });
} else {
    var currYear = (new Date()).getFullYear();  
    var opt={};
    opt.date = {preset : 'date'};
    opt.datetime = {preset : 'datetime'};
    opt.time = {preset : 'time'};
    opt.default = {
        theme: 'android-ics light', //皮肤样式
        display: 'modal', //显示方式 
        mode: 'scroller', //日期选择模式
        dateFormat: 'yy-mm-dd',
        lang: 'zh',
        showNow: false,
        nowText: "今天",
        startYear: currYear - 50, //开始年份
        endYear: currYear, //结束年份
        onClose: function(e) {
            // Revalidate the date field
            setTimeout(function(){
                $('.signup-step1').formValidation('revalidateField', 'birthday');
            }, 200);
        }
    };

    $("#datetime").mobiscroll($.extend(opt['date'], opt['default']));
}
// $('#datetime').datetimepicker({
//     container: '#signup',
//     language: 'zh-CN',
//     minView: 2,
//     autoclose: true
// });

// $('#signup-step2-images-item-upload1 > img').show();
//                 $('#signup-step2-images-item-upload1 > img').attr('src', 'https://odffqu1hn.qnssl.com/images/home_banner.jpg');
//                 $('#signup-step2-images-item-upload1 .signup-hint-add').hide();
//                 $('#signup-step2-images-item-upload1 .signup-hint-progress').hide();
//                 $('#signup-step2-images-item-upload1 .progress-bar').css('width', 0+'%').attr('aria-valuenow', 0);
//                 $('#signup-step2-images-item-upload1 .signup-hint-error').hide();

// $('#signup-step3-video-upload > video').show();
//                                 $('#signup-step3-video-upload > video').attr('src', 'https://odffqu1hn.qnssl.com/small.mp4');
//                                 $('#signup-step3-video-upload .signup-hint-add').hide();
//                                 $('#signup-step3-video-upload .signup-hint-progress').hide();
//                                 $('#signup-step3-video-upload .progress-bar').css('width', 0+'%').attr('aria-valuenow', 0);
//                                 $('#signup-step3-video-upload .signup-hint-error').hide();

var qnDomain = 'http://qnp.shanxiaxuetang.com';
var formJson = {};

$.get("https://shanxiaxuetang.com/v1.0/tempsign",function(rdata, status){
    if (rdata.code == 0) {
        var rjson = rdata.data;
        formJson = rdata.data;
        formJson.course_id = args['courseID'];
        $("input[name='name']").val(rjson.name);
        $("input[name='cell']").val(rjson.cell);
        $("input[name='mail']").val(rjson.mail);
        $("input[name='height']").val(rjson.height);
        $("input[name='weight']").val(rjson.weight);
        $("input[name='id_num']").val(rjson.id_num);
        $("input[name='birthday']").val(rjson.birthday);
        //id_type
        switch (rjson.id_type) {
            case '身份证':
                $("#input-group-btn-idtype").find('.btn').html('身份证' + '<img class="dropdown-btn-image" src="images/arrow-down.png"/>');
                $('#id_type').val("身份证");

                // $('.signup-step1')
                // Disable the id validator
                // .formValidation('enableFieldValidators', 'id_num', true, 'id')
                // Enable the passport one
                // .formValidation('enableFieldValidators', 'id_num', false, 'stringLength')
                
            break;
            case '护照':
                $("#input-group-btn-idtype").find('.btn').html('护照' + '<img class="dropdown-btn-image" src="images/arrow-down.png"/>');
                $('#id_type').val("护照");

                // $('.signup-step1')
                // Disable the id validator
                // .formValidation('enableFieldValidators', 'id_num', false, 'id')
                // Enable the passport one
                // .formValidation('enableFieldValidators', 'id_num', true, 'stringLength')
                
            break;
        }
        switch (rjson.gender) {
            case 0:
                $("#input-group-btn-sex").find('.btn').html('女' + '<img class="dropdown-btn-image" src="images/arrow-down.png"/>');
                $('#sex').val("0");
            break;
            case 1:
                $("#input-group-btn-sex").find('.btn').html('男' + '<img class="dropdown-btn-image" src="images/arrow-down.png"/>');
                $('#sex').val("1");
            break;
        }

        //a1, a2
        // var answers = rjson.answers.split("‽");
        // $("textarea[name='question1']").val(answers[0]);
        // $("textarea[name='question2']").val(answers[1]);

        //pictures
        if (rjson.pictures != null && rjson.pictures.length > 0) {
            var images = rjson.pictures.split(";");
            image1URL = images[0];
            image2URL = images[1];
            if (image1URL.length > 0) {
                $('#signup-step2-images-item-upload1 > img').show();
                $('#signup-step2-images-item-upload1 > img').attr('src', qnDomain + '/' + image1URL);
                $('#signup-step2-images-item-upload1 .signup-hint-add').hide();
                $('#signup-step2-images-item-upload1 .signup-hint-progress').hide();
                $('#signup-step2-images-item-upload1 .progress-bar').css('width', 0+'%').attr('aria-valuenow', 0);
                $('#signup-step2-images-item-upload1 .signup-hint-error').hide();
            }
            if (image2URL.length > 0) {
                $('#signup-step2-images-item-upload2 > img').show();
                $('#signup-step2-images-item-upload2 > img').attr('src', qnDomain + '/' + image2URL);
                $('#signup-step2-images-item-upload2 .signup-hint-add').hide();
                $('#signup-step2-images-item-upload2 .signup-hint-progress').hide();
                $('#signup-step2-images-item-upload2 .progress-bar').css('width', 0+'%').attr('aria-valuenow', 0);
                $('#signup-step2-images-item-upload2 .signup-hint-error').hide();
            }
            updateStep2NextBtn();
        }

        //videos
        if (rjson.videos != null &&  rjson.videos.length > 0) {
            var videos = rjson.videos;
            videoURL = videos;
            $('#signup-step3-videojs').show();
            $('#signup-step3-videojs > video').show();
            var player = videojs('signup-step3-videojs');
            player.src({type: 'video/mp4',src: qnDomain + '/' + videoURL});
            // $('#signup-step3-videojs > video > source').attr('src', qnDomain + '/' + videoURL);
            player.load();
            // $('#signup-step3-videojs').load();
            $('#signup-step3-video-upload1').hide();
            $('#signup-step3-video-upload .signup-hint-add').hide();
            $('#signup-step3-video-upload .signup-hint-progress').hide();
            $('#signup-step3-video-upload .progress-bar').css('width', 0+'%').attr('aria-valuenow', 0);
            $('#signup-step3-video-upload .signup-hint-error').hide();

            $('#signup-step3-video-upload2').html("编辑视频");
            updateStep3NextBtn();
        }
    }
});
var oldIndex = 1;
function showStep(index) {
	if (index > oldIndex) {
		$(".signup-step" + oldIndex).hide("slide", { direction: "left" }, 500);
        $(".signup-step" + index).show("slide", { direction: "right" }, 500, function() {
          switch(index) {
                case 1:
                    $(".form-steps-div").removeClass('form-steps-div-long');
                    break;
                case 2:
                    $(".form-steps-div").addClass('form-steps-div-long');
                    break;
                case 3:
                    $(".form-steps-div").removeClass('form-steps-div-long');
                    break;
                case 4:
                    $(".form-steps-div").removeClass('form-steps-div-long');
                    break;
            }
        });
	} else {
        $(".signup-step" + oldIndex).hide("slide", { direction: "right" }, 500);
		$(".signup-step" + index).show("slide", { direction: "left" }, 500, function() {
          switch(index) {
                case 1:
                    $(".form-steps-div").removeClass('form-steps-div-long');
                    break;
                case 2:
                    $(".form-steps-div").addClass('form-steps-div-long');
                    break;
                case 3:
                    $(".form-steps-div").removeClass('form-steps-div-long');
                    break;
                case 4:
                    $(".form-steps-div").removeClass('form-steps-div-long');
                    break;
            }
        });
	}

    // switch(index) {
    //     case 1:
    //         $(".form-steps-div").css('height', '600px');
    //         break;
    //     case 2:
    //         $(".form-steps-div").css('height', '1000px');
    //         break;
    //     case 3:
    //         $(".form-steps-div").css('height', '600px');
    //         break;
    //     case 4:
    //         $(".form-steps-div").css('height', '600px');
    //         break;
    // }

	oldIndex = index;
    if (index == 2) {
        initQNUploader1();
        initQNUploader2();
    } else if (index == 3) {
        initQNUploader3();
    }
    // $(".signup-step1").hide();
    // $(".signup-step2").hide();
    // $(".signup-step3").hide();
    // $(".signup-step4").hide();
    // $(".signup-step"+index).show();

    $("#signup-steps-item-1").removeClass("signup-steps-item-digit-active");
    $("#signup-steps-item-2").removeClass("signup-steps-item-digit-active");
    $("#signup-steps-item-3").removeClass("signup-steps-item-digit-active");
    $("#signup-steps-item-4").removeClass("signup-steps-item-digit-active");
    $("#signup-steps-item-"+index).addClass("signup-steps-item-digit-active");

    $("#signup-steps-item-1").removeClass("signup-steps-item-digit-confirm");
    $("#signup-steps-item-2").removeClass("signup-steps-item-digit-confirm");
    $("#signup-steps-item-3").removeClass("signup-steps-item-digit-confirm");
    $("#signup-steps-item-4").removeClass("signup-steps-item-digit-confirm");
    for (i = 1; i < index; i ++) {
        $("#signup-steps-item-" + i).addClass("signup-steps-item-digit-confirm");
    }

    $("#signup-steps-spacing-1").removeClass("signup-steps-spacing-active");
    $("#signup-steps-spacing-2").removeClass("signup-steps-spacing-active");
    $("#signup-steps-spacing-3").removeClass("signup-steps-spacing-active");
    for (i = 1; i < index; i ++) {
        $("#signup-steps-spacing-" + i).addClass("signup-steps-spacing-active");
    }

    $('html,body').animate({scrollTop: $("#signupAnchor").offset().top}, 500);
};
// $(".signup-step1").submit(function( event ) {
//     showStep(2);
//     event.preventDefault();
// });
$("#signup-step2-prev").click(function() {
    showStep(1);
});
$("#signup-step3-prev").click(function() {
    showStep(2);
});
$("#signup-step4-prev").click(function() {
    showStep(3);
});
$("#signup-step4-next").click(function() {

});

$('.signup-step1').formValidation({
    framework: 'bootstrap',
    button: {
        selector: '#signup-step1-next',
        disabled: 'disabled'
    },
    icon: {
        valid: 'iconfont icon-ok',
        invalid: 'iconfont icon-cross',
        validating: 'glyphicon glyphicon-refresh'
    },
    onSuccess: function(event) {
        event.preventDefault();

        var inputs = $('.signup-step1').serializeArray();
        $.each(inputs, function (i, input) {
            if (input.name == 'height' || input.name == 'weight' || input.name == 'gender') {
                formJson[input.name] = Number(input.value);
            } else {
                if (input.value.length > 0) {
                    formJson[input.name] = input.value;
                }
            }
        });
        $.ajax({
            type: 'POST',
            url: 'https://shanxiaxuetang.com/v1.0/tempsign',
            data: formJson,
            dataType: 'json',
            success: function(rdata) {
                if (rdata.code == 0) {
                    showStep(2);
                } else {
                    alert("访问出错，请检查！")
                }
            },
            error: function(xhr, status, error) {
                var xhrReadyState = xhr.readyState;
                var xhrStatus = xhr.status;
                alert("与服务器通信失败!\n[" + xhrReadyState + "][" + xhrStatus + "][" + status + "][" + error + "]");
            }
        })
    },
    fields: {
        name: {
            validators: {
                notEmpty: {
                    message: '<i class="iconfont icon-info"></i>' + '姓名不得为空'
                }
            }
        },
        birthday: {
            validators: {
                notEmpty: {
                    message: '<i class="iconfont icon-info"></i>' + '生日不得为空'
                }
            }
        },
        id_num: {
            validators: {
                notEmpty: {
                    message: '<i class="iconfont icon-info"></i>' + '证件号不得为空'
                }
            }
        },
        height: {
            validators: {
                notEmpty: {
                    message: '<i class="iconfont icon-info"></i>' + '身高不得为空'
                },
                between: {
                    min: 100,
                    max: 300,
                    message: '<i class="iconfont icon-info"></i>' + '请输入合法的身高'
                }
            }
        },
        weight: {
            validators: {
                notEmpty: {
                    message: '<i class="iconfont icon-info"></i>' + '体重不得为空'
                },
                between: {
                    min: 20,
                    max: 500,
                    message: '<i class="iconfont icon-info"></i>' + '请输入合法的体重'
                }
            }
        },
        cell: {
            validators: {
                notEmpty: {
                    message: '<i class="iconfont icon-info"></i>' + '手机不得为空'
                },
                digits: {
                    message: '<i class="iconfont icon-info"></i>' + '请输入合法的手机'
                },
                stringLength: {
                    min: 11,
                    max: 11,
                    message: '<i class="iconfont icon-info"></i>' + '请输入合法的手机'
                }
            }
        },
        mail: {
            validators: {
                notEmpty: {
                    message: '<i class="iconfont icon-info"></i>' + '邮箱不得为空'
                },
                emailAddress: {
                    message: '<i class="iconfont icon-info"></i>' + '请输入合法的电子邮箱'
                }
            }
        }
    }
})
.on('err.field.fv', function(e, data) {
    // $(e.target)  --> The field element
    // data.fv      --> The FormValidation instance
    // data.field   --> The field name
    // data.element --> The field element

    data.fv.disableSubmitButtons(false);
})
.on('success.field.fv', function(e, data) {
    // e, data parameters are the same as in err.field.fv event handler
    // Despite that the field is valid, by default, the submit button will be disabled if all the following conditions meet
    // - The submit button is clicked
    // - The form is invalid
    data.fv.disableSubmitButtons(false);
});

$(".dropdown-menu li a").click(function(){
    $(this).parents(".input-group-btn").find('.btn').html($(this).text() + '<img class="dropdown-btn-image" src="images/arrow-down.png"/>');
    switch ($(this).data('value')) {
        case 'id':
            $('.signup-step1')
            // Disable the id validator
            // .formValidation('enableFieldValidators', 'id_num', true, 'id')
            // Enable the passport one
            // .formValidation('enableFieldValidators', 'id_num', false, 'stringLength')
            // Revalidate field
            .formValidation('revalidateField', 'id_num');
            $('#id_type').val("身份证");
        break;
        case 'passport':
            $('.signup-step1')
            // Disable the id validator
            // .formValidation('enableFieldValidators', 'id_num', false, 'id')
            // Enable the passport one
            // .formValidation('enableFieldValidators', 'id_num', true, 'stringLength')
            // Revalidate field
            .formValidation('revalidateField', 'id_num');
            $('#id_type').val("护照");
        break;
        case 'male':
            $('#sex').val("1");
        break;
        case 'female':
            $('#sex').val("0");
        break;
    }
});

var image1URL = "";
var image2URL = "";
var videoURL = "";
// updateStep2NextBtn()
function updateStep2NextBtn() {
    if (image1URL.length > 0 && image2URL.length > 0) {
        $('#signup-step2-next').removeClass('disabled');
        $('#signup-step2-next').prop("disabled", false);
    } else {
        $('#signup-step2-next').addClass('disabled');
        $('#signup-step2-next').prop("disabled", true);
    }
}

$("#signup-step2-next").click(function() {
    formJson.pictures = image1URL + ';' + image2URL;
    $.ajax({
        type: 'POST',
        url: 'https://shanxiaxuetang.com/v1.0/tempsign',
        data: formJson,
        dataType: 'json',
        success: function(rdata) {
            if (rdata.code == 0) {
                showStep(3);
            } else {
                alert("访问出错，请检查！")
            }
        },
        error: function(xhr, status, error) {
            var xhrReadyState = xhr.readyState;
            var xhrStatus = xhr.status;
            alert("与服务器通信失败!\n[" + xhrReadyState + "][" + xhrStatus + "][" + status + "][" + error + "]");
        }
    })
});

function updateStep3NextBtn() {
    if (videoURL.length > 0) {
        $('#signup-step3-next').removeClass('disabled');
        $('#signup-step3-next').prop("disabled", false);
    } else {
        $('#signup-step3-next').addClass('disabled');
        $('#signup-step3-next').prop("disabled", true);
    }
}

$('#myModal').on('shown.bs.modal', function () {
  // 执行一些动作...
  $('#myModal').css('display','flex');
})

$("#signup-modle").click(function() {
    // var formJson = {};
    // formJson.videos = videoURL;

    // $.ajax({
    //     type: 'POST',
    //     url: 'https://shanxiaxuetang.com/v1.0/tempsign',
    //     data: formJson,
    //     dataType: 'json',
    //     success: function(rdata) {
    //         if (rdata.code == 0) {
    //             showStep(4);
    //         } else {
    //             alert("访问出错，请检查！")
    //         }
    //     }
    // })
    
    $.ajax({
        type: 'POST',
        url: 'https://shanxiaxuetang.com/v1.0/usercourses',
        data: formJson,
        dataType: 'json',
        success: function(rdata) {
            if (rdata.code == 0) {
            		$('#myModal').modal('hide');
                showStep(4);
            } else if(rdata.code == 40012) {
            		alert("报名还未开启，2017年10月19日中午12:00开启");
            } else {
                alert("访问出错，请检查！")
            }
        },
        error: function(xhr, status, error) {
            var xhrReadyState = xhr.readyState;
            var xhrStatus = xhr.status;
            alert("与服务器通信失败!\n[" + xhrReadyState + "][" + xhrStatus + "][" + status + "][" + error + "]");
        }
    })
});


var uploader1, uploader2, uploader3, uploader4;
function initQNUploader1() {
    if (uploader1 == undefined) {
        uploader1 = Qiniu.uploader({
            disable_statistics_report: true,
            makeLogFunc: 1,
            runtimes: 'html5',
            browse_button: 'signup-step2-images-item-upload1',
            // container: 'signup-step2-images-item',
            // drop_element: 'container',
            max_file_size: '10mb',
            // flash_swf_url: 'bower_components/plupload/js/Moxie.swf',
            // dragdrop: true,
            chunk_size: '5mb',
            multi_selection: false,
            // uptoken: '35Gc0YnSLGpWv5mU_UYzhebahIqaNqON0ozOWyat:6ViHU3fpCmky2Nh2S646jhPdjic=:eyJzY29wZSI6InN4eHQtcHVibGljIiwiZGVhZGxpbmUiOjE1MDUzMjc1NDl9',
            uptoken_url : 'https://shanxiaxuetang.com/uptkn',
            unique_names: true,
            max_retries: 3,                     // 上传失败最大重试次数
            // filters : {
            //     max_file_size : '10mb',
            //     prevent_duplicates: false,
            //     mime_types: [
            //         // {title : "flv files", extensions : "flv"} // 限定flv后缀上传格式上传
            //         // {title : "Video files", extensions : "flv,mpg,mpeg,avi,wmv,mov,asf,rm,rmvb,mkv,m4v,mp4"}, // 限定flv,mpg,mpeg,avi,wmv,mov,asf,rm,rmvb,mkv,m4v,mp4后缀格式上传
            //         {title : "图片文件", extensions : "jpg,gif,png,jpeg"}, // 限定jpg,gif,png后缀上传
            //         // {title : "Zip files", extensions : "zip"} // 限定zip后缀上传
            //     ]
            // },
            domain: qnDomain,
            get_new_uptoken: true,
            // downtoken_url: '/downtoken',
            // save_key: true,
            // x_vars: {
            //     'id': '1234',
            //     'time': function(up, file) {
            //         var time = (new Date()).getTime();
            //         // do something with 'time'
            //         return time;
            //     },
            // },
            auto_start: false,
            log_level: 5,
            init: {
                'BeforeChunkUpload':function (up,file) {
                    console.log("before chunk upload: ",file.name);
                },
                'FilesAdded': function(up, files) {
                    console.log("files added");
        //          var size = files[0].size/1024.0/1024.0;
                    image1URL = "";
                    updateStep2NextBtn();
                    if (files[0].type.startsWith('image')) {
                        up.start();
                    } else {
                        up.removeFile(files[0]);
                        alert('仅支持上传图像格式的文件')
                    }
                },
                'BeforeUpload': function(up, file) {
                    console.log("this is a beforeupload function from init");
                    $('#signup-step2-images-item-upload1 > img').hide();
                    $('#signup-step2-images-item-upload1 .signup-hint-add').hide();
                    $('#signup-step2-images-item-upload1 .signup-hint-progress').show();
                    $('#signup-step2-images-item-upload1 .progress-bar').css('width', 0+'%').attr('aria-valuenow', 0);
                    $('#signup-step2-images-item-upload1 .signup-hint-error').hide();
                },
                'UploadProgress': function(up, file) {
                    console.log("upload progress: ",file.percent);
                    $('#signup-step2-images-item-upload1 > img').hide();
                    $('#signup-step2-images-item-upload1 .progress-bar').css('width', file.percent+'%').attr('aria-valuenow', file.percent);  
                },
                'UploadComplete': function() {
                    console.log("upload complete");
                },
                'FileUploaded': function(up, file, info) {
                    console.log("file uploaded: ", file.name);
                    var fileItem = file.getNative(),
                          url = window.URL || window.webkitURL || window.mozURL;
                    var src = url.createObjectURL(fileItem);
                    $('#signup-step2-images-item-upload1 > img').show();
                    $('#signup-step2-images-item-upload1 > img').attr('src', src);
                    $('#signup-step2-images-item-upload1 .signup-hint-add').hide();
                    $('#signup-step2-images-item-upload1 .signup-hint-progress').hide();
                    $('#signup-step2-images-item-upload1 .progress-bar').css('width', 0+'%').attr('aria-valuenow', 0);
                    $('#signup-step2-images-item-upload1 .signup-hint-error').hide();
                    var domain = up.getOption('domain');
                    var res;
                    if (info.response) {
                        res = jQuery.parseJSON(info.response);
                    } else {
                        res = jQuery.parseJSON(info);
                    }
                    image1URL = res.key;
                    updateStep2NextBtn();
                },
                'Error': function(up, err, errTip) {
                    console.log("error: ", errTip);
                    alert(errTip);
                    $('#signup-step2-images-item-upload1 > img').hide();
                    $('#signup-step2-images-item-upload1 .signup-hint-add').hide();
                    $('#signup-step2-images-item-upload1 .signup-hint-progress').hide();
                    $('#signup-step2-images-item-upload1 .progress-bar').css('width', 0+'%').attr('aria-valuenow', 0);
                    $('#signup-step2-images-item-upload1 .signup-hint-error').show();
                }

                // ,
                // 'Key': function(up, file) {
                //     var key = "";
                //     // do something with key
                //     return key
                // }
                // }
            }
        }); 
    }
}

function initQNUploader2() {
    if (uploader2 == undefined) {
        var Qiniu2 = new QiniuJsSDK();
        uploader2 = Qiniu2.uploader({
            disable_statistics_report: true,
            makeLogFunc: 1,
            runtimes: 'html5',
            browse_button: 'signup-step2-images-item-upload2',
            // container: 'signup-step2-images-item',
            // drop_element: 'container',
            max_file_size: '10mb',
            // flash_swf_url: 'bower_components/plupload/js/Moxie.swf',
            // dragdrop: true,
            chunk_size: '5mb',
            multi_selection: false,
            // uptoken: '35Gc0YnSLGpWv5mU_UYzhebahIqaNqON0ozOWyat:6ViHU3fpCmky2Nh2S646jhPdjic=:eyJzY29wZSI6InN4eHQtcHVibGljIiwiZGVhZGxpbmUiOjE1MDUzMjc1NDl9',
            uptoken_url : 'https://shanxiaxuetang.com/uptkn',
            unique_names: true,
            max_retries: 3,                     // 上传失败最大重试次数
            // filters : {
            //     max_file_size : '10mb',
            //     prevent_duplicates: false,
            //     mime_types: [
            //         // {title : "flv files", extensions : "flv"} // 限定flv后缀上传格式上传
            //         // {title : "Video files", extensions : "flv,mpg,mpeg,avi,wmv,mov,asf,rm,rmvb,mkv,m4v,mp4"}, // 限定flv,mpg,mpeg,avi,wmv,mov,asf,rm,rmvb,mkv,m4v,mp4后缀格式上传
            //         {title : "图片文件", extensions : "jpg,gif,png"}, // 限定jpg,gif,png后缀上传
            //         // {title : "Zip files", extensions : "zip"} // 限定zip后缀上传
            //     ]
            // },
            domain: qnDomain,
            get_new_uptoken: true,
            // downtoken_url: '/downtoken',
            // save_key: true,
            // x_vars: {
            //     'id': '1234',
            //     'time': function(up, file) {
            //         var time = (new Date()).getTime();
            //         // do something with 'time'
            //         return time;
            //     },
            // },
            auto_start: false,
            log_level: 5,
            init: {
                'BeforeChunkUpload':function (up,file) {
                    console.log("before chunk upload: ",file.name);
                },
                'FilesAdded': function(up, files) {
                    console.log("files added");
                    image2URL = "";
                    updateStep2NextBtn();
                    if (files[0].type.startsWith('image')) {
                        up.start();
                    } else {
                        up.removeFile(files[0]);
                        alert('仅支持上传图像格式的文件')
                    }
                },
                'BeforeUpload': function(up, file) {
                    console.log("this is a beforeupload function from init");
                    $('#signup-step2-images-item-upload2 > img').hide();
                    $('#signup-step2-images-item-upload2 .signup-hint-add').hide();
                    $('#signup-step2-images-item-upload2 .signup-hint-progress').show();
                    $('#signup-step2-images-item-upload2 .progress-bar').css('width', 0+'%').attr('aria-valuenow', 0);
                    $('#signup-step2-images-item-upload2 .signup-hint-error').hide();
                },
                'UploadProgress': function(up, file) {
                    console.log("upload progress: ",file.percent);
                    $('#signup-step2-images-item-upload2 > img').hide();
                    $('#signup-step2-images-item-upload2 .progress-bar').css('width', file.percent+'%').attr('aria-valuenow', file.percent);  
                },
                'UploadComplete': function() {
                    console.log("upload complete");
                },
                'FileUploaded': function(up, file, info) {
                    console.log("file uploaded: ", file.name);
                    var fileItem = file.getNative(),
                          url = window.URL || window.webkitURL || window.mozURL;
                    var src = url.createObjectURL(fileItem);
                    $('#signup-step2-images-item-upload2 > img').show();
                    $('#signup-step2-images-item-upload2 > img').attr('src', src);
                    $('#signup-step2-images-item-upload2 .signup-hint-add').hide();
                    $('#signup-step2-images-item-upload2 .signup-hint-progress').hide();
                    $('#signup-step2-images-item-upload2 .progress-bar').css('width', 0+'%').attr('aria-valuenow', 0);
                    $('#signup-step2-images-item-upload2 .signup-hint-error').hide();
                    var domain = up.getOption('domain');
                    var res;
                    if (info.response) {
                        res = jQuery.parseJSON(info.response);
                    } else {
                        res = jQuery.parseJSON(info);
                    }
                    image2URL = res.key;
                    updateStep2NextBtn();
                },
                'Error': function(up, err, errTip) {
                    console.log("error: ", errTip);
                    alert(errTip);
                    $('#signup-step2-images-item-upload2 > img').hide();
                    $('#signup-step2-images-item-upload2 .signup-hint-add').hide();
                    $('#signup-step2-images-item-upload2 .signup-hint-progress').hide();
                    $('#signup-step2-images-item-upload2 .progress-bar').css('width', 0+'%').attr('aria-valuenow', 0);
                    $('#signup-step2-images-item-upload2 .signup-hint-error').show();
                }

                // ,
                // 'Key': function(up, file) {
                //     var key = "";
                //     // do something with key
                //     return key
                // }
            }
        });
    }
}

function initQNUploader3() {
    if (uploader3 == undefined) {
        var Qiniu3 = new QiniuJsSDK();
        uploader3 = Qiniu3.uploader({
            disable_statistics_report: true,
            makeLogFunc: 1,
            runtimes: 'html5',
            browse_button: 'signup-step3-video-upload1',
            // container: 'signup-step2-images-item',
            // drop_element: 'container',
            max_file_size: '500mb',
            // flash_swf_url: 'bower_components/plupload/js/Moxie.swf',
            // dragdrop: true,
            chunk_size: '5mb',
            multi_selection: false,
            // uptoken: '35Gc0YnSLGpWv5mU_UYzhebahIqaNqON0ozOWyat:6ViHU3fpCmky2Nh2S646jhPdjic=:eyJzY29wZSI6InN4eHQtcHVibGljIiwiZGVhZGxpbmUiOjE1MDUzMjc1NDl9',
            uptoken_url : 'https://shanxiaxuetang.com/uptkn',
            unique_names: true,
            max_retries: 3,                     // 上传失败最大重试次数
            // filters : {
            //     max_file_size : '100mb',
            //     prevent_duplicates: false,
            //     mime_types: [
            //         // {title : "flv files", extensions : "flv"} // 限定flv后缀上传格式上传
            //         {title : "视频文件", extensions : "flv,mpg,mpeg,avi,wmv,mov,asf,rm,rmvb,mkv,m4v,mp4"}, // 限定flv,mpg,mpeg,avi,wmv,mov,asf,rm,rmvb,mkv,m4v,mp4后缀格式上传
            //         // {title : "图片文件", extensions : "jpg,gif,png"}, // 限定jpg,gif,png后缀上传
            //         // {title : "Zip files", extensions : "zip"} // 限定zip后缀上传
            //     ]
            // },
            domain: qnDomain,
            get_new_uptoken: true,
            // downtoken_url: '/downtoken',
            // save_key: true,
            // x_vars: {
            //     'id': '1234',
            //     'time': function(up, file) {
            //         var time = (new Date()).getTime();
            //         // do something with 'time'
            //         return time;
            //     },
            // },
            auto_start: false,
            log_level: 5,
            init: {
                'BeforeChunkUpload':function (up,file) {
                    console.log("before chunk upload: ",file.name);
                },
                'FilesAdded': function(up, files) {
                    console.log("files added");
                    videoURL = "";
                    updateStep3NextBtn();
                    if (files[0].type.startsWith('video')) {
                        up.start();
                    } else {
                        up.removeFile(files[0]);
                        alert('仅支持上传视频格式的文件')
                    }
                },
                'BeforeUpload': function(up, file) {
                    console.log("this is a beforeupload function from init");
                    $('#signup-step3-videojs').hide();
                    var player = videojs('signup-step3-videojs');
                    player.reset();
                    $('#signup-step3-video-upload1').attr('disabled', true);
                    $('#signup-step3-video-upload2').attr('disabled', true);
                    $('#signup-step3-video-upload .signup-hint-add').hide();
                    $('#signup-step3-video-upload .signup-hint-progress').show();
                    $('#signup-step3-video-upload .progress-bar').css('width', 0+'%').attr('aria-valuenow', 0);
                    $('#signup-step3-video-upload .signup-hint-error').hide();
                },
                'UploadProgress': function(up, file) {
                    console.log("upload progress: ",file.percent);
                    $('#signup-step3-videojs').hide();
                    $('#signup-step3-video-upload .progress-bar').css('width', file.percent+'%').attr('aria-valuenow', file.percent);  
                },
                'UploadComplete': function() {
                    console.log("upload complete");
                },
                'FileUploaded': function(up, file, info) {
                    console.log("file uploaded: ", file.name);
                    var fileItem = file.getNative(),
                          url = window.URL || window.webkitURL || window.mozURL;
                    var src = url.createObjectURL(fileItem);
                    
                    var domain = up.getOption('domain');
                    var res;
                    if (info.response) {
                        res = jQuery.parseJSON(info.response);
                    } else {
                        res = jQuery.parseJSON(info);
                    }
                    videoURL = res.key;

                    formJson.videos = videoURL;

                    $.ajax({
                        type: 'POST',
                        url: 'https://shanxiaxuetang.com/v1.0/tempsign',
                        data: formJson,
                        dataType: 'json',
                        success: function(rdata) {
                            if (rdata.code == 0) {
                                $('#signup-step3-videojs').show();
                                $('#signup-step3-videojs > video').show();
                                var player = videojs('signup-step3-videojs');
                                player.src({type: 'video/mp4',src: qnDomain + '/' + videoURL});
                                // $('#signup-step3-videojs > video > source').attr('src', qnDomain + '/' + videoURL);
                                player.load();
                                // $('#signup-step3-videojs').load();
                                $('#signup-step3-video-upload1').removeAttr('disabled');
                                $('#signup-step3-video-upload2').removeAttr('disabled');
                                $('#signup-step3-video-upload1').hide();
                                $('#signup-step3-video-upload .signup-hint-add').hide();
                                $('#signup-step3-video-upload .signup-hint-progress').hide();
                                $('#signup-step3-video-upload .progress-bar').css('width', 0+'%').attr('aria-valuenow', 0);
                                $('#signup-step3-video-upload .signup-hint-error').hide();

                                $('#signup-step3-video-upload2').html("编辑视频");

                                updateStep3NextBtn();
                            } else {
                                alert("访问出错，请检查！")
                            }
                        },
                        error: function(xhr, status, error) {
                            var xhrReadyState = xhr.readyState;
                            var xhrStatus = xhr.status;
                            alert("与服务器通信失败!\n[" + xhrReadyState + "][" + xhrStatus + "][" + status + "][" + error + "]");
                            $('#signup-step3-videojs').hide();
                            var player = videojs('signup-step3-videojs');
                            player.reset();
                            $('#signup-step3-video-upload1').removeAttr('disabled');
                            $('#signup-step3-video-upload2').removeAttr('disabled');
                            $('#signup-step3-video-upload1').show();
                            $('#signup-step3-video-upload .signup-hint-add').hide();
                            $('#signup-step3-video-upload .signup-hint-progress').hide();
                            $('#signup-step3-video-upload .progress-bar').css('width', 0+'%').attr('aria-valuenow', 0);
                            $('#signup-step3-video-upload .signup-hint-error').show();
                        } 
                    })
                    
                },
                'Error': function(up, err, errTip) {
                    console.log("error: ", errTip);
                    alert(errTip);
                    $('#signup-step3-videojs').hide();
                    var player = videojs('signup-step3-videojs');
                    player.reset();
                    $('#signup-step3-video-upload1').removeAttr('disabled');
                    $('#signup-step3-video-upload2').removeAttr('disabled');
                    $('#signup-step3-video-upload1').show();
                    $('#signup-step3-video-upload .signup-hint-add').hide();
                    $('#signup-step3-video-upload .signup-hint-progress').hide();
                    $('#signup-step3-video-upload .progress-bar').css('width', 0+'%').attr('aria-valuenow', 0);
                    $('#signup-step3-video-upload .signup-hint-error').show();
                }

                // ,
                // 'Key': function(up, file) {
                //     var key = "";
                //     // do something with key
                //     return key
                // }
            }
        });

        var Qiniu4 = new QiniuJsSDK();
        uploader4 = Qiniu4.uploader({
            disable_statistics_report: true,
            makeLogFunc: 1,
            runtimes: 'html5',
            browse_button: 'signup-step3-video-upload2',
            // container: 'signup-step2-images-item',
            // drop_element: 'container',
            max_file_size: '500mb',
            // flash_swf_url: 'bower_components/plupload/js/Moxie.swf',
            // dragdrop: true,
            chunk_size: '5mb',
            multi_selection: false,
            // uptoken: '35Gc0YnSLGpWv5mU_UYzhebahIqaNqON0ozOWyat:6ViHU3fpCmky2Nh2S646jhPdjic=:eyJzY29wZSI6InN4eHQtcHVibGljIiwiZGVhZGxpbmUiOjE1MDUzMjc1NDl9',
            uptoken_url : 'https://shanxiaxuetang.com/uptkn',
            unique_names: true,
            max_retries: 3,                     // 上传失败最大重试次数
            // filters : {
            //     max_file_size : '100mb',
            //     prevent_duplicates: false,
            //     mime_types: [
            //         // {title : "flv files", extensions : "flv"} // 限定flv后缀上传格式上传
            //         {title : "视频文件", extensions : "flv,mpg,mpeg,avi,wmv,mov,asf,rm,rmvb,mkv,m4v,mp4"}, // 限定flv,mpg,mpeg,avi,wmv,mov,asf,rm,rmvb,mkv,m4v,mp4后缀格式上传
            //         // {title : "图片文件", extensions : "jpg,gif,png"}, // 限定jpg,gif,png后缀上传
            //         // {title : "Zip files", extensions : "zip"} // 限定zip后缀上传
            //     ]
            // },
            domain: qnDomain,
            get_new_uptoken: true,
            // downtoken_url: '/downtoken',
            // save_key: true,
            // x_vars: {
            //     'id': '1234',
            //     'time': function(up, file) {
            //         var time = (new Date()).getTime();
            //         // do something with 'time'
            //         return time;
            //     },
            // },
            auto_start: false,
            log_level: 5,
            init: {
                'BeforeChunkUpload':function (up,file) {
                    console.log("before chunk upload: ",file.name);
                },
                'FilesAdded': function(up, files) {
                    console.log("files added");
                    videoURL = "";
                    updateStep3NextBtn();
                    if (files[0].type.startsWith('video')) {
                        up.start();
                    } else {
                        up.removeFile(files[0]);
                        alert('仅支持上传视频格式的文件')
                    }
                },
                'BeforeUpload': function(up, file) {
                    console.log("this is a beforeupload function from init");
                    $('#signup-step3-videojs').hide();
                    var player = videojs('signup-step3-videojs');
                    player.reset();
                    $('#signup-step3-video-upload1').attr('disabled', true);
                    $('#signup-step3-video-upload2').attr('disabled', true);
                    $('#signup-step3-video-upload .signup-hint-add').hide();
                    $('#signup-step3-video-upload .signup-hint-progress').show();
                    $('#signup-step3-video-upload .progress-bar').css('width', 0+'%').attr('aria-valuenow', 0);
                    $('#signup-step3-video-upload .signup-hint-error').hide();
                },
                'UploadProgress': function(up, file) {
                    console.log("upload progress: ",file.percent);
                    $('#signup-step3-videojs').hide();
                    $('#signup-step3-video-upload .progress-bar').css('width', file.percent+'%').attr('aria-valuenow', file.percent);  
                },
                'UploadComplete': function() {
                    console.log("upload complete");
                },
                'FileUploaded': function(up, file, info) {
                    console.log("file uploaded: ", file.name);
                    var fileItem = file.getNative(),
                          url = window.URL || window.webkitURL || window.mozURL;
                    var src = url.createObjectURL(fileItem);
                    
                    var domain = up.getOption('domain');
                    var res;
                    if (info.response) {
                        res = jQuery.parseJSON(info.response);
                    } else {
                        res = jQuery.parseJSON(info);
                    }
                    videoURL = res.key;

                    formJson.videos = videoURL;

                    $.ajax({
                        type: 'POST',
                        url: 'https://shanxiaxuetang.com/v1.0/tempsign',
                        data: formJson,
                        dataType: 'json',
                        success: function(rdata) {
                            if (rdata.code == 0) {
                                $('#signup-step3-videojs').show();
                                $('#signup-step3-videojs > video').show();
                                var player = videojs('signup-step3-videojs');
                                player.src({ type: 'video/mp4', src: qnDomain + '/' + videoURL});
                                // $('#signup-step3-videojs > video > source').attr('src', qnDomain + '/' + videoURL);
                                player.load();
                                // $('#signup-step3-videojs').load();
                                $('#signup-step3-video-upload1').removeAttr('disabled');
                                $('#signup-step3-video-upload2').removeAttr('disabled');
                                $('#signup-step3-video-upload1').hide();
                                $('#signup-step3-video-upload .signup-hint-add').hide();
                                $('#signup-step3-video-upload .signup-hint-progress').hide();
                                $('#signup-step3-video-upload .progress-bar').css('width', 0+'%').attr('aria-valuenow', 0);
                                $('#signup-step3-video-upload .signup-hint-error').hide();

                                $('#signup-step3-video-upload2').html("编辑视频");
                                updateStep3NextBtn();
                            } else {
                                alert("访问出错，请检查！");
                            }
                        },
                        error: function(xhr, status, error) {
                            var xhrReadyState = xhr.readyState;
                            var xhrStatus = xhr.status;
                            alert("与服务器通信失败!\n[" + xhrReadyState + "][" + xhrStatus + "][" + status + "][" + error + "]");
                            $('#signup-step3-videojs').hide();
                            var player = videojs('signup-step3-videojs');
                            player.reset();
                            $('#signup-step3-video-upload1').removeAttr('disabled');
                            $('#signup-step3-video-upload2').removeAttr('disabled');
                            $('#signup-step3-video-upload1').show();
                            $('#signup-step3-video-upload .signup-hint-add').hide();
                            $('#signup-step3-video-upload .signup-hint-progress').hide();
                            $('#signup-step3-video-upload .progress-bar').css('width', 0+'%').attr('aria-valuenow', 0);
                            $('#signup-step3-video-upload .signup-hint-error').show();
                        } 
                    })
                    
                },
                'Error': function(up, err, errTip) {
                    console.log("error: ", errTip);
                    alert(errTip);
                    $('#signup-step3-videojs').hide();
                    var player = videojs('signup-step3-videojs');
                    player.reset();
                    $('#signup-step3-video-upload1').removeAttr('disabled');
                    $('#signup-step3-video-upload2').removeAttr('disabled');
                    $('#signup-step3-video-upload1').show();
                    $('#signup-step3-video-upload .signup-hint-add').hide();
                    $('#signup-step3-video-upload .signup-hint-progress').hide();
                    $('#signup-step3-video-upload .progress-bar').css('width', 0+'%').attr('aria-valuenow', 0);
                    $('#signup-step3-video-upload .signup-hint-error').show();
                }

                // ,
                // 'Key': function(up, file) {
                //     var key = "";
                //     // do something with key
                //     return key
                // }
            }
        });
    }
}
