import React, { useState } from 'react';
import Personalinfo from '../personal-info-form/Personalinfo';
import JobInfo from '../job-details-form/JobInfo';
import Datacollection from '../datacollection/Datacollection';

const Multiform = () => {
    const [step, setStep] = useState(1);
    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        jobTitle: '',
        jobCompany: '',
        jobLocation: ''

    })
    const nextStep = () => {
        setStep(step + 1);
    }
    const prevStep = () => {
        setStep(step - 1);
    }
    const handleChange = name => e => {
        setState({ ...state, [e.target.name]: e.target.value })
    }
    //here we got response send to Api
    console.log(state);
    const showStep = () => {
        const { firstName, lastName, email, jobTitle, jobCompany, jobLocation } = state;
        if (step === 1)
            return (<Personalinfo
                nextStep={nextStep}
                handleChange={handleChange}
                firstName={firstName}
                lastName={lastName}
                email={email}
            />);
        if (step === 2)
            return (<JobInfo
                nextStep={nextStep}
                prevStep={prevStep}
                handleChange={handleChange}
                jobTitle={jobTitle}
                jobCompany={jobCompany}
                jobLocation={jobLocation}
            />);
        if (step === 3)
            return (<Datacollection
                firstName={firstName}
                lastName={lastName}
                email={email}
                jobTitle={jobTitle}
                jobCompany={jobCompany}
                jobLocation={jobLocation}
                prevStep={prevStep}
            />);
    }

    return (
        <>
            <h2>Step {step} of 3.</h2>
            {showStep()}
        </>
    );
}
export default Multiform;