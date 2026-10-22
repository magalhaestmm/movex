---
name: Movex
description: Landing de uma ideia de app que mostra pedido e entrega de móveis, desenhada como planta baixa em linha branca sobre papel verde, com um trajeto pontilhado e um único botão amarelo.
colors:
  green-field: "#3B5B49"
  green-deep: "#2F4A3B"
  green-night: "#243A2E"
  on-green: "#F3F7F4"
  on-green-soft: "#CBDCD1"
  action-yellow: "#F2C46D"
  action-yellow-hover: "#F7D58E"
  on-action: "#1C2A22"
  paper-ice: "#EAF1EC"
  paper-ice-deep: "#DCE8E0"
  ink: "#1C2A22"
  ink-soft: "#3F5348"
  rule: "#9DB5A5"
  field-border: "#5F7D6B"
  paper-night: "#17231D"
  paper-night-deep: "#1D2C24"
  ink-night: "#E8F0EA"
  ink-night-soft: "#AEC3B5"
  rule-night: "#3E5A4A"
  field-border-night: "#6F8F7B"
  error: "#8E2616"
  error-border: "#A8321F"
  error-night: "#FFAE9B"
  error-border-night: "#FF9C86"
typography:
  display:
    fontFamily: "Bricolage Grotesque, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(2.6rem, 6.2vw, 4.5rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Bricolage Grotesque, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(2rem, 4.6vw, 3.4rem)"
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Bricolage Grotesque, Segoe UI, system-ui, sans-serif"
    fontSize: "1.35rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Hanken Grotesk, Segoe UI, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  lead:
    fontFamily: "Hanken Grotesk, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(1.1rem, 1.7vw, 1.3rem)"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Hanken Grotesk, Segoe UI, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 600
    lineHeight: 1
  plan-label:
    fontFamily: "Hanken Grotesk, Segoe UI, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "0.08em"
rounded:
  sm: "10px"
  md: "14px"
  pill: "999px"
spacing:
  gutter: "clamp(1rem, 4vw, 2rem)"
  section: "clamp(4rem, 10vw, 8rem)"
  field-gap: "1.35rem"
  container: "1180px"
components:
  button-primary:
    backgroundColor: "{colors.action-yellow}"
    textColor: "{colors.on-action}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.85rem 1.7rem"
    height: "3.4rem"
  button-primary-hover:
    backgroundColor: "{colors.action-yellow-hover}"
  brand-mark:
    backgroundColor: "{colors.green-field}"
    textColor: "{colors.on-green}"
    rounded: "10px"
    size: "2.5rem"
  input-text:
    backgroundColor: "{colors.paper-ice}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: "0.7rem 0.95rem"
    height: "3.2rem"
  choice-selected:
    backgroundColor: "{colors.green-field}"
    textColor: "{colors.on-green}"
    rounded: "{rounded.sm}"
    height: "3.2rem"
  form-card:
    backgroundColor: "{colors.paper-ice}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "clamp(1.4rem, 3.5vw, 2.4rem)"
---

# Design System: Movex

## Overview

**Creative North Star: "A Planta da Sua Sala"**

Movex é uma planta baixa desenhada em linha branca fina sobre papel verde. A entrega aparece como uma linha pontilhada que entra pela porta e chega ao sofá. O verde escuro pastel domina a abertura e o fecho. Entre os dois, as seções de leitura ficam em verde-gelo muito claro, nunca creme. O tom é calmo e honesto: é uma ideia em início, e o visual não finge produto pronto.

A densidade é baixa a média. Há um título grande, uma frase curta, um desenho e muito ar. A personalidade vem do traço (paredes grossas, móveis em linha fina, rótulos de planta em caixa alta com espaçamento) e não de fotos ou mockups. Todo o resto é verde; só o botão é amarelo, então o amarelo sempre significa "faça isto" e, no desenho, "o pedido em trânsito".

**Key Characteristics:**
- Campo verde (#3B5B49) com grade de papel quadriculado quase invisível no herói.
- Desenho em linha: parede grossa (6) e mobília fina (1.75) no mesmo traço claro ou verde.
- Trajeto sempre pontilhado, nunca contínuo; é a assinatura do sistema.
- Uma única cor de ação, amarela, reservada ao botão e ao ponto que percorre a trilha.
- Tema claro e escuro por `prefers-color-scheme`; herói e fecho continuam verdes nos dois.
- Sem fotos nem rasters: toda imagem é SVG inline.

## Colors

Verde pastel escuro como campo, verde-gelo como papel de leitura, um amarelo quente como única ação.

### Primary
- **Verde Campo** (green-field, #3B5B49): fundo do herói, marca, traço dos desenhos em fundo claro, borda grossa de seção, opção marcada do formulário, `theme-color`.
- **Verde Profundo** (green-deep, #2F4A3B): fundo do fecho com formulário; também cor do foco em tema claro.
- **Verde Noite** (green-night, #243A2E): rodapé.

### Secondary
- **Amarelo Ação** (action-yellow, #F2C46D): fundo do botão, ponto e trilha na planta do herói, ponto que corre pela trilha de "como funciona", anel de foco sobre verde e, no tema escuro, foco e marcadores. Hover em #F7D58E (action-yellow-hover). Texto sobre ele: Tinta (on-action, #1C2A22).

### Neutral
- **Branco Verde** (on-green, #F3F7F4): texto e traço sobre verde. Versão suave (on-green-soft, #CBDCD1) para frases de apoio e rótulos de planta.
- **Papel Gelo** (paper-ice, #EAF1EC): fundo de seções de leitura e do cartão do formulário. **Papel Gelo Fundo** (paper-ice-deep, #DCE8E0): seção "como funciona" e fundo do scrollbar.
- **Tinta** (ink, #1C2A22) e **Tinta Suave** (ink-soft, #3F5348): texto e texto secundário.
- **Fio** (rule, #9DB5A5): divisórias de lista. **Borda de Campo** (field-border, #5F7D6B): borda de inputs, pontos da trilha vertical e traço de "fica de fora".
- **Tema escuro:** paper-night (#17231D), paper-night-deep (#1D2C24), ink-night (#E8F0EA), ink-night-soft (#AEC3B5), rule-night (#3E5A4A), field-border-night (#6F8F7B). Só os neutros de leitura trocam; os três verdes não.
- **Erro:** error (#8E2616) com borda error-border (#A8321F); no escuro, error-night (#FFAE9B) e error-border-night (#FF9C86).

### Named Rules
**The One Action Rule.** O amarelo é a única cor de ação: botão, o ponto em movimento e o foco sobre verde. Nunca em títulos, fundos de seção ou ícones decorativos.
**The Green Paper Rule.** Superfície de leitura é verde-gelo (ou verde-noite no escuro). Nunca creme, bege ou branco puro.

## Typography

**Display Font:** Bricolage Grotesque (com Segoe UI, system-ui, sans-serif), pesos 500 a 800, eixo óptico variável; o build usa 700.
**Body Font:** Hanken Grotesk (com Segoe UI, system-ui, sans-serif), pesos 400, 500, 600.

**Character:** Uma grotesca com personalidade nos títulos, apertada e firme, e uma grotesca neutra e legível para texto corrido. O contraste é de caráter, não de tamanho.

### Hierarchy
- **Display** (700, clamp(2.6rem, 6.2vw, 4.5rem), 1.02): só o h1 do herói, no máximo duas linhas.
- **Headline** (700, clamp(2rem, 4.6vw, 3.4rem), 1.04): h2 de cada seção, com `text-wrap: balance` e largura máxima em `ch`.
- **Title** (700, 1.35rem, 1.2): h3 de passos e colunas.
- **Body** (400, 1.0625rem, 1.6): texto corrido; limite de 30 a 48ch conforme o bloco. Lead em clamp(1.1rem, 1.7vw, 1.3rem), 38ch.
- **Label** (600, 1.0625rem): botões e rótulos de formulário.
- **Plan label** (500, 17px no desenho, 24px no mobile, +0.08em, caixa alta): nomes de peças dentro da planta ("janela", "porta", "sofá", "loja"). Vive só dentro do SVG e nomeia objetos do desenho; não vai acima de títulos.

### Named Rules
**The No Preface Rule.** Nenhum texto pequeno acima de título. Título abre a seção sozinho.

## Layout

Contêiner de 1180px centrado, com gutter fluido (clamp(1rem, 4vw, 2rem)). Seções verticais com respiro clamp(4rem, 10vw, 8rem). O herói ocupa 100dvh em duas colunas iguais (6fr/6fr): texto à esquerda, planta à direita. Problema é 6fr/5fr, fecho é 5fr/6fr, escopo é duas colunas. Em 860px ou menos tudo vira uma coluna, o botão do topo some, a trilha horizontal de três paradas vira vertical e os rótulos da planta sobem para 24px. Em 480px ou menos o botão ocupa a largura toda.

"Como funciona" é uma trilha horizontal de três paradas alternadas acima e abaixo de um trilho pontilhado; o ponto amarelo percorre o trilho quando a seção entra na tela.

Ritmo: espaços generosos (gap 1.35rem entre campos, 2.75rem entre itens de eixo, 6rem entre colunas largas). Alvos de toque de 3.2rem ou mais.

## Elevation & Depth

Predominantemente plano; a profundidade vem de camadas tonais (campo verde, papel, papel mais fundo) e de bordas grossas de seção. Sombra só em duas peças: o botão (suave, difusa e inferior) e o cartão do formulário, que descola do verde.

### Shadow Vocabulary
- **Botão** (`box-shadow: 0 6px 18px -6px rgb(10 25 16 / .5), inset 0 -2px 0 rgb(0 0 0 / .08)`): botão em repouso; no hover sobe 2px e vai a `0 10px 22px -8px rgb(10 25 16 / .55)`.
- **Cartão do formulário** (`box-shadow: 0 30px 60px -30px rgb(8 20 13 / .6)`): separa o formulário claro do fecho verde.

### Named Rules
**The Wall Not Shadow Rule.** Seções de leitura se separam por parede, um traço de 6px, e não por sombra.

## Shapes

Dois idiomas. O desenho usa cantos retos e quase retos: paredes com pontas quadradas (`stroke-linecap: square`), mobília com raio de 2 a 14 nas unidades do SVG. A interface usa raios amigáveis: campos e opções 10px, cartão 14px, marca 10px, botão em pílula (999px). Nenhum círculo é decorativo, exceto os nós da trilha (20px, borda 2.5px) e o ponto amarelo.

Parede de planta: `.how` e `.scope` abrem com `border-top: 6px solid` verde campo (field-border no escuro). Os mesmos 6px são a espessura da parede nos desenhos.

## Components

### Buttons
- **Shape:** pílula (999px), altura mínima 3.4rem, padding 0.85rem 1.7rem; no topo 2.8rem.
- **Primary:** fundo amarelo ação, texto tinta, 600 em Hanken Grotesk 1.0625rem. Seta em SVG inline opcional à direita.
- **Hover / Focus:** hover clareia para #F7D58E e sobe 2px; active volta e reduz a 0.98; foco 3px em amarelo sobre verde, verde-profundo (ou amarelo no escuro) sobre papel. Desativado: opacidade .65.
- Não há variante secundária. É um botão só, repetido em topo, herói e formulário.

### Marca
Casinha branca (path SVG inline) em quadrado verde campo de 2.5rem, raio 10px, com contorno interno de 1.5px a 50% de branco; o mesmo ícone é o favicon, em quadrado verde de raio 8 em 32. Ao lado, "Movex" em Bricolage 700, 1.4rem.

### Planta do herói (assinatura)
SVG 640x560, paredes 6, mobília 1.75, tapete tracejado (4 7), vãos de janela e porta. O trajeto amarelo é `stroke-dasharray: .1 13` com cap redondo, revelado por máscara em 2.8s; o ponto segue o mesmo caminho por `offset-path`; um anel pulsa ao chegar ao sofá. Versão reduzida (`plan-lite`) em verde campo, em que o trajeto não chega ao sofá e um "?" em Bricolage 44 marca o ponto perdido.

### Trilha pontilhada
Eixo vertical do problema (pontos de 2px, repetidos a cada 10px, com nós de 1.25rem) e trilho horizontal de "como funciona" (pontos de 12px de passo). Nós têm borda verde campo (amarela no escuro) e miolo da cor do papel.

### Inputs / Fields
- **Style:** fundo papel (papel fundo no escuro), borda 1.5px field-border, raio 10px, altura 3.2rem, texto 1.0625rem.
- **Focus:** contorno de 3px, offset 1px. Hover: borda verde campo.
- **Error:** borda e 1px de anel em error-border; mensagem abaixo em 0.92rem, peso 500, com `role="alert"`.
- **Opções Sim/Não:** blocos do mesmo tamanho do campo; marcada vira verde campo com texto claro.

### Escopo (lista com símbolos)
Itens com símbolo de planta (64x40, traço 1.75) à direita. Coluna "Entra" em tinta; "Fica de fora" em tinta suave e riscado, sem símbolo.

## Do's and Don'ts

### Do:
- **Do** manter o amarelo (#F2C46D) restrito ao botão, ao ponto em movimento e ao foco sobre verde.
- **Do** desenhar objetos em linha: parede 6, peça 1.75, trajeto pontilhado com cap redondo.
- **Do** separar seções de leitura por uma parede de 6px em verde campo, e usar verde-gelo (#EAF1EC / #DCE8E0) como papel.
- **Do** manter herói e fecho em verde nos dois temas e trocar só os neutros de leitura no escuro.
- **Do** respeitar `prefers-reduced-motion`: o desenho aparece já completo.
- **Do** usar texto em tinta (#1C2A22) sobre amarelo e em #F3F7F4 sobre verde.

### Don't:
- **Don't** usar fundo creme, bege ou branco puro para leitura.
- **Don't** trocar o trajeto pontilhado por linha contínua nem usar mais de uma cor de ação.
- **Don't** usar mockup de celular, fotos de móveis ou trio de cards de benefício como abertura.
- **Don't** acrescentar números, prazos, lojas ou depoimentos; a página só afirma o problema e a ideia.
- **Don't** pôr texto pequeno acima de título.

## Divergências e dívidas não canonizadas

- O contrato pedia cotas e medidas em números tabulares; o build não tem medidas nem `font-variant-numeric`. Não registrado como regra.
- O endpoint do formulário (`COLE_AQUI_A_URL_DO_APPS_SCRIPT`) é placeholder de código, fora do sistema visual.
- Há dois blocos `@media` aninhados em `max-width: 860px` para a cor do trilho, sintaxe que depende de suporte a CSS aninhado; é dívida de código, não regra.
