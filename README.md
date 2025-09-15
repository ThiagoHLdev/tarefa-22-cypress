# Tarefa 22 - Cypress

Este projeto contém 2 suítes de teste para o ecommerce:
- **Criação de Conta** (Page Objects)
- **Checkout** (AppActions)

## Requisitos
- Node.js instalado

## Instalação
```bash
npm install
```

## Executando os testes
Para abrir o Cypress:
```bash
npm run cypress:open
```
Para rodar no terminal:
```bash
npm test
```

## Estrutura do projeto
```
cypress/
  e2e/
    createAccount.cy.js   -> Teste de criação de conta usando Page Objects
    checkout.cy.js        -> Teste de checkout usando AppActions
  pages/
    CreateAccountPage.js  -> Page Object para criação de conta
  support/
    appActions.js         -> Funções de ação para checkout
    commands.js           -> Comandos customizados (opcional)
    e2e.js                -> Arquivo principal de suporte
```

## .gitignore
O projeto já inclui `.gitignore` para ignorar `node_modules`.