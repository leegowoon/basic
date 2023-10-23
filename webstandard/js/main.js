$('.tit .btn').click(function(){
    /* $('.nav').toggle(); */
    /* $('.nav').fadeToggle(); */
    $('.nav').slideToggle();
    $(this).toggleClass("on");
});


$('.ban').slick({
  infinite: true,
  slidesToShow: 3, //한 화면에 보이는 갯수
  slidesToScroll: 1, //버튼을 클릭하면 넘어가는 갯수
  dots:true,
});