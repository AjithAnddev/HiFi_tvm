const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuButton.addEventListener('click', () => {
  nav.classList.toggle('open');
  menuButton.innerHTML = nav.classList.contains('open') ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
});
document.querySelectorAll('.nav a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.getElementById('year').textContent = new Date().getFullYear();

// DEMO: replace this with the shop's WhatsApp number (country code + number, digits only).
const WHATSAPP_NUMBER = '919876543210';
const form = document.getElementById('enquiryForm');
form.addEventListener('submit', event => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const message = [
    'Hi HiFi Technology, I would like to make an enquiry.',
    `Name: ${data.get('name')}`,
    `Mobile: ${data.get('phone')}`,
    `Service: ${data.get('service')}`,
    `Requirement: ${data.get('message') || 'Not specified'}`
  ].join('\n');
  document.getElementById('formStatus').textContent = 'Opening WhatsApp with your enquiry...';
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
});
