$('.carousel').carousel({
        interval: 5000 //changes the speed
    })


$(function(){
        if (navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)) {
          $('#ios-notice').removeClass('hidden');
          $('.parallax-container').height( $(window).height() * 0.5 | 0 );
        } else {
          $(window).resize(function(){
            var parallaxHeight = Math.max($(window).height() * 0.7, 200) | 0;
            $('.parallax-container').height(parallaxHeight);
          }).trigger('resize');
        }
      });

$('#media').carousel({
  pause: true,
  interval: false,
});


// 回到頂端
$(window).scroll(function(){

  if( $(window).scrollTop() < 400 ){
    $("#Top").fadeOut();
    
  } else {
    $("#Top").fadeIn();
  }
});

$("#Top").click(function(){
  $("html,body,.mainContent").animate({scrollTop:0},800);
  return false;
});


// img slide
$('.single-item').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
});


//

$('.carousel-inner').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
});


