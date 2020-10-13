import React from 'react'

function QuestionListItem({ question }){

  const { topic, request, request_date, status } = question;
  let text = request.length > 100? request.substr(0,100) + '...' : request

  return(
    <div className="content">
      <div className="header">{topic}</div>
      <div className="meta">{request_date}</div>
      <div className="description">{text}</div>
      <div className="meta">{status}</div>
    </div>

  )
}

export default QuestionListItem
