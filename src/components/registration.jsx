import React from "react";
import { useFormik } from 'formik';

const SignupForm = (props) => {
    const {onSubmit} =props
    const formik = useFormik({
        initialValues: {
            password: '',
            email: '',
        },
        onSubmit: values => {
            onSubmit(values)
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="lastName">password</label>
            <input
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
            /> <br/> <br/>
            <label htmlFor="email">Email Address</label>
            <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
            /> <br/> <br/>
            <button type="submit">Submit</button>
        </form>
    );
};

export default SignupForm;