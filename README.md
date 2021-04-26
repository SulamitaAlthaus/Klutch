# Klutch
## portal para simular e gerar uma solicitação de empréstimo.

### Status do projeto: em andamento

### Features
    - Simular Empréstimo
    - Solicitar Empréstimo

    
### Demonstração da aplicação 
    https://klutch-app.herokuapp.com/

    Caso ocorra algum erro ao tentar acessar a primeira vez, atualize a página e teste novamente.

#### Passos para solicitação do Empréstimo
    - Na primeira tela, preencha o valor desejado, deve ser entre R$300 e R$10.000, e clique em Calcular.
    - Selecione a quantidade de parcelas que deseja, basta clicar na linha, a tabela correspondente é selecionada automaticamente, confira os valores no rodapé, e clique em Avançar.
    - Preencha o CPF, os valores disponíveis são "999.999.999-99" e "222.222.222-99", qualquer valor diferente desse, emitirá uma mensagem informando que o CPF não foi encontrado. 
    Após aparecer as informações do cliente, clique em Solicitar.
    - Por padrão ele preenche o nome no cartão com o nome do cliente, porém se não for igual está no seu cartão, você pode alterar. Depois preencha o número do cartão, para testes você pode utilizar 5555555551234(Mastercard) ou 4444444441234(Visa), preencha a data de validade no formato mes/ano e os três números do CVC. Após preencher os dados do cartão, clique em Continuar. O upload das imagens ainda não está disponível.
    - Escolha a modalidade. A opção Crédito Consignado ainda não está disponível.
    - Verifique se os dados da solicitação estão corretos. Caso você deseje, pode alterar o valor desejado, lembrando que deve ser entre R$300 e R$10.000, e também alterar a quantidade de parcelas no campo "Parcelas" ou clicando na parcela desejada na tabela. Escolha o tipo de contrato, e clique em Concluir.
    - Sua solicitação será gerada, você pode clicar em "Detalhe da Solicitação" para exibir mais detalhes.

### Pré-requisitos
Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)


### Rodando o Back End

### Clone este repositório
$ git clone https://github.com/SulamitaAlthaus/Klutch.git

### Acesse a pasta do projeto no terminal/cmd
$ cd backend

### Instale as dependências
$ npm install

### Execute a aplicação em modo de desenvolvimento
$ npm start ou nodemon api.js

### O servidor inciará na porta:8081 

### Rodando o Front End

### Acesse a pasta do projeto no terminal/cmd
$ cd frontend

### Instale as dependências
$ npm install

### Execute a aplicação 
$ npm start 

### A aplicação inciará na porta:3000 - acesse <http://localhost:3000>

### Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [React](https://pt-br.reactjs.org/)
- [React Redux](https://react-redux.js.org/)
- [React Router Dom](https://reactrouter.com/web/guides/quick-start)
- [MongoDB](https://docs.mongodb.com/)

### Autor
    Sulamita Althaus 

    