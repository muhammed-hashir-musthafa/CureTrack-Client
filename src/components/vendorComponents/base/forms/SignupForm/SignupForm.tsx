"use client";
import React from "react";
import { FaEnvelope, FaLock, FaUser, FaPhone, FaIdCard } from "react-icons/fa";
import { Formik, Field, Form, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import InputField from "@/components/baseComponents/ui/InputField/InputField";
import DropdownField from "@/components/baseComponents/ui/DropdownField/DropdownField";
import Link from "next/link";
import { signupVendor } from "@/api/authApi/authApi";
import { vendorSignupFormValues } from "@/interfaces/vendor";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .required("Name is required"),
  phoneNumber: Yup.number().required("Phone Number is required"),
  license: Yup.number().required("License Number is required"),
  vendorRole: Yup.string().required("Role is required"),
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

  const initialValues: vendorSignupFormValues = {
    name: "",
    phoneNumber: "",
    email: "",
    license: "",
    vendorRole: "",
    password: "",
  };

  const handleSubmit = async (
    values: vendorSignupFormValues,
    {
      setSubmitting,
      setStatus,
      resetForm,
    }: FormikHelpers<vendorSignupFormValues>
  ) => {
    setSubmitting(true);
    try {
      console.log(values);
      await signupVendor(values);
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

  const roleOptions = [
    { value: "hospital", label: "Hospital" },
    { value: "pharmacy", label: "Pharmacy" },
    { value: "lab", label: "Lab" },
  ];

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
              name="name"
              icon={FaUser}
              iconClassName="h-4 w-4 text-gray-400 mr-3"
              label="Name"
              placeholder="Enter Name"
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
            <DropdownField
              name="vendorRole"
              label="Role"
              options={roleOptions}
              placeholder="Select Role"
            />
            <InputField
              name="license"
              icon={FaIdCard}
              iconClassName="h-4 w-4 text-gray-400 mr-3"
              label="License Number"
              placeholder="Enter License Number"
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
