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
function myFunction() {
  document.getElementById('myDropdown').classList.toggle('active');
}

myFunction();

// Close the dropdown if the user clicks outside of it
window.onclick = (event) => {
  if (!event.target.matches('.nav-link')) {
    const dropdowns = document.getElementsByClassName('dropdown-content');
    let i;
    for (i = 0; i < dropdowns.length; i + 1) {
      const openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('active')) {
        openDropdown.classList.remove('active');
      }
    }
  }
};