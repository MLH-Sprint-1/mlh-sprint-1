import React from 'react';

const QuestionFilter = ({ filterList, toggleCheckbox }) => {
     // create dropdown options
     const checkboxOptions = filterList.map((option, index) => {
         // destruct object
         const { filter, checked } = option;
        return (
            <div key={filter} className="field">
                <div className="ui checkbox">
                    <input 
                        type="checkbox" 
                        checked={checked}
                        //onChange={() => toggleCheckbox(index)}
                        onChange={() => toggleCheckbox(index)}
                    />
                    <label>{filter}</label>
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