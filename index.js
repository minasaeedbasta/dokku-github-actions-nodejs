const express = require('express')
const app = express()
const port = process.env.PORT || 5001

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/users', (req, res) => {
  res.send({
    data : [
      {
        id:1,
        name:"mina"
      },
      {
        id:2,
        name:"mariam"
      }
    ]
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})