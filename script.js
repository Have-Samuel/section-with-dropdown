// Hamburger menu, when you click on it, the menu appears
const humburger = document.querySelector('.humburger');
const navbar = document.querySelector('.navbar');
// const navbar = document.querySelector('.nav-header');

humburger.addEventListener('click', () => {
  humburger.classList.toggle('change');
  navbar.classList.toggle('change');
  // When the navbar is open, we get a color change on the page
  const main = document.querySelector('main');

  if (navbar.classList.contains('change')) {
    main.classList.add('another-color');
  } else {
    main.classList.remove('another-color');
  }
});

// Clickable arrow to make the dropdown menu appear - 1
const arrows = document.querySelectorAll('.drop-drown');

arrows.addEventListener('click', () => {
  arrows.classList.toggle('active');
  // arrows.classList.toggle('active');
  console.log('Clicked');
});

// Clickable arrow to make the dropdown menu appear - 2
const secArrow = document.querySelector('.unit');

secArrow.addEventListener('click', () => {
  secArrow.classList.toggle('active');
});