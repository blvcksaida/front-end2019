const hamburger = document.querySelector('.menu');
const link = document.querySelector('.link');
const navigation = document.querySelector('.navigation');

hamburger.addEventListener('click', animateHamburger);

function animateHamburger() {
  hamburger.classList.toggle('active');
  navigation.classList.toggle('active');
}
