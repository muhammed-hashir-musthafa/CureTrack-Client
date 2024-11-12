"use client";
import React from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Formik, Field, Form, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import { LoginFormValues } from "@/interfaces/admin";
import toast from "react-hot-toast";
import api from "@/lib/axiosIntercepter";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required")
    .matches(
      /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.[a-zA-z]{2,3}$/,
      "Invalid Email Format"
    ),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required")
    .matches(/[a-zA-Z]/, "Password must contain at least one letter")
    .matches(/\d/, "Password must contain at least one number")
    .matches(
      /[@$!%*?&]/,
      "Password must contain at least one special character"
    ),
});

const LoginForm: React.FC = () => {
  const initialValues: LoginFormValues = {
    email: "",
    password: "",
  };

  const handleSubmit = async (
    values: LoginFormValues,
    { setSubmitting, setErrors, resetForm }: FormikHelpers<LoginFormValues>
  ) => {
    try {
      console.log("Submitting values:", values);
    } catch (error) {}
  };
  return (
    <div className="w-full mx-auto">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form className="space-y-5 text-start">
            <div className="relative">
              <label htmlFor="email" className="text-gray-500 text-sm">
                Email
              </label>
              <div className="flex items-center bg-gray-800 rounded-lg p-2 shadow hover:shadow-md transition duration-300 border border-zinc-100 border-opacity-20">
                <FaEnvelope className="h-4 w-4 text-gray-400 mr-3" />
                <Field
                  id="email"
                  name="email"
                  type="text"
                  placeholder="Email"
                  className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none"
                />
              </div>
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-xs mt-1"
              />
            </div>

            <div className="relative">
              <label htmlFor="password" className="text-gray-500 text-sm">
                Password
              </label>
              <div className="flex items-center bg-gray-800 rounded-lg p-2 shadow hover:shadow-md transition duration-300 border border-zinc-100 border-opacity-20">
                <FaLock className="h-4 w-4 text-gray-400 mr-3" />
                <Field
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none"
                />
              </div>
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-xs mt-1"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full p-2 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-800 shadow-md transition duration-300"
            >
              {isSubmitting ? "Submitting..." : "Get Started"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
