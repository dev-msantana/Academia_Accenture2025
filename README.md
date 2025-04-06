Desafio - Teste Automatizado

Fala pessoal! 👋
Aqui apresento o desafio de um processo seletivo, cujo objetivo foi desenvolver um teste automatizado utilizando Cypress com Cucumber, aplicando o padrão de projeto PageObjects.

Estrutura do Projeto
O projeto foi organizado da seguinte forma:

├── e2e           → Pasta responsável pelos arquivos BDD (cenários Gherkin)
├── pages         → Arquivos com os comandos e ações de cada página (PageObjects)
├── steps         → Implementação das steps definitions, conectando os cenários aos comandos das pages

Tecnologias Utilizadas
Node.js

Cypress

Cucumber (Cypress Cucumber Preprocessor)

PageObject Pattern

🚀 Passo a Passo de Instalação e Execução

Pré-requisitos
Antes de iniciar, você precisa ter instalado na sua máquina:

Node.js (versão recomendada: LTS)

npm (já vem junto com o Node.js)

1. Clonar o Repositório
bash
git clone <URL-DO-REPOSITORIO>

Entre na pasta do projeto:
bash
cd nome-do-projeto

2. Instalar as Dependências
bash
npm install
3. Executar os Testes

Abrir o Cypress com interface gráfica:
bash
npx cypress open
Depois selecione a feature desejada e execute.

Executar os testes em modo headless (linha de comando):
bash
npx cypress run

4. Executar os testes com Cucumber (Gherkin)
Para rodar os testes escritos no padrão BDD (Cucumber):
bash
npx cypress run --spec "cypress/e2e/**/*.feature"
Obs: Caminho pode variar de acordo com a estrutura do seu projeto.

Estrutura das Pastas

cypress/
├── e2e/             → Arquivos .feature (BDD - Cucumber)
├── pages/           → PageObjects (ações e comandos das páginas)
├── steps/           → Steps Definitions (liga os cenários às ações das pages)
├── support/         → Configurações extras, comandos globais, etc

Scripts Úteis (package.json)
Comando	Descrição
npx cypress open	Abre o Cypress com interface gráfica
npx cypress run	Executa os testes em modo headless
npx cypress run --spec ...	Executa testes específicos (por feature)
