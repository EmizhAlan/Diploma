document.addEventListener('DOMContentLoaded', () => {

  // получаем все элементы с классом pushmenu
  const pushmenu = document.getElementsByClassName('pushmenu');
  
  // получаем элемент с классом hidden-overley
  const hiddenOverley = document.querySelector('.hidden-overley');
  
  // отслеживаем клик клика по оверлею
  hiddenOverley.addEventListener('click', (e) => {
      e.currentTarget.classList.toggle('show');
      document.querySelector('.sidebar').classList.toggle('show');
      document.querySelector('body').classList.toggle('sidebar-opened');
      for( i=0; i < pushmenu.length; i++ ){
              pushmenu[i].classList.toggle('open');
      }
  });
  
  const pushmenuFunction = function() {
      document.querySelector('.pushmenu').classList.toggle('open');
      document.querySelector('.sidebar').classList.toggle('show');
      document.querySelector('.hidden-overley').classList.toggle('show');
      document.body.classList.toggle('sidebar-opened')
  };
  
  // Отслеживаем клики кнопок с классом pushmenu 
  for( i=0; i < pushmenu.length; i++ ){
      pushmenu[i].addEventListener('click', pushmenuFunction, false);
  }
  
  // Получим все родительские элементы в меню
  const sidebarAccordeon = document.querySelectorAll('.sidebar .menu-parent-item a:first-child');
  const accordeonFunction =  function() { 
      this.parentNode.querySelector('ul').classList.toggle('show');
      this.querySelector('i').classList.toggle('rotate');
  }
  // Отслеживаем клики родительских пунктов меню 
  for( i=0; i < sidebarAccordeon.length; i++ ){
      sidebarAccordeon[i].addEventListener('click', accordeonFunction, false);
  }
});

const nav = document.querySelector('#main');
let topOfNav = nav.offsetTop;

function fixNav() {
if (window.scrollY >= topOfNav) {
  document.body.style.paddingTop = nav.offsetHeight + 'px';
  document.body.classList.add('fixed-nav');
} else {
  document.body.classList.remove('fixed-nav');
  document.body.style.paddingTop = 0;
}
}

window.addEventListener('scroll', fixNav);

// Проверяем ширину окна браузера и скрываем кнопку при разрешении меньше 800
function togglePushmenuButton() {
const pushmenuButton = document.querySelector('.del');
if (window.innerWidth < 750) {
  pushmenuButton.style.display = 'none';
} else {
  pushmenuButton.style.display = 'flex';
}
}

window.addEventListener('resize', togglePushmenuButton);
togglePushmenuButton();
