function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) section.scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const response = document.getElementById("response");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const serviceID = "YOUR_SERVICE_ID";
    const templateID = "YOUR_TEMPLATE_ID";

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        response.textContent = "✅ Message sent successfully!";
        response.style.color = "green";
        form.reset();
      })
      .catch(() => {
        response.textContent = "❌ Failed to send message. Try again later.";
        response.style.color = "red";
      });
  });
});

// THEME TOGGLE
const toggle = document.getElementById('theme-toggle');
const modeIcon = document.getElementById('mode-icon');

if (localStorage.getItem('theme') === 'light') {
  document.body.classList.add('light-mode');
  modeIcon.textContent = '🔆';
}

toggle.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  const isLight = document.body.classList.contains('light-mode');
  modeIcon.textContent = isLight ? '🔆' : '🌙';
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
});
