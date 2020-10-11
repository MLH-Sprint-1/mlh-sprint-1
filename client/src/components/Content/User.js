import React, { useState } from 'react';
import Course from './Course';

const User = () => {

    // state for courses
    const courses = ['Math', 'Programming'];
    const [courseSelected, setCourseSelected] = useState(courses[0]);
    // function to select course
    const selectCourse = (course) => {
        setCourseSelected(course);
    };

    return (
        <div>
            <h1 className="ui header">Welcome, Aneesh!</h1>
            <Course courseList={courses} courseSelected={courseSelected} selectCourse={selectCourse} />
        </div>
    );
};

export default User;