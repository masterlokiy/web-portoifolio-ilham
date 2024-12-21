const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // Change the theme toggle icon
    const icon = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
    themeToggle.innerHTML = `<span>${icon}</span>`;
});
