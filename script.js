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

// Clickable arrow to make the dropdown menu appear
const drops = document.querySelectorAll('.drop-down');

drops.forEach((drop) => {
  drop.addEventListener('click', () => {
    drop.classList.toggle('active');
  });
});
