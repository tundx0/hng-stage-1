const express = require('express')
require("dotenv").config();
const app = express()

app.use(express.json())

const PORT = process.env.PORT || 3030

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}...`)
})
const myData = {
    slackUsername: 'tundx0',
    backend: true,
    age: 23,
    bio: 'I am a Software Engineer interested in building amazing software'
  }
// const add = (x, y) => {
//   Number(x) + Number(y)
// }
app.get('/', (req, res) => {
  res.json(myData)
})

app.post('/operand', (req, res) => {
  try{
    const body = req.body
    // console.log(typeof body.operation_type)
    if(body.operation_type === 'addition'){
      result = Number(body.x) + Number(body.y)
      res.json({
      slackUsername: myData.slackUsername,
      operation_type: body.operation_type,
      result: result
      })
    }else if(body.operation_type === 'subtraction'){
            result = Number(body.x) - Number(body.y)
            res.json({
            slackUsername: myData.slackUsername,
            operation_type: body.operation_type,
            result: result
            })
    }
  } catch {
    res.json({
      status: res.statusCode,
      message: "Incorrect Input",

    })
  }





  // console.log(result)

  // res.send(  JSON.stringify({
  //   slackUsername: 'Tundx0',
  //   operation_type: 'addition',
  //   result: result
  // }))
})