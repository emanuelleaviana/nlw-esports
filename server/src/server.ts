import express from 'express'

const app = express()

//localhost.3333/ads

app.get('/ads', (request, response) => {
    return response.send([
        {id: 1, name: 'Anúncio 1'},
        {id: 2, name: 'Anúncio 22'},
        {id: 3, name: 'Anúncio 35'},
        {id: 4, name: 'Anúncio 777'},


    ])
})

app.listen(3333)