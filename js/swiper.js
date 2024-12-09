     const swiper = new Swiper(".swiper", {
      speed: 4000,         
      slidesPerView: 1, 
      navigation: {
        nextEl: ".swiper-button-next"
      },
      loop: true,
      autoplay: {
        delay: 9000,
        disableOnInteraction: false
      }
    });
    