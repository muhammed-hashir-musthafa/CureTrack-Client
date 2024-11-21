"use client";
import React from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Formik, Form, FormikHelpers } from "formik";
import * as Yup from "yup";
import { LoginFormValues } from "@/interfaces/admin";
import { login } from "@/api/authApi/authApi";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import InputField from "../../ui/InputField/InputField";
import Link from "next/link";

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
      const response = await login(values);
      console.log("Submitting values:", values);
      resetForm();
      const { data, role } = response;
      if (role === "admin") {
        toast.success("Admin login successfully");
        router.push("/admin");
      } else if (role === "vendor") {
        toast.success("Vendor login successfully");
        router.push("/vendor");
      } else if (role === "doctor") {
        toast.success("Doctor login successfully");
        router.push("/doctor");
      } else {
        toast.error("Unrecognized role");
      }
    } catch (error: any) {
      if (error.response) {
        const { status, data } = error.response;

        if (status === 400) {
          setStatus(data.message);
        } else if (status === 402) {
          toast.error("No account found. Please create an account");
          resetForm();
          router.back();
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
