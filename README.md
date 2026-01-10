# 🏛️ Dr. Esli Silva - Site Institucional

Site institucional profissional para advogado especialista em Direito Previdenciário.

## 📋 Características

### ✨ Design Moderno
- Layout responsivo e mobile-first
- Paleta de cores elegante (azul institucional + dourado)
- Animações suaves e transições fluidas
- Interface intuitiva e profissional

### 🎯 Seções Principais
1. **Hero** - Apresentação impactante com estatísticas
2. **Sobre** - Biografia e experiência profissional
3. **Diferenciais** - 6 pontos que destacam o profissional
4. **Serviços** - Cards interativos dos principais serviços
5. **Provas Sociais** - Galeria de resultados comprovados
6. **FAQ** - Accordion com perguntas frequentes
7. **Contato** - Formulário funcional e informações de contato

### 🚀 Funcionalidades

#### Navegação
- Menu fixo com scroll suave
- Menu hambúrguer responsivo para mobile
- Links de navegação com efeitos hover elegantes

#### Interatividade
- Accordion FAQ totalmente funcional
- Formulário de contato com validação
- Botão flutuante do WhatsApp com tooltip
- Botão "Voltar ao topo" com scroll suave
- Animações ao rolar a página (scroll animations)

#### Performance & SEO
- Meta tags completas para SEO
- Open Graph para redes sociais
- Lazy loading de imagens (preparado)
- Debounce em eventos de scroll
- Código otimizado e limpo

#### Acessibilidade
- Semântica HTML5 apropriada
- Labels ARIA para botões
- Indicadores de foco visíveis
- Contraste adequado de cores

## 🎨 Paleta de Cores

```css
--cor-primaria: #1a2947;      /* Azul escuro institucional */
--cor-secundaria: #d4af37;    /* Dourado elegante */
--cor-terciaria: #2c4875;     /* Azul médio */
--cor-destaque: #f0c14b;      /* Amarelo/Dourado claro */
```

## 📁 Estrutura de Arquivos

```
esli/
├── index.html          # Estrutura principal do site
├── index.css           # Estilos e animações
├── index.js            # Interatividade e funcionalidades
├── README.md           # Documentação
└── img/
    ├── logo.png            # Logo do escritório
    ├── sobre.jpeg          # Foto do advogado
    ├── perfil.jpeg         # Foto de perfil
    ├── prova-social-1.jpeg # Prova social 1
    ├── prova-social-2.jpeg # Prova social 2
    └── prova-social-3.jpeg # Prova social 3
```

## 🔧 Personalizações Necessárias

### Informações de Contato
Edite no arquivo `index.html`:

1. **WhatsApp** (linha ~257)
   ```html
   href="https://wa.me/55XXXXXXXXXXX?text=..."
   ```

2. **Telefone** (linha ~218)
   ```html
   <p>(XX) XXXXX-XXXX</p>
   ```

3. **Email** (linha ~228)
   ```html
   <p>contato@eslisilva.adv.br</p>
   ```

4. **OAB** (linha ~270)
   ```html
   <p>&copy; 2026 Dr. Esli Silva - Todos os direitos reservados. OAB/XX XXXXX</p>
   ```

### Redes Sociais
Atualize os links no footer (linhas ~247-267):
- Instagram
- Facebook
- LinkedIn

### Integração com Backend
Para conectar o formulário de contato a um backend, edite o `index.js` (linha ~57):

```javascript
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(contactForm);
    
    // Enviar para sua API
    const response = await fetch('/api/contato', {
        method: 'POST',
        body: formData
    });
    
    // Tratar resposta...
});
```

## 📱 Responsividade

O site é totalmente responsivo e testado em:
- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large Desktop (1440px+)

## 🌐 Navegadores Suportados

- Chrome (últimas 2 versões)
- Firefox (últimas 2 versões)
- Safari (últimas 2 versões)
- Edge (últimas 2 versões)

## 📈 Melhorias Futuras

- [ ] Integração com Google Analytics
- [ ] Chat ao vivo
- [ ] Blog de artigos jurídicos
- [ ] Área do cliente
- [ ] Sistema de agendamento online
- [ ] Integração com CRM
- [ ] Calculadora de benefícios
- [ ] Newsletter

## 🚀 Como Usar

1. Clone ou baixe o repositório
2. Edite as informações de contato
3. Substitua as imagens na pasta `img/`
4. Personalize textos conforme necessário
5. Faça o deploy em seu servidor

### Hospedagem Sugerida
- Netlify (gratuito)
- Vercel (gratuito)
- GitHub Pages (gratuito)
- Hostinger
- HostGator

## 📞 Suporte

Para dúvidas ou suporte sobre o site, entre em contato através dos canais disponíveis no próprio site.

---

**Desenvolvido
para Dr. Esli Silva**

Versão: 2.0 - Aprimorada
Data: Janeiro 2026
