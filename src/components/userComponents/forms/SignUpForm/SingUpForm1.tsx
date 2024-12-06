'use client'
import { signupUser } from "@/api/authApi/authApi";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import { FaUser, FaEnvelope, FaLock, FaPhone, FaRegAddressCard } from "react-icons/fa";
import { UserSignUpFormValues } from "@/interfaces/user";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

interface FormValues {
  fullName: string;
  email: string;
  password: string;
  aadhaar: string;
  phoneNumber: string;
  gender: string;
  dob: string;
}

const initialValues: UserSignUpFormValues = {
  fullName: "",
  email: "",
  password: "",
  aadhaar: "",
  phoneNumber: "",
  gender: "",
  dob: "",
};

const validationSchema = Yup.object({
  fullName: Yup.string().required("Full name is required"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  aadhaar: Yup.string().length(12, "Aadhaar number must be 12 digits").required("Aadhaar number is required"),
  phoneNumber: Yup.string().required("Phone number is required"),
  gender: Yup.string().required("Please select your gender"),
  dob: Yup.string().required("Date of birth is required"),
});

const SignupForm = () => {
  const router = useRouter()
  const handleSubmit = async(values: FormValues,{ setSubmitting, setStatus, resetForm }: FormikHelpers<UserSignUpFormValues>) => {
    console.log("Form submitted with values:", values);
    setSubmitting(true);
    const res = await signupUser(values)
    console.log(res)
    if(res.data?.success) {
      toast.success("Please verify your email with the OTP sent");
      router.push(
        `/otp-verification?email=${encodeURIComponent(values.email)}`

      );
    }
    else{
      toast.error('Sorry user with this email already exists. Please use different email address')
    }
    resetForm()
    setSubmitting(false);
  };

  return (
    <div className="h-full w-full flex justify-center items-center bg-customDark p-5">
      <div className="bg-customDark shadow-lg rounded-lg p-6 max-w-lg w-full">
        
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, errors, touched, isSubmitting, setFieldValue }) => (
            <Form className="space-y-1">
              {/* Full Name */}
              <div className="flex flex-col items-start w-full">
                <label htmlFor="fullName" className="text-sm text-gray-600">
                  Full Name
                </label>
                <div className="flex items-center w-full bg-gray-900 rounded-lg p-3">
                  <FaUser className="h-4 w-4 text-gray-400 mr-3" />
                  <Field
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="Cure Track"
                    className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none"
                  />
                </div>
                <ErrorMessage
                  name="fullName"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col items-start w-full">
                <label htmlFor="email" className="text-sm text-gray-600">
                  Email Address
                </label>
                <div className="flex items-center bg-gray-900 rounded-lg p-3 w-full">
                  <FaEnvelope className="h-4 w-4 text-gray-400 mr-3" />
                  <Field
                    id="email"
                    name="email"
                    type="email"
                    placeholder="curetrack@gmail.com"
                    className="w-full bg-transparent  text-white placeholder-gray-400 focus:outline-none"
                  />
                </div>
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              {/* Password */}
              <div className="flex flex-col items-start w-full">
                <label htmlFor="password" className="text-sm text-gray-600">
                  Password
                </label>
                <div className="flex items-center bg-gray-900 rounded-lg p-3 w-full">
                  <FaLock className="h-4 w-4 text-gray-400 mr-3" />
                  <Field
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none"
                  />
                </div>
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              {/* Aadhaar Number */}
              <div className="flex flex-col items-start w-full">
                <label htmlFor="aadhaar" className="text-sm text-gray-600">
                  Aadhaar No.
                </label>
                <div className="flex items-center bg-gray-900 rounded-lg p-3 w-full">
                <FaRegAddressCard className="h-4 w-4 text-gray-400 mr-3" />
                  <Field
                    id="aadhaar"
                    name="aadhaar"
                    type="text"
                    placeholder="0000 0000 0000"
                    className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none"
                  />
                </div>
                <ErrorMessage
                  name="aadhaar"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              {/* Phone Number */}
              <div className="flex flex-col items-start w-full">
                <label htmlFor="phoneNumber" className="text-sm text-gray-600">
                  Phone Number
                </label>
                <div className="flex items-center bg-gray-900 rounded-lg p-3 w-full">
                  <FaPhone className="h-4 w-4 text-gray-400 mr-3" />
                  <Field
                    id="phoneNumber"
                    name="phoneNumber"
                    type="text"
                    placeholder="+00 0342 0453 34"
                    className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none"
                  />
                </div>
                <ErrorMessage
                  name="phoneNumber"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              {/* Gender */}
              <div className="flex flex-col items-start text-gray-400">
                <label className="text-sm text-gray-600">Gender</label>
                <div className="flex space-x-4 mt-2">
                  <label className="flex items-center">
                    <Field
                      type="radio"
                      name="gender"
                      value="Male"
                      className="mr-2"
                    />
                    Male
                  </label>
                  <label className="flex items-center">
                    <Field
                      type="radio"
                      name="gender"
                      value="Female"
                      className="mr-2"
                    />
                    Female
                  </label>
                  <label className="flex items-center">
                    <Field
                      type="radio"
                      name="gender"
                      value="Other"
                      className="mr-2"
                    />
                    Other
                  </label>
                </div>
                <ErrorMessage
                  name="gender"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              {/* Date of Birth */}
              <div className="flex flex-col items-start w-full">
                <label htmlFor="dob" className="text-sm text-gray-600">
                  Date of Birth
                </label>
                <div className="flex items-center bg-gray-900 rounded-lg p-3 w-full">
                  <Field
                    id="dob"
                    name="dob"
                    type="date"
                    placeholder="Select your birth date"
                    className="w-full bg-transparent text-white placeholder-gray-900 focus:outline-none"
                  />
                  
                </div>
                <ErrorMessage
                  name="dob"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              <button
                type="submit"
                className={`w-full p-3 rounded-lg text-white font-semibold hover:bg-green-800 transition duration-300 ${isSubmitting ? "bg-green-800":"bg-green-600"}`}
              >
                {isSubmitting ? "Geting Started...": "Getting Start"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SignupForm;