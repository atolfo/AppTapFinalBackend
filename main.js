

//crio uma funcao express
const express = require('express');

//chama o MongoDB
const mongoose = require('mongoose');

//para fazer o require no diretorio
const requireDir = require('require-dir');

//para fazer a permissao de acesso de outras api
const cors = require('cors');

//chamo essa funcao para ser executada
//inicia o app
const app = express();
//diz para minha aplicacao permitir que insira os dados no formato de json
app.use(express.json());
//aqui eu posso passar quais dominios quero permitir cors(aqui)
app.use(cors());


//iniciando o DB
//precisamos passar a url de conexao
//mongodb//user@password localhost
//pode ser necessarioa {useNewUrlParser: true}
mongoose.connect('mongodb://localhost:27017/recibo', {useNewUrlParser: true});

//faz a requisicao do modelo de dados para registrar ele
//require('./src/models/product');
//como pode ser que tenha diversos models para fazer isso, pode ser usada uma biblioteca
//npm install require-dir
//faz o papel de require em todos arquivos do diretorio para nao precisar fazer um por vez
requireDir('./src/models');


//Rotas
//use - curinga - vai receber todo tipo de requisicao (get, post, delete, put, etc.)
//todos os tipos
//toda vez que receber uma requisicao a partir da rota api (qualquer prefixo), 
//vamos mandar para o arquivo scr routes
//agora fica: localhost/api/employee
app.use('/AppAMF', require('./src/routes/routes'));


//ouço a porta 8080 e posso acessar no navegador http://localhost:8080/
//toda vez que alterar, tem que executar de novo node server.js
//para evitar de atualizar no terminal, pode ser feito automatico com o nodemon
//npm install -D nodemon
// -D sao dependencias que vamos usar somente no ambiente de desenvolvimento
// nao vao ser instaladas quando a aplicacao for posta online
// modifico o package.json
// npm run dev
app.listen(3001);

//para verificar se o mongodb foi instalado
//npm mongodb -v

//baixar a ferramenta Robo 3T
//https://robomongo.org/download

// instalar uma nova dependencia
// npm install mongoose
// é um ORM de bancos nao relacionais com MongoDB 
// encapsula a logica da programacao do banco de dados atraves do codigo
// (nao usa query ou a linguagem da base de dados (INSERT, DELETE, etc.))
// usa linguagem em JS com o ORM (Object Relational Mapping) 
// transforma a tabela do banco de dados em objetos JS