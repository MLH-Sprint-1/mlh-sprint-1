import React from 'react';

const Welcome = () => {
    return (
        <div>
            How We Help:
            <div className="ui cards">
                <div className="card">
                    <div className="content">
                        <div className="header">
                            Students
                        </div>
                        <div className="description">
                            <ul>
                                <li>Ask/Answer questions about your lectures and see related questions from fellow students</li>
                                <li>Earn credit for helping your peers and redeem for grade improvement</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="content">
                        <div className="header">
                            Professors
                        </div>
                        <div className="description">
                            <ul>
                                <li>With students helping other students, your demand for office hours will lessen so you can focus on your other courses or projects</li>
                                <li>See student solutions to problems so you can refine subsequent lectures</li>
                                <li>Increase demand for your course with student incentive</li>
                                <li>See data about your lectures such as who is asking questions about which points in the lecture</li>
                                <li>Identify potential teaching assistants among your students</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Welcome;