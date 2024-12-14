const express = require('express')
const app = express()

const cf_server = require('./configs/server.json');
const productRoutes = require('./routes/productRoutes')

app.use((req, res, next) => {
    console.log('Time:', Date.now())
    next()
})

app.get('/', (req, res) => {
  res.send('hello world')
})


app.get('/product', productRoutes);

app.listen(cf_server.port,()=>{
    console.log(`Server Running Port${cf_server.port}`)
})