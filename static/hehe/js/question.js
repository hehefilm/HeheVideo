var data = {
    list: [
    ]
}
$(document).ready(function () {
    $.ajax({
        type: 'GET',
        url: "https://shanxiaxuetang.com/resources/questions",
        success: function (jsonData) {
            data.list = jQuery.parseJSON(jsonData);
            var html = template('tpl-question-item', data);
            document.getElementById('question-list').innerHTML = html;
        },
        error: function (e) {
            // alert("网络异常，请稍后重试."+e.print);
        }
    });
});


function showAnswer(index, indexq) {
    // var itemlist=data.list[index];
    // var item=itemlist.qa_li[indexq];
    // if(item.show==true){
    //     data.list[index].qa_li[indexq].show=false;
    // }else {
    //     data.list[index].qa_li[indexq].show=true;
    // }
    $("#up_"+index+indexq).toggle();
    $("#down_"+index+indexq).toggle();
    $("#a_"+index+indexq).toggle();


    // var html = template('tpl-question-item', data);
    // document.getElementById('question-list').innerHTML = html;
}









