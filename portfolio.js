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

$(".tab").click(function () {
  var tab1 = $(this).index()+1;
  $(this).addClass("on").siblings().removeClass("on");
  swiper1.slideTo(tab1, 300);
});

document.querySelector('#contactForm').addEventListener('submit', function (event) {
  event.preventDefault(); 
  const fromName = document.querySelector('input[name="from_name"]').value; 
  emailjs.init("kzbfIgjDLXOPAFLOI");
  emailjs.sendForm('service_flower', 'template_flower', this)
    .then(function () {
      alert(`${fromName}님, 메일 전송 완료 되었습니다 :)`);
    }, function (error) {
      alert(`${fromName}님, 메일 전송이 실패했습니다 :(`);
      console.log('전송실패', error);
    });
}); 
