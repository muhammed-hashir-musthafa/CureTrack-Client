"use client";
import { useState, useEffect } from "react";
import SearchBar from "@/components/baseComponents/ui/SearchBar/SearchBar";
import Dropdown from "@/components/baseComponents/ui/Drop-Down/DropDown";
import Link from 'next/link';

const hospitals = [
  {
    id: 1,
    name: "City Care Hospital",
    location: "New York, USA",
    contact: "+1 123 456 789",
    description: "State-of-the-art facilities and expert care.",
    rating: 4.5,
    specialties: ["Cardiology", "Neurology", "Orthopedics"],
    image:
      "https://media.bizj.us/view/img/12582276/dsc0088*1200xx5333-4000-334-0.jpg",
  },
  {
    id: 2,
    name: "Sunrise Medical Center",
    location: "Los Angeles, USA",
    contact: "+1 987 654 321",
    description: "Comprehensive healthcare services.",
    rating: 4.2,
    specialties: ["Pediatrics", "Gynecology", "Dermatology"],
    image:
      "https://cdn.apollohospitals.com/dev-apollohospitals/2022/05/apollo-proton_mobile-613c4b376e4c8-1-3.jpg",
  },
  {
    id: 3,
    name: "Green Valley Hospital",
    location: "San Francisco, USA",
    contact: "+1 456 789 123",
    description: "Focused on patient-centered care.",
    rating: 4.8,
    specialties: ["Psychiatry", "Oncology", "General Surgery"],
    image:
      "https://www.hfmmagazine.com/sites/default/files/hfmmagazine/ext/resources/images/2024/WebEx/OrlandoJewett_exterior.png",
  },
  {
    id: 4,
    name: "Ocean View Clinic",
    location: "Miami, USA",
    contact: "+1 321 654 987",
    description: "Bringing healthcare closer to you.",
    rating: 4.7,
    specialties: ["Urology", "ENT", "Radiology"],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGU0EoudxvU-zb_w1SYvVZwsJk_Hby27zACCJx1ZvjA4RZERG6SkKEeKN4biPzj35zr4o&usqp=CAU",
  },
];

const Hospitals = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("");

  const specialties = [
    ...new Set(hospitals.flatMap((hospital) => hospital.specialties)),
  ];

  // Filter hospitals based on search term and selected specialty
  const filteredHospitals = hospitals.filter((hospital) => {
    const matchesSearch =
      hospital.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hospital.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty =
      !selectedSpecialty || hospital.specialties.includes(selectedSpecialty);

    return matchesSearch && matchesSpecialty;
  });

  if (!isMounted) {
    return null; // Return null or a loading state during SSR
  }

  return (
    <div className="min-h-screen bg-black text-gray-200 py-8 px-4">
      {/* Header */}
      <header className="text-center mt-10">
        <h1 className="text-5xl font-extrabold text-green-500 mb-4">
          Explore Our Hospitals
        </h1>
        <p className="text-lg text-gray-400">
          Find the best hospitals near you with trusted specialties and
          services.
        </p>
      </header>

      {/* Search and Filter Section */}
      <div className="max-w-5xl mx-auto mt-10 flex items-center justify-between gap-4">
        {/* Search Bar */}
        <div className="w-full sm:w-1/2">
          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by name or location"
          />
        </div>

        {/* Filter Section */}

        {/* Specialty Dropdown */}
        <div className="w-full sm:w-1/3">
          <Dropdown
            value={selectedSpecialty}
            options={specialties}
            onChange={(selectedOption) =>
              setSelectedSpecialty(selectedOption.value)
            }
          />
        </div>
      </div>

      {/* Hospital Cards */}
      <div className="max-w-7xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredHospitals.map((hospital) => (
          <div
            key={hospital.id}
            className="bg-neutral-900 shadow-lg rounded-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300"
          >
            {/* Image */}
            <div className="relative">
              <img
                src={hospital.image}
                alt={hospital.name}
                className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-0 transition"></div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h2 className="text-2xl font-bold text-white mb-2">
                {hospital.name}
              </h2>
              <p className="text-sm text-gray-400 mb-2">
                <strong className="text-gray-300">Location:</strong>{" "}
                {hospital.location}
              </p>
              <p className="text-sm text-gray-400 mb-2">
                <strong className="text-gray-300">Contact:</strong>{" "}
                {hospital.contact}
              </p>
              <p className="text-sm text-gray-400 mb-2">
                <strong className="text-gray-300">Rating:</strong>{" "}
                {hospital.rating} ⭐
              </p>
              <p className="text-sm text-gray-400 mb-2">
                <strong className="text-gray-300">Specialties:</strong>{" "}
                {hospital.specialties.join(", ")}
              </p>
              <p className="text-gray-300 mt-4">{hospital.description}</p>

              {/* View Details Button */}
              <Link href={`/hospitals/${hospital.id}`}>
                <button className="mt-6 w-full py-2 text-white font-bold bg-gradient-to-r from-green-600 to-green-400 rounded-md hover:shadow-lg hover:scale-105 transition transform">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}

        {/* No Results Message */}
        {filteredHospitals.length === 0 && (
          <div className="col-span-full text-center">
            <p className="text-xl text-gray-400">
              No hospitals match your search or filter criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hospitals;
