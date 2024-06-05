// script.js

// Function to toggle the navigation menu on small screens
function toggleMenu() {
  const menuBtn = document.getElementById('menu-btn');
  const navLinks = document.getElementById('nav-links');

  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  })
}

// Function to close the menu when a link is clicked (useful for small screens)
function closeMenuOnLinkClick() {
  const navLinks = document.getElementById('nav-links');
  const links = navLinks.getElementsByTagName('a');

  for (let link of links) {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  }
}

// Function to handle reservation form submission
function handleReservationForm() {
  const reservationForm = document.querySelector('.reservation__container form');
  
  reservationForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const name = reservationForm.querySelector('input[placeholder="NAME"]').value;
    const email = reservationForm.querySelector('input[placeholder="EMAIL"]').value;
    const date = reservationForm.querySelector('input[type="date"]').value;
    const time = reservationForm.querySelector('input[type="time"]').value;
    const people = reservationForm.querySelector('input[placeholder="PEOPLE"]').value;

    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Date: ${date}`);
    console.log(`Time: ${time}`);
    console.log(`People: ${people}`);

    // clear reservationForm after submit the data
   // reservationForm.reset();
  });
}

// Initialize the functions when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  toggleMenu();
  closeMenuOnLinkClick();
  handleReservationForm();
});
