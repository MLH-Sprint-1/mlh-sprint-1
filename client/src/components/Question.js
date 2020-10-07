import React, {useState} from 'react'
import QuestionInput from './QuestionInput'

function Question(){
  let questionDetails = ['Department', 'Year', 'Course Title', 'Topic', 'Question']
  let [department, setDep] = useState('')
  let [year, setYear] = useState('')
  let [course, setCourse] = useState('')
  let [topic, setTopic] = useState('')
  let [question, setQuestion] = useState('')

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
  }

  return (
    <div>
      <form>

      </form>
    </div>
  )
}


export default Question
