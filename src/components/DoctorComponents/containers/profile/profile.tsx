"use client";
import React, { useState } from "react";
import { Formik, Form, FormikHelpers } from "formik";
import * as Yup from "yup";
import { FaEdit } from "react-icons/fa";
import InputField from "@/components/baseComponents/ui/InputField/InputField";
import FileInput from "@/components/baseComponents/ui/FileUpload/FileUpload";
import ConsentCheckbox from "@/components/baseComponents/ui/ConsentCheckbox/ConsentCheckbox";
import SingleDatePicker from "@/components/baseComponents/ui/SingleDatePicker/SingleDatePicker";
import DropdownField from "@/components/baseComponents/ui/DropdownField/DropdownField";
import { DoctorProfileForm } from "@/interfaces/doctor";
import api from "@/lib/axiosIntercepter";

const ProfilePage: React.FC = () => { 
  const [profilePic, setProfilePic] = useState<string | null>(null);

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setProfilePic(reader.result as string);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const initialValues: DoctorProfileForm = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    qualification: "",
    gender: "",
    primarySpecialization: "",
    medicalRegistrationNumber: "",
    IMAId: "",
    medicalUniversity: "",
    yearsOfExperience: "",
    hospitalName: "",
    hospitalAddress: "",
    consultationFees: "",
    document: null,
    medicalRegistrationCertificate: null,
    consentTreatment: false,
    consentDisclosure: false,
    privacyPolicy: false,
    dateOfBirth: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    phoneNumber: Yup.string()
      .matches(/^\+?[0-9]{1,4}?[0-9]{7,14}$/i, "Invalid phone number")
      .required("Phone number is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    qualification: Yup.string(),
    primarySpecialization: Yup.string(),
    medicalRegistrationNumber: Yup.string(),
    IMAId: Yup.string().required("IMA Id is required"),
    medicalUniversity: Yup.string(),
    yearsOfExperience: Yup.number(),
    hospitalName: Yup.string(),
    hospitalAddress: Yup.string(),
    dateOfBirth: Yup.date(),
    consultationFees: Yup.number().optional(),
    document: Yup.mixed().required("Upload Document is required"),
    medicalRegistrationCertificate: Yup.mixed().required(
      "Upload Medical Registration Certificate is required"
    ),
    consentTreatment: Yup.boolean().oneOf([true], "Consent is required"),
    consentDisclosure: Yup.boolean().oneOf([true], "Consent is required"),
    privacyPolicy: Yup.boolean().oneOf([true], "Acknowledgement is required"),
  });

  const genderOptions = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
    { value: "Other", label: "Other" },
  ];

  const handleSubmit = async (
    values: DoctorProfileForm,
    { setSubmitting, resetForm }: FormikHelpers<DoctorProfileForm>
  ) => {
    try {
      const formData = new FormData();
      Object.keys(values).forEach((key) => {
        const value = values[key as keyof DoctorProfileForm];
        if (value instanceof File) {
          formData.append(key, value);
        } else {
          formData.append(key, String(value));
        }
      });

      const response = await api.post("/doctor/profile", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data.success) {
        alert("Profile submitted successfully");
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
            <h1 className="text-3xl font-bold">Welcome, Doctor Name 👋</h1>
            <p className="text-gray-400">Let's know more about yourself</p>
          </div>
          <div className="relative flex-shrink-0">
            <img
              src={
                profilePic ||
                "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png"
              }
              alt="Profile"
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-gray-700 object-cover"
            />
            <label
              htmlFor="profilePic"
              className="absolute bottom-0 right-0 bg-green-700 hover:bg-green-600 text-white p-2 rounded-full cursor-pointer"
            >
              <FaEdit />
            </label>
            <input
              type="file"
              id="profilePic"
              accept="image/*"
              className="hidden"
              onChange={handleProfileChange}
            />
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
                  Doctor Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InputField
                    name="firstName"
                    type="text"
                    placeholder="First Name"
                    label="First Name"
                  />
                  <InputField
                    name="lastName"
                    type="text"
                    placeholder="Last Name"
                    label="Last Name"
                  />
                  <InputField
                    name="phoneNumber"
                    label="Phone Number"
                    type="text"
                    placeholder="Phone Number"
                  />
                  <InputField
                    name="email"
                    type="email"
                    label="Email"
                    placeholder="Email"
                  />
                  <SingleDatePicker
                    name="dateOfBirth"
                    label="Date Of Birth"
                    placeholder="Select Date"
                    containerClassName="text-white"
                    inputClassName="text-white"
                  />
                  <DropdownField
                    name="gender"
                    label="Gender"
                    options={genderOptions}
                    placeholder="Select Gender"
                  />
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">
                  Professional Details
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InputField
                    name="qualification"
                    type="text"
                    label="Medical Qualification"
                    placeholder="Qualification"
                  />
                  <InputField
                    name="primarySpecialization"
                    type="text"
                    label="Primary Specialization"
                    placeholder="Primary Specialization"
                  />
                  <InputField
                    name="medicalRegistrationNumber"
                    type="text"
                    label="Medical Registration Number"
                    placeholder="Medical Registration Number"
                  />
                  <InputField
                    name="IMAId"
                    type="text"
                    label="IMA Id"
                    placeholder="IMA Id"
                  />
                  <InputField
                    name="medicalUniversity"
                    type="text"
                    label="Medical University"
                    placeholder="Medical University"
                  />
                  <InputField
                    name="yearsOfExperience"
                    type="text"
                    label="Years of Experience"
                    placeholder="Total Experience"
                  />
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">
                  Practice Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InputField
                    name="hospitalName"
                    type="text"
                    label="Hospital Name"
                    placeholder="Hospital Name"
                  />
                  <InputField
                    name="hospitalAddress"
                    type="text"
                    label="Hospital Address"
                    placeholder="Hospital Address"
                  />
                  <InputField
                    name="consultationFees"
                    type="text"
                    label="Consultation Fees (Optional)"
                    placeholder="Consultation Fees"
                  />
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">Uploads</h2>
                <div className="grid grid-cols-1 gap-6">
                  <h2 className="text-base font-semibold text-gray-300 mt-2">
                    Upload Certificate Document
                  </h2>
                  <FileInput
                    name="document"
                    label="Upload Certificate Document"
                    placeholder="Select a file"
                    setFieldValue={setFieldValue}
                  />
                  <h2 className="text-base font-semibold text-gray-300 mt-2">
                    Upload Medical Registration Certificate
                  </h2>
                  <FileInput
                    name="medicalRegistrationCertificate"
                    label="Upload Medical Registration Certificate"
                    placeholder="Select a file"
                    setFieldValue={setFieldValue}
                  />
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">
                  Consent and Privacy
                </h2>
                <div className="space-y-3">
                  <ConsentCheckbox
                    name="consentTreatment"
                    label="I consent to receive treatment for my health condition."
                  />
                  <ConsentCheckbox
                    name="consentDisclosure"
                    label="I consent to the use and disclosure of my health information for treatment purposes."
                  />
                  <ConsentCheckbox
                    name="privacyPolicy"
                    label="I acknowledge that I have reviewed and agree to the privacy policy."
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

export default ProfilePage;
