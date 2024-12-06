"use client";

import React, { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Formik, Form, FormikHelpers } from "formik";
import * as Yup from "yup";
import { LoginFormValues } from "@/interfaces/admin";
import { login } from "@/api/authApi/authApi";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import InputField from "../../ui/InputField/InputField";
import Link from "next/link";
import RadioButton from "../../ui/RadioButton/RadioButton";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required")
    .matches(
      /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/,
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
  role: Yup.string()
    .required("Please select a role")
    .oneOf(["vendor", "doctor", "user", "admin"], "Invalid role selected"),
});

const LoginForm: React.FC = () => {
  const router = useRouter();

  const initialValues: LoginFormValues = {
    email: "",
    password: "",
    role: "",
  };

  const handleSubmit = async (
    values: LoginFormValues,
    { setSubmitting, resetForm }: FormikHelpers<LoginFormValues>
  ) => {
    try {
      const response = await login(values);
      resetForm();

      const { role } = response;
      if (role === "admin") {
        toast.success("Admin login successfully");
        router.push("/admin");
      } else if (role === "vendor") {
        toast.success("Vendor login successfully");
        router.push("/vendor");
      } else if (role === "doctor") {
        toast.success("Doctor login successfully");
        router.push("/doctor");
      } else if (role === "user") {
        toast.success("User login successfully");
        router.push("/");
      } else {
        toast.error("Unrecognized role");
      }
    } catch (error: any) {
      if (error.response) {
        const { status, data } = error.response;

        if (status === 400) {
          toast.error(data.message);
        } else if (status === 402) {
          toast.error("No account found. Please create an account.");
          resetForm();
          router.push('/signup');
        } else if (status === 403) {
          toast.error("Invalid username/password");
          resetForm();
        } else {
          toast.error("Server error: Please try again later.");
          resetForm();
        }
      } else {
        toast.error("An unexpected error occurred. Please try again.");
        resetForm();
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, errors, touched, isSubmitting, setFieldValue }) => (
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

            <fieldset className="space-y-3">
              <legend className="text-gray-500 text-sm">
                Select an option:
              </legend>
              <div className="flex justify-between items-center gap-x-4">
                <RadioButton
                  name="role"
                  value="user"
                  label="User"
                  checked={values.role === "user"}
                  onChange={(value) => setFieldValue("role", value)}
                />
                <RadioButton
                  name="role"
                  value="doctor"
                  label="Doctor"
                  checked={values.role === "doctor"}
                  onChange={(value) => setFieldValue("role", value)}
                />
                <RadioButton
                  name="role"
                  value="vendor"
                  label="Vendor"
                  checked={values.role === "vendor"}
                  onChange={(value) => setFieldValue("role", value)}
                />
                <RadioButton
                  name="role"
                  value="admin"
                  label="Admin"
                  checked={values.role === "admin"}
                  onChange={(value) => setFieldValue("role", value)}
                />
              </div>
              {errors.role && touched.role && (
                <p className="text-red-500 text-sm mt-2">{errors.role}</p>
              )}
            </fieldset>

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

      <p className="mt-4 text-center text-sm text-gray-600">
        Not a User?{" "}
        <Link
          href="/signup"
          className="text-green-600 font-semibold hover:underline"
        >
          Signup
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
