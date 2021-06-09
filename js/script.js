$(document).ready(function(){
    
    // main pont
    var typed = new Typed('.typed', {
        strings : ["WELCOME !<br>MY PORTFOLIO !", "I am small,<br> but impressive creative person.", "I will always deliver more than expected!"],  //브라우저 화면에 띄워줄 문구
        stringsElement : null,  //초기 상태에서 공간을 비운다
        typeSpeed : 80,  // 타이핑 속도
        backSpeed : 45,  //backspace의 속도
        smartBackspace : true,  //동일한 값 또는 문구가 존재할 때 backspace로 제거하지 못하도록 구성 후 다음 문장을 표현
        startDelay : 1000,  //1초후 타이핑을 통해서 글자가 작성되도록 시간을 지연시킴
        backDelay : 1000,  //첫번째 문장을 모두 작성되게 한 후, 1초 후 backspace가 진행되도록 만듬
        loop : false,  //타이핑 문장 반복 (true 또는 false)
        showCursor : true,
        cursorChar : '|',  //커서의 형태를 지정
        autoInsertCss : true,
    });


    // arrow click
    $(".btn").click(function(){
        $("html, body").animate({scrollTop:$("#about").offset().top}, 1000);
        return false;
    });


    // menu
    $(".about_btn").click(function(){
        $("html, body").animate({scrollTop:$("#about").offset().top}, 1000);
        return false;
    });
    $(".skill_btn").click(function(){
        $("html, body").animate({scrollTop:$("#skill").offset().top}, 1000);
        return false;
    });
    $(".port_btn").click(function(){
        $("html, body").animate({scrollTop:$("#portfolio").offset().top}, 1000);
        return false;
    });
    $(".contact_btn").click(function(){
        $("html, body").animate({scrollTop:$("#contact").offset().top}, 1000);
        return false;
    });


    //top button
    $(".top_btn").click(function(){
        $("html, body").animate({scrollTop:$("#section").offset().top}, 1000);//HTML 문서를 감싸는 최상위 공간 <html>태그와 실 브라우저 화면상을 구성하는 최상위 공간 <body>에 애니메이션 기능을 부여하겠다는 선언. 현재 스크롤 바의 위치를 브라우저 상단으로부터 지정한 장소의 상단에 맞춰주겠다는 선언(애니메이션 작동 시간 1000 millie Second = 1초)
        return false;  //<a>가 포함된  공간일 경우 href의 속성이 우선적으로 작동되는데, 이 우선 작동을 멈추게 만들어주는 구문
    });


    // skills part
    let sec_height = $(window).height();
    console.log(sec_height);
    let sec_height_half = sec_height / 3;
    console.log(sec_height_half);

    let target_svgBox_top = $("#circle_bar").offset().top;
    console.log(target_svgBox_top);
    $(window).scroll(function(){
        let $scrollTop = $(window).scrollTop();
        if($scrollTop > target_svgBox_top - sec_height_half){
            $(".box").each(function(){
                let sel_count = $(this).find(".count").text();
                $(this).find("circle:eq(1)").css("stroke-dashoffset", "calc(440 - (440 * " + sel_count + ") / 100)");
            });
        }else{
            $(".box").each(function(){
                $(this).find("circle:eq(1)").css("stroke-dashoffset", "440");
            });
        }
    });


    // slide banner
    var $paging = $(".slides_container>li>a");
    var pagingIdx = 0;

    $(".prev").click(function (evt) {
        evt.preventDefault();
        if (pagingIdx >= 0) {
            pagingIdx--;
            $(".slides-container>li").eq(pagingIdx).fadeIn().siblings().fadeOut();

        }else{
            pagingIdx = 10;
            $(".slides-container>li").eq(pagingIdx).fadeIn().siblings().fadeOut();
        }
        $paging.eq(pagingIdx).parent().addClass("on").siblings().removeClass("on");
    });

    $(".next").click(function (evt) {
        evt.preventDefault();
        if (pagingIdx <= 9) {
            pagingIdx++;
            $(".slides-container>li").eq(pagingIdx).fadeIn().siblings().fadeOut();
        } else {
            pagingIdx = 0;
            $(".slides-container>li").eq(pagingIdx).fadeIn().siblings().fadeOut();
        }
        $paging.eq(pagingIdx).parent().addClass("on").siblings().removeClass("on");
    });


    //mail close button 
    $(".close").click(function(){
        $(".thankyou_message").hide();
    });


});
