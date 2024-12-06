export interface vendorSignupFormValues {
  name: string;
  email: string;
  phoneNumber: string;
  vendorRole: string;
  license: string;
  password: string;
}

export interface VendorProfileForm {
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
