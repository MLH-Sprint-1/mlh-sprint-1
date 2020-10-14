import React from 'react';
import ChoiceItem from './ChoiceItem';

const Choice = () => {
  
  const choicesArr = [
    {'text': 'Have a Question?', 'state': 'ask'},
    {'text': 'Have an Answer?', 'state': 'answer'}
  ];

  const choiceItems = choicesArr.map(choiceObj => {
    const { text, state } = choiceObj;
    return (
      <div key={text} style={{'cursor': 'pointer'}}>
        <ChoiceItem text={text} state={state} />
    </div>
    )
  });

  return (
    <div>
      {choiceItems}
    </div>
  )

}

//function Choice(){
//  let choices = ['Want to ask questions', 'Interested in solving questions']
//  let state = ['ask', 'answer']

//  return (
//    <div>
//      {choices.map((item, index) => <ChoiceItem key={item} text ={item} state ={state[index]}/>)}
//    </div>
//  )
//}

export default Choice;
