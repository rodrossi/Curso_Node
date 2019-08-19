import express from "express";
import produtoService from "../service/produtoService"
import {check, validationResult} from "express-validator/check"
import helper from './controllerHelper'
var router = express.Router()

router.post("/",[

    check('nome').exists().isLength({min: 5, max: 50}),
    check('descricao').exists().withMessage("Descrição é obrigatório"),
    check('valor').exists()
    

], function (req, res, next){
    if (helper.handleValidator(req, res, next)){
        return;
    }
    produtoService.salva(req.body, res).catch(err => next(err));
    
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