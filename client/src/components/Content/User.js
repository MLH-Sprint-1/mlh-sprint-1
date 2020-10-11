import React, { useState } from 'react';
import Course from './Course';
import QuestionGroup from './QuestionGroup';
import QuestionFilter from './QuestionFilter';

const User = () => {

    // state for courses
    const courses = ['All Courses', 'Math', 'Programming'];
    const [courseSelected, setCourseSelected] = useState(courses[0]);
    // function to select course
    const selectCourse = (course) => {
        setCourseSelected(course);
    };

    // state for question groups
    const questionGroups = ["All Questions", "Questions I've Asked", "Questions I've Answered"];
    const [questionGroupSelected, setQuestionGroupSelected] = useState(questionGroups[0]);
    // function to select question group
    const selectQuestionGroup = (questionGroup) => {
        setQuestionGroupSelected(questionGroup);
    };

    // state for question filters
    const questionFilters = ["Responded", "Verified"];
    const questionFiltersArr = questionFilters.map(filter => {
        return {'filter': filter, 'checked': false};
    });
    console.log(questionFiltersArr);
    //const [questionFiltersChecked, setQuestionFiltersChecked] = useState(Array(questionFilters.length).fill(''));
    const [questionFiltersChecked, setQuestionFiltersChecked] = useState(Array(questionFilters.length).fill(true));

    // function to toggle checkbox
    const setQuestionFilterChecked = (filterOptionIndex) => {
        // loop through existing array and update element at index
        const newArr = [...questionFiltersChecked];
        newArr[filterOptionIndex] = !newArr[filterOptionIndex];
        //setQuestionFilterChecked(newArr);
    };

    return (
        <div>
            <h1 className="ui header">Welcome, Aneesh!</h1>
            <Course courseList={courses} courseSelected={courseSelected} selectCourse={selectCourse} />
            Question Type: 
            <QuestionGroup groupList={questionGroups} groupSelected={questionGroupSelected} selectGroup={selectQuestionGroup} />
            Question Filters:
            <QuestionFilter filterList={questionFilters} checkboxList={questionFiltersChecked} toggleCheckbox={setQuestionFilterChecked} />
        </div>
    );
};

export default User;