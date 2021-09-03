import React from 'react'

const Datacollection = (props) => {
    const back = e => {
        e.preventDefault();
        props.prevStep();
    }
    const { firstName, lastName, jobTitle, email, jobCompany, jobLocation } = props;
    return (
        <>
            <h2>Here is the information you entered:</h2>
                First Name: <b>{firstName}</b><br />
                Last Name: <b>{lastName}</b><br />
                Email: <b>{email}</b><br />
                Job: <b>{jobTitle}</b><br />
                Company: <b>{jobCompany}</b><br />
                Location: <b>{jobLocation}</b><br />
            <button className="Back" onClick={back}>
                « Back
                </button>
        </>
    );
}
export default Datacollection;