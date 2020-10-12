require('dotenv').config()
const express = require('express')
const firebase = require('firebase')
const cors = require('cors')


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
app.use(cors())

const db = firebase.firestore()
const auth = firebase.auth()



app.get('/server/get-questions', async (req, res) => {
  const questions = await db.collection('Questions').where('status', '==', 'open').get()
  questions.forEach(doc => {
    console.log(doc.id, '=>', doc.data())
  })
})


app.post('/server/send-problem', (req,res) => {
  let {topic, request, professor} = req.body
  const user = auth.currentUser
  db.collection('Questions').add({
    request_by_id: `${user.uid}`,
    topic: `${topic}`,
    request: `${request}`,
    request_date: `${new Date().toUTCString()}`,
    status: 'open'
  }).then(() => {

    console.log('successfully saved question')
    db.collection('Topic').doc(`${topic}`).set({
      name: `${topic}`,
      taught_by_id: `${professor}`
    }).then(() => {
      console.log('successfully saved topic')
    }, (error) => {
      console.log(error.message)
    })

  }, (error) => {
    console.log(error.message)
  })

})

app.post('/server/login', (req,res) => {
  let {email, password} = req.body

  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      console.log('success')
    }, (error) => {
      console.log(error.message)
    })

})

app.post('/server/signup', (req,res) => {
  let {firstName, lastName, email, password, accountType} = req.body

  auth.createUserWithEmailAndPassword(email, password)
    .then(() => {

      console.log('successful sign up')
      db.collection("Users").add({
        first_name: `${firstName}`,
        last_name: `${lastName}`,
        email_address: `${email}`,
        account_type: `${accountType}`
      }).then(() =>{
        console.log('successfully saved data')
      }, (error) =>{
        console.log(error.message)
      })
    }, (error) => {
      console.log(error.message)
    })

})

app.delete('/server/logout', (req,res) => {

  auth.signOut().then(function() {
    console.log('success')
  }).catch(function(error) {
    console.log(error.message)
  })

})


app.listen(5000, () => {
  console.log('server started on port 5000')
})
