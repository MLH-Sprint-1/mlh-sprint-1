import React from 'react';

const Welcome = () => {

    // creating content for student/professor benefits
    const benefits = [
        {
           'type': 'Students',
           'benefits': [
            'Ask questions and see questions from fellow peers',
            ' Answer questions to receive credit towards your grade'
            ]
        },
        {
            'type': 'Professors',
            'benefits': [
                'With students helping other students, your demand for office hours will lessen so you can focus on your other courses or projects',
                'See student solutions to problems so you can refine subsequent lectures',
                'Increase demand for your course with student incentive',
                'See data about your lectures such as who is asking questions about which points in the lecture',
                'Identify potential teaching assistants among your students'
            ]
        }
    ];

    // function to iterate through array of benefits and create divs
    const benefitDivs = (benefitsArr) => {
        return benefitsArr.map(elem => {
            return <div key={elem} className="item">{elem}</div>
        });
    };

    // create divs for each type/benefit in array (of objects)
    const benefitsElem = benefits.map(benefit => {
        return (
            <div key={benefit['type']} className="column">
                <h3 className="ui center aligned header">{benefit['type']}</h3>
                <div className="ui clearing divider"></div>
                <div className="ui bulleted list">
                    {benefitDivs(benefit['benefits'])}
                </div>
            </div>
        );
    });

    return (
        <div>
            <h2 className="ui center aligned header">How We Help:</h2>
            <div className="ui segment">
                <div className="ui two column very relaxed grid">
                    {benefitsElem}
                </div>
                <div className="ui vertical divider">
                    and
                </div>
            </div>
        </div>
    );
};

export default Welcome;