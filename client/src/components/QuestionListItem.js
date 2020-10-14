import React from 'react'
import {useHistory} from 'react-router-dom'

function QuestionListItem({ question }){
  let history = useHistory()
  const { topic, request } = question;
  let text = request.length > 100? request.substr(0,100) + '...' : request

  function showDetails(){
    history.push({
      pathname: `/question-details/${topic}`,
      state: {question}
    })
  }

  return(
    <div style={{'cursor': 'pointer'}} className="card" onClick={showDetails}>
      <div className="content">
        <div className="header">{topic}</div>
        <div className="description">{text}</div>
        {/*<div className="meta">{status}</div>*/}
      </div>
    </div>

  )
}

export default QuestionListItem
