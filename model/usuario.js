import mongoose from "mongoose";

//importando o mongo e o schema
var Schema = mongoose.Schema;

//Criando a instancia

export default mongoose.model("usuario", new Schema({
    nome: {
        type: String,
        required: [function() {
            return this.nome.length > 50;
        },"Nome não pode ser maior que 50 caracteres"]
    },
    login:  {
        type: String,
        required: [function() {
            return this.nome.length > 50;
        },"Login não pode ser maior que 50 caracteres"]

    },
    senha:  {
        type: String,
        required: [true,"Senha é obrigatória"]
    },
    perfil: {
        type: String,
        enum: ["Admin", "Regular"],
        required: [true, "Perfil é obrigatória"]
    }
}));