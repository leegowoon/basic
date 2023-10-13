$('.nav>ul>li').mouseover(function(){
    //실행문
    $(this).find('.submenu').stop().slideDown();
});

$('.nav>ul>li').mouseout(function(){
    $(this).find('.submenu').stop().slideUp();
});

// slide

let currentIndex=0;
//console.log(currentIndex)

//setInterval(어떤일, 시간) //시간마다 어떤일이 일어남(무한반복)
//setInterval(function(){}, 3000) //3초마다 어떤일이 일어남

/* if(조건문){
    조건문이 참일 때 실행
}else{
    조건문이 거짓일 때 실행
} */

setInterval(function(){
    if(currentIndex<2){
        currentIndex++; /* ++; 1씩 더해지는 것 */
    }else{
        currentIndex=0;
    }
    console.log(currentIndex)
    let slidePosition=currentIndex *(-1000)+"px";  /* *는 곱하기, 왼쪽으로 움직일거라서 마이너스 */
    console.log(slidePosition)

    //$('.slidelist').animate({실행문},시간)
    $('.slidelist').animate({
        left:slidePosition},1000)

}, 3000)