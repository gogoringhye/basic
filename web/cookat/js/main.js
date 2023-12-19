$('.nav>ul>li').mouseover(function () {
    //실행문
    $(this).find('.submenu').stop().slideDown();
});
//'.nav>ul>li'로 부르면 ul은 포함x

$('.nav>ul>li').mouseout(function () {
    $(this).find('.submenu').stop().slideUp();
});

//method 뜨면 괄호 열고 닫아야함, ()적어주면 경자 등을 때리고 감

//slide

let currentIndex = 0;
//console.log(currentIndex)

//setInterval(어떤일, 시간)//시간마다 어떤 일이 일어난다.
setInterval(function () {}, 3000) //3초마다 함수가 실행된다.

//if(조건문){
//조건문이 참일 때 실행
//}else{
//조건문이 거짓일 때 실행
//}

setInterval(function () {
    if (currentIndex < 2) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    let slideposition = currentIndex * (-1000) + "px";
    //console.log(slideposition)


    // $('.slidelist').animate({실행문},시간)
    $('.slidelist').animate({
        left: slideposition
    }, 1000)
}, 3000)

//팝업창
$('#content1 .right').click(function () {
    //$('.layer-bg').show();
    $('.layer-bg').fadeIn(); /* 천천히 나타나라 */
});

$('.layer .close').click(function () {
    //$('later-bg').hide();
    $('later-bg').fadeOut(200);
});

//괄호 안에 세미콜론(마무리) 찍으면 안됨

//window 창 열기
$('.contact').click(function () {
    window.open("content.html", "child", "top=0,left=0,width=400,height=400");
})

/* 스크립트의 주소는 html 맨 밑단에 적혀있다고 생각해야함, 부모의 한단계 올라가는 것이 아니라 그 자리를 생각해야함 */

// 텝메뉴
let tabBtn = $('.tab_menu ul li');
let tabCont = $('.tab_cont>div');

//.eq()==> equivalent(동등)
tabCont.hide().eq(0).show();

tabBtn.click(function (e) {
    e.preventDefault();
    let index = $(this).index();
    console.log(index)
    /*  
    이 두줄과 밑에 줄이 같은 의미
    tabCont.hide()
     tabCont.eq(index).show(); */
    tabCont.hide().eq(index).show();
    tabBtn.removeClass('active');
    $(this).addClass('active');
});
//컴퓨터는 0부터 셈(ex.0,1,2,3,4)
//class가 들어갔으므로 점 찍으면 안됨