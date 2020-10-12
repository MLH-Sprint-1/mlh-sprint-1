import React from 'react';

const Course = ({ courseList, courseSelected, selectCourse }) => {

    const courseElems = courseList.map(course => {
        return (
            <tr 
                key={course} 
                className={course===courseSelected ? 'active' : ''}
                onClick={() => selectCourse(course)}
                style={{'cursor': 'pointer'}}
            >
                <td>{course}</td>
            </tr>
        )
    })
    return (
        <div>
            <table className="ui table">
                <thead>
                    <tr>
                        <th>
                            Courses
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {courseElems}
                </tbody>
            </table>
        </div>
    );
};

export default Course;