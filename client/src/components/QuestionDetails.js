import React, {useState, useEffect} from 'react'
import {useLocation} from 'react-router-dom'

function QuestionDetails(){
  let location = useLocation()
  let question = location.state.question
  let [details, setDetails] = useState(['','',''])

  async function getDetails(){
    const options = {
      method: 'POST',
      body: JSON.stringify({id: question.request_by_id}),
      headers: {"Content-Type": "application/json"}
    }
    const response = await fetch('/server/get-names', options)
    const resJson = await response.json()
    setDetails([resJson.first, resJson.last, resJson.email])

  }

  useEffect(() => {
    getDetails()
  },[])


  return(
  <div className="jumbotron">
    <h4 className="display-4">{question.topic}</h4>
    <p>Asked by {`${details[0]} ${details[1]}`}</p>
    <p>{question.request_date}</p>
    <p className="lead">{question.request}</p>
    <a className='btn question-btn' href={`mailto:${details[2]}`} role="button">Contact {details[0]}</a>
  </div>
  )
}


export default QuestionDetails
