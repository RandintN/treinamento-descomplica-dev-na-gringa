// Remove a classe que esconde o conteúdo apenas quando a página estiver pronta online
// Espera o evento 'load' (CSS externo e fontes carregados) com um fallback de tempo.
(function() {
  let revealed = false;
  function reveal() {
    if (revealed) return;
    revealed = true;
    if (document && document.body) {
      document.body.classList.remove('fouc-hidden');
    }
  }
  // Quando tudo carregar (inclui CSS externo), revelamos
  window.addEventListener('load', reveal);
  // Fallback: se algo atrasar demais (ex.: iframe de terceiros), revela após 1.5s
  setTimeout(reveal, 1500);
})();

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
