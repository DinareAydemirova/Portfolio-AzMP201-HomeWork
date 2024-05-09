import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { BASE_URL, endPoints } from "../../services/api";
import { getAllData } from "../../services/index";
import { loginValidationSchema } from "../../schema/loginSchema";

const Login = () => {

  const navigate = useNavigate();

  const initialValues = {
    username: "",
    password: "",
    rememberMe: false,
  };


  const onSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <Formik
          initialValues={initialValues}
          validationSchema={loginValidationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-6">
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Username
                </label>
                <div className="mt-2">
                  <Field
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Enter your username"
                    className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <Field
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>
              </div>
              <div>
                <label className="inline-flex items-center">
                  <Field
                    type="checkbox"
                    name="rememberMe"
                    className="mr-1"
                  />
                  Remember me
                </label>
              </div>
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {isSubmitting ? "Signing in..." : "Sign in"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
        <div className="mt-2 text-center">
          <button
            onClick={() => {
              navigate("/register");
            }}
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
