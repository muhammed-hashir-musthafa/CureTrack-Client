import * as Yup from "yup";

export const getVendorProfileValidationSchema = (role: string) =>
  Yup.object({
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
