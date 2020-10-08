import React from 'react';

const Welcome = () => {
    return (
        <div>
            How We Benefit:
            <div className="ui cards">
                <div className="card">
                    <div className="content">
                        <div className="header">
                            Students
                        </div>
                        <div className="description">
                            <ul>
                                <li>reason 1</li>
                                <li>reason 2</li>
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
                                <li>reason 1</li>
                                <li>reason 2</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Welcome;