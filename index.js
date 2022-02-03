const express = require('express')
const app = express()
const appRouter = require('./services/approuter')
const establishConn = require('./services/conn')

establishConn()
app.use(express.json())
console.log("here")
app.use('/api', appRouter);

app.listen(8000,()=>{console.log('Server running at port : 8000')})