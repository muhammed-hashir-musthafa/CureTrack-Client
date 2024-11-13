"use client";
import { useRouter } from "next/navigation";
import { useMemo } from "react";

// Mock vendors array
const vendors = [
  {
    vendor: {
      name: "Nila",
      initials: "PB",
      place: "Calicut",
      vendorType: "Hospital",
      bgColor: "bg-lime-200",
      contact: "90876 12534",
    },
    date: "Jan 4, 2022",
    status: {
      text: "Approved",
      color: "text-emerald-500",
      bgColor: "bg-emerald-950",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 text-emerald-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      ),
    },
  },
];

// Status Icon Component
const StatusIcon = ({ icon }) => <span className="flex-shrink-0">{icon}</span>;

const VendorDetails = () => {
  const router = useRouter();

  // Memoize the vendor data for optimized performance
  const vendor = useMemo(() => vendors[0], []);

  if (!vendor) return <p className="text-center text-neutral-400">Vendor not found.</p>;

  const {
    vendor: { name, initials, place, vendorType, bgColor, contact },
    date,
    status: { text, color, bgColor: statusBgColor, icon },
  } = vendor;

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-900 text-neutral-200">
      <div className="p-8 w-full max-w-lg bg-neutral-800 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Vendor Details</h1>
        
        <div className="flex items-center gap-4 mb-6">
          <div
            className={`w-12 h-12 flex items-center justify-center rounded-full ${bgColor} text-neutral-900 font-semibold`}
          >
            {initials}
          </div>
          <div>
            <h2 className="text-xl font-bold">{name}</h2>
            <p className="text-sm text-neutral-400">{vendorType}</p>
          </div>
        </div>

        <div className="space-y-4">
          <DetailItem label="Place" content={place} />
          <DetailItem label="Contact" content={contact} />
          <DetailItem label="Requested Date" content={date} />
        </div>

        <div className="mt-6 flex items-center">
          <span className="font-semibold text-neutral-400 mr-2">Status:</span>
          <div className={`flex items-center gap-2 px-3 py-1 rounded-full ${statusBgColor}`}>
            <StatusIcon icon={icon} />
            <span className={`${color} font-semibold`}>{text}</span>
          </div>
        </div>

        <button
          className="w-full mt-8 py-3 bg-emerald-500 text-white rounded-md font-semibold hover:bg-emerald-600 transition duration-200"
          onClick={() => router.push("/admin/vendors-list")}
        >
          Back to Vendors
        </button>
      </div>
    </div>
  );
};

// DetailItem Component for cleaner markup
const DetailItem = ({ label, content }) => (
  <div>
    <h3 className="font-semibold text-neutral-400">{label}</h3>
    <p>{content || "N/A"}</p>
  </div>
);

export default VendorDetails;
