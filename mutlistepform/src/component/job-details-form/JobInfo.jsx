
import React from 'react';
const JobInfo = (props) => {

    const Continue = e => {
        e.preventDefault();
        props.nextStep();
    }

    const Back = e => {
        e.preventDefault();
        props.prevStep();
    }

    const { jobTitle, jobCompany, jobLocation, handleChange } = props;
    return (
        <>
            <h2>Enter your job information:</h2>
            <label>
                <input
                    type="text"
                    name="jobTitle"
                    value={jobTitle}
                    onChange={handleChange('jobTitle')}
                    placeholder="Job Title"
                />
            </label>
            <br></br>
            <label>
                <input
                    type="text"
                    name="jobCompany"
                    value={jobCompany}
                    onChange={handleChange('jobCompany')}
                    placeholder="Company"
                />
            </label>
            <br></br>
            <label>
                <input
                    type="text"
                    name="jobLocation"
                    value={jobLocation}
                    onChange={handleChange('jobLocation')}
                    placeholder="Location"
                />
            </label>
            <br></br>
            <button className="Back" onClick={Back}>
                « Back
                </button>
            <button className="Next" onClick={Continue}>
                Next »
                </button>
        </>
    );
}

export default JobInfo;