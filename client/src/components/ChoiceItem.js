import React from 'react'

function ChoiceItem(props) {

  return (
    <div class="jumbotron jumbotron-fluid choices-jumbo">
      <div class="container">
        <h1 class="display-4">{props.text}</h1>
      </div>
    </div>
  )
}

export default ChoiceItem
