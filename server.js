// npm init -y
// npm i express
// npm start
// npm i nodemon

// usei o express para criar e configurar meu servidor
const express = require("express")
const server = express()


const ideias = [
    {
        img = "https://image.flaticon.com/icons/svg/2729/2729007.svg",
        title = "Cursos de Programação",
        category = "Estudo",
        description = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus quis est totam itaque earum",
        url = "https://rocketseat.com.br",
    },
    {
        img = "https://image.flaticon.com/icons/svg/2729/2729005.svg",
        title = "Exercícios",
        category = "Saúde",
        description = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus quis est totam itaque earum",
        url = "https://rocketseat.com.br",
    },
    {
        img = "https://image.flaticon.com/icons/svg/2729/2729027.svg",
        title = "Meditação",
        category = "Mentalidade",
        description = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus quis est totam itaque earum",
        url = "https://rocketseat.com.br",
    },
    {
        img = "https://image.flaticon.com/icons/svg/2729/2729032.svg",
        title = "Karaoke",
        category = "Diversão em Família",
        description = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus quis est totam itaque earum",
        url = "https://rocketseat.com.br",
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