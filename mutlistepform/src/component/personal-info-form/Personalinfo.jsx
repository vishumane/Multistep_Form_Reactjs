
import React from 'react';
const Personalinfo = (props) => {
    const Continue = (e) => {
        e.preventDefault();
        props.nextStep();
    }
    const { firstName, lastName, email, handleChange } = props;
    return (
        <>
            <h2>Enter your personal information:</h2>
            <label>
                <input
                    type="text"
                    name="firstName"
                    value={firstName}
                    placeholder="First Name"
                    onChange={handleChange('firstName')}
                />
            </label>
            <br></br>
            <label>
                <input
                    type="text"
                    name="lastName"
                    value={lastName}
                    placeholder="Last Name"
                    onChange={handleChange('lastName')}
                />
            </label>
            <br></br>
            <label>
                <input
                    type="text"
                    name="email"
                    value={email}
                    placeholder="email"
                    onChange={handleChange('email')}
                />
            </label>
            <br></br>
            <button className="Next" onClick={Continue}>
                Next »
                </button>
        </>
    );
}

export default Personalinfo;