const express = require('express');
const app = express()
const port = 3001

// rota de teste
app.get('/teste', (req, res) => {
    res.send('rota teste rodando')
})

app.listen(port, () => {
    console.log(`Rodando Crud na porta ${port}`)
})