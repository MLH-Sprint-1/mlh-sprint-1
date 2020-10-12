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
    const { request, request_date, topic } = question;
    return (
      <div key={index} className="card">
        <div className="content">
          <div className="header">{topic}</div>
          <div className="description">{request}</div>
          <div className="extra content">{request_date}</div>
        </div>
      </div>
    )
  });

  return (
    <div className="ui cards">
      {questionCards}
    </div>
  )

  //return (
  //  <div className='row row-cols-4'>
  //    {questions.map((item) => <QuestionListItem title={item.topic}  text={item.request}/> )}
  //  </div>
  //)
}

export default QuestionList
