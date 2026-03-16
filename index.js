// Primeiro precisamos criar o app usando o express
const express = require("express")
const app = express()

// Permitir aceitar JSON na requisição
app.use(express.json())

const filmes = [
    {
        id: 1,
        description: "“Oppenheimer” é um drama histórico dirigido por Christopher Nolan que acompanha a vida de J. Robert Oppenheimer, físico teórico norte-americano conhecido como o “pai da bomba atômica”. O filme mostra sua liderança no Projeto Manhattan durante a Segunda Guerra Mundial e os dilemas éticos que enfrentou ao criar uma arma tão devastadora.",
        title: "Oppenheimer",
        genre: "Drama",
        releaseYear: 2023,
        image: "https://www.claro.com.br/files/104379/860x1440/f9738193cd/capa-assistir-oppenheimer-2023-online.png/m/filters:quality(75)"
    }
]

const series = [
    {
        id: 1,
        description: "“Stranger Things” é uma série de ficção científica e terror da Netflix que mistura suspense sobrenatural, drama adolescente e nostalgia dos anos 1980. A trama acompanha o desaparecimento de um garoto em Hawkins, Indiana, e a descoberta de uma garota com poderes telecinéticos, revelando a existência de uma dimensão paralela chamada Upside Down.",
        title: "Stranger Things",
        genre: "Suspense",
        releaseYear: 2016,
        image: "https://static.wikia.nocookie.net/stranger-things/images/0/09/Stranger_Things_Season_1.png/revision/latest?cb=20190825154950&path-prefix=pt-br"
    }
]

// FILMES
// Listar todos os filmes e por gênero
app.get("/filmes", (req, res) => {
    const genre = req.query.genre

     
 
    if (!genre) {
        return res.json(filmes)
    }
 
    const genreFilmes = filmes.filter(a =>
        a.genre.toLowerCase().includes(genre.toLowerCase())
    )
    res.json(genreFilmes)
 
})

// Achar filme por id
app.get("/filmes/:id", function (req, res) {
    const id = parseInt(req.params.id)
 
    const filme = filmes.find(a => a.id == id)
 
    if (filme) {
        return res.json(filme)
    } else {
        res.status(404).json("Filme não encontrado.")
    }
})

// Criar um novo filme
app.post("/filmes", function (req, res) {
    const description = req.body.description
    const title = req.body.title
    const genre = req.body.genre
    const releaseYear = req.body.releaseYear
    const image = req.body.image
 
    if (!description || !title || !genre || !releaseYear || !image) {
        return res.status(400).json("Título, gênero, descrição, ano de lançamento e imgem são obrigatórios!")
    }
    if (title.length <= 1) {
        return res.status(400).json("O título deve conter + de 1 caractere")
    }
 
    const novoFilme = {
        id: 2,
        description: description,
        title: title,
        genre: genre,
        releaseYear: releaseYear,
        image: image
    }
 
    filmes.push(novoFilme)
 
    return res.status(201).json(novoFilme)
})




//SERIES
// Listar todos as séries e por gênero
app.get("/series", (req, res) => {
    const genre = req.query.genre

     
 
    if (!genre) {
        return res.json(series)
    }
 
    const genreSeries = series.filter(a =>
        a.genre.toLowerCase().includes(genre.toLowerCase())
    )
    res.json(genreSeries)
 
})

// Achar Série por id
app.get("/series/:id", function (req, res) {
    const id = parseInt(req.params.id)
 
    const serie = series.find(a => a.id == id)
 
    if (serie) {
        return res.json(serie)
    } else {
        res.status(404).json("Série não encontrada.")
    }
})

// Criar uma nova série
app.post("/series", function (req, res) {
    const description = req.body.description        
    const title = req.body.title
    const genre = req.body.genre
    const releaseYear = req.body.releaseYear
    const image = req.body.image
 
    if (!title || !genre || !image) {
        return res.status(400).json("Título, gênero e imgem são obrigatórios!")
    }
    if (title.length <= 1) {
        return res.status(400).json("O título deve conter + de 1 caractere")
    }
 
    const novaSerie = {
        id: 2,
        title: title,
        genre: genre,
        image: image
    }
 
    series.push(novaSerie)
 
    return res.status(201).json(novaSerie)
})

 






// Segundo passo, colocar o servidor para rodar
app.listen(3000, () => {
console.log("Servidor rodando em http://localhost:3000")
})