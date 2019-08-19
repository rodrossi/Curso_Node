import express from "express";
import produtoService from "../service/produtoService"

var router = express.Router()

router.post("/", function (req, res){
    produtoService.salva(req.body, res)
})

router.get("/", function(req, res){
    produtoService.findAll(res)
})

router.get("/:id", function(req, res){
    produtoService.findById(req.params.id, res)
})

router.put("/:id", function(req, res){
    produtoService.update(req.body, req.params.id, res)
})

router.delete("/:id", function(req, res) {
    produtoService.deletar(req.params.id, res)

});
export default router;