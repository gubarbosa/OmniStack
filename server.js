// npm init -y
// npm i express
// npm start
// npm i nodemon

// usei o express para criar e configurar meu servidor
const express = require("express")
const server = express()


const ideias = [
    {
        img = "",
        title = "",
        category = "",
        description = "",
        url = "",
    }
]



// configurar arquivos estáticos(css, scripts, imagens)
server.use(express.static("public"))

//configurar nunjucks
const nunjucks = require("nunjucks")
nunjucks.configure("views", {
    express: server,
    noCache: true, // boolean
})

// criei uma rota /
// e capturo o pedido do cliente para responder
server.get("/", function(req, res) {
    const h1 = "OI DO BACKEND"
    return res.render("index.html", { title: h1 })
})



server.get("/ideias", function(req, res) {
    return res.render("ideias.html")
})


// liguei meu servidor na porta 3000
server.listen(3000)