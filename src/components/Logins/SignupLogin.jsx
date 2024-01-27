import React from 'react'

import { useFormik } from 'formik';

function SignupLogin() {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            passward:'',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <form className='form-data'>
            <label htmlFor="firstName">First Name</label>
            <input
                id="firstName"
                name="firstName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.firstName}
            />

            <label htmlFor="lastName">Last Name</label>
            <input
                id="lastName"
                name="lastName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.lastName}
            />

            <label htmlFor="email">
                Email Address
            </label>
            <input
                type="email"
                id="email"
                name='email'
                onChange={formik.handleChange}
                value={formik.values.email}
            />

            <label htmlFor="passward">
                Password
            </label>
            <input
                type="passward"
                id="passward"
                name='passward'
                onChange={formik.handleChange}
                value={formik.values.passward}
            />

            

            <button type='submit'>
                Submit
            </button>
        </form>
    )
}

export default SignupLogin