$(function(){

    /**
     * header 서브 메뉴
    */
    $('.header .gnb-item').hover(function(){
        if ( $(this).children().length > 1 ) {
            $(this).addClass('on');
            $('.header').addClass('on');
        }
    }, function(){
        if ( $(this).children().length > 1 ) {
            $(this).removeClass('on');
            $('.header').removeClass('on');
        }
    });

    /**
     * mobile menu보이기
    */
    $('.header .btn-menu').click(function(e){
        e.preventDefault();
        $(this).toggleClass('close');
        $('.menu-area').toggleClass('on');
    });

    //메뉴 sub 아코디언 메뉴
    $('.header .menu-link').click(function(e){
        const thisSubBox = $(this).siblings('.sub');

        if(thisSubBox.length > 0){
            e.preventDefault();
            thisSubBox.slideToggle();
            $('.header .menu-link.open').toggleClass('on');
        }
    })

    /**
     * search-select
    */
   $('.select-box').click(function(e){
        e.preventDefault();
        $(this).toggleClass('active');
    })
    $('.select-box').blur(function(){
        $(this).removeClass('active');
    })

    //selectbox-onchange
    $('.search select').change(function() {
        $(this).css('color','#000');
    })
      
    /**
     * search mobile filter
    */
    $('.search .btn-filter').click(function(e){
        e.preventDefault();
        $(this).siblings('.filter-area').addClass('on');
    });

    $('.search .group-filter .btn-close').click(function(e){
        e.preventDefault();
        $('.filter-area').removeClass('on');
    });

    //search mobile filter 아코디언 메뉴
    //@menudepth1 : 대메뉴
    //@menudepth2 : 소메뉴
    $('#filterMenu .btn-list').click(function(e){
        const Menudepth1 = $(this).siblings('.sub');
        if(Menudepth1.length > 0){
            e.preventDefault();
            Menudepth1.slideToggle();
            $(this).toggleClass('on');
        }
    })
    $('#filterMenu .btn-sub').click(function(e){
        const Menudepth2 = $(this).siblings('.item-list');
        if(Menudepth2.length > 0){
            e.preventDefault();
            Menudepth2.slideToggle();
            $(this).toggleClass('on');
        }
    })

    //체크박스 전체선택   
    $("#chkAll").click(function() {
		if($("#chkAll").is(":checked")) 
        $("input[name=chk1]").prop("checked", true);
		else $("input[name=chk1]").prop("checked", false);
	});
    $("#chkAll2").click(function() {
		if($("#chkAll2").is(":checked")) 
        $("input[name=chk2]").prop("checked", true);
		else $("input[name=chk2]").prop("checked", false);
	});

    //체크박스 체크시 전체체크
    $("input[name=chk1]").click(function() {
        var total = $("input[name=chk1]").length;
        var checked = $("input[name=chk1]:checked").length;
        
        if(total != checked) $("#chkAll").prop("checked", false);
        else $("#chkAll").prop("checked", true); 
    });
    $("input[name=chk2]").click(function() {
        var total = $("input[name=chk2]").length;
        var checked = $("input[name=chk2]:checked").length;
        
        if(total != checked) $("#chkAll2").prop("checked", false);
        else $("#chkAll2").prop("checked", true); 
    });

    //체크박스 btn-clear 전체해제
    $('.search .group-filter .btn-clear').click(function(){
        $("input[type=checkbox]:checked").prop("checked", false);
    })

    /**
     * visual-slide
    */
    var mainswiper = new Swiper(".visual-slide", {
        cssMode: true,
        mousewheel: true,
        keyboard: true,
        autoplay: {
            delay: 6000,
            disableOnInteraction: false,
          },
      });
    /**
     * people-slide
    */
    var peopleSlide = new Swiper(".people-slide", {
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: ".next",
            prevEl: ".prev",
          },
          breakpoints:{
            768:{
                slidesPerView: 1.1,
            },
        }
      });
    /**
     * benefits-slide
    */
    var benefitsSlide = new Swiper(".benefits-slide", {
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: ".next",
            prevEl: ".prev",
          },
        breakpoints:{
            768:{
                slidesPerView: 2,
            },
            1025:{
                slidesPerView: 3,
            }
        }
      });

    /**
     * footer relate-list
     * @thisList : 관련사이트 리스트
    */
   $('.btn-list').click(function(e){
        e.preventDefault();

        const thisList = $(this).siblings('.relate-list');

        if(thisList.css('display') === 'block'){
            e.preventDefault();
            thisList.css('display','none');
            $(this).toggleClass('active');
        }else{
            thisList.css('display','block');
            $(this).toggleClass('active');     
        }    
   })
})