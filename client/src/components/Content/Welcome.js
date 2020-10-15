import React from 'react';

const Welcome = () => {

    // creating content for student/professor benefits
    const benefits = [
        {
           'type': 'Students',
           'benefits': [
            'Ask questions about topics and receive help from your fellow classmates',
            'Reach out to fellow classmates to answer any questions they have',
            '**Earn credit for helping your peers and be recognized by your professor'
            ]
        },
        {
            'type': '**Professors',
            'benefits': [
                'With students helping other students, your need to be available lessens so you can focus on other courses or projects',
                'See student solutions to problems so you can refine subsequent lectures or future courses',
                'Increase demand for your course with the credit incentive',
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
        <div className="ui container">
            <img className="ui centered image" src="/logo.png" alt="logo" />
            <h2 className="ui center aligned header">How We Help:</h2>
            <div className="ui segment">
                <div className="ui two column very relaxed grid">
                    {benefitsElem}
                </div>
                <div className="ui vertical divider">
                    and
                </div>
            </div>
            <div className="ui center aligned container">**in development</div>

        </div>
    );
};

export default Welcome;