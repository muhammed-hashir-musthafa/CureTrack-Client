"use client";
import React from "react";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import { Formik, Field, Form, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import { SignUpFormValues } from "@/interfaces/admin";
import toast from "react-hot-toast";
 import { signupAdmin } from "@/api/authApi/authApi";
import { useRouter } from "next/navigation";

const validationSchema = Yup.object({
  firstName: Yup.string()
    .min(3, "First Name must be at least 3 characters")
    .required("First Name is required"),
  lastName: Yup.string()
    .min(3, "Last Name must be at least 3 characters")
    .required("Last Name is required"),
  phoneNumber: Yup.number().required("Phone Number is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required")
    .matches(
      /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.[a-zA-z]{2,3}$/,
      "Invalid Email Format"
    ),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .matches(/[a-zA-Z]/, "Password must contain at least one letter")
    .matches(/\d/, "Password must contain at least one number")
    .matches(
      /[@$!%*?&]/,
      "Password must contain at least one special character"
    )
    .required("Password is required"),
});

const SignupForm: React.FC = () => {
  const router = useRouter()
  const initialValues: SignUpFormValues = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: "",
  };

  const handleSubmit = async (
    values: SignUpFormValues,
    { setSubmitting, setStatus, resetForm }: FormikHelpers<SignUpFormValues>
  ) => {
    setSubmitting(true);
    try {
      await signupAdmin(values);
      console.log("Submitting values:", values);
      resetForm();
      toast.success("Please verify your email with the OTP sent");
      router.push(
        `/otp-verification?email=${encodeURIComponent(values.email)}`
      );
    } catch (error: any) {
      if (error.response) {
        const { status, data } = error.response;

        if (status === 400) {
          setStatus(data.message);
        } else if (status === 409) {
          toast.error(
            "Email already exists. Please use a different email address."
          );
        } else {
          toast.error("Server error: Please try again later.");
        }
      } else {
        toast.error("An unexpected error occurred. Please try again.");
      }
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <div className="w-full mx-auto">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className="space-y-5 text-start">
            <div className="relative">
              <label htmlFor="firstName" className="text-gray-500 text-sm">
                First Name
              </label>
              <div className="flex items-center bg-gray-900 rounded-lg p-2 shadow hover:shadow-md transition duration-300 border border-zinc-100 border-opacity-20">
                <FaUser className="h-4 w-4 text-gray-400 mr-3" />
                <Field
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none"
                />
              </div>
              <ErrorMessage
                name="firstName"
                component="div"
                className="text-red-500 text-xs mt-1"
              />
            </div>

            <div className="relative">
              <label htmlFor="lastName" className="text-gray-500 text-sm">
                Last Name
              </label>
              <div className="flex items-center bg-gray-900 rounded-lg p-2 shadow hover:shadow-md transition duration-300 border border-zinc-100 border-opacity-20">
                <FaUser className="h-4 w-4 text-gray-400 mr-3" />
                <Field
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                  className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none"
                />
              </div>
              <ErrorMessage
                name="lastName"
                component="div"
                className="text-red-500 text-xs mt-1"
              />
            </div>

            <div className="relative">
              <label htmlFor="email" className="text-gray-500 text-sm">
                Email
              </label>
              <div className="flex items-center bg-gray-900 rounded-lg p-2 shadow hover:shadow-md transition duration-300 border border-zinc-100 border-opacity-20">
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
              <label htmlFor="phoneNumber" className="text-gray-500 text-sm">
                Phone Number
              </label>
              <div className="flex items-center bg-gray-900 rounded-lg p-2 shadow hover:shadow-md transition duration-300 border border-zinc-100 border-opacity-20">
                <FaEnvelope className="h-4 w-4 text-gray-400 mr-3" />
                <Field
                  id="phoneNumber"
                  name="phoneNumber"
                  type="text"
                  placeholder="phoneNumber"
                  className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none"
                />
              </div>
              <ErrorMessage
                name="phoneNumber"
                component="div"
                className="text-red-500 text-xs mt-1"
              />
            </div>

            <div className="relative">
              <label htmlFor="password" className="text-gray-500 text-sm">
                Password
              </label>
              <div className="flex items-center bg-gray-900 rounded-lg p-2 shadow hover:shadow-md transition duration-300 border border-zinc-100 border-opacity-20">
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
              className="w-full p-2 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-800 shadow-md transition duration-300"
            >
              Get Started
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignupForm;
