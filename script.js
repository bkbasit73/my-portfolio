// Dark Mode Toggle
const toggleTheme = document.getElementById('toggleTheme');

// Add event listener to toggle dark mode on click
toggleTheme.addEventListener('click', () => {
    // Toggle the 'dark-mode' class on the body element
    document.body.classList.toggle('dark-mode');
});
