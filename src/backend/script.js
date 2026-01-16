 // Wait until the page is fully loaded
document.addEventListener("DOMContentLoaded", () => {

  // Mobile menu toggle
  let menu = document.querySelector('#menu-icon');
  let navbar = document.querySelector('.navbar');
  menu.onclick = () => { 
    navbar.classList.toggle('show'); 
  };

  // Adopt button alert
  document.querySelectorAll('.adopt-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      alert("🐾 Thank you! Let's get infromation.");
    });
  });

  // Search bar toggle
  let searchIcon = document.querySelector('.bx-search');
  let searchBar = document.querySelector('#search-bar');
  let closeSearch = document.querySelector('#close-search');

  searchIcon.onclick = () => {
    searchBar.style.display = 'flex'; // show search bar
  };

  closeSearch.onclick = () => {
    searchBar.style.display = 'none'; // hide search bar
  };

});
// This works even if your script is at the bottom
let searchIcon = document.querySelector('.bx-search');
let searchBar = document.querySelector('#search-bar');
let closeSearch = document.querySelector('#close-search');

if (searchIcon && searchBar && closeSearch) {
  searchIcon.addEventListener('click', () => {
    searchBar.style.display = 'flex';
  });

  closeSearch.addEventListener('click', () => {
    searchBar.style.display = 'none';
  });
}
document.querySelector('#vet-form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert("🐾 Appointment booked! Our vet team will contact you.");
});
document.querySelector('#login-form').addEventListener('submit', (e)=>{
  e.preventDefault();
  alert("✅ Login successful (demo).");
});

document.querySelector('#register-form').addEventListener('submit', (e)=>{
  e.preventDefault();
  alert("✅ Registration successful (demo).");
});

 document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu toggle
  let menu = document.querySelector('#menu-icon');
  let navbar = document.querySelector('.navbar');

  menu.addEventListener('click', () => {
    navbar.classList.toggle('show');
  });
});

