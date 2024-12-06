import VendorProfile from "@/components/vendorComponents/base/containers/VendorProfile/VendorProfile";
import React from "react";

interface VendorProfileProps {
  params?: { vendor?: string };
}

const VendorProfilePage: React.FC<VendorProfileProps> = ({ params }) => {
  const vendor = params?.vendor;

  const vendorType: "undefined" | "hospital" | "lab" | "pharmacy" =
    vendor === "hospital" || vendor === "lab" || vendor === "pharmacy"
      ? vendor
      : "undefined";

  return (
    <div className="w-full h-full bg-black text-white">
      {vendorType !== "undefined" ? <VendorProfile role={vendorType} /> : null}
    </div>
  );
};

export default VendorProfilePage;
