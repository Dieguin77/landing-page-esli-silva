// === SELETORES ===
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-menu a');
const header = document.querySelector('.header');
const scrollTopBtn = document.querySelector('.scroll-top');
const scrollIndicator = document.querySelector('.scroll-indicator');
const hero = document.querySelector('.hero');
const heroBackground = document.querySelector('.hero-background');
const contactForm = document.getElementById('contact-form');
const sections = document.querySelectorAll('section[id]');

// === MENU MOBILE ===
function closeMenu() {
    navMenu.classList.remove('active');
    menuToggle.classList.remove('active');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Abrir menu de navegação');
}

menuToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
    menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    menuToggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu de navegação');
});

navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
});

document.addEventListener('click', (e) => {
    if (!menuToggle.contains(e.target) && !navMenu.contains(e.target)) {
        closeMenu();
    }
});

// === SCROLL UNIFICADO ===
function onScroll() {
    const scrollY = window.scrollY;

    // Efeito de compressão no header
    if (scrollY > 100) {
        header.style.padding = '0.5rem 0';
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.padding = '';
        header.style.boxShadow = '';
    }

    // Link ativo no menu conforme seção visível
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        if (scrollY >= sectionTop && scrollY < sectionTop + section.offsetHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });

    // Botão voltar ao topo
    scrollTopBtn.classList.toggle('visible', scrollY > 300);

    // Indicador de scroll da hero
    if (scrollIndicator) {
        scrollIndicator.style.opacity = scrollY > 100 ? '0' : '1';
        scrollIndicator.style.pointerEvents = scrollY > 100 ? 'none' : 'auto';
    }

    // Parallax na hero
    if (heroBackground && hero && scrollY < hero.offsetHeight) {
        heroBackground.style.transform = `translateY(${scrollY * 0.4}px)`;
    }
}

window.addEventListener('scroll', onScroll, { passive: true });

// === SMOOTH SCROLL COM OFFSET DO HEADER ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetSelector = this.getAttribute('href');
        if (targetSelector === '#') return;
        e.preventDefault();
        const target = document.querySelector(targetSelector);
        if (target) {
            window.scrollTo({
                top: target.offsetTop - header.offsetHeight,
                behavior: 'smooth'
            });
        }
    });
});

// === BOTÃO VOLTAR AO TOPO ===
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// === ANIMAÇÃO DE ENTRADA DE SEÇÕES ===
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.servico-card, .prova-card, .sobre-content, .contato-content').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    sectionObserver.observe(el);
});

// === FAQ ACCORDION ===
document.querySelectorAll('.faq-item').forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        document.querySelectorAll('.faq-item').forEach(other => {
            other.classList.remove('active');
            other.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
        });
        if (!isActive) {
            item.classList.add('active');
            question.setAttribute('aria-expanded', 'true');
        }
    });
});

// === FORMULÁRIO — ENVIO VIA WHATSAPP ===
const btnSubmit = contactForm.querySelector('.btn-submit');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = contactForm.nome.value.trim();
    const email = contactForm.email.value.trim();
    const telefone = contactForm.telefone.value.trim();
    const mensagem = contactForm.mensagem.value.trim();

    const texto = `Olá Dr. Esli! Meu nome é *${nome}*.\n\n📧 Email: ${email}\n📞 Telefone: ${telefone}\n\n📋 Mensagem:\n${mensagem}`;
    const urlWhatsApp = `https://wa.me/5527999248019?text=${encodeURIComponent(texto)}`;

    contactForm.reset();
    window.open(urlWhatsApp, '_blank', 'noopener,noreferrer');

    const textoOriginal = btnSubmit.textContent;
    btnSubmit.textContent = 'Enviado! Abrindo WhatsApp...';
    btnSubmit.disabled = true;
    setTimeout(() => {
        btnSubmit.textContent = textoOriginal;
        btnSubmit.disabled = false;
    }, 3000);
});

// === PARTÍCULAS DA HERO ===
function createParticles() {
    const container = document.getElementById('particles');
    if (!container) return;
    for (let i = 0; i < 30; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        p.style.left = Math.random() * 100 + '%';
        const size = Math.random() * 4 + 2;
        p.style.width = size + 'px';
        p.style.height = size + 'px';
        p.style.animationDelay = Math.random() * 8 + 's';
        p.style.animationDuration = (Math.random() * 4 + 6) + 's';
        container.appendChild(p);
    }
}

document.addEventListener('DOMContentLoaded', createParticles);
