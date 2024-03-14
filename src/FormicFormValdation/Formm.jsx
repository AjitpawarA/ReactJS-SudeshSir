import React from 'react';
import { Formik, Form, Field } from 'formik';
import { userSchema } from './Schemas';

const Formm = () => {
    const initialValues = { name: "", email: "", password: "", cpassword: "" };

    function handleSubmit(values, actions) {
        console.log(values, actions);
        actions.resetForm();
    }

    return (
        <div className='Forms'>
            <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={userSchema}>
                {({ errors, touched }) => ( // Use render prop pattern to access errors and touched
                    <Form className='form_container'>
                        <label htmlFor='name'>Name</label>
                        <Field type="text" name="name" style={{ border: "1px solid black" }} />
                        <div className='error_container'>
                            {errors.name && touched.name && (
                                <p>{errors.name}</p>
                            )}
                        </div>
                        <br /><br />
                        <label htmlFor='email'>Email</label>
                        <Field type="email" name="email" style={{ border: "1px solid black" }} />
                        <div className='error_container'>
                            {errors.email && touched.email && (
                                <p>{errors.email}</p>
                            )}
                        </div>
                        <br /><br />
                        <label htmlFor='password'>Password</label>
                        <Field type="password" name="password" style={{ border: "1px solid black" }} />
                        <div className='error_container'>
                            {errors.password && touched.password && (
                                <p>{errors.password}</p>
                            )}
                        </div>
                        <br /><br />
                        <label htmlFor='cpassword'>Confirm Password</label>
                        <Field type="password" name="cpassword" style={{ border: "1px solid black" }} />
                        <div className='error_container'>
                            {errors.password && touched.password && (
                                <p>{errors.password}</p>
                            )}
                        </div>
                        <br />
                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Formm;
