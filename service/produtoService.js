import Produto from "../model/produto";

async function salva(body, res) {
    var produto = new Produto(body)
    await produto.save()
    res.status(201)
    res.json({ id: produto._id})
}
async function update(body, id, res) {
    await Produto.updateOne({ _id: id}, body).exec()
    res.status(201)
    return res.json({result: "Update realizado com sucesso"})
}
async function findAll(res) {
    return res.json({ result: await Produto.find().populate("createBy").exec()})
}
async function findById(id, res) {
    return res.json({result: await Produto.findOne({_id: id}).exec()})
}
async function deletar(id, res) {
    await Produto.deleteOne({_id: id}).exec()
    res.status(200)
    return res.json({result: "Delete realizado com sucesso"})
}
async function findByUser(id, res) {
    return res.json({result: await Produto.findByUser(id)})
}

var functions = {
    salva: (body, res) => {return salva(body, res)},
    update: (body, id, res) => {return update(body, id, res)},
    findAll: (res) => {return findAll(res)},
    findById: (id, res) => {return findById(id, res)},
    deletar: (id, res) => {return deletar(id,res)},
    findByUser: (id, res) => {return findByUser(id, res)},
}
export default functions