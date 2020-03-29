# Semana OmniStack - BeTheHero
 
  Aplicação feita com o intuido de que ONG tenho um meio de contato para solicitar ajuda para cobrir custos de atendimento de animais abandonados.


## Status do Projeto

Este projeto está em desenvolvimento. Nesse momento temos somente o Backend podendo criar, deletar e listar registro conforme o usuário logado.
Entrar em progresso de desenvolvimento o Frontend.


## Instalação e setup da aplicação

Clone este repositório. Você vai precisar do `node` e o `npm` instalado globalmente na sua máquina.

Instalação:

`cd backend`

`npm install`  

Para acessar a aplicação, realize requisições HTTP para:

`localhost:3333/session` - Realizar seção dentro da aplicação.  
`localhost:3333/profile` - Listar casos de uma ONG.  
`localhost:3333/ongs` - Listar todas as ONGs e criar ONGs.  
`localhost:3333/incidents` - Listar incidentes com paginação - `incidents?page=1`, criar incidentes - JSON no corpo da requisição, e deletar incidentes `incidents/:id`.  

## Reflexões

Essa é uma aplicação feita como estudo dirigido com aulas fornecidas pela @RocktSeat, construida usando JavaScript, React, NodeJS e ReactNative

Originalmente o projeto se trata de uma aplicação API REST para cadastro de solicitações de ajuda para cobrir custos de tratamento ded animais abandonados. Onde a ONG podera cadatrar seu pedido e gerenciá-lo dando informações de contato, isso tudo feito com uma aplicação web contruida com REACTJS e uma aplicação mobile, feita e REACTNATIVE, que servira para visualizar os cadastros.
