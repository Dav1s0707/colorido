const mongoose = require('mongoose')

const modelo = mongoose.Schema({
    date: Date,
    tipo: String,
    entrega: String,
    diciplina: String,
    intrucoes: String,
    usuario: String
})

const atividades = mongoose.model('atividades', modelo)
module.exports = atividades