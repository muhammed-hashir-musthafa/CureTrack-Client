"use client";
import React from "react";
import { FaEnvelope, FaLock, FaUser, FaPhone } from "react-icons/fa";
import { Formik, Field, Form, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import { SignUpFormValues } from "@/interfaces/admin";
import { signupAdmin } from "@/api/authApi/authApi";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import InputField from "@/components/baseComponents/ui/InputField/InputField";
import Link from "next/link";

const validationSchema = Yup.object({
  firstName: Yup.string()
    .min(3, "First Name must be at least 3 characters")
    .required("First Name is required"),
  lastName: Yup.string()
    .min(3, "Last Name must be at least 3 characters")
    .required("Last Name is required"),
  phoneNumber: Yup.number().required("Phone Number is required"),
  email: Yup.string()
    .email("Invalid Email Format")
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
  const router = useRouter();

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
            <InputField
              name="firstName"
              icon={FaUser}
              iconClassName="h-4 w-4 text-gray-400 mr-3"
              label="First Name"
              placeholder="Enter First Name"
              type="text"
            />
            <InputField
              name="lastName"
              icon={FaUser}
              iconClassName="h-4 w-4 text-gray-400 mr-3"
              label="Last Name"
              placeholder="Enter Last Name"
              type="text"
            />
            <InputField
              name="email"
              icon={FaEnvelope}
              iconClassName="h-4 w-4 text-gray-400 mr-3"
              label="Email"
              placeholder="Enter Email"
              type="text"
            />
            <InputField
              name="phoneNumber"
              icon={FaPhone}
              iconClassName="h-4 w-4 text-gray-400 mr-3"
              label="Phone Number"
              placeholder="Enter Phone Number"
              type="text"
            />
            <InputField
              name="password"
              icon={FaLock}
              iconClassName="h-4 w-4 text-gray-400 mr-3"
              label="Password"
              placeholder="Enter Password"
              type="password"
            />

            <button
              type="submit"
              className="w-full p-2 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-800 shadow-md transition duration-300"
            >
              Get Started
            </button>
          </Form>
        )}
      </Formik>
      <p className="mt-4 text-center text-sm text-gray-600">
        Already User?{" "}
        <Link
          href="/login"
          className="text-green-600 font-semibold hover:underline"
        >
          Login
        </Link>
      </p>
    </div>
  );
};

export default SignupForm;
