import React from 'react'

function ChoiceItem(props) {

  return (
    <div className="jumbotron jumbotron-fluid choices-jumbo">
      <div className="container">
        <h1 className="display-4">{props.text}</h1>
      </div>
    </div>
  )
}

export default ChoiceItem
