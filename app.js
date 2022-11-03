const express = require('express')
require("dotenv").config();
const app = express()

app.use(express.json())

const PORT = process.env.PORT || 3030

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}...`)
})

app.get('/', (req, res) => {
  res.json({
  
    slackUsername: 'tundx0',
    backend: true,
    age: 23,
    bio: 'I am a Software Engineer interested in building amazing software'
  })
})

app.post('/operand', (req, res) => {
  const body = req.body
  console.log(body)
  if(body.operation_type = 'addition'){
    result = Number(body.x) + Number(body.y)
  }
  console.log(result)
  res.send('Done')
})