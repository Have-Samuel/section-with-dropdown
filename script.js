// Clickable arrow to make the dropdown menu appear
const dropUp = document.querySelector('.drop-up');

dropUp.addEventListener('click', () => {
  const dropDown = document.querySelector('.arrow-down');
  dropDown.classList.toggle('active');
  dropUp.classList.toggle('active');
});
