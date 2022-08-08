$(".banner-left").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true ,
    autoplay: true,
    prevArrow: '<button class="fa-solid fa-chevron-left" style="position: absolute; top:calc(50% - 30px); left:0; height:60px; width: 30px; border:none;background-color: rgba(0,0,0, 0.2);color: #fff; font-size: 14px; z-index: 1; display:none"></button>',
    nextArrow: '<button class="fa-solid fa-chevron-right" style="position: absolute; top:calc(50% - 30px); right:0; height:60px; width: 30px; border:none;background-color: rgba(0,0,0, 0.2);color: #fff; font-size: 14px; display:none"></button>',
})

$(".genre-container").slick({
    slidesToShow: 8,
    slidesToScroll: 2,
    // dots: true ,
    // autoplay: true,
    prevArrow: '<button class="fa-solid fa-chevron-left" style="position: absolute; top:calc(50% - 25px); left:0; height:50px; width: 30px; border:none;background-color: #d2d2d2; border-radius: 50%; z-index: 1;"></button>',
    nextArrow: '<button class="fa-solid fa-chevron-right" style="position: absolute; top:calc(50% - 25px); right:0; height:50px; width: 30px; border:none;background-color: #d2d2d2; border-radius: 50%;"></button>',
})

