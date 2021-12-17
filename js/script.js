/*===fixt-menu=====*/
$(window).scroll(function(){
    var scrollamount = $(window).scrollTop()
    
    if(scrollamount > 500){
      $(".menu").addClass("fixed")
    }else{
      $(".menu").removeClass("fixed")
    }
    

    if(scrollamount > 600){
      $(".btop").fadeIn();
    }else{
      $(".btop").fadeOut();
    }
})


$(".btop").click(function(){
  $("html,body").animate({
    scrollTop:0
  },1000)
})

/*==========banner slider==========*/

$('.banner-slider').slick({
  dots: false,
  infinite: true,
    arrows:true,
    autoplay:false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
    prevArrow:'<i class="fa fa-chevron-left prev" aria-hidden="true"></i>',
    nextArrow:'<i class="fa fa-chevron-right next" aria-hidden="true"></i>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
	

/*=======img-slider=====*/

$('.img-slider').slick({
  dots: false,
  infinite: true,
    arrows:false,
    dots:true,
    autoplay:true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


/*=====counter-up=====*/

 $('.counter').counterUp({
                delay: 10,
                time: 10000
            });


/*==========pricing==========*/




$('.course-slider').slick({
  dots: false,
  infinite: true,
    arrows:true,
    dots:false,
    autoplay:false,
     prevArrow:'<i class="fa fa-chevron-left prev" aria-hidden="true"></i>',
    nextArrow:'<i class="fa fa-chevron-right next" aria-hidden="true"></i>',
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


/*===testi-slider*/


$('.testi-slider').slick({
  dots: false,
  infinite: true,
    arrows:true,
    dots:false,
    autoplay:true,
     prevArrow:'<i class="fa fa-chevron-left prev" aria-hidden="true"></i>',
    nextArrow:'<i class="fa fa-chevron-right next" aria-hidden="true"></i>',
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

