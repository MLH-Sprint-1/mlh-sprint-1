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

  const topicObj = {
    'Math': {'color': 'blue', 'icon': 'calculator icon'},
    'Science': {'color': 'yellow', 'icon': 'flask icon'},
    'Programming': {'color': 'green', 'icon': 'code icon'},
    'Machine Learning': {'color': 'red', 'icon': 'superscript icon'}
  }

  return(
    <div style={{'cursor': 'pointer'}} className={`${topicObj[topic]['color']} card`} onClick={showDetails}>
      <div className="content">
        <div className="header">
          {topic}
          <div className="right floated">
            <i className={topicObj[topic]['icon']} />
          </div>
        </div>
        <div className="description">{text}</div>
        {/*<div className="meta">{status}</div>*/}
      </div>
    </div>

  )
}

export default QuestionListItem
