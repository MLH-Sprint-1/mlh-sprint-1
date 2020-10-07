import React from 'react'
import ChoiceItem from './ChoiceItem'

function Choice(){
  let choices = ['Want to ask questions', 'Interested in solving questions']

  return (
    <div>
      {choices.map((item) => <ChoiceItem text ={item}/>)}
    </div>    
  )
}

export default Choice
