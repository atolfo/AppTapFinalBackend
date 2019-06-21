const mongoose = require('mongoose');

//carrego o modelo de dados
const Evento = mongoose.model('Evento');


module.exports = {
    //cria a funcao de tela inicial
    //nela busco todos os registros da tabela Employee (GET)
    async index (req, res) {
        //const employees = await Employee.find();

        //quero que na url aparece a pagina
        //recurso de desestruturacao
        //body - corpo da requisicao
        //params - id definido na rota e outras info
        //query - parametros get (pego o parametro page que esta no get, posso definir valor default)
        const { page } = req.query;

        //depois posso usar o paginate 
        //no objeto vazio seria o where e condicoes se fosse preciso
        //limite de 10 pagina e inicia na 1
        //const employees = await Employee.paginate({}, { page:1, limit: 10 });

        //ai atualiza dinamico a pagina
        const eventos = await Evento.paginate({}, { page, limit: 10 });

        return res.json(eventos);
    },

    //cria a funcao de tela de detalhes
    //nela busco o registro da tabela Employee cujo id foi passado
    async details (req, res) {
        //a requisicao traz os parametros informados, sendo buscado o id (GET)
        const eventos = await Evento.findById(req.params.id);

        return res.json(eventos);
    },

    //cria a funcao de tela de insert
    //nela executa a funcao de insert no banco de dados
    //os dados sao passados no corpo da requisicao via post
    async insert (req, res) {
        const eventos = await Evento.create(req.body);

        return res.json(eventos);
    },
    
    //cria a funcao de tela de update
    //nela executa a funcao de update no banco de dados em um registro especifico
    //os dados sao passados no corpo da requisicao via PUT e o id via parametro
    //o new true nos diz para atualizar o registro e guardar o registro atualizado na constante
    async update (req, res) {
        const eventos = await Evento.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(eventos);
    },

    //cria a funcao de tela de delete
    //nela executa a funcao de delete no banco de dados
    //nela busco o registro da tabela Employee cujo id foi passado
    //faço o delete com o DELETE
    //retorna somente a msg de 200 (sucesso)
    async delete (req, res) {
        await Evento.findByIdAndRemove(req.params.id);

        return res.send();
    },
};

//posso fazer paginacao
//instala a extensao (modulo)
//npm install mongoose-paginate

//posso instalar o cors para ser acessivel por outras aplicacoes fora do dominio
//npm install cors