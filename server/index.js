const express = require('express')

const app = express()

app.use(express.json())


app.post('/server/send-problem', (req,res) => {
  let {topic, request} = req.body


})

app.post('/server/login', (req,res) => {
  let {email, password} = req.body

})

app.post('/server/signup', (req,res) => {
  let {firstName, lastName, email, password, accountType} = req.body

})

app.delete('/server/logout', (req,res) => {

})



app.listen(5000, () => {
  console.log('server started on port 5000')
})
