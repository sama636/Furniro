import * as yup from "yup";

const RegSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(3, "Name should be at least 3 characters"),
  email: yup
    .string()
    .required("Email is required")
    .email("Email should be a valid email address"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password should ce at least 6 characters")
    .max(30, "Password should ce at most 30 characters"),
  username: yup.string().required("Username is required"),
});

export default RegSchema;
