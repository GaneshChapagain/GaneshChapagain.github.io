function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) section.scrollIntoView({ behavior: 'smooth' });
}

// Theme Toggle
const toggle = document.getElementById('theme-toggle');
const modeIcon = document.getElementById('mode-icon');

if (localStorage.getItem('theme') === 'light') {
  document.body.classList.add('light-mode');
  modeIcon.textContent = '🌞';
}

toggle.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  const isLight = document.body.classList.contains('light-mode');
  modeIcon.textContent = isLight ? '🌞' : '🌙';
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
});
