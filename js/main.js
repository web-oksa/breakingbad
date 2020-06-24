$(document).ready(function () {
  const mMenuBtn = $('.m-menu-button');
  const searchBtn = $('.search-button');
  const mMenu = $('.m-menu');
  const tab = $('.tab');

  mMenuBtn.on('click', function () {
    mMenu.toggleClass('active');
    mMenuBtn.toggleClass('close');
    $('body').toggleClass('no-scroll');
  });

  searchBtn.on('click', function () {
    mMenu.addClass('active');
    mMenuBtn.addClass('close');
    $(function () {
      $('.m-menu .search-input').focus();
    });
    $('body').toggleClass('no-scroll');
  });

  tab.on('click', function () {
    tab.removeClass('active');
    $(this).toggleClass('active');
    let activeTabContent = $(this).attr('data-target');
    $('.tabs-content').removeClass('visible');
    $(activeTabContent).toggleClass('visible');
  });

  var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 5,
    spaceBetween: 25,
    breakpoints: {
      1201: {
        slidesPerView: 5,
        navigation: {
          nextEl: '.button-next',
        },
      },
      992: {
        slidesPerView: 4,
        navigation: {
          nextEl: '.button-next',
        },
      },
      768: {
        slidesPerView: 3,
        navigation: {
          nextEl: '.button-next',
        },
      },
      576: {
        slidesPerView: 2,
        navigation: {
          nextEl: '.button-next',
        },
      },
      320: {
        slidesPerView: 1,
        navigation: {
          nextEl: '.button-next',
        },
      },
    },
  });
});