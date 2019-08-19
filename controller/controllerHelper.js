import {validationResult} from 'express-validator/check'

function handleValidator(req, res){
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        res.status(400).json({errors: errors.array()});
        return true;
    }
    return false;
}   
var funcoes = {
    handleValidator: (req, res) => {return handleValidator(req, res)}
}
export default funcoes;