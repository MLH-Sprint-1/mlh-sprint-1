import React, {useState} from 'react'
import {TextField, Button} from '@material-ui/core'
import QuestionInput from './QuestionInput'

function Question(){
  let [department, setDep] = useState('')
  let [year, setYear] = useState('')
  let [course, setCourse] = useState('')
  let [topic, setTopic] = useState('')
  let [question, setQuestion] = useState('')
  let [length, setLength] = useState(200)

  function handleDep(e){
    setDep(e.target.value)
  }
  function handleYear(e){
    setYear(e.target.value)
  }
  function handleCourse(e){
    setCourse(e.target.value)
  }
  function handleTopic(e){
    setTopic(e.target.value)
  }
  function handleQuestion(e){
    setQuestion(e.target.value)
    setLength(200 - e.target.value.length)
  }
  let questionDetails = ['Department', 'Year', 'Course Title', 'Topic']
  let stateNames = [department, year, course, topic]
  let stateHandlers = [handleDep, handleYear, handleCourse, handleTopic]

  function handleSubmit(e){
    e.preventDefault()


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
