var vue = new Vue({
    el: '#vue-page',
    data: {
        more: true,
        "movie_li": [
            {
                "movie_id": "movie_001",
                "title": "美人鱼", //片名
                "director": "徐克", //导演
                "writer": "周星驰", //编剧
                "poster": "http://hh.com/something.jpg", //封面图片，海报
                "release_date": "2017-01-01", //上映日期
                "genre": "魔幻/喜剧", //类型
                "duration": 120, //片长
                "description": "美人鱼不是人。", //简介
                "stars": "不知道/buzhidao/知道", //主演，演员
                "clips": ["http://hh.com/1.jpg", "http://hh.com/2.jpg"], //剧照
                "videos": ["http://hh.com/1.mp4", "http://hh.com/2.mp4"], //宣传视频
                "store": "http://hehefilm.com", //衍生品地址
                "lang": "普通话", //语言
                "release_vision": "3D", //荧幕类型
                "country": "中国", //制作国家
                "mknown": "小海怪/Mermaid" //又名
            },
            {
                "movie_id": "movie_001",
                "title": "战狼", //片名
                "director": "徐克", //导演
                "writer": "周星驰", //编剧
                "poster": "http://hh.com/something.jpg", //封面图片，海报
                "release_date": "2017-01-01", //上映日期
                "genre": "魔幻/喜剧", //类型
                "duration": 120, //片长
                "description": "美人鱼不是人。", //简介
                "stars": "不知道/buzhidao/知道", //主演，演员
                "clips": ["http://hh.com/1.jpg", "http://hh.com/2.jpg"], //剧照
                "videos": ["http://hh.com/1.mp4", "http://hh.com/2.mp4"], //宣传视频
                "store": "http://hehefilm.com", //衍生品地址
                "lang": "普通话", //语言
                "release_vision": "3D", //荧幕类型
                "country": "中国", //制作国家
                "mknown": "小海怪/Mermaid" //又名
            },
            {
                "movie_id": "movie_001",
                "title": "夏洛特烦恼", //片名
                "director": "徐克", //导演
                "writer": "周星驰", //编剧
                "poster": "http://hh.com/something.jpg", //封面图片，海报
                "release_date": "2017-01-01", //上映日期
                "genre": "魔幻/喜剧", //类型
                "duration": 120, //片长
                "description": "美人鱼不是人。", //简介
                "stars": "不知道/buzhidao/知道", //主演，演员
                "clips": ["http://hh.com/1.jpg", "http://hh.com/2.jpg"], //剧照
                "videos": ["http://hh.com/1.mp4", "http://hh.com/2.mp4"], //宣传视频
                "store": "http://hehefilm.com", //衍生品地址
                "lang": "普通话", //语言
                "release_vision": "3D", //荧幕类型
                "country": "中国", //制作国家
                "mknown": "小海怪/Mermaid" //又名
            },
            {
                "movie_id": "movie_001",
                "title": "喜剧之王", //片名
                "director": "徐克", //导演
                "writer": "周星驰", //编剧
                "poster": "http://hh.com/something.jpg", //封面图片，海报
                "release_date": "2017-01-01", //上映日期
                "genre": "魔幻/喜剧", //类型
                "duration": 120, //片长
                "description": "美人鱼不是人。", //简介
                "stars": "不知道/buzhidao/知道", //主演，演员
                "clips": ["http://hh.com/1.jpg", "http://hh.com/2.jpg"], //剧照
                "videos": ["http://hh.com/1.mp4", "http://hh.com/2.mp4"], //宣传视频
                "store": "http://hehefilm.com", //衍生品地址
                "lang": "普通话", //语言
                "release_vision": "3D", //荧幕类型
                "country": "中国", //制作国家
                "mknown": "小海怪/Mermaid" //又名
            },
            {
                "movie_id": "movie_001",
                "title": "喜剧之王", //片名
                "director": "徐克", //导演
                "writer": "周星驰", //编剧
                "poster": "http://hh.com/something.jpg", //封面图片，海报
                "release_date": "2017-01-01", //上映日期
                "genre": "魔幻/喜剧", //类型
                "duration": 120, //片长
                "description": "美人鱼不是人。", //简介
                "stars": "不知道/buzhidao/知道", //主演，演员
                "clips": ["http://hh.com/1.jpg", "http://hh.com/2.jpg"], //剧照
                "videos": ["http://hh.com/1.mp4", "http://hh.com/2.mp4"], //宣传视频
                "store": "http://hehefilm.com", //衍生品地址
                "lang": "普通话", //语言
                "release_vision": "3D", //荧幕类型
                "country": "中国", //制作国家
                "mknown": "小海怪/Mermaid" //又名
            }

        ]


    },

    methods: {
        initData: function () {


        },
        initMore: function (page, number) {
            this.more = false;
        }


    }
})

var data = {list: []};
var videosPageCur = 1;

function getNews(page) {
    $.get("http://staging.hehefilm.com/resources/movie?pg=1&num=16",
        function (rdata, status) {
            var moreData = {};
            moreData.list = jQuery.parseJSON(rdata);
            if (moreData.list.length > 0) {
            } else {
                $(".news-more").css('visibility', 'hidden');
            }
        });
}

getNews(videosPageCur);

function moreNews(event) {
    videosPageCur++;
    getNews(videosPageCur);
}

