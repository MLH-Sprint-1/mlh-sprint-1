import React from 'react'
import {TextField} from '@material-ui/core'


function QuestionInput(props){

  return(
    <div>
      <div className='form-group'>
        <TextField required fullWidth name={props.attr} type={props.attr} label={props.attr} variant = 'outlined'
          value = {props.input} onChange={props.inputHandler}/>
      </div>
    </div>
  )
}

export default QuestionInput
