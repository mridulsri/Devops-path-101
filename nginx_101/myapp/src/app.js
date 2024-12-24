const express = require('express')
const path = require('node:path')
const app = express()
const port = 3000
const appName = process.env.APP_NAME || 'Node App'
app.use('/', (req,res)=>{
  console.log(`Request served by node app [${appName}]`)
  res.sendFile(path.join(__dirname,'views','index.html'))
  
})

app.get('/api', (req, res) => {
  res.send({message:`Request served by node app [${appName}]`})
})

app.listen(port, () => {
  console.log(`App [${appName}] listening on port ${port}`)
})