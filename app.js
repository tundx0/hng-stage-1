const express = require('express')

const app = express()

const PORT = process.env.PORT || 3030

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`)
})

app.get('/', (req, res) => {
  res.json({
    slackUsername: 'tundx0',
    backend: true,
    age: 23,
    bio: 'I am a Software Engineer interested in building amazing software'
  })

})