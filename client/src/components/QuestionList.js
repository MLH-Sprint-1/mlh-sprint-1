import React, {useEffect, useState} from 'react'
import QuestionListItem from './QuestionListItem'


function QuestionList(){
  let [questions, setQuestions] = useState([])
  async function fetchData(){
    const response = await fetch('/server/get-questions')
    const resJson = await response.json()
    setQuestions(resJson)
  }
  useEffect(() => {
    fetchData()
  })

  if(questions.length === 0){
    return <h1>No data to show yet</h1>
  }

  return (
    <div className='row row-cols-4'>
      {questions.map((item) => <QuestionListItem title={item.topic}  text={item.request}/> )}
    </div>
  )
}

export default QuestionList
