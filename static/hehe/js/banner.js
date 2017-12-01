// $(document).ready(function () {
//     if ($(window).width() > 768) {
//         $.get("https://shanxiaxuetang.com/resources/banner", {},
//             function (data, status) {
// 				var jsonobj = $.parseJSON(data);

//                 var result = '', dotRes = '';
//                 $.each(jsonobj, function (i, each) {
//                     var eachRes;
//                     if (each.type == 'vdo') {
//                         eachRes = "<div class='item " + (i == 0 ? "active" : "") + "'> <a href='javascript:void(0);' target='_blank'> <div class='fill-video'> <video id='sx-video' src='" + each.url + "' class='banner-video' preload='auto'></video> </div> </a> </div>"
//                     } else if (each.type == 'img') {
//                         eachRes = "<div class='item " + (i == 0 ? "active" : "") + "'> <a href='javascript:void(0);' target='_blank'> <div id='img" + i + "' class='fill' style='background-image:url(" + each.url + ")'></div></a></div>"
//                     } else {
//                         eachRes = '';
//                     }
//                     result += eachRes;
//                     dotRes += '<li data-target="#Slider" data-slide-to="' + i + '" class=' + (i == 0 ? "active" : "") + '></li>'
//                 });
//                 $('#pc-inner').append(result);
//                 $('#indicators').append(dotRes);
//                 findVideoAndPlay();
//             });
//     }
//     $.get("https://shanxiaxuetang.com/resources/mbanner", {}, function (data, status) {
//         $("#fill").css("background-image", "url(" + data + ")");
//     });


// });

// var curBannerVideo = null;
// var bannerPaused = false;
// var isLoadingEnd = false;

// function loadingEnd() {
//     isLoadingEnd = true;
//     findVideoAndPlay();
// }

// function findVideoAndPlay() {
//     if (isLoadingEnd && $(window).width() > 768 && $(".item.active").find('video').length > 0) {
//         $('#Slider').carousel('pause');
//         var video = $(".item.active").find('video').get(0);
//         video.load();
//         video.play();
//         curBannerVideo = video;
//         video.onended = function (e) {
//             $('#Slider').carousel('next');
//             $('#Slider').carousel('cycle');
//             curBannerVideo = null;
//             setTimeout(function () {
//                 video.currentTime = 0;
//             }, 2000);
//         };
//     }
// }

// function stopBanner() {
//     if (bannerPaused == false) {
//         if (curBannerVideo) {
//             curBannerVideo.pause();
//         } else {
//             $('#Slider').carousel('pause');
//         }
//         bannerPaused = true;
//     }
// }

// function resumeBanner() {
//     if (bannerPaused == true) {
//         if (curBannerVideo) {
//             curBannerVideo.currentTime = 0;
//             curBannerVideo.play();
//         } else {
//             $('#Slider').carousel('cycle');
//         }
//         bannerPaused = false;
//     }
// }

// $("#Slider").on('slid.bs.carousel', function () {
//     findVideoAndPlay();
// });

// function toLab() {
//     if ($(window).width() < 768) {
//         var url = "../../static/hehe/lab.html";
//         window.location.href = url;
//     }
// }
// function toNews() {
//     if ($(window).width() < 768) {
//         var url = "../../static/hehe/news.html";
//         window.location.href = url;
//     }
// }
// function toQuestion() {
//     if ($(window).width() < 768) {
//         var url = "../../static/hehe/questions.html";
//         window.location.href = url;
//     }
// }
// function toVideo() {
//     if ($(window).width() < 768) {
//         var url = "../../static/hehe/videos.html";
//         window.location.href = url;
//     }

// }