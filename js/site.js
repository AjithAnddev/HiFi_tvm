(() => {
  const cfg = window.HIFI_CONFIG || {};
  document.querySelectorAll('[data-phone]').forEach(el => el.textContent = cfg.phoneDisplay || '+91 98765 43210');
  document.querySelectorAll('[data-phone-link]').forEach(el => el.href = `tel:+${cfg.phoneDigits || '919876543210'}`);
  document.querySelectorAll('[data-email]').forEach(el => { el.textContent = cfg.email || 'info@example.com'; el.href = `mailto:${cfg.email || 'info@example.com'}`; });
  document.querySelectorAll('[data-address]').forEach(el => el.textContent = cfg.address || 'Update your shop address');
  document.querySelectorAll('[data-whatsapp]').forEach(el => el.href = `https://wa.me/${cfg.phoneDigits || '919876543210'}?text=${encodeURIComponent('Hello HiFi Technology, I would like to know more about your products and services.')}`);
  document.querySelectorAll('#year').forEach(el => el.textContent = new Date().getFullYear());
  const toggle = document.querySelector('.menu-toggle'), nav = document.querySelector('.nav');
  if (toggle && nav) toggle.addEventListener('click', () => nav.classList.toggle('open'));
  if (window.AOS) AOS.init({ duration: 750, once: true, offset: 60 });
  document.querySelectorAll('[data-product]').forEach(link => link.addEventListener('click', () => {
    try { sessionStorage.setItem('hifi_selected_product', link.dataset.product); } catch(e) {}
  }));
  const form = document.querySelector('#enquiryForm');
  if (form) {
    const chosen = (() => { try { return sessionStorage.getItem('hifi_selected_product'); } catch(e) { return ''; } })();
    if (chosen) { const select = form.querySelector('[name="service"]'); if (select) { const opt = document.createElement('option'); opt.value = chosen; opt.textContent = chosen; opt.selected = true; select.add(opt); } }
    form.addEventListener('submit', e => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(form).entries());
      data.createdAt = new Date().toISOString();
      const items = JSON.parse(localStorage.getItem('hifi_enquiries') || '[]');
      items.unshift(data); localStorage.setItem('hifi_enquiries', JSON.stringify(items));
      const msg = `Hi ${cfg.shopName || 'HiFi Technology'},%0AName: ${encodeURIComponent(data.name)}%0APhone: ${encodeURIComponent(data.phone)}%0AService: ${encodeURIComponent(data.service)}%0AMessage: ${encodeURIComponent(data.message || 'Please contact me.')}`;
      window.open(`https://wa.me/${cfg.phoneDigits || '919876543210'}?text=${msg}`, '_blank', 'noopener');
      form.reset(); alert('Your enquiry has been prepared in WhatsApp. Please press Send in WhatsApp to submit it.');
    });
  }
})();
