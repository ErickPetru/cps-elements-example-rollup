# CPS Elements - Exemplo - Rollup

Um modelo de configuração mínima demonstrando como importar componentes [CPS Elements](https://github.com/cpsrepositorio/cps-elements) com [Rollup](https://rollupjs.org/) como empacotador do projeto.

> **CPS Elements** é parte do projeto de UI/UX institucional, que também sustenta o [CPS Design System](https://cpsrepositorio.github.io/cps-design-system/), projetados originalmente pelo professor [Erick Petrucelli](https://github.com/ErickPetru). Independentemente de suas origens e motivações iniciais, é um projeto totalmente _open-source_ disponível sob os termos da licença [MIT](https://github.com/cpsrepositorio/cps-elements/blob/main/LICENSE.md).

Em sua versão 3, o Rollup avançou no suporte a [módulos JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Modules) nativos (também conhecidos como _ES modules_), sem necessitar de configurações em especial para o uso dos Web Components do CPS Elements.

Assim, este exemplo foca em demonstrar um conjunto opinativo de configurações uteis no [rollup.config.js](./rollup.config.js), tanto para desenvolvimento quanto para publicação de aplicações com Rollup 3, contendo diversos ajustes sobre carregamento de HTML, CSS, SVG, bem como o empacotamento JavaScript.

_Opcionalmente_, recursos podem carregados pela instalação local ao invés de serem carregados por CDN. Para tal, a única configuração extra necessária é copiar os ícones de `node_modules/@cps-elements/web/assets` para `dist/assets` da distribuição empacotada, através do `rollup-plugin-copy`.

Observe que Rollup pode ser usado com _frameworks_ JavaScript, onde configurações extras podem ser necessárias. Mas para utilização com Web nativa, ou seja, HTML, CSS e JavaScript puros, este projeto apresenta os fundamentos para você poder começar de forma produtiva.

> **Dica:** Embora a utilização do Rollup para uma aplicação Web seja possível, conforme este exemplo demonstra, o [Vite](https://vitejs.dev/) é uma alternativa mais moderna e recomendada, construído por cima do próprio Rollup e já trazendo um conjunto completo de configurações e recursos para aplicações Web modernas, como suporte a TypeScript e a _frameworks_ JavaScript _out-of-the-box_.

## Executando manualmente este projeto

Para execução com _hot-reload_ em modo de desenvolvimento:

```sh
npm run dev
```

Para compilar para produção:

```sh
npm run build
```

Para iniciar um servidor local e testar a compilação de produção:

```sh
npm run preview
```

Então abra o navegador na URL exibida após os comandos.
