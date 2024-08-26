import React, { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import RegSchema from "../Schema/RegSchema";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";


export default function Register() {
  const navigate = useNavigate();
  const RegisterAccount = async (values) => {
    try {
      const { data } = await axios.post(
        import.meta.env.VITE_API_URL + "/auth/local/register",
        values
      );

      navigate("/login");
      toast.success("Account created Successfuly");
    } catch (err) {
      toast.error(err.response.data.error.message);
    }
  };

  return (
    <>
      <div
        className=" bg-cover bg-center bg-no-repeat z-0 h-screen"
        style={{ backgroundImage: "url('/public/assets/Login.png')" }}
      >
        <Formik
          className="z-10"
          validationSchema={RegSchema}
          onSubmit={RegisterAccount}
          initialValues={{
            email: "",
            name: "",
            username: "",
            password: "",
          }}
        >
          {({ handleSubmit }) => {
            return (
              <div className="bg-white relative top-12 w-96 m-auto rounded flex items-center flex-col py-2">
                <h1 className="font-semibold text-3xl">Sign up</h1>
                <Form className="flex flex-col" onSubmit={handleSubmit}>
                  <div className="flex flex-col">
                    <label htmlFor="">Full Name</label>
                    <Field
                      name="name"
                      className="border focus:outline-none px-2 my-3 py-1 rounded-sm w-72"
                      type="text"
                    />
                  </div>
                  <span className="text-danger">
                    <ErrorMessage name="name" />
                  </span>
                  <div className="flex flex-col">
                    <label htmlFor="">Email</label>
                    <Field
                      name="email"
                      className="border focus:outline-none px-2 py-1 my-3 rounded-sm  w-72"
                      type="email"
                    />
                  </div>
                  <span className="text-danger">
                    <ErrorMessage name="email" />
                  </span>
                  <div className="flex flex-col">
                    <label htmlFor="">Username</label>
                    <Field
                      name="username"
                      className="border focus:outline-none px-2 py-1 my-3 rounded-sm w-72"
                      type="text"
                    />
                  </div>
                  <span className="text-danger">
                    <ErrorMessage
                      className="text-prod-des-txt"
                      name="username"
                    />
                  </span>
                  <div className="flex flex-col">
                    <label htmlFor="">Password</label>
                    <Field
                      name="password"
                      type="password"
                      className="border focus:outline-none px-2 py-1 my-3 rounded-sm w-72"
                    />
                  </div>
                  <span className="text-danger">
                    <ErrorMessage name="password" />
                  </span>
                  <div className="button">
                    <button
                      type="submit"
                      className="w-72 focus:outline-none py-1 rounded-sm bg-add-cart-btn-txt my-1 text-white"
                    >
                      Sign Up
                    </button>
                  </div>
                </Form>

                <div className="px-10 py-2">
                  <p className="text-sm">
                    Already have an acount?{" "}
                    <Link to={"/login"} className="font-semibold">
                      Log In
                    </Link>
                  </p>
                  <p className="text-sm">
                    {" "}
                    This page is protected by Google reCAPTCHA to ensure you're
                    not a bot.{" "}
                    <span className="font-semibold"> Learn more.</span>
                  </p>
                </div>
              </div>
            );
          }}
        </Formik>
      </div>
    </>
  );
}
