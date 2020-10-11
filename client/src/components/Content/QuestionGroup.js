import React from 'react';

const QuestionGroup = ({ groupList, groupSelected, selectGroup }) => {

    // create dropdown options
    const dropdownOptions = groupList.map(option => {
        return (
            <option key={option} value={option}>{option}</option>
        );
    });

    return (

        <div>
            <select 
                className="ui dropdown"
                value={groupSelected}
                onChange={(e) => selectGroup(e.target.value)}
            >
                {dropdownOptions}
            </select>
        </div>
    );
};


export default QuestionGroup;