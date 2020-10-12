import React from 'react'

function QuestionListItem(props){
  let text = props.text.length > 100? props.text.substr(0,100) + '...' : props.text

  return(
    <div className='col mb-4'>
      <div className='card'>
        <div className='card-body'>
          <h5 className='card-title'>{props.title}</h5>
          <p className='card-text'>{text}</p>
        </div>
      </div>

    </div>

  )
}

export default QuestionListItem
