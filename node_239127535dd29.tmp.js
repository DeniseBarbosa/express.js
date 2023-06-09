
// Nesta primeira linha, estamos importando o módulo express do Node.js. O express é um framework web que nos permite criar 
// aplicativos e APIs de forma mais fácil e eficiente. Ao usá-lo, podemos
//  lidar com solicitações HTTP, gerenciar rotas e manipular dados do formulário, entre outras coisas.
const express = require("express"); 
// Aqui, estamos inicializando uma instância do express em nosso aplicativo. A instância app será usada para definir
//  as rotas e as configurações do nosso aplicativo.
// Em resumo, estas duas linhas criam uma instância do express que vamos utilizar em nosso código. A partir daqui, podemos adicionar
//  rotas ao aplicativo, configurar o servidor, adicionar middlewares e muito mais.
const app = express(); 


// Neste código, estamos inicializando o servidor na porta 4000 e definindo uma função callback para ser chamada quando o
//  servidor estiver pronto. A função callback verifica se ocorreu algum erro durante a inicialização do servidor e exibe uma 
//  mensagem apropriada no console.Em resumo, este código inicia o servidor na porta especificada e exibe uma mensagem de sucesso ou erro no console, dependendo
//  do resultado da inicialização.
app.listen(4000, function name(erro) {
    if (erro) { 
        console.log("Ocorreu um erro");
    }else{
        console.log("Servidor iniciado com sucesso!!");
    }
})