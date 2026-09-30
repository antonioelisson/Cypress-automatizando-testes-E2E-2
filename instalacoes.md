npm init
npm install cypress@latest --save-dev
npm install eslint@latest --save-dev
npm install eslint-plugin-cypress@latest --save-dev
npm init @eslint/config
npm i cypress-plugin-api@latest = para testar API de forma mais visual

# Executar
npx cypress --version = vai pesquisar na pasta node-modules
npx cypress open 
npm run lint = para executar a verificação com o plugin do lint
npm run lint:fix = executa correção automática com eslint
npx cypress run --browser firefox = executa em modo terminal com o navegar firefox