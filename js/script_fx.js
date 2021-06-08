$(document).ready(function(){
    //슬라이드 효과 조건을 세팅
    var coverflowSetting = {
        slideShadows : true,  //슬라이드 그림자 생성 - 3D효과를 강조하기 위해서 이미지가 회전되었을 때 약간의 흐릿한 효과를 부여
        rotate : 30,  //슬라이드의 회전각을 설정. 값이 커질수록 커지는 작용
        stretch : 10,  //개별 슬라이드의 펼침 현상. 값이 커질수록 서로 겹침현상이 발생
        depth : 50,  //효과에 대한 perpective(진입 또는 진출간 z축 방향에서 설정된 깊이)에 접근하는 효과를 조정. 값이 커질수록 멀리서 진입하는 효과를 적용할 수 있음.
        modifier : 1  //효과에 대한 배수 개념. 위 효과 설정값들을 곱하여 강도를 조정할 수 있음
    }

    //초기값을 세팅(전역변수)
    var $swiper = null;  //애니메이션을 작동하기 위해서 공간을 비운다.

    function init(){
        if($swiper != null){$swiper.destroy()}  //이미지 전환되는 과정상 화면 밖으로 넘어간 경우, 해당하는 공간 또는 이미지는 제거(메모리 상에서 해당하는 공간 또는 이미지를 제거)

        $swiper = new Swiper(".swiper-container", {
            effect : 'coverflow',  //swiper.js 3D 효과 중 하나
            coverflowEffect : coverflowSetting,  //상단에 설정한 세부효과를 적용
            loop : true,
            autoplay : {
                delay : 500
            },
            speed : 2000,

            //하단의 페이저 설정
            pagination : {
                el : ".swiper-pagination", //슬라이드 페이저가 설치될 공간을 지정
                clickable : true  //기본값은 클릭 허용불가
            },

            //슬라이드 방향키 설정
            navigation : {
                nextEl : '.swiper-button-next',
                prevEl : '.swiper-button-prev'
            },

            //슬라이드 스크롤바 설정
            scrollbar : {
                el : '.swiper-scrollbar'
            },
        });

    }
    init();
});