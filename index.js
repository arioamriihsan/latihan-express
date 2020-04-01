const express = require('express')
const app = express()
const port = 2000
const bodyParser = require('body-parser')
app.use(bodyParser())

app.get('/', (req,res) => {
    res.status(200).send('<h1>Welcome to my API</h1>')
})
app.post('/post', (req,res) => {
    console.log(req.body)
    //Axios.post(APIURL, data){}
    //req.params => data dari url endpoint /patch/:id
    //req.query => search => url
    //req.body => buat ambil data dari front (parameter kedua Axios.post)
    if (req.body.username === 'Ario') {
        res.status(200).send('<h1>boleh lanjut</h1>')
    } else {
        res.status(500).send('<h1>ga boleh lanjut</h1>')
    }
})
//params bisa lebih dari 1 karena berupa object
app.patch('/patch/:id/:test', (req,res) => {
    console.log(req.params)
    res.status(200).send('<h1>PATCH</h1>')
})
app.put('/put', (req,res) => {
    // di Postman tulis => http://localhost:2000/put?username=Ario&password=123
    console.log(req.query)
    res.status(200).send('<h1>PUT</h1>')
})
app.delete('/delete', (req,res) => {
    res.status(200).send('<h1>DELETE</h1>')
})

//Router => simpen semua alamat => URL & Method
//Controller => function yang diexecute

const { userRouter } = require('./router')
app.use('/users', userRouter)

app.listen(port, () => console.log(`API active at port ${port}`))