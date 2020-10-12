import React from 'react'
import ChoiceItem from './ChoiceItem'

function Choice(){
  let choices = ['Want to ask questions', 'Interested in solving questions']
  let state = ['ask', 'answer']

  return (
    <div>
      {choices.map((item, index) => <ChoiceItem key={item} text ={item} state ={state[index]}/>)}
    </div>
  )
}

export default Choice
