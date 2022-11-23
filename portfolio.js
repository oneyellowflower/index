var swiper1 = new Swiper(".page", {
    direction: "vertical",
    slidesPerView: 1,
    mousewheel: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    keyboard: {
        enabled: true,
      },
  });