import pluginCypress from 'eslint-plugin-cypress';

const recommendedConfig = pluginCypress.configs.recommended;
const cypressGlobals = recommendedConfig.languageOptions?.globals || {};

export default [
    {
        languageOptions: {
            globals: {
                ...cypressGlobals,
            },
        },
        plugins: {
            cypress: pluginCypress,
        },
        rules: {
            ...recommendedConfig.rules,
            'cypress/no-assigning-return-values': 'error',
            'cypress/no-unnecessary-waiting': 'error',
            'cypress/assertion-before-screenshot': 'warn',
            'cypress/no-force': 'warn',
            'cypress/no-async-tests': 'error',
            'cypress/no-pause': 'error',
            'quotes': ['error', 'single']
        },
    },
];

// "rules": {
  //     "cypress/no-assigning-return-values": "error", = Impede que você atribua o resultado de comandos Cypress a variáveis.

  //     "cypress/no-unnecessary-waiting": "error", = Evita o uso de cy.wait() com tempos fixos sem necessidade.

  //     "cypress/assertion-before-screenshot": "warn", = Recomenda que você faça uma verificação (should, expect) antes de capturar uma screenshot. Isso garante que a tela esteja no estado esperado antes da captura.

  //     "cypress/no-force": "warn", = Desencoraja o uso de { force: true } em comandos como .click(). Forçar ações pode mascarar problemas reais (como elementos invisíveis ou desabilitados).

  //     "cypress/no-async-tests": "error", = Proíbe escrever testes Cypress com async/await. Cypress já controla a execução assíncrona internamente; misturar async causa comportamento inesperado.
  
  //     "cypress/no-pause": "error" = Bloqueia o uso de cy.pause(). Esse comando é útil só para depuração manual, mas não deve estar em testes automatizados, pois interrompe a execução.