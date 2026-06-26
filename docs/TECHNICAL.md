# Documentação Técnica

Landing page institucional para escritório de advocacia. Site estático sem dependências de build, frameworks ou bibliotecas externas.

---

## Arquitetura

```
Single-page application (SPA) estática
├── Sem build process (HTML/CSS/JS puros)
├── Hospedagem: GitHub Pages + domínio customizado
├── Sem backend (formulário integra via WhatsApp Web)
└── Sem dependências NPM
```

### Decisão: sem framework

A escolha de HTML/CSS/JS Vanilla foi intencional para:
- **Deploy imediato** sem configuração de build (Vite, Webpack, etc.)
- **Performance máxima** — zero JavaScript de framework no bundle
- **Portabilidade** — funciona em qualquer servidor estático
- **Manutenibilidade** para cliente não-técnico alterar textos diretamente no HTML

---

## Organização do CSS (`index.css`)

O arquivo segue uma ordem consistente, do mais geral para o mais específico:

```
1. CSS Custom Properties (:root)
2. CSS Reset (*, html, body)
3. Utilitários globais (.container, .sr-only, .skip-link)
4. Header / Navegação
5. Hero Section
6. Seção Sobre
7. Seção Diferenciais
8. Seção Serviços
9. Seção Provas Sociais
10. Seção FAQ
11. Seção Contato
12. Footer
13. Componentes flutuantes (WhatsApp, Scroll-top)
14. Animações (@keyframes)
15. Media queries (1400px → 1024px → 768px → 576px → 380px → landscape)
16. Print styles (@media print)
```

### Custom Properties

Todas as constantes de design estão em `:root`:

```css
:root {
    /* Cores */
    --cor-primaria: #1a2947;       /* Azul institucional */
    --cor-secundaria: #d4af37;     /* Dourado */
    --cor-terciaria: #2c4875;      /* Azul médio */
    --cor-destaque: #f0c14b;       /* Dourado claro */

    /* Tipografia */
    --fonte-principal: 'Poppins', sans-serif;
    --fonte-elegante: 'Playfair Display', serif;

    /* Sombras */
    --sombra-leve / --sombra-media / --sombra-forte

    /* Transição padrão (propriedades específicas, não 'all') */
    --transicao: background-color 0.3s ease, color 0.3s ease, ...;
}
```

### Convenção de nomenclatura CSS

Classes em português seguindo a identidade do projeto:
- `.sobre-content`, `.servico-card`, `.diferencial-item` — componentes de seção
- `.section-title`, `.section-subtitle` — elementos tipográficos reutilizáveis
- `.btn-hero-cta`, `.btn-submit`, `.btn-contato` — botões por contexto
- `.sr-only`, `.skip-link` — utilitários de acessibilidade

---

## Fluxo do JavaScript (`index.js`)

O JS é organizado em módulos funcionais, sem classes, sem estado global desnecessário:

```
1. Seletores (DOM queries — tudo cacheado no topo)
2. Menu Mobile (toggle, fechar ao clicar fora, ARIA)
3. onScroll() — handler único e passivo para todos os eventos de scroll:
   ├── Header shrink
   ├── Active nav link
   ├── Scroll-to-top button visibility
   ├── Scroll indicator fade
   └── Parallax na hero
4. Smooth scroll com offset do header
5. Scroll-to-top button click
6. IntersectionObserver para animações de entrada
7. FAQ Accordion (com ARIA)
8. Formulário → WhatsApp (sem backend)
9. Partículas (criação dinâmica no DOMContentLoaded)
```

### Padrão de scroll consolidado

```javascript
// Único listener com passive: true evita janks de scroll
window.addEventListener('scroll', onScroll, { passive: true });

// sections cacheado fora do handler para evitar re-query a cada scroll
const sections = document.querySelectorAll('section[id]');
```

### Formulário sem backend

O formulário coleta os dados, codifica em URL e abre o WhatsApp:

```javascript
const texto = `Olá Dr. Esli! Meu nome é *${nome}*.\n\n...`;
window.open(`https://wa.me/5527999248019?text=${encodeURIComponent(texto)}`, '_blank');
```

Vantagens:
- Zero custo de servidor
- Zero configuração de e-mail
- Alta taxa de conversão (WhatsApp tem taxa de resposta > 90%)

---

## Acessibilidade

### ARIA implementado

| Componente | Atributos |
|---|---|
| Menu hambúrguer | `aria-expanded`, `aria-label` dinâmico |
| Nav principal | `aria-label="Navegação principal"` |
| Nav rodapé | `aria-label="Navegação do rodapé"` |
| FAQ buttons | `aria-expanded`, `aria-controls`, `id` |
| FAQ panels | `role="region"`, `aria-labelledby`, `id` |
| SVGs decorativos | `aria-hidden="true"` |
| Form inputs | `<label class="sr-only">`, `id`, `autocomplete` |
| Botões de ação | `aria-label` descritivo |
| Skip link | Aponta para `#conteudo-principal` (`<main>`) |

### Screen reader utility

```css
.sr-only {
    position: absolute;
    width: 1px; height: 1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
}
```

---

## Performance

### Resource hints

```html
<!-- DNS Prefetch: resolução antecipada de DNS -->
<link rel="dns-prefetch" href="https://fonts.googleapis.com">

<!-- Preconnect: handshake TCP+TLS antecipado -->
<link rel="preconnect" href="https://fonts.googleapis.com">

<!-- Preload: início de download antes do parser chegar ao <img> -->
<link rel="preload" as="image" href="img/perfil.jpeg">
```

### Core Web Vitals

| CWV | Estratégia |
|---|---|
| **LCP** (Largest Contentful Paint) | `preload` da hero image + `object-fit: cover` |
| **CLS** (Cumulative Layout Shift) | `width`/`height` em todas as `<img>` |
| **INP** (Interaction to Next Paint) | Scroll `passive`, zero blocking JS |

### Lazy loading

```html
<!-- Imagens above-the-fold: sem lazy (carregam imediatamente) -->
<img src="img/perfil.jpeg" alt="" class="hero-bg-image">

<!-- Imagens below-the-fold: lazy nativo (HTML5) -->
<img src="img/perfil.jpeg" loading="lazy" ...>
<img src="img/prova-social-1.jpeg" loading="lazy" ...>
```

---

## SEO

### Structured Data (Schema.org)

JSON-LD no `<head>` com `@graph`:

```json
{
  "@graph": [
    { "@type": "LegalService", ... },
    { "@type": "Person", "honorificPrefix": "Dr.", ... }
  ]
}
```

Tipos escolhidos:
- `LegalService` — reconhecido pelo Google para escritórios jurídicos
- `Person` — para o advogado como profissional individual

### Metadados completos

```html
<link rel="canonical" href="https://eslisilvaadvocacia.com.br/">
<meta property="og:image" content="https://eslisilvaadvocacia.com.br/img/logo.png">
<meta name="twitter:image" content="https://eslisilvaadvocacia.com.br/img/logo.png">
```

`og:image` e `twitter:image` usam URLs absolutas — necessário para que redes sociais consigam buscar a imagem.

---

## Decisões Técnicas

| Decisão | Motivo |
|---|---|
| Sem framework JS | Sem overhead, deploy imediato, cliente sem node instalado |
| WhatsApp em vez de e-mail | Taxa de conversão maior, sem backend, sem spam |
| Fontes via CDN (Google Fonts) | Facilidade, com `display=swap` para evitar FOIT |
| CSS single file | Projeto pequeno — split não traz benefício real |
| Scroll passivo (`passive: true`) | Não bloqueia o thread principal |
| `--transicao` com propriedades específicas | Evita o custo de animar todas as propriedades (`all`) |
| `<nav>` para footer links | Semântica correta para navegação secundária |
