import mongoose from "mongoose";

//=============================
//Importando o mongo e o schema
//=============================
var Schema = mongoose.Schema;

//===================
//Criando instancias
//===================
export default mongoose.model("produto", new Schema({
    nome: {
        type: String,
        required: [function(){
            return this.nome.length > 50;
        },"Nome não pode ser maior que 50 caracteres"],
        maxlength: 50
    }, 
    descricao: {
        type: String,
        required: [function() {
            return this.descricao.length > 500;
        },"Descrição não pode ser maior que 500 caracteres"]
    },
    valor: {
        type: Number,
        required: [function() {
            return this.valor > 1000000
        }, "Valor não poder maior que 1000000"]

    }
}))