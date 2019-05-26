document.querySelector('.main-nav--nojs').classList.remove('main-nav--nojs');
var nav = document.querySelector('.site-list');
var toggleMenu = document.querySelector('.main-nav__toggle');
toggleMenu.addEventListener('click', function(evt) {
  nav.classList.toggle('site-list--show');
})
