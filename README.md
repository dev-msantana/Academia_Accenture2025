# 💻 Desafio - Teste Automatizado com Cypress e Cucumber

## Descrição do Projeto

Este projeto foi desenvolvido como parte de um desafio técnico de um processo seletivo, com o objetivo de criar testes automatizados utilizando:

- Cypress  
- Cucumber (BDD - Gherkin)  
- PageObject Pattern  

O foco do projeto é garantir a qualidade da aplicação através de testes automatizados, bem estruturados e de fácil manutenção.

---

## 🛠️ Tecnologias Utilizadas

- [Node.js](https://nodejs.org/en)  
- [Cypress](https://www.cypress.io/)  
- [Cypress Cucumber Preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor)  
- Page Object Pattern  

---

## 📂 Estrutura do Projeto

cypress/ │ ├── e2e/ → Arquivos .feature (BDD - Cucumber) │ ├── pages/ → PageObjects (ações e comandos das páginas) │ ├── steps/ → Steps Definitions (conectam os cenários aos PageObjects) │ └── support/ → Configurações extras, comandos globais, etc

---

## 🚀 Passo a Passo de Instalação e Execução

### Pré-requisitos

Antes de iniciar, é necessário ter instalado:

- Node.js (versão recomendada: LTS)  
- npm (já vem junto com o Node.js)

---

### 1. Clonar o Repositório

Clone o projeto:

```bash
git clone <URL-DO-REPOSITORIO>

### 1.Entrar na pasta do projeto:

Entre na pasta do projeto:

bash
cd nome-do-projeto

2. Instalar as Dependências

Instale todas as dependências necessárias:

bash
npm install

3. Executar os Teste

a) Abrir o Cypress com interface gráfica:

bash
npx cypress open

Selecione a feature desejada e execute.

b) Executar os testes em modo headless:

bash
npx cypress run

c) Executar testes específicos (Cucumber - Gherkin):

bash
npx cypress run --spec "cypress/e2e/**/*.feature"
Obs: Altere o caminho para executar testes específicos se desejar.

📜 Scripts Úteis

Comando	Descrição
npx cypress open	Abre o Cypress com interface gráfica
npx cypress run	Executa todos os testes em modo headless
npx cypress run --spec "cypress/e2e/**/*.feature"	Executa testes BDD (Cucumber) específicos
🧩 Padrão de Projeto Utilizado
→ Page Object Pattern
Cada página da aplicação possui um arquivo dedicado dentro da pasta /pages, responsável por centralizar as ações e comandos daquela página.


