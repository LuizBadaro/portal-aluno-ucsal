# portal-aluno-ucsal
MVP do Portal do Aluno UCSal desenvolvido com Ionic 1 e AngularJS

# Portal do Aluno UCSal

Projeto acadêmico desenvolvido com Ionic 1 e AngularJS, simulando um aplicativo de acesso aos serviços de uma instituição de ensino superior.

## Objetivo

Desenvolver um aplicativo que permita ao aluno consultar informações acadêmicas, notícias, eventos e sua situação financeira por meio de uma interface simples e intuitiva.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- AngularJS
- Ionic Framework 1
- Git e GitHub

## Funcionalidades

### RF01 — Autenticação

- Login por matrícula e senha.
- Validação de credenciais fictícias.
- Controle de acesso às telas internas.
- Encerramento da sessão.

### RF02 — Notícias e Eventos

- Listagem de notícias acadêmicas.
- Filtragem por categoria.
- Visualização dos detalhes.
- Imagens ilustrativas.

### RF03 — Perfil do Aluno

- Consulta dos dados pessoais e acadêmicos.
- Edição de nome, e-mail e telefone.
- Exibição dos dados acadêmicos somente para leitura.

### RF04 — Financeiro

- Consulta de mensalidades por semestre.
- Visualização de vencimentos e valores.
- Identificação de mensalidades pagas e pendentes.
- Resumo dos valores financeiros.
- Cópia de códigos de barras fictícios.

## Credenciais de demonstração

Matrícula: `20261001`

Senha: `123456`

## Como executar

1. Clone o repositório.
2. Abra a pasta do projeto no terminal.
3. Execute:

```bash
npx --yes http-server www -p 8080 -a 0.0.0.0 -c-1
```

4. Acesse a porta 8080 no navegador.

## Estrutura do projeto

```text
www/
├── css/
│   └── style.css
├── img/
├── js/
│   ├── app.js
│   ├── controllers/
│   └── services/
├── lib/
│   └── ionic/
├── templates/
└── index.html
```

## Observações

Este é um protótipo acadêmico.

Os dados apresentados são fictícios e armazenados em memória, sem integração com banco de dados ou sistemas reais da UCSal.

As alterações realizadas durante o uso não são persistidas após o recarregamento da aplicação.

## Repositório

https://github.com/LuizBadaro/portal-aluno-ucsal
