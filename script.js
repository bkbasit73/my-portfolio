// Dark Mode Toggle
const toggleThemeButton = document.getElementById('toggleTheme');
toggleThemeButton.addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
});

// Project Filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const projects = document.querySelectorAll('.project');

filterButtons.forEach(button => {
  button.addEventListener('click', function() {
    const category = this.getAttribute('data-category');
    projects.forEach(project => {
      if (category === 'all' || project.getAttribute('data-category') === category) {
        project.style.display = 'block';
      } else {
        project.style.display = 'none';
      }
    });
  });
});
