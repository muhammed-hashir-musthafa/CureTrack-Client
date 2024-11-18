"use client";
import React from "react";
import { Formik, Field, Form, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import InputField from "@/components/baseComponents/ui/InputField/InputField";
import FileInput from "@/components/baseComponents/ui/FileUpload/FileUpload";
import SingleDatePicker from "@/components/baseComponents/ui/SingleDatePicker/singleDatePicker";
import ConsentCheckbox from "@/components/baseComponents/ui/ConsentCheckbox/ConsentCheckbox";

const HomePage: React.FC = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    qualification: "",
    gender: "",
    primarySpecialization: "",
    secondarySpecialization: "",
    medicalRegistrationNumber: "",
    medicalSchool: "",
    yearsOfExperience: "",
    hospitalName: "",
    hospitalAddress: "",
    consultationFees: "",
    languagesSpoken: "",
    insuranceCompany: "",
    currentMedications: "",
    pastMedicalHistory: "",
    document: null,
    medicalRegistrationCertificate: null,
    profile: null,
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
    qualification: Yup.string().required("Qualification is required"),
    primarySpecialization: Yup.string().required(
      "Primary Specialization is required"
    ),
    secondarySpecialization: Yup.string().notRequired(),
    medicalRegistrationNumber: Yup.string().required(
      "Medical Registration Number is required"
    ),
    medicalSchool: Yup.string().notRequired(),
    yearsOfExperience: Yup.number().required(
      "Years of Experience are required"
    ),
    hospitalName: Yup.string().required("Hospital/Clinic Name is required"),
    hospitalAddress: Yup.string().required(
      "Hospital/Clinic Address is required"
    ),
    consultationFees: Yup.number().optional(),
    languagesSpoken: Yup.string().notRequired(),
    insuranceCompany: Yup.string().required("Insurance company is required"),
    currentMedications: Yup.string().notRequired(),
    pastMedicalHistory: Yup.string().notRequired(),
    document: Yup.mixed().required("Upload Document is required"),
    medicalRegistrationCertificate: Yup.mixed().required(
      "Upload Medical Registration Certificate is required"
    ),
    profile: Yup.mixed().required("Profile photo is required"),
    consentTreatment: Yup.boolean().oneOf([true], "Consent is required"),
    consentDisclosure: Yup.boolean().oneOf([true], "Consent is required"),
    privacyPolicy: Yup.boolean().oneOf([true], "Acknowledgement is required"),
    dateOfBirth: Yup.date().required("Date of birth is required"),
  });

  const handleSubmit = (
    values: typeof initialValues,
    { setSubmitting, setStatus, resetForm }: FormikHelpers<typeof initialValues>
  ) => {
    console.log("Form data:", values);
    resetForm();
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <main className="flex-1 p-8 mx-auto max-w-6xl bg-gray-900 rounded-xl shadow-lg border-gray-700 border">
        <h1 className="text-3xl font-bold mb-4 text-center">Welcome 👋</h1>
        <p className="text-center mb-8 text-gray-400">
          Let's know more about yourself
        </p>

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
                  <div>
                    <InputField
                      name="firstName"
                      type="text"
                      placeholder="First Name"
                      label="First Name"
                    />
                  </div>
                  <div>
                    <InputField
                      name="lastName"
                      label="Last Name"
                      type="text"
                      placeholder="Last Name"
                    />
                  </div>
                  <div>
                    <InputField
                      name="phoneNumber"
                      label="Phone Number"
                      type="text"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div>
                    <InputField
                      name="email"
                      type="email"
                      label="Email"
                      placeholder="Email"
                    />
                  </div>

                  <div>
                    <SingleDatePicker
                      name="dateOfBirth"
                      label="Date Of Birth"
                      placeholder="Select Date"
                      containerClassName="text-white"
                      inputClassName="text-white"
                    />
                  </div>
                  <div>
                    <label className="block mb-1 text-gray-500 text-sm">
                      Gender
                    </label>
                    <Field
                      name="gender"
                      as="select"
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </Field>
                    <ErrorMessage
                      name="gender"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">
                  Professional Details
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <InputField
                      name="qualification"
                      type="text"
                      label="Medical Qualification"
                      placeholder="Qualification"
                    />
                  </div>
                  <div>
                    <InputField
                      name="primarySpecialization"
                      type="text"
                      label="Primary Specialization"
                      placeholder="Primary Specialization"
                    />
                  </div>

                  <div>
                    <InputField
                      name="medicalRegistrationNumber"
                      type="text"
                      label="Medical Registration Number"
                      placeholder="Medical Registration Number"
                    />
                  </div>
                  <div>
                    <InputField
                      name="medicalSchool"
                      type="text"
                      label="Medical University"
                      placeholder="Medical University"
                    />
                  </div>
                  <div>
                    <InputField
                      name="yearsOfExperience"
                      type="text"
                      label="Years of Experience"
                      placeholder="Total Experience"
                    />
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">
                  Practice Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <InputField
                      name="hospitalName"
                      type="text"
                      label="Hospital/Clinic Name"
                      placeholder="e.g., XYZ Hospital"
                    />
                  </div>
                  <div>
                    <InputField
                      name="hospitalAddress"
                      type="text"
                      label="Hospital/Clinic Address"
                      placeholder="e.g., 123 Main Street"
                    />
                  </div>
                  <div>
                    <InputField
                      name="consultationFees"
                      type="text"
                      label="Consultation Fees (Optional)"
                      placeholder="e.g., 100"
                    />
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">Uploads</h2>
                <div className="grid grid-cols-1 gap-6">
                  <h2 className="text-xl font-semibold mt-4">
                    Upload Certificate Document
                  </h2>
                  <FileInput
                    name="document"
                    label="Upload Certificate Document"
                    placeholder="Select a file"
                    setFieldValue={setFieldValue}
                  />
                  <h2 className="text-xl font-semibold mt-4">
                    Upload Medical Registration Certificate
                  </h2>
                  <FileInput
                    name="medicalRegistrationCertificate"
                    label="Upload Medical Registration Certificate"
                    placeholder="Select a file"
                    setFieldValue={setFieldValue}
                  />
                  <h2 className="text-xl font-semibold   mt-4">
                    Upload Profile Photo
                  </h2>
                  <FileInput
                    name="profile"
                    label="Upload Profile Photo"
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

export default HomePage;
