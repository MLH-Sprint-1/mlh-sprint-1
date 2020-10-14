import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
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
  }, [])

  if(questions.length === 0){
    return (
      <div className="ui segment">
        <div className="ui active inverted dimmer">
          <div className="ui text loader">Loading</div>
        </div>
      </div>
    )
  }

  const questionCards = questions.map((question, index) => {
    return (
        <QuestionListItem key={index} question={question} />
      )
  });

  return (
    <div>
      <div>
        <Link to="/question">
          <button className="ui button">Ask a Question</button>
        </Link>
      </div>
      <div className="ui cards">
        {questionCards}
      </div>
    </div>
  )

  //return (
  //  <div className='row row-cols-4'>
  //    {questions.map((item) => <QuestionListItem title={item.topic}  text={item.request}/> )}
  //  </div>
  //)
}

export default QuestionList
