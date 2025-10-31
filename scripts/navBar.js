// Get the elements we need
const navToggle = document.getElementById('nav-toggle');
const navContent = document.getElementById('nav-content');
navToggle.addEventListener('click', () => {
    navContent.classList.toggle('hidden');
});