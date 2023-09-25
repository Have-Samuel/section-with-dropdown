// Clickable arrow to make the dropdown menu appear
// const dropUp = document.querySelector('#drop-up');

// // When you click the arrow
// dropUp.addEventListener('clcik', () => {
  
// })

// function myFunction() {
//   document.getElementById('myDropdown').classList.toggle('active');
// }

// // Close the dropdown menu if the user clicks outside of it
// window.onclick = function (event) {
//  if (!event.target.matches('.dropbtn')) {
//    var dropdowns = document.getElementsByClassName('dropdown-content');
//    var i;
//    for (i = 0; i < dropdowns.length; i++) {
//      var openDropdown = dropdowns[i];
//      if (openDropdown.classList.contains('active')) {
//        openDropdown.classList.remove('active');
//      }
//    }
//  }
// };

const humburger = document.querySelector('.humburger');
const navbar = document.querySelector('.navbar');

humburger.addEventListener('click', () => {
  humburger.classList.toggle('change');
  navbar.classList.toggle('change');
  // When the navbar is open, we get a color change on the page
  const main = document.querySelector('main');

  if (navbar.classList.contains('change')) {
    // main.style.backgroundColor = 'pink';
    main.classList.add('another-color');
  }
  else {
    // main.style.backgroundColor = 'white';
    main.classList.remove('another-color');
  }
});