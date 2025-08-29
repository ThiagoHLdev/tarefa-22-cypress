# Tarefa 22 - Cypress (M23 Exercício)

Exercício do módulo 23: Automação de UI com **Cypress**, interceptando chamadas de API do ecommerce e validando o fluxo do carrinho de compras. filecite25†M23 - Exercicio.pdf

## ⚙️ Stack
- Cypress 13
- `cy.intercept()` para mock de API
- Geração de relatórios com Allure
- Dados dinâmicos com Faker

## ▶️ Como rodar
1. Instale dependências:
   ```bash
   npm install
   ```

2. Abra o Cypress interativo:
   ```bash
   npm run cypress:open
   ```

3. Rodar em headless e gerar resultados:
   ```bash
   npm run cypress:run
   ```

4. Gerar relatório Allure:
   ```bash
   npm run report:allure
   ```

## 📁 Estrutura
```
cypress/
 ├─ e2e/
 │   └─ cart.cy.js   # testes intercept carrinho
 ├─ utils/
 │   └─ data.js      # geração de dados dinâmicos
 └─ support/
     ├─ commands.js  # cookie ebacStoreVersion=v2
     └─ e2e.js
```

## ✅ Cenários implementados
- **Adicionar item** ao carrinho (intercept POST)
- **Remover item** do carrinho (intercept DELETE)
- **Atualizar item** do carrinho (intercept PUT)
- Uso de **dados dinâmicos** (nome, email, preço)
- Configuração de **cookie `ebacStoreVersion=v2`**

## 🔗 Entrega
Subir esse projeto em um novo repositório chamado **tarefa-22-cypress** e enviar o link como resposta.