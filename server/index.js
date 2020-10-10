require('dotenv').config()
const express = require('express')
const firebase = require('firebase')

const app = express()

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "collable-10e3e.firebaseapp.com",
    databaseURL: "https://collable-10e3e.firebaseio.com",
    projectId: "collable-10e3e",
    storageBucket: "collable-10e3e.appspot.com",
    messagingSenderId: "691360114124",
    appId: "1:691360114124:web:a5c0b8b88c25dd6b016969",
    measurementId: "G-V87JBF094J"
  };

firebase.initializeApp(firebaseConfig);

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.post('/server/send-problem', (req,res) => {
  let {topic, request} = req.body


})

app.post('/server/login', (req,res) => {
  let {email, password} = req.body
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      console.log('success')
    }, (error) => {
      console.log(error.message)
    })

})

app.post('/server/signup', (req,res) => {
  let {firstName, lastName, email, password, accountType} = req.body
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
      console.log('success')
    }, (error) => {
      console.log(error.message)
    })

})

app.delete('/server/logout', (req,res) => {
  firebase.auth().signOut().then(function() {
    console.log('success')
  }).catch(function(error) {
    console.log(error.message)
  })

})


app.listen(5000, () => {
  console.log('server started on port 5000')
})
