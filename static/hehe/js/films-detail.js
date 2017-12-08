/**
 * Determine the mobile operating system.
 * This function either returns 'iOS', 'Android' or 'unknown'
 *
 * @returns {String}
 */
//  function iOSversion() {
//   if (/iP(hone|od|ad)/.test(navigator.platform)) {
//     // supports iOS 2.0 and later: <http://bit.ly/TJjs1V>
//     var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
//     return [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
//   }
// }
function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i) || userAgent.match(/iPod/i)) {
        // if (iOSversion()[0] >= 11) {
        // 	return 'iOS11';
        // } else {
        return 'iOS';
        // }

    }
    else if (userAgent.match(/Android/i)) {

        return 'Android';
    }
    else {
        return 'unknown';
    }
}

//page data
var data = {list: []};
var videosPageCur = 1;

function getVideos(page) {
    $.get("https://shanxiaxuetang.com/resources/videos?num=3&pg=" + page, function (rdata, status) {
        var moreData = {
            // list : [
            // 	{
            // 		title : '视频1',
            // 		time : '2017.2.2',
            // 		image : 'images/videos-item-thumbnail.jpg',
            // 		url : 'videos/sample.mp4'
            // 	},
            // 	{
            // 		title : '视频2',
            // 		time : '2017.2.2',
            // 		image : 'images/videos-item-thumbnail.jpg',
            // 		url : 'videos/sample.mp4'
            // 	},
            // 	{
            // 		title : '视频3',
            // 		time : '2017.2.2',
            // 		image : 'images/videos-item-thumbnail.jpg',
            // 		url : 'videos/sample.mp4'
            // 	},
            // ]
        };
        // rdata = '[{"url": "https://odffqu1hn.qnssl.com/small.mp4", "thumb_url":"http://qnp.shanxiaxuetang.com/o_1bs5l9ngf14hg1cif12e22e31l6rk.png", "video_id": "video_1505815457", "created": 1505815457, "title": "\u60ef\u770b\u79cb\u6708\u6625\u98ce"}, {"url": "https://odffqu1hn.qnssl.com/small.mp4", "video_id": "video_1505792385", "created": 1505792385, "title": "\u767d\u53d1\u6e14\u6a35\u6c5f\u6e1a\u4e0a"}, {"url": "https://odffqu1hn.qnssl.com/small.mp4", "video_id": "video_1505792356", "created": 1505792356, "title": "\u4e0d\u5c3d\u957f\u6c5f\u6eda\u6eda\u6d41"}]';
        moreData.list = jQuery.parseJSON(rdata);
        moreData.platform = getMobileOperatingSystem();
        if (getMobileOperatingSystem() == 'iOS') {
            moreData.controls = 'controls';
        } else {
            moreData.controls = '';
        }
        if (moreData.list.length > 0) {
            for (var i = moreData.list.length - 1; i >= 0; i--) {
                var iDate = new Date(moreData.list[i].created * 1000);
                moreData.list[i].time = iDate.getFullYear() + '.' + (iDate.getMonth() + 1) + '.' + iDate.getDate();
            }
            // data.list.concat(moreData.list);
            Array.prototype.push.apply(data.list, moreData.list);

            var html = template('tpl-video-item', moreData);
            document.getElementById('videos-list').insertAdjacentHTML('beforeend', html);
        } else {
            $(".videos-more").css('visibility', 'hidden');
        }
    });
}

getVideos(videosPageCur);

function moreVideos(event) {
    videosPageCur++;
    getVideos(videosPageCur);
}


//full screen video play
var videoPlayCur = 0;

function updateFSArrowStatus() {
    if (videoPlayCur == 0) {
        $(".fs-video-arrow-left").addClass("fs-video-arrow-disable");
    } else {
        $(".fs-video-arrow-left").removeClass("fs-video-arrow-disable");
    }
    if (videoPlayCur == data.list.length - 1) {
        $(".fs-video-arrow-right").addClass("fs-video-arrow-disable");
    } else {
        $(".fs-video-arrow-right").removeClass("fs-video-arrow-disable");
    }
}

function showFSVideoContainer(index) {
    var item = data.list[index];
    if ($(window).width() > 768) {
        $(".fs-video-container").show();
        $("body").css({overflow: "hidden"});

        videoPlayCur = index;
        var item = data.list[index];

        var videoPlayer = videojs('fs-videojs-player');
        videoPlayer.src(item.url);
        videoPlayer.ready(function () {
            videoPlayer.play();
        });
        updateFSArrowStatus();
    }
    // else if (getMobileOperatingSystem() == 'iOS11') {
    // 	$('.videos-item-thumbnail').eq(index)[0].play();
    // }
}

function hideFSVideoContainer() {

    $(".fs-video-container").hide();
    $("body").css({overflow: "auto"});

    var videoPlayer = videojs('fs-videojs-player');
    videoPlayer.pause();
    videoPlayer.currentTime(0);
}

function prevFSVideo() {

    $(".fs-video-container").show();
    $("body").css({overflow: "hidden"});

    var prevIndex = videoPlayCur - 1;
    if (prevIndex >= 0) {
        videoPlayCur = prevIndex;
        var item = data.list[prevIndex];

        var videoPlayer = videojs('fs-videojs-player');
        videoPlayer.src(item.url);
        videoPlayer.ready(function () {
            videoPlayer.play();
        });
        updateFSArrowStatus();
    }
    stopBubble();
}

function nextFSVideo() {

    $(".fs-video-container").show();
    $("body").css({overflow: "hidden"});

    var nextIndex = videoPlayCur + 1;
    if (nextIndex < data.list.length) {
        videoPlayCur = nextIndex;
        var item = data.list[nextIndex];

        var videoPlayer = videojs('fs-videojs-player');
        videoPlayer.src(item.url);
        videoPlayer.ready(function () {
            videoPlayer.play();
        });
        updateFSArrowStatus();
    }
    stopBubble();

}


/**
 * hh  films  js
 */
function maskDismiss() {
    var mask = document.getElementById("mask");

    mask.style.display = "none";
}

function mmm() {
    
}




