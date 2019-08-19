import produto from "./controller/produtoController"
import usuario from "./controller/usuarioController"

export default function rotas(app){
    app.use("/api/produto", produto)
    app.use("/api/usuario", usuario)
}