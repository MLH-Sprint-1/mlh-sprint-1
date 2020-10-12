import React from 'react'
import QuestionListItem from './QuestionListItem'


function QuestionList(){
  let details = [[1,'a'], [2,'b'], [3,'c'], [4,'d'], [1,'a'], [2,'b'], [3,'c'], [4,'d']]

  return (
    <div className='row row-cols-4'>
      {details.map((item) => <QuestionListItem title={item[0]}  text={item[1]}/> )}
    </div>
  )
}

export default QuestionList
