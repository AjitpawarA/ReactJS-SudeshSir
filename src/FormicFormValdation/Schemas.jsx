import * as yup from 'yup';

const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

export const userSchema = yup.object({
    name: yup.string().min(3).required("Name is Required"),
    email: yup.string().email().required("Email is Required"),
    password: yup.string().matches(passwordRegex, "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character, and be at least 8 characters long.").required("Password is Required"),
    cpassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match')
});
