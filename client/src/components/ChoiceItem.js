import React from 'react'
import {useHistory} from 'react-router-dom'

function ChoiceItem(props) {
  let history = useHistory()

  function handleClick(){
    if(props.state === 'ask'){
      history.push('/question')
    }else{
      history.push('/question-list')
    }

  }

  return (
    <div className="jumbotron jumbotron-fluid choices-jumbo" onClick={handleClick}>
      <div className="container">
        <h1 className="display-4">{props.text}</h1>
      </div>
    </div>
  )
}

export default ChoiceItem
