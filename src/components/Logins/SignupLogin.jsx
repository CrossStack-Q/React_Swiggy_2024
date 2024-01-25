import React from 'react'

import { useFormik } from 'formik';

function SignupLogin() {
    const formik = useFormik({
        initialValues: {
            email: ''
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <form>
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

            <button type='submit'>
                Submit
            </button>
        </form>
    )
}

export default SignupLogin