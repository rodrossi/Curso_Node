//=====================
// imports necessarios
//=====================
import express from 'express';
import bodyParser from 'body-parser';
import rotas from "./rotas";
import config from "./config";
import mongoose from "mongoose";
import error from './errorHandler'


//=======================
//  Configuração
//=======================

var app = express();

//=======================
//  Conexão Mongo
//=======================
mongoose.connect(config.database);

//============================
//Parser de requisição express
//============================

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//=====================
//Configurações de rota
//=====================

rotas(app);

//Modulo de erro
app.use(error);

//=================
// Start do sevidor
//=================
app.listen(8082);
console.log("Servidor OK na porta 8082")

