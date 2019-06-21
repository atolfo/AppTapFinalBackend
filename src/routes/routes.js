const express = require('express');
const routes = express.Router();

const reciboController = require("../controller/recibosController");

//toda vez q o usuario acessar a rota (rota raiz), tem a funcao que recebe o req e res
//req simboliza a requisicao que esta sendo feita ao servidor 
//req contém os dados dessa requisicao, parametros, corpo, cabecalho, autenticacao, usuario, ip, etc.)
//res - resposta que vai ser dada a requisicao (resposta do servidor)
//primeira rota
//quando buscar, pode ser get
//select
routes.get('/eventos', reciboController.index);
//details
routes.get('/eventos/:id', reciboController.details);
//quando criar algo, usa post
//insert
routes.post('/eventos', reciboController.insert);
//update
routes.put('/eventos/:id', reciboController.update);
//delete
routes.delete('/eventos/:id', reciboController.delete);
//select
routes.get('/recibos', reciboController.index);
//details
routes.get('/recibos/:id', reciboController.details);
//quando criar algo, usa post
//insert
routes.post('/recibos', reciboController.insert);
//update
routes.put('/recibos/:id', reciboController.update);
//delete
routes.delete('/recibos/:id', reciboController.delete);

module.exports = routes;