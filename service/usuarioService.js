import Usuario from "../model/usuario";
import error from "./erroService";

async function salvar(body, res) {
    var usuario = new Usuario(body);
    await usuario.save().catch(error);
    res.status(201)
    res.json({ id: usuario._id })
}
async function update(body, id, res) {
    await Usuario.updateOne({_id: id}, body).exec().catch(error);
    res.status(201)
    return res.json({result: "Update realizado com sucesso"})
}
async function findAll(res) {
    return res.json({ result: await Usuario.find().exec().catch(error) });
}
async function findById(id, res) {
    return res.json({ result: await Usuario.findOne({ _id: id }).exec().catch(error) });
}
async function deletar(id, res) {
    await Usuario.deleteOne({_id: id}).exec().catch(error);
    res.status(200)
    return res.json({result: "Delete realizado com sucesso"})
}

var functions = {
    salvar: (body, res) => { return salvar(body, res) },
    update: (body, id, res) => { return update(body, id, res) },
    findAll: (res) => { return findAll(res) },
    findById: (id, res) => { return findById(id, res) },
    deletar: (id, res) => {return deletar(id, res) }
    
}
export default functions