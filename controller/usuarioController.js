import express from 'express';
import usuarioService from "../service/usuarioService"
import {check, validationResult} from "express-validator/check"
import helper from './controllerHelper'

var router = express.Router();

router.post('/',[

    check('nome').exists().isLength({min: 5, max: 50}),
    check('login').exists(),
    check('senha').exists(),
    check('perfil').exists().withMessage('Perfil é Obrigatório')
], function (req, res, next){
    if (helper.handleValidator(req, res, next)){
        return;
    }
    usuarioService.salvar(req.body, res).catch(err => next(err));
} )


router.get('/', function (req, res, next) {
    usuarioService.findAll(res).catch(err => next(err))
});

router.get('/:id', function (req, res, next) {
    usuarioService.findById(req.params.id, res).catch(err => next(err))
});

router.put("/:id", function (req,res, next) {
     usuarioService.update(req.body, req.params.id, res).catch(err => next(err))
});
router.delete("/:id", function (req,res, next) {
    usuarioService.deletar(req.params.id, res).catch(err => next(err))
});
export default router;