"use client";
import React from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Formik, Field, Form, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import { LoginFormValues } from "@/interfaces/admin";

import { login } from "@/api/authApi/authApi";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import InputField from "../../ui/inputField/inputField";

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
  const router = useRouter();
  const initialValues: LoginFormValues = {
    email: "",
    password: "",
  };

  const handleSubmit = async (
    values: LoginFormValues,

    { setSubmitting, setStatus, resetForm }: FormikHelpers<LoginFormValues>
  ) => {
    try {
      await login(values);
      console.log("Submitting values:", values);
      resetForm();
      toast.success("Admin login successfully");
      router.push("/admin");
    } catch (error: any) {
      if (error.response) {
        const { status, data } = error.response;

        if (status === 400) {
          setStatus(data.message);
        } else if (status === 402) {
          toast.error("No admin found. Please create an account");
          resetForm();
          router.push("/admin-signup");
        } else if (status === 403) {
          toast.error("Invalid username/password");
          resetForm();
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
        {({ isSubmitting }) => (
          <Form className="space-y-5 text-start">
            <InputField
              name="email"
              icon={FaEnvelope}
              iconClassName="h-4 w-4 text-gray-400 mr-3"
              label="Email"
              placeholder="Enter Email"
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
