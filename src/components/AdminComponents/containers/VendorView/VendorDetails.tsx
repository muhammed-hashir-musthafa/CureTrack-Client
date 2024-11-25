"use client";
import { FC } from "react";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiCheckCircle,
  FiXCircle,
  FiClock,
  FiArrowLeft,
} from "react-icons/fi";

const dummyVendorData = {
  _id: "60b6c0f72f9b4e3a8e9f8cfc",
  name: "City Hospital",
  email: "contact@cityhospital.com",
  phoneNumber: 1234567890,
  city: "New York",
  address: {
    buildingNumber: "45",
    street: "Park Avenue",
    city: "New York",
    state: ["New York"],
    country: ["USA"],
    pincode: 10001,
  },
  vendorRole: ["hospital"],
  isActive: true,
  createdAt: "2024-01-15T09:00:00Z",
  license: "LIC12345",
  licenseExpiry: "2025-01-15T09:00:00Z",
  operationalHours: ["Mon-Fri: 9:00 AM - 6:00 PM"],
  serviceOffered: ["General Consultation", "Emergency Services"],
  image: "https://thumbs.dreamstime.com/z/hospital-building-modern-parking-lot-59693686.jpg?w=768",
  additionalData: {
    hospital: {
      bedCount: 200,
      departments: ["Cardiology", "Orthopedics", "Neurology"],
    },
    lab: {
      testsOffered: ["Blood Test", "X-Ray", "MRI"],
      labCertification: "ISO 9001 Certified",
    },
    pharmacy: {
      medicinesAvailable: 5000,
      deliveryService: true,
    },
  },
};

const VendorDetailPage: FC = () => {
  const vendor = dummyVendorData;

  const licenseStatus = new Date(vendor.licenseExpiry) > new Date();

  const renderVendorSpecificData = () => {
    switch (vendor.vendorRole[0]) {
      case "hospital":
        return (
          <div className="bg-neutral-900 p-4 rounded-md shadow col-span-1 sm:col-span-2">
            <h2 className="text-xl font-semibold mb-4">Hospital Details</h2>
            <p>
              <span className="font-semibold">Bed Count:</span>{" "}
              {vendor.additionalData.hospital.bedCount}
            </p>
            <p>
              <span className="font-semibold">Departments:</span>{" "}
              {vendor.additionalData.hospital.departments.join(", ")}
            </p>
          </div>
        );
      case "lab":
        return (
          <div className="bg-neutral-700 p-4 rounded-md shadow col-span-1 sm:col-span-2">
            <h2 className="text-xl font-semibold mb-4">Lab Details</h2>
            <p>
              <span className="font-semibold">Tests Offered:</span>{" "}
              {vendor.additionalData.lab.testsOffered.join(", ")}
            </p>
            <p>
              <span className="font-semibold">Certification:</span>{" "}
              {vendor.additionalData.lab.labCertification}
            </p>
          </div>
        );
      case "pharmacy":
        return (
          <div className="bg-neutral-700 p-4 rounded-md shadow col-span-1 sm:col-span-2">
            <h2 className="text-xl font-semibold mb-4">Pharmacy Details</h2>
            <p>
              <span className="font-semibold">Medicines Available:</span>{" "}
              {vendor.additionalData.pharmacy.medicinesAvailable}
            </p>
            <p>
              <span className="font-semibold">Delivery Service:</span>{" "}
              {vendor.additionalData.pharmacy.deliveryService
                ? "Available"
                : "Not Available"}
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-black text-neutral-200 p-6 sm:p-10">
      {/* Back Button */}
      <button
        className="flex items-center gap-2 text-neutral-400 hover:text-green-500"
        onClick={() => window.history.back()}
      >
        <FiArrowLeft className="w-5 h-5" />
        <span>Back</span>
      </button>

      {/* Vendor Image */}
      <div className="relative w-full h-80 bg-cover bg-center rounded-lg shadow-md overflow-hidden mt-6 mb-8">
        <img
          src={vendor.image}
          alt={vendor.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent"></div>
        <div className="absolute bottom-4 left-6">
          <h1 className="text-3xl font-bold text-green-500">{vendor.name}</h1>
          <p className="text-neutral-400">{vendor.vendorRole.join(", ")}</p>
        </div>
      </div>

      <div className="bg-neutral-950 p-6 sm:p-10 rounded-lg shadow-md">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Contact Details */}
          <div className="bg-neutral-900 p-4 rounded-md shadow">
            <h2 className="text-xl font-semibold mb-4">Contact Details</h2>
            <p className="flex items-center gap-2">
              <FiMail className="text-green-500" />
              {vendor.email}
            </p>
            <p className="flex items-center gap-2">
              <FiPhone className="text-green-500" />
              {vendor.phoneNumber}
            </p>
            <p className="flex items-center gap-2">
              <FiMapPin className="text-green-500" />
              {`${vendor.address.street}, ${vendor.address.city}, ${vendor.address.state}, ${vendor.address.country} - ${vendor.address.pincode}`}
            </p>
          </div>

          {/* License Details */}
          <div className="bg-neutral-900 p-4 rounded-md shadow">
            <h2 className="text-xl font-semibold mb-4">License Details</h2>
            <p>
              <span className="font-semibold">License Number:</span>{" "}
              {vendor.license}
            </p>
            <p>
              <span className="font-semibold">Expiry Date:</span>{" "}
              {new Date(vendor.licenseExpiry).toLocaleDateString()}
            </p>
            <p
              className={`mt-2 p-2 rounded-md ${
                licenseStatus
                  ? "bg-green-900 text-green-500"
                  : "bg-red-900 text-red-500"
              }`}
            >
              {licenseStatus ? "License Valid" : "License Expired"}
            </p>
          </div>

          {/* Approval Status */}
          <div className="bg-neutral-900 p-4 rounded-md shadow">
            <h2 className="text-xl font-semibold mb-4">Active Status</h2>
            <div
              className={`flex items-center gap-2 p-2 rounded-md ${
                vendor.isActive
                  ? "bg-green-900 text-green-500"
                  : "bg-red-900 text-red-500"
              }`}
            >
              {vendor.isActive ? (
                <>
                  <FiCheckCircle className="w-6 h-6" />
                  <span>Active</span>
                </>
              ) : (
                <>
                  <FiXCircle className="w-6 h-6" />
                  <span>Inactive</span>
                </>
              )}
            </div>
          </div>

          {/* Registration Date */}
          <div className="bg-neutral-900 p-4 rounded-md shadow">
            <h2 className="text-xl font-semibold mb-4">Registration Date</h2>
            <p>
              <FiClock className="text-green-500 inline-block mr-2" />
              {new Date(vendor.createdAt).toLocaleDateString()}
            </p>
          </div>

          {/* Operational Hours */}
          <div className="bg-neutral-900 p-4 rounded-md shadow col-span-1 sm:col-span-2">
            <h2 className="text-xl font-semibold mb-4">Operational Hours</h2>
            <ul className="list-disc pl-6">
              {vendor.operationalHours.map((hour, index) => (
                <li key={index}>{hour}</li>
              ))}
            </ul>
          </div>

          {/* Services Offered */}
          {/* <div className="bg-neutral-700 p-4 rounded-md shadow col-span-1 sm:col-span-2">
            <h2 className="text-xl font-semibold mb-4">Services Offered</h2>
            <ul className="list-disc pl-6">
              {vendor.serviceOffered.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div> */}

          {/* Vendor-Specific Data */}
          {renderVendorSpecificData()}
        </div>
      </div>
    </div>
  );
};

export default VendorDetailPage;
