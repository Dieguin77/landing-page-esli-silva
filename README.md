# Dr. Esli Silva — Landing Page Profissional

> Site institucional para advogado especialista em Direito Previdenciário, desenvolvido com HTML5, CSS3 e JavaScript Vanilla.

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?style=for-the-badge&logo=github&logoColor=white)](https://pages.github.com/)
[![WCAG AA](https://img.shields.io/badge/WCAG-AA_Compliant-green?style=for-the-badge)](https://www.w3.org/WAI/WCAG21/quickref/)
[![License MIT](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)

**Demo ao vivo:** [eslisilvaadvocacia.com.br](https://eslisilvaadvocacia.com.br)

---

## Sumário

- [Visão Geral](#visão-geral)
- [Funcionalidades](#funcionalidades)
- [Diferenciais Técnicos](#diferenciais-técnicos)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Performance](#performance)
- [Acessibilidade](#acessibilidade)
- [SEO](#seo)
- [Como Usar](#como-usar)
- [Personalização](#personalização)
- [Melhorias Futuras](#melhorias-futuras)
- [Licença](#licença)
- [Créditos](#créditos)

---

## Visão Geral

Landing page de alto impacto para o Dr. Esli Silva, advogado com mais de 7 anos de atuação em Direito Previdenciário. O projeto foi desenvolvido do zero com foco em conversão, performance e acessibilidade — sem dependências externas, sem frameworks, sem overhead desnecessário.

O site é hospedado via GitHub Pages com domínio personalizado e SSL automático.

---

## Funcionalidades

| Seção | Descrição |
|---|---|
| **Hero** | Apresentação com imagem em tela cheia, parallax, partículas animadas e CTA |
| **Sobre** | Biografia, experiência e diferenciais do advogado |
| **Diferenciais** | 6 cards numerados com hover interativo |
| **Serviços** | 3 principais áreas de atuação com ícones SVG |
| **Resultados** | Galeria de provas sociais (decisões judiciais reais) |
| **FAQ** | Accordion acessível com 6 perguntas frequentes |
| **Contato** | Formulário integrado ao WhatsApp + informações de contato |

### Funcionalidades técnicas

- Menu mobile com animação hambúrguer → X e fechamento ao clicar fora
- Smooth scroll com offset automático do header fixo
- Header que comprime ao rolar (efeito de shrink)
- Link de navegação ativo conforme seção visível
- Lazy loading nativo (`loading="lazy"`) em imagens fora da viewport
- Botão flutuante do WhatsApp com tooltip
- Botão de voltar ao topo com aparição progressiva
- Partículas douradas animadas (desativadas em mobile para performance)
- Formulário de contato que abre o WhatsApp com dados pré-preenchidos

---

## Diferenciais Técnicos

### Zero dependências externas

Nenhuma biblioteca JavaScript (jQuery, Bootstrap, etc.). Todo o código é Vanilla JS e CSS puro. O único recurso externo é o Google Fonts, com `preconnect` e `dns-prefetch` para minimizar latência.

### Performance

- `<link rel="preload">` para a imagem da hero (LCP)
- `<link rel="preconnect">` e `<link rel="dns-prefetch">` para o CDN de fontes
- `loading="lazy"` em todas as imagens abaixo da dobra
- `font-display: swap` via parâmetro Google Fonts (sem FOIT)
- Script com `defer` — não bloqueia a renderização
- CSS custom properties para reutilização sem duplicação
- Listener de scroll com `{ passive: true }` (não bloqueia o thread principal)
- Único handler de scroll consolidando 5 listeners independentes
- `sections` cacheado fora do handler de scroll (evita re-query no DOM a cada evento)

### Acessibilidade (WCAG 2.1 AA)

- `<main id="conteudo-principal">` com skip-link funcional
- `<nav aria-label>` diferenciado para navegação principal e de rodapé
- Todos os botões com `aria-label` descritivo
- Menu hambúrguer com `aria-expanded` atualizado dinamicamente
- FAQ accordion com `aria-expanded`, `aria-controls`, `role="region"` e `aria-labelledby`
- Imagens decorativas com `alt=""` e imagens de conteúdo com descrição real
- Formulário com `<label class="sr-only">` + `for/id` + `autocomplete`
- `:focus-visible` com outline dourado visível
- Skip-link que aparece ao focar via teclado

### SEO

- `<title>`, `<meta description>`, `<link rel="canonical">`
- Open Graph completo (og:type, og:url, og:title, og:description, og:image com URL absoluta)
- Twitter Card (summary_large_image)
- Schema.org JSON-LD com `LegalService` e `Person`
- `sitemap.xml` e `robots.txt`
- `<link rel="apple-touch-icon">`
- Heading hierarchy correta (H1 → H2 → H3 → H4)

### Semântica HTML5

- `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>` corretamente aninhados
- `<nav aria-label="Navegação principal">` e `<nav aria-label="Navegação do rodapé">`
- SVGs decorativos com `aria-hidden="true"`
- Atributos `width` e `height` em todas as imagens (previne CLS)

---

## Estrutura do Projeto

```
esli-silva-landing/
├── index.html          # Documento principal
├── index.css           # Folha de estilos (single stylesheet)
├── index.js            # JavaScript Vanilla (sem dependências)
├── robots.txt          # Diretivas para crawlers
├── sitemap.xml         # Mapa do site para indexação
├── CNAME               # Domínio customizado (GitHub Pages)
├── 404.html            # Página de erro personalizada
├── LICENSE             # Licença MIT
├── README.md           # Esta documentação
├── docs/
│   └── TECHNICAL.md    # Documentação técnica detalhada
└── img/
    ├── logo.png            # Logo do escritório (3532×3532px — comprimir antes de deploy)
    ├── perfil.jpeg         # Foto de perfil — hero background (1024×1280px)
    ├── sobre.jpeg          # Foto da seção Sobre (1024×1280px)
    ├── prova-social-1.jpeg # Prova de resultado 1 (816×1232px)
    └── prova-social-2.jpeg # Prova de resultado 2 (1024×1280px)
```

---

## Performance

Metas de Core Web Vitals para este projeto:

| Métrica | Meta | Estratégia |
|---|---|---|
| LCP | < 2,5s | `preload` da hero image |
| CLS | < 0,1 | `width`/`height` em todas as imagens |
| FID / INP | < 100ms | JS sem bloqueio, scroll `passive` |

> **Nota:** O `logo.png` (271KB) deve ser comprimido antes de deploy em produção.
> Utilize [TinyPNG](https://tinypng.com) ou converta para SVG se o logo for vetorial.

---

## Acessibilidade

O projeto segue as diretrizes WCAG 2.1 nível AA:

- **Contraste:** Texto principal em `#333` sobre branco (contraste 10:1) e `#666` sobre branco (5.74:1 — passa AA)
- **Navegação por teclado:** Tab, Enter e Espaço funcionam em todos os elementos interativos
- **Skip-link:** Visível ao focar, leva direto ao `<main>`
- **Leitores de tela:** ARIA completo em menus, accordion FAQ e formulário

---

## SEO

Dados estruturados Schema.org implementados:

```json
{
  "@type": "LegalService",
  "name": "Esli Silva Advocacia",
  "hasOfferCatalog": { ... }
}
```

O Rich Result Test do Google pode validar o JSON-LD em:
`https://search.google.com/test/rich-results`

---

## Como Usar

```bash
# 1. Clone o repositório
git clone https://github.com/Dieguin77/landing-page-esli-silva.git

# 2. Abra o projeto
cd landing-page-esli-silva

# 3. Abra no navegador (não precisa de servidor local)
open index.html
# ou simplesmente dê duplo clique em index.html
```

Para desenvolvimento, recomenda-se usar a extensão **Live Server** do VS Code.

---

## Personalização

### Informações de contato

Edite `index.html` e `index.js`:

```html
<!-- WhatsApp (index.html, linha ~477 e index.js, linha ~107) -->
href="https://wa.me/55XXXXXXXXXXX"

<!-- Telefone (index.html) -->
<p>(XX) XXXXX-XXXX</p>

<!-- Email (index.html) -->
<p>contato@seudominio.com.br</p>

<!-- OAB (index.html, rodapé) -->
<p>&copy; 2026 Dr. Nome - OAB/XX Nº XXXXX</p>
```

### Schema.org

Atualize o JSON-LD no `<head>` com os dados reais do escritório.

### Cores

As variáveis CSS estão em `index.css`:

```css
:root {
    --cor-primaria: #1a2947;    /* Azul institucional */
    --cor-secundaria: #d4af37;  /* Dourado */
    --cor-destaque: #f0c14b;    /* Dourado claro */
}
```

---

## Melhorias Futuras

- [ ] Integração com Google Analytics 4
- [ ] Compressão do `logo.png` ou migração para SVG
- [ ] Blog de artigos jurídicos (Direito Previdenciário)
- [ ] Sistema de agendamento online (Cal.com ou Calendly embed)
- [ ] Chat ao vivo (Tawk.to ou similar)
- [ ] Área do cliente com portal seguro
- [ ] Calculadora de benefícios previdenciários
- [ ] Newsletter com Mailchimp
- [ ] Integração com CRM jurídico
- [ ] Versão multilíngue (PT/EN/ES para atendimento internacional)

---

## Licença

Distribuído sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais informações.

---

## Créditos

**Desenvolvido por:** [Diego Batista](https://diegodev.dev.br)

**Cliente:** Dr. Esli Silva — Advogado Previdenciário ([OAB/ES Nº 36.432](https://www.oab.org.br))

---

*Desenvolvido com foco em performance, acessibilidade e conversão.*
