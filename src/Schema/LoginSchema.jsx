import * as yup from "yup";

const LoginSchema = yup.object().shape({
 
  email: yup
    .string()
    .required("Email is required")
    .email("Email should be a valid email address"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password should ce at least 6 characters")
    .max(30, "Password should ce at most 30 characters"),
    
});

export default LoginSchema;
