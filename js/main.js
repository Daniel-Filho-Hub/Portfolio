// ===== TEMA CLARO / ESCURO =====
const html = document.documentElement;
const btnTema = document.getElementById('btnTema');
const icone = btnTema.querySelector('i');

function aplicarTema(tema) {
  html.setAttribute('data-bs-theme', tema);
  localStorage.setItem('tema', tema);
  icone.className = tema === 'dark' ? 'bi bi-sun' : 'bi bi-moon-stars';
  btnTema.title = tema === 'dark' ? 'Mudar para tema claro' : 'Mudar para tema escuro';
}

aplicarTema(localStorage.getItem('tema') || 'dark');

btnTema.addEventListener('click', () => {
  const atual = html.getAttribute('data-bs-theme');
  aplicarTema(atual === 'dark' ? 'light' : 'dark');
});

// ===== NAVBAR TRANSLÚCIDA AO ROLAR =====
const nav = document.getElementById('navPrincipal');

function atualizarNavbar() {
  nav.classList.toggle('navbar-scrolled', window.scrollY > 40);
}

window.addEventListener('scroll', atualizarNavbar, { passive: true });
atualizarNavbar();

// ===== MENU ACOMPANHA A SEÇÃO VISÍVEL =====
const linksMenu = document.querySelectorAll('#navPrincipal .nav-link');
const secoes = document.querySelectorAll('section[id]');

const observador = new IntersectionObserver((entradas) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      const idAtual = '#' + entrada.target.id;
      linksMenu.forEach((link) => {
        link.classList.toggle('active', link.getAttribute('href') === idAtual);
      });
    }
  });
}, {
  rootMargin: '-50% 0px -50% 0px'
});

secoes.forEach((secao) => observador.observe(secao));