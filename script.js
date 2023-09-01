const menuIcon = document.querySelector('.close-icon');
const navbar = document.querySelector('.navbar');

const list = document.querySelectorAll('nav-list > li');
list.forEach((ele) => {
  ele.addEventListener('click', () => {
    navbar.classList.toggle('change');
    console.log(list);
  });
});

menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('change');
});

// DropDown Icon
const links = document.querySelectorAll('.dropdown-container');

links.forEach((link) => {
  link.addEventListener('click', () => {
    link.classList.value.includes('cative');
    link.classLink.toggle('active');
  });
});