// const menuIcon = document.querySelector('.close-icon');
// const navbar = document.querySelector('.navbar');

// const list = document.querySelectorAll('nav-list > li');
// list.forEach((ele) => {
//   ele.addEventListener('click', () => {
//     navbar.classList.toggle('change');
//     console.log(list);
//   });
// });

// menuIcon.addEventListener('click', () => {
//   navbar.classList.toggle('change');
// });

// DropDown Icon
// const links = document.querySelectorAll('.nav-item');

// links.forEach((link) => {
//   link.addEventListener('click', () => {
//     link.classList.value.includes('active');
//     link.classList.toggle('active');
//     console.log(link);
//   });
// });

// const link = document.querySelector('.nav-item');

// link.addEventListener('click', () => {
//   link.classList.toggle('active');
//   console.log(link);
// });

function myFunction() {
  document.getElementById('').classList.toggle('active');
}

myFunction();

window.onclick = ((event) => {
  if (!event.target.matches('.nav-link')) {
    const dropdowns = document.getElementsByClassName('dropdown-container');
    let i;
    for (i = 0; i < dropdowns.length; i + 1) {
      const openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('active')) {
        openDropdown.classList.remove('active');
      }
    }
  }
});