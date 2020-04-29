import React from 'react';
import './UserOutput.css';

const userOutput = ( props ) => {

    return (
        <div className="UserOutput">
            <p className="congrats-text">Congratulations {props.userName} on your admission to Aria University. As we navigate the circumstances surrounding COVID-19, AU continues to deliver the highest-quality education possible to the students we serve — and we are here to fully support you throughout the enrollment process for fall 2020.</p>

            <p className="next-steps">To register for fall 2020 in-person classes, your next step is to make an advising appointment with your academic advisor, who will help you choose and register for classes.</p>
        </div>
    );
}

export default userOutput;