import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import {TextField, Button} from '@material-ui/core'
import QuestionInput from './QuestionInput'

function Question(){
  let [professor, setProfessor] = useState('')
  let [topic, setTopic] = useState('')
  let [question, setQuestion] = useState('')
  let [length, setLength] = useState(200)
  let history = useHistory()

  function handleProfessor(e){
    setProfessor(e.target.value)
  }
  function handleTopic(e){
    setTopic(e.target.value)
  }
  function handleQuestion(e){
    setQuestion(e.target.value)
    setLength(200 - e.target.value.length)
  }
  let questionDetails = ['Topic', 'Professor']
  let stateNames = [topic, professor]
  let stateHandlers = [handleTopic, handleProfessor]

  async function handleSubmit(e){
    e.preventDefault()
    const options = {
      method: 'POST',
      body: JSON.stringify({professor, topic, request: question}),
      headers: {"Content-Type": "application/json"}
    }

    const response = await fetch('/server/send-problem', options)
    const resJson = await response.json()
    if(resJson.status === 'success'){
      alert('saved')
      history.goBack()
    }else{
      alert(resJson.status)
    }

  }

  return (
    <div>
      <form onSubmit ={handleSubmit}>
        {questionDetails.map((item, index) =>
          <QuestionInput key={item} attr ={item} input ={stateNames[index]} inputHandler ={stateHandlers[index]}/>
        )}
        <div className='form-group'>
          <TextField required fullWidth multiline name='question' type='question' label='Question' variant = 'outlined'
            value = {question} onChange={handleQuestion} rows={4}/>
        </div>
        <p>{length} characters allowed</p>

        <Button type='submit' className ='question-btn' variant='contained' >
            SUBMIT
        </Button>

      </form>
    </div>
  )
}


export default Question
