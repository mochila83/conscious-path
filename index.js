$(document).ready(function(){
    $('#home').on('click', function(){
      $('html, body').animate({
        scrollTop: $('#home-section').offset().top
      }, 1000);
      $('#bs-example-navbar-collapse-1').removeClass('in');
    });
    $('#our-story').on('click', function(){
      $('html, body').animate({
        scrollTop: $('#story-section').offset().top - 60
      }, 1000);
      $('#bs-example-navbar-collapse-1').removeClass('in');
    });
    $('#our-menu').on('click', function(){
      $('html, body').animate({
        scrollTop: $('#menu-section').offset().top - 60
      }, 1000);
      $('#bs-example-navbar-collapse-1').removeClass('in');
    });
    $('#locations').on('click', function(){
      $('html, body').animate({
        scrollTop: $('#locations-section').offset().top - 60
      }, 1000);
      $('#bs-example-navbar-collapse-1').removeClass('in');
    });
    $('#reservations').on('click', function(){
      $('html, body').animate({
        scrollTop: $('#order-section').offset().top - 60
      }, 1000);
      $('#bs-example-navbar-collapse-1').removeClass('in');
    });
  });
  
  let menuSubTitle = document.querySelectorAll('.menu-sub-title');
  let menuSection = document.querySelector('#menu-section');
  
  menuSection.addEventListener('click', function(e) {
  
    let downIcon = document.querySelector('.fa-caret-down');
    let subTitle = e.target;
    function findSubTitle() {
      if (!subTitle.classList.contains('menu-sub-title')) {
        subTitle = subTitle.parentNode;
        findSubTitle();
      };
    };
  
    findSubTitle();
  
    if (downIcon) {
      downIcon.classList.remove('fa-caret-down');
      downIcon.classList.add('fa-caret-right');
    }
  
    let icon = subTitle.children[0].children[0];
    let subSubTitles = document.querySelectorAll('.spa-choices');
    let children = subTitle.children[0].children;
    let ul = subTitle.nextElementSibling;
  
    // IF THE ITEM IS CLOSED
    if (ul.classList.contains('hide')) {
      subSubTitles.forEach(function(item) {
        item.classList.add('hide');
      });
      if (children.length > 2) {
        children[2].classList.remove('hide');
      };
      icon.classList.remove('fa-caret-right');
      icon.classList.add('fa-caret-down');
      menuSubTitle.forEach(function(item) {
        item.nextElementSibling.classList.add('hide');
      });
      ul.classList.remove('hide');
  
    // IF THE ITEM IS OPENED
    } else {
      subSubTitles.forEach(function(item) {
        item.classList.add('hide');
      });
      ul.classList.add('hide');
    };
  
  });