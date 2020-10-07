const express = require('express')

const app = express()

app.use(express.json())

app.post('/server/signin', (req,res) => {
  let {email, password} = req.body

})

app.post('/server/signup', (req,res) => {
  let {username, email, password, department} = req.body

})

app.delete('/server/logout', (req,res) => {

})




app.listen(5000, () => {
  console.log('server started on port 5000')
})
