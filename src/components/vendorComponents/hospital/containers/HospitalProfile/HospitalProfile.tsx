"use client";
import React, { useState } from "react";
import { Formik, Form, FormikHelpers } from "formik";
import * as Yup from "yup";
import InputField from "@/components/baseComponents/ui/InputField/InputField";
import FileInput from "@/components/baseComponents/ui/FileUpload/FileUpload";
import api from "@/lib/axiosIntercepter";

export interface CommonProfileForm {
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
  licenseNo: string;
  address: {
    buildNo: string;
    pincode: string;
    city: string;
    street: string;
    state: string;
    country: string;
  };
  licenseDocument: File | null;
  profileImage: File | null;
}

const CommonProfile: React.FC<{ role: "hospital" | "lab" | "pharmacy" }> = ({
  role,
}) => {
  const [profileImagePreview, setProfileImagePreview] = useState<string | null>(
    null
  );

  const handleProfileImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setProfileImagePreview(reader.result as string);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const initialValues: CommonProfileForm = {
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    licenseNo: "",
    address: {
      buildNo: "",
      pincode: "",
      city: "",
      street: "",
      state: "",
      country: "",
    },
    licenseDocument: null,
    profileImage: null,
  };

  const validationSchema = Yup.object({
    name: Yup.string().required(`${role} Name is required`),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    phoneNumber: Yup.string()
      .matches(/^\+?[0-9]{1,4}?[0-9]{7,14}$/i, "Invalid phone number")
      .required("Phone number is required"),
    password: Yup.string().required("Password is required"),
    licenseNo: Yup.string().required("License No is required"),
    licenseDocument: Yup.mixed().required(
      "Upload License Document is required"
    ),
    profileImage: Yup.mixed().required("Upload Image is required"),
    address: Yup.object({
      buildNo: Yup.string().required("Building Number is required"),
      pincode: Yup.string().required("Pincode is required"),
      city: Yup.string().required("City is required"),
      street: Yup.string().required("Street is required"),
      state: Yup.string().required("State is required"),
      country: Yup.string().required("Country is required"),
    }),
  });

  const handleSubmit = async (
    values: CommonProfileForm,
    { setSubmitting, resetForm }: FormikHelpers<CommonProfileForm>
  ) => {
    try {
      const formData = new FormData();
      Object.keys(values).forEach((key) => {
        const value = values[key as keyof CommonProfileForm];
        if (value instanceof File) {
          formData.append(key, value);
        } else if (typeof value === "object" && value !== null) {
          Object.keys(value).forEach((subKey) => {
            formData.append(`${key}[${subKey}]`, String(value[subKey]));
          });
        } else {
          formData.append(key, String(value));
        }
      });

      const response = await api.post(`/${role}/profile`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data.success) {
        alert(`${role} profile submitted successfully`);
        resetForm();
      } else {
        alert("Error submitting profile");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("An error occurred during submission.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-black text-white">
      <main className="my-6 pb-14 flex-1 p-8 mx-auto max-w-6xl bg-neutral-950 rounded-xl shadow-lg border-gray-900 border">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 space-y-4 sm:space-y-0">
          <div>
            <h1 className="text-3xl font-bold">
              Welcome, {role.charAt(0).toUpperCase() + role.slice(1)} Name 👋
            </h1>
            <p className="text-gray-400">Let's know more about your {role}</p>
          </div>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ setFieldValue }) => (
            <Form className="space-y-8">
              <section>
                <h2 className="text-xl font-semibold mb-4">
                  {role.charAt(0).toUpperCase() + role.slice(1)} Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InputField
                    name="name"
                    type="text"
                    placeholder={`${
                      role.charAt(0).toUpperCase() + role.slice(1)
                    } Name`}
                    label={`${
                      role.charAt(0).toUpperCase() + role.slice(1)
                    } Name`}
                  />
                  <InputField
                    name="email"
                    type="email"
                    label="Email"
                    placeholder="Email"
                  />
                  <InputField
                    name="phoneNumber"
                    label="Phone Number"
                    type="text"
                    placeholder="Phone Number"
                  />
                  <InputField
                    name="licenseNo"
                    type="text"
                    label="License No"
                    placeholder="License No"
                  />
                  <InputField
                    name="password"
                    type="password"
                    label="Password"
                    placeholder="Password"
                  />
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">
                  {role.charAt(0).toUpperCase() + role.slice(1)} Address
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InputField
                    name="address.buildNo"
                    type="text"
                    label="Building Number"
                    placeholder="Building Number"
                  />

                  <InputField
                    name="address.street"
                    type="text"
                    label="Street"
                    placeholder="Street"
                  />
                  <InputField
                    name="address.city"
                    type="text"
                    label="City"
                    placeholder="City"
                  />
                  <InputField
                    name="address.pincode"
                    type="text"
                    label="Pincode"
                    placeholder="Pincode"
                  />
                  <InputField
                    name="address.state"
                    type="text"
                    label="State"
                    placeholder="State"
                  />
                  <InputField
                    name="address.country"
                    type="text"
                    label="Country"
                    placeholder="Country"
                  />
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">Uploads</h2>
                <div className="grid grid-cols-1 gap-6">
                  <h2 className="text-base font-semibold text-gray-300 mt-2">
                    Upload {role.charAt(0).toUpperCase() + role.slice(1)} Image
                  </h2>
                  <FileInput
                    name="profileImage"
                    label="Upload Profile Image"
                    placeholder="Select a file"
                    setFieldValue={setFieldValue}
                  />
                  <h2 className="text-base font-semibold text-gray-300 mt-2">
                    Upload License Document
                  </h2>
                  <FileInput
                    name="licenseDocument"
                    label="Upload License Document"
                    placeholder="Select a file"
                    setFieldValue={setFieldValue}
                  />
                </div>
              </section>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-500 text-white font-semibold py-1.5 w-full rounded-md transition"
                >
                  Submit and Continue
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </main>
    </div>
  );
};

export default CommonProfile;
