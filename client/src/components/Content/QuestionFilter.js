import React from 'react';

const QuestionFilter = ({ filterList, checkboxList, toggleCheckbox }) => {
     // create dropdown options
     const checkboxOptions = filterList.map((option, index) => {
        return (
            <div key={option} className="field">
                <div className="ui checkbox">
                    <input 
                        type="checkbox" 
                        checked={checkboxList[index]}
                        //onChange={() => toggleCheckbox(index)}
                        onChange={() => console.log(index)}
                    />
                    <label>{option}</label>
                </div>
            </div>
        );
    });

    return (
        <div className="ui form">
            <div className="inline fields">
                { checkboxOptions }
            </div>
        </div>
    );
};


export default QuestionFilter;