var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  var swiper = new Swiper('.swiper-container3', {
    spaceBetween: 30,
    slidesPerView: 'auto',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  var swiper = new Swiper('.swiper-container4', {
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });


  var cardPlus = $('#cardPlus');
  var addCard = $('#addCard');

  cardPlus.click(function() {
    addCard.css('transform', 'translateY(0)');
    addCard.css('display', 'block');
  });



  var card1 = $('#card1'); 
  var card2 = $('#card2');

  var radio1 = $('#radio1');
  var radio2 = $('#radio2');

  radio2.click(function() {
    card2.css('display', 'block');
    card1.css('display', 'none');
  });

  radio1.click(function() {
    card1.css('display', 'block');
    card2.css('display', 'none');
  });



