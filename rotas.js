import produto from "./controller/produtoController"

export default function rotas(app){
    app.use("/api/produto", produto)
}