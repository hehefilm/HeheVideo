var vue = new Vue({
    el: '#vue-page',
    data: {
        page:1,
        number:0,
        friend_li: [
            {
                "rlogo": "/path/to/logo", //LOGO
                "rlink": "http://something.com" //跳转链接
            }
        ],

    },
    created: function () {
        axios.get('http://staging.hehefilm.com/resources/friend')
            .then(resp => {
                this.friend_li = resp.data.friend_li;
                this.friend_li=this.friend_li.concat(resp.data.friend_li).concat(resp.data.friend_li).concat(resp.data.friend_li);
                this.number=resp.data.friend_li.length;
                console.log(resp.data);
            }).catch(err => {
            console.log('请求失败：' + err.status + ',' + err.statusText);
        })
        ;
    },
    methods: {}
    ,

});

// var data = {list: []};
// var videosPageCur = 1;
//
// function getNews(page) {
//     $.get("http://staging.hehefilm.com/resources/movie?pg=1&num=16",
//         function (rdata, status) {
//             var moreData = {};
//             moreData.list = jQuery.parseJSON(rdata);
//             if (moreData.list.length > 0) {
//             } else {
//                 $(".news-more").css('visibility', 'hidden');
//             }
//         });
// }
//
// getNews(videosPageCur);
//
// function moreNews(event) {
//     videosPageCur++;
//     getNews(videosPageCur);
// }

