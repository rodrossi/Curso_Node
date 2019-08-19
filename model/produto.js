import mongoose from "mongoose";
import Usuario from "./usuario";

//=============================
//Importando o mongo e o schema
//=============================
var Schema = mongoose.Schema;

//===================
//Criando instancias
//===================
var modelo = new Schema({
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

    },
    createBy:{type: mongoose.Schema.Types.ObjectId, ref: "usuario"}
})

modelo.statics.findByUser = async function(id){
    var user = await Usuario.findOne({_id: id}).exec()
    return await this.find().where({createBy: user._id}).populate("createBy").exec();
}
export default mongoose.model("produto", modelo) 