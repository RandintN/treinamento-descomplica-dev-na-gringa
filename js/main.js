// Remove classe que esconde o conteúdo para evitar FOUC assim que o JS carrega
if (document && document.body) {
  document.body.classList.remove('fouc-hidden');
}

// Lógica para o menu mobile
const mobileMenuButton = document.getElementById('mobile-menu-button');
const closeMobileMenuButton = document.getElementById('close-mobile-menu');
const mobileMenu = document.getElementById('mobile-menu');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

if (mobileMenuButton && closeMobileMenuButton && mobileMenu) {
  mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.add('open');
  });

  closeMobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
  });

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
    });
  });
}
