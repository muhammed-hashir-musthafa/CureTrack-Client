// "use client";
// import React, { useState } from "react";
// import { Formik, Form, FormikHelpers } from "formik";
// import * as Yup from "yup";
// import InputField from "@/components/baseComponents/ui/InputField/InputField";
// import FileInput from "@/components/baseComponents/ui/FileUpload/FileUpload";
// import ConsentCheckbox from "@/components/baseComponents/ui/ConsentCheckbox/ConsentCheckbox";
// import SingleDatePicker from "@/components/baseComponents/ui/SingleDatePicker/SingleDatePicker";

// const UserRegistration: React.FC = () => {
//   const [profilePic, setProfilePic] = useState<string | null>(null);

//   const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files[0]) {
//       const reader = new FileReader();
//       reader.onload = () => {
//         if (reader.readyState === 2) {
//           setProfilePic(reader.result as string);
//         }
//       };
//       reader.readAsDataURL(e.target.files[0]);
//     }
//   };

//   const initialValues = {
//     firstName: "",
//     lastName: "",
//     email: "",
//     phoneNumber: "",
//     gender: "",
//     dateOfBirth: "",
//     address: "",
//     identificationProof: null as File | null,
//     newPassword: "",
//     confirmPassword: "",
//     consentPrivacyPolicy: false,
//   };

//   const validationSchema = Yup.object({
//     firstName: Yup.string().required("First Name is required"),
//     lastName: Yup.string().required("Last Name is required"),
//     email: Yup.string().email("Invalid email format").required("Email is required"),
//     phoneNumber: Yup.string()
//       .matches(/^\+?[0-9]{1,4}?[0-9]{7,14}$/i, "Invalid phone number")
//       .required("Phone number is required"),
//     gender: Yup.string().required("Gender is required"),
//     dateOfBirth: Yup.date().required("Date of Birth is required"),
//     address: Yup.string().required("Address is required"),
//     identificationProof: Yup.mixed().required("Identification Proof is required"),
//     newPassword: Yup.string()
//       .min(6, "Password must be at least 6 characters")
//       .required("Password is required"),
//     confirmPassword: Yup.string()
//       .oneOf([Yup.ref("newPassword")], "Passwords must match")
//       .required("Confirm Password is required"),
//     consentPrivacyPolicy: Yup.boolean().oneOf([true], "You must agree to the privacy policy"),
//   });

//   const handleSubmit = async (values: typeof initialValues, { setSubmitting, resetForm }: FormikHelpers<typeof initialValues>) => {
//     try {
//       console.log("Form Submitted:", values);
//       alert("User Registration Successful!");
//       resetForm();
//     } catch (error) {
//       console.error("Submission error:", error);
//       alert("An error occurred during submission.");
//     } finally {
//       console.log('okay')
//       alert("register is working ")
//       setSubmitting(false);
//     }
//   };

//   return (
//     <div className="flex min-h-screen bg-gray-800 text-white">
//       <main className="my-6 pb-14 flex-1 p-8 mx-auto max-w-4xl bg-gray-900 rounded-xl shadow-lg ">
//         <div className="flex flex-col items-center mb-6 space-y-4">
//           <h1 className="text-3xl font-bold text-white">User Registration</h1>
//           <p className="text-white">Complete the form to create your account.</p>
//           <div className="relative">
//             <img
//               src={
//                 profilePic ||
//                 "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png"
//               }
//               alt="Profile"
//               className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-gray-300 object-cover"
//             />
//             <label
//               htmlFor="profilePic"
//               className="absolute bottom-0 right-0 bg-blue-600 hover:bg-blue-500 text-white p-2 rounded-full cursor-pointer"
//             >
//               +
//             </label>
//             <input
//               type="file"
//               id="profilePic"
//               accept="image/*"
//               className="hidden"
//               onChange={handleProfileChange}
//             />
//           </div>
//         </div>

//         <Formik
//           initialValues={initialValues}
//           validationSchema={validationSchema}
//           onSubmit={handleSubmit}
//         >
//           {({ setFieldValue }) => (
//             <Form className="space-y-8">
//               <section>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <InputField
//                     name="firstName"
//                     type="text"
//                     placeholder="First Name"
//                     label="First Name"
//                   />
//                   <InputField
//                     name="lastName"
//                     type="text"
//                     placeholder="Last Name"
//                     label="Last Name"
//                   />
//                   <InputField
//                     name="email"
//                     type="email"
//                     label="Email"
//                     placeholder="Email"
//                   />
//                   <InputField
//                     name="phoneNumber"
//                     type="text"
//                     label="Phone Number"
//                     placeholder="Phone Number"
//                   />
//                   <SingleDatePicker
//                     name="dateOfBirth"
//                     label="Date of Birth"
//                     placeholder="Select Date"
//                     containerClassName="text-black"
//                     inputClassName="text-black"
//                   />
//                   <div className="flex flex-col space-y-2">
//                     <label className="text-sm font-medium text-gray-700">Gender</label>
//                     <div className="flex items-center space-x-4">
//                       <label className="flex items-center">
//                         <input
//                           type="radio"
//                           name="gender"
//                           value="Male"
//                           className="mr-2"
//                         />
//                         Male
//                       </label>
//                       <label className="flex items-center">
//                         <input
//                           type="radio"
//                           name="gender"
//                           value="Female"
//                           className="mr-2"
//                         />
//                         Female
//                       </label>
//                       <label className="flex items-center">
//                         <input
//                           type="radio"
//                           name="gender"
//                           value="Other"
//                           className="mr-2"
//                         />
//                         Other
//                       </label>
//                     </div>
//                   </div>
//                   <InputField
//                     name="address"
//                     type="text"
//                     label="Address"
//                     placeholder="Your Address"
//                   />
//                 </div>
//               </section>

//               <section>
//                 <h2 className="text-lg font-semibold text-gray-700 mb-4">Verification Details</h2>
//                 <div className="grid grid-cols-1 gap-6">
//                   <FileInput
//                     name="identificationProof"
//                     label="Upload Identification Proof"
//                     placeholder="Upload File"
//                     setFieldValue={setFieldValue}
//                   />
//                 </div>
//               </section>

//               <section>
//                 <h2 className="text-lg font-semibold text-gray-700 mb-4">Set Password</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <InputField
//                     name="newPassword"
//                     type="password"
//                     label="New Password"
//                     placeholder="Enter Password"
//                   />
//                   <InputField
//                     name="confirmPassword"
//                     type="password"
//                     label="Confirm Password"
//                     placeholder="Re-enter Password"
//                   />
//                 </div>
//               </section>

//               <section>
//                 <ConsentCheckbox
//                   name="consentPrivacyPolicy"
//                   label="I agree to the Privacy Policy"
//                 />
//               </section>

//               <div className="text-center">
//                 <button
//                   type="submit"
//                   className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded-md transition"
//                 >
//                   Register
//                 </button>
//               </div>
//             </Form>
//           )}
//         </Formik>
//       </main>
//     </div>
//   );
// };

// export default UserRegistration;
"use client";
import React, { useState } from "react";
import { Formik, Form, Field, FormikHelpers } from "formik";
import * as Yup from "yup";
import InputField from "@/components/baseComponents/ui/InputField/InputField";
import FileInput from "@/components/baseComponents/ui/FileUpload/FileUpload";
import ConsentCheckbox from "@/components/baseComponents/ui/ConsentCheckbox/ConsentCheckbox";
import SingleDatePicker from "@/components/baseComponents/ui/SingleDatePicker/SingleDatePicker";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  gender: string;
  dateOfBirth: string;
  address: string;
  identificationProof: File | null;
  newPassword: string;
  confirmPassword: string;
  consentPrivacyPolicy: boolean;
}

const UserRegistration: React.FC = () => {
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

  const initialValues: FormValues = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    gender: "",
    dateOfBirth: "",
    address: "",
    identificationProof: null,
    newPassword: "",
    confirmPassword: "",
    consentPrivacyPolicy: false,
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    phoneNumber: Yup.string()
      .matches(/^\+?[0-9]{1,4}?[0-9]{7,14}$/i, "Invalid phone number")
      .required("Phone number is required"),
    gender: Yup.string().required("Gender is required"),
    dateOfBirth: Yup.string().required("Date of Birth is required"),
    address: Yup.string().required("Address is required"),
    identificationProof: Yup.mixed().required("Identification Proof is required"),
    newPassword: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("newPassword")], "Passwords must match")
      .required("Confirm Password is required"),
    consentPrivacyPolicy: Yup.boolean().oneOf([true], "You must agree to the privacy policy"),
  });

  const handleSubmit = async (
    values: FormValues,
    { setSubmitting, resetForm }: FormikHelpers<FormValues>
  ) => {
    try {
      console.log("Form Submitted:", values);
      alert("User Registration Successful!");
      resetForm();
    } catch (error) {
      console.error("Submission error:", error);
      alert("An error occurred during submission.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-900 text-gray-300">
      <main className="my-6 pb-14 flex-1 p-8 mx-auto max-w-4xl bg-gray-950 rounded-xl shadow-lg ">
        <div className="flex flex-col items-center mb-6 space-y-4">
          <h1 className="text-3xl font-bold text-gray-300">User Registration</h1>
          <p className="text-gray-600">Complete the form to create your account.</p>
          <div className="relative">
            <img
              src={
                profilePic ||
                "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png"
              }
              alt="Profile"
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-gray-300 object-cover"
            />
            <label
              htmlFor="profilePic"
              className="absolute bottom-0 right-0 bg-blue-600 hover:bg-blue-500 text-white p-2 rounded-full cursor-pointer"
            >
              +
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InputField name="firstName" type="text" placeholder="First Name" label="First Name" />
                  <InputField name="lastName" type="text" placeholder="Last Name" label="Last Name" />
                  <InputField name="email" type="email" label="Email" placeholder="Email" />
                  <InputField name="phoneNumber" type="text" label="Phone Number" placeholder="Phone Number" />
                  <SingleDatePicker name="dateOfBirth" label="Date of Birth" placeholder="Select Date" />
                  <InputField name="address" type="text" label="Address" placeholder="Your Address" />
                  <div className="flex flex-col space-y-2">
                    <label className="text-sm font-medium text-gray-700">Gender</label>
                    <div className="flex items-center space-x-4">
                      <label className="flex items-center">
                        <Field type="radio" name="gender" value="Male" className="mr-2" />
                        Male
                      </label>
                      <label className="flex items-center">
                        <Field type="radio" name="gender" value="Female" className="mr-2" />
                        Female
                      </label>
                      <label className="flex items-center">
                        <Field type="radio" name="gender" value="Other" className="mr-2" />
                        Other
                      </label>
                    </div>
                  </div>
                </div>
              </section>
              <section>
                <h2 className="text-lg font-semibold text-gray-700 mb-4">Set Password</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InputField
                    name="newPassword"
                    type="password"
                    label="New Password"
                    placeholder="Enter Password"
                  />
                  <InputField
                    name="confirmPassword"
                    type="password"
                    label="Confirm Password"
                    placeholder="Re-enter Password"
                  />
                </div>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-gray-700 mb-4">Verification Details</h2>
                <FileInput
                  name="identificationProof"
                  label="Upload Identification Proof"
                  placeholder="Upload File"
                  setFieldValue={setFieldValue}
                />
              </section>

             

              <ConsentCheckbox name="consentPrivacyPolicy" label="I agree to the Privacy Policy" />

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded-md transition"
                >
                  Register
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </main>
    </div>
  );
};

export default UserRegistration;