import React, { useContext, useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import LoginSchema from "../Schema/LoginSchema";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { GlobalContext } from "@/components/GlobalContext";

export default function Login() {
  const { setTokenAction, setUserAction } = useContext(GlobalContext);

  const navigate = useNavigate();

  const Login = async (data) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/local`,
        {
          identifier: data.email,
          password: data.password,
        }
      );

      if (response.data) {
        localStorage.setItem("token",(response.data.jwt));
        localStorage.setItem("user", JSON.stringify(response.data.user));


        setTokenAction({
          isAuth: true,
          userId: response.data.user.id,
        });
        setUserAction({
          ...response.data.user,
        });
        navigate("/");

      } else {
        console.log("No user data returned");
      }

    } catch (err) {
      console.error("Login error:", err);
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
          validationSchema={LoginSchema}
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={(values) => {
            Login(values);
          }}
        >
          {({ handleSubmit }) => {
            return (
              <div className="bg-white relative top-24 w-96 m-auto rounded flex items-center flex-col py-2">
                <h1 className="font-semibold my-2 text-3xl">Sign in</h1>
                <Form className="flex flex-col " onSubmit={handleSubmit}>
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
                      className="w-72 py-1 rounded-sm bg-add-cart-btn-txt my-3 text-white"
                    >
                      Sign In
                    </button>
                  </div>
                </Form>
                <div className="px-10 py-3">
                  <p className="text-sm">
                    Don’t have an acount?{" "}
                    <Link to={"/register"} className="font-semibold">
                      Sign up
                    </Link>
                  </p>
                  <p className="text-sm ">
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
