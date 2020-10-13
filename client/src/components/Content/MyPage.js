import React, { useState } from 'react';
import Course from './Course';
import QuestionGroup from './QuestionGroup';
import QuestionFilter from './QuestionFilter';
import QuestionList from '../QuestionList';
import Choice from '../Choice';

const MyPage = () => {

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
    //const questionFiltersArr = questionFilters.map(filter => {
    //    return {'filter': filter, 'checked': false};
    //});
    const [questionFiltersArr, setQuestionFiltersArr] = useState(
        questionFilters.map(filter => {
            return {'filter': filter, 'checked': false};
        })
    );

    // function to toggle checkbox
    const setQuestionFilterChecked = (filterOptionIndex) => {
        // copy array
        const newArr = [...questionFiltersArr];
        // update checked value at that index
        newArr[filterOptionIndex]['checked'] = !newArr[filterOptionIndex]['checked'];
        // update state
        setQuestionFiltersArr(newArr);
    };

    return (
        <div>
            <h1 className="ui header">Welcome, Aneesh!</h1>
            <div className="ui equal width grid">
                <Course courseList={courses} courseSelected={courseSelected} selectCourse={selectCourse} />
                <div className="column">
                    Question Type: 
                    <QuestionGroup groupList={questionGroups} groupSelected={questionGroupSelected} selectGroup={selectQuestionGroup} />
                    <QuestionList />
                </div>
                <div className="column">
                    Question Filters:
                    <QuestionFilter filterList={questionFiltersArr} toggleCheckbox={setQuestionFilterChecked} />
                </div>
                <div className="column">
                    <Choice />
                </div>
            </div>
        </div>
    );
};

export default MyPage;