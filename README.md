# 🏥 ParkOn - Sistema de Apoio à Decisão

Sistema computacional de apoio à decisão de elegibilidade de pacientes com Parkinson para neurocirurgia funcional, incluindo implante de sistema de DBS e procedimentos ablativos.

![Next.js](https://img.shields.io/badge/Next.js-14.2-black)
![React](https://img.shields.io/badge/React-18.3-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC)

## ✨ Características

- 🎯 **Algoritmo de decisão clínica** baseado em critérios validados
- 📊 **Formulário multi-step** com validação por seção
- ♿ **Totalmente acessível** (WCAG 2.1 AA)
- 📱 **Design responsivo** para todos os dispositivos
- 🖨️ **Relatórios imprimíveis** otimizados
- 🎨 **Interface moderna** com animações suaves
- 🔔 **Sistema de notificações** toast
- ⚡ **Performance otimizada** com React hooks
- 🔒 **Algoritmo protegido** no servidor (API Route)

## 🚀 Início Rápido

### Pré-requisitos

- Node.js 18+ 
- npm, yarn, pnpm ou bun

### Instalação

```bash
# Clone o repositório
git clone [url-do-repo]

# Entre na pasta do projeto
cd parkon-next

# Instale as dependências
npm install
# ou
yarn install
# ou
pnpm install
```

### Desenvolvimento

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

### Build para Produção

```bash
npm run build
npm start
```

## 📁 Estrutura do Projeto

```
parkon-next/
├── src/
│   ├── app/                    # App Router do Next.js
│   │   ├── api/               # API Routes
│   │   │   └── processar/     # Endpoint de processamento
│   │   ├── resultado/         # Página de resultados
│   │   ├── globals.css        # Estilos globais consolidados
│   │   ├── layout.tsx         # Layout principal com ToastProvider
│   │   └── page.tsx           # Página inicial (formulário)
│   ├── components/            # Componentes reutilizáveis
│   │   ├── LoadingSpinner.tsx # Indicador de carregamento
│   │   ├── ProgressSteps.tsx  # Barra de progresso
│   │   ├── QuestionCard.tsx   # Card de pergunta
│   │   ├── RadioGroup.tsx     # Grupo de radio buttons
│   │   ├── Toast.tsx          # Componente de notificação
│   │   ├── ToastContainer.tsx # Provider de toasts
│   │   └── Tooltip.tsx        # Tooltip acessível
│   └── types/                 # Tipos TypeScript
│       └── index.ts           # Interfaces e tipos compartilhados
├── public/                    # Assets estáticos
│   └── parkon.png            # Logo
├── tailwind.config.ts        # Configuração Tailwind
├── tsconfig.json             # Configuração TypeScript
├── CHANGELOG.md              # Histórico de mudanças
├── COMPONENTS.md             # Documentação de componentes
└── package.json              # Dependências
```

## 🎨 Componentes

Veja a [documentação completa de componentes](COMPONENTS.md) para detalhes sobre uso.

### Principais Componentes:

- **Toast**: Sistema de notificações não-intrusivo
- **ProgressSteps**: Indicador de progresso multi-step
- **QuestionCard**: Card de pergunta com radio buttons
- **RadioGroup**: Grupo de opções estilizado
- **Tooltip**: Tooltips acessíveis com suporte a teclado
- **LoadingSpinner**: Indicador de carregamento elegante

## 📊 Fluxo da Aplicação

1. **Formulário Multi-Step** (4 seções)
   - Informações do Paciente
   - Histórico da Doença
   - Sintomas
   - Condições Associadas

2. **Validação**
   - Por seção antes de avançar
   - Feedback via toast
   - Campos obrigatórios marcados
   - Validação em tempo real

3. **Processamento**
   - API calcula elegibilidade no servidor
   - Critérios necessários, de suporte e exclusão
   - Gera recomendações personalizadas
   - Algoritmo protegido (não exposto ao cliente)

4. **Resultado**
   - Dashboard com resumo visual
   - Tabs: Resumo, Respostas, Recomendações
   - Relatório imprimível otimizado
   - Indicadores de elegibilidade

## 🔧 Tecnologias

- **Framework**: Next.js 14.2 (App Router)
- **Linguagem**: TypeScript 5.6
- **UI**: React 18.3
- **Estilização**: Tailwind CSS 3.4
- **Linting**: ESLint 8.57
- **Ícones**: SVG inline (zero dependências extras)

## ♿ Acessibilidade

- ✅ Navegação completa por teclado
- ✅ ARIA labels, roles e states
- ✅ Suporte a leitores de tela
- ✅ Contraste de cores WCAG AA
- ✅ Focus visible em todos elementos
- ✅ Tooltips acessíveis
- ✅ Formulários semânticos
- ✅ Feedback de loading com aria-live
- ✅ Estados de erro claros

## 📝 Changelog

Veja [CHANGELOG.md](CHANGELOG.md) para histórico detalhado de mudanças.

### ✨ Versão 1.0.0 - Refatoração Completa

**Alta Prioridade:**
- ✅ Consolidação de CSS (removida duplicação)
- ✅ Componentização modular (7 componentes novos)
- ✅ Sistema de tipos compartilhados
- ✅ Validação por seção com feedback

**Média Prioridade:**
- ✅ Dependências atualizadas (React 18.3, Next 14.2, TS 5.6)
- ✅ Acessibilidade WCAG 2.1 AA completa
- ✅ Tipos aplicados em todo o projeto

**Baixa Prioridade:**
- ✅ Sistema de toast profissional
- ✅ Performance otimizada (useMemo, useCallback)
- ✅ Animações e transições melhoradas

## 🧪 Testes

```bash
# Executar linting
npm run lint

# Build test
npm run build

# Verificar tipos
npx tsc --noEmit
```

## 🚀 Deploy

### Vercel (Recomendado)

1. Conecte seu repositório Git à Vercel
2. Selecione o projeto ParkOn
3. A Vercel detectará automaticamente Next.js
4. Clique em "Deploy"

### Outras Plataformas

- **Netlify**: Configure build command como `npm run build`
- **AWS Amplify**: Suporte nativo a Next.js
- **Docker**: Crie um Dockerfile com Node 18+

## 📄 Licença

© 2024 - Ambulatório de Transtornos do Movimento HU-UFS

## 👥 Contribuindo

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/NovaFeature`)
3. Commit suas mudanças (`git commit -m 'Add: Nova feature'`)
4. Push para a branch (`git push origin feature/NovaFeature`)
5. Abra um Pull Request

### Padrões de Código

- Use TypeScript estrito
- Siga as convenções do ESLint
- Componentes devem ser acessíveis
- Sempre adicione ARIA labels quando apropriado
- Use os hooks useMemo e useCallback quando necessário

## 📞 Suporte

Para dúvidas ou suporte, entre em contato com o Ambulatório de Transtornos do Movimento HU-UFS.

## 🔗 Links Úteis

- [Documentação de Componentes](COMPONENTS.md)
- [Changelog](CHANGELOG.md)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 🎯 Roadmap

- [ ] Testes unitários (Jest + React Testing Library)
- [ ] Testes E2E (Playwright)
- [ ] Modo dark
- [ ] PWA (Progressive Web App)
- [ ] Analytics integrado
- [ ] Salvamento automático
- [ ] Exportação PDF direta
- [ ] Multi-idioma (i18n)

---

Desenvolvido com ❤️ para auxiliar profissionais de saúde na tomada de decisões clínicas.
