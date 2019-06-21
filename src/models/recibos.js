//importa o mongoose
const mongoose = require('mongoose');

//importa o mongoose paginate (paginacao)
const mongoosePaginate = require('mongoose-paginate');

//vamos criar o schema (model) do banco de dados
const ReciboSchema = new mongoose.Schema({
    //vamos passar qual campo quero salvar no banco de dados
    //cada produto vai ter um titulo
    name: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    endereco: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    //vai salvar a data e preencher automaticamente
    createAt: {
        type: Date,
        default: Date.now
    },
});

//adiciona o plugin para permitir paginacao
ReciboSchema.plugin(mongoosePaginate);

//registro o model na nossa aplicacao
mongoose.model('Recibo', ReciboSchema);