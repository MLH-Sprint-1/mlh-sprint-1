import React, { useState } from 'react';
import Course from './Course';
import QuestionGroup from './QuestionGroup';

const User = () => {

    // state for courses
    const courses = ['All Courses', 'Math', 'Programming'];
    const [courseSelected, setCourseSelected] = useState(courses[0]);
    // function to select course
    const selectCourse = (course) => {
        setCourseSelected(course);
    };

    // state for question groups
    const questionGroups = ["All Questions", "Questions I've Asked", "Questions I've Ansered"];
    const [questionGroupSelected, setQuestionGroupSelected] = useState(questionGroups[0]);
    // function to select question group
    const selectQuestionGroup = (questionGroup) => {
        setQuestionGroupSelected(questionGroup);
    };

    return (
        <div>
            <h1 className="ui header">Welcome, Aneesh!</h1>
            <Course courseList={courses} courseSelected={courseSelected} selectCourse={selectCourse} />
            <QuestionGroup groupList={questionGroups} groupSelected={questionGroupSelected} selectGroup={selectQuestionGroup} />
        </div>
    );
};

export default User;