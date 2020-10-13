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

  const textLength = 100;

  const statusColorObj = {
    'open': 'orange',
    'completed': 'green'
  };

  const questionCards = questions.map((question, index) => {

    const { topic, request, request_date, status } = question;
    const requestNew = request.length > textLength ? request.substr(0,textLength) + '...' : request
    
    return(
      <div className="card">
        <div className="content">
          <div className="header">{topic}</div>
          <div className="meta">
            {/*<span className="right floated category">{status}</span>*/}
            {/*<span className="time">{request_date}</span>*/}
          </div>
          <div className="description">{requestNew}</div>
          {/*<div className="meta">{status}</div>*/}
        </div>
        <div className="extra content">
          <div className="right floated">
            See More (LINK)
          </div>
          <div>Submitted by USER</div>
        </div>
      </div>

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
