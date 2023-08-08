  var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 10,
      navigation:{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

    });
    $(function(){
        $('.menu-btn').on('click',function(){
            $('.menu__list').toggleClass('active')
            $('.menu-btn span').toggleClass('active')
            $('.logo').toggleClass('active')

        })
    })

