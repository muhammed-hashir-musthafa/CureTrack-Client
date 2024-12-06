"use client";
import React, { useState } from "react";
import { Formik, Form, FormikHelpers } from "formik";
import InputField from "@/components/baseComponents/ui/InputFeild/InputFeild";
import FileInput from "@/components/baseComponents/ui/FileUpload/FileUpload";
import api from "@/lib/axiosIntercepter";
import { VendorProfileForm } from "@/interfaces/vendor";
import { getVendorProfileValidationSchema } from "../../forms/schemas/vendorProfileSchema";
import { capitalizeFirstLetter } from "@/utils/const";

const VendorProfile: React.FC<{ role: "hospital" | "lab" | "pharmacy" }> = ({
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

  const initialValues: VendorProfileForm = {
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

  const handleSubmit = async (
    values: VendorProfileForm,
    { setSubmitting, resetForm }: FormikHelpers<VendorProfileForm>
  ) => {};

  return (
    <div className="flex min-h-screen bg-black text-white">
      <main className="my-6 pb-14 flex-1 p-8 mx-auto max-w-6xl bg-neutral-950 rounded-xl shadow-lg border-gray-900 border">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 space-y-4 sm:space-y-0">
          <div>
            <h1 className="text-3xl font-bold">
              Welcome, {capitalizeFirstLetter(role)} Name 👋
            </h1>
            <p className="text-gray-400">Let's know more about your {role}</p>
          </div>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={getVendorProfileValidationSchema(
            capitalizeFirstLetter(role)
          )}
          onSubmit={handleSubmit}
        >
          {({ setFieldValue }) => (
            <Form className="space-y-8">
              <section>
                <h2 className="text-xl font-semibold mb-4">
                  {capitalizeFirstLetter(role)} Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InputField
                    name="name"
                    type="text"
                    placeholder={`${capitalizeFirstLetter(role)} Name`}
                    label={`${capitalizeFirstLetter(role)} Name`}
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
                  {capitalizeFirstLetter(role)} Address
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
                    Upload {capitalizeFirstLetter(role)} Image
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

export default VendorProfile;
