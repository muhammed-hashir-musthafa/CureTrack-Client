"use client";

import { useState, useEffect } from "react";
import { FaAmbulance, FaLungs, FaProcedures, FaTint, FaEdit, FaPlus, FaTrash } from "react-icons/fa";
import axios from 'axios';

interface Facility {
  id: number;
  name: string;
  value: number | string;
  type: "number" | "text";
  editable: boolean;
}

interface Ambulance {
  id: number;
  vehicleNo: string;
  vehicleType: string;
  driverName: string;
  contact: string;
}

const FacilitiesAvailable = () => {
  const [facilities, setFacilities] = useState<Facility[]>([]);
  const [ambulances, setAmbulances] = useState<Ambulance[]>([]);
  const [editMode, setEditMode] = useState<{ [key: number]: boolean }>({});
  const [newFacilityName, setNewFacilityName] = useState<string>("");

  useEffect(() => {
    // Fetch data from API when the component mounts
    const fetchData = async () => {
      try {
        const facilitiesResponse = await axios.get('/api/facilities');  // Replace with your API endpoint
        const ambulancesResponse = await axios.get('/api/ambulances'); // Replace with your API endpoint
        setFacilities(facilitiesResponse.data);
        setAmbulances(ambulancesResponse.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);

  const handleFacilityUpdate = async (id: number, value: number | string) => {
    try {
      // Update the facility on the backend
      await axios.put(`/api/facilities/${id}`, { value });
      setFacilities(
        facilities.map((facility) =>
          facility.id === id ? { ...facility, value } : facility
        )
      );
    } catch (error) {
      console.error("Error updating facility: ", error);
    }
  };

  const handleAmbulanceUpdate = async (
    id: number,
    field: keyof Ambulance,
    value: string
  ) => {
    try {
      // Update the ambulance on the backend
      await axios.put(`/api/ambulances/${id}`, { [field]: value });
      setAmbulances(
        ambulances.map((ambulance) =>
          ambulance.id === id ? { ...ambulance, [field]: value } : ambulance
        )
      );
    } catch (error) {
      console.error("Error updating ambulance: ", error);
    }
  };

  const toggleEditMode = (id: number) => {
    setEditMode((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const addNewAmbulance = async () => {
    try {
      const newAmbulance: Ambulance = {
        id: ambulances.length + 1,
        vehicleNo: "",
        vehicleType: "",
        driverName: "",
        contact: "",
      };
      const response = await axios.post('/api/ambulances', newAmbulance); // Replace with your API endpoint
      setAmbulances((prev) => [...prev, response.data]);
      setEditMode((prev) => ({ ...prev, [response.data.id]: true }));
    } catch (error) {
      console.error("Error adding new ambulance: ", error);
    }
  };

  const addNewFacility = async () => {
    if (newFacilityName.trim() !== "") {
      const newFacility: Facility = {
        id: facilities.length + 1, // Assuming the ID will be assigned by the backend
        name: newFacilityName,
        value: "Not Available",
        type: "text",
        editable: true,
      };
      try {
        const response = await axios.post('/api/facilities', newFacility); // Replace with your API endpoint
        setFacilities((prev) => [...prev, response.data]);
        setNewFacilityName(""); // Reset input
        setEditMode((prev) => ({ ...prev, [response.data.id]: true }));
      } catch (error) {
        console.error("Error adding new facility: ", error);
      }
    }
  };

  const deleteFacility = async (id: number) => {
    try {
      await axios.delete(`/api/facilities/${id}`); // Replace with your API endpoint
      setFacilities((prev) => prev.filter((facility) => facility.id !== id));
      setEditMode((prev) => {
        const { [id]: _, ...rest } = prev;
        return rest;
      });
    } catch (error) {
      console.error("Error deleting facility: ", error);
    }
  };

  const deleteAmbulance = async (id: number) => {
    try {
      await axios.delete(`/api/ambulances/${id}`); // Replace with your API endpoint
      setAmbulances((prev) => prev.filter((ambulance) => ambulance.id !== id));
      setEditMode((prev) => {
        const { [id]: _, ...rest } = prev;
        return rest;
      });
    } catch (error) {
      console.error("Error deleting ambulance: ", error);
    }
  };

  return (
    <div className="bg-black text-white p-8 flex flex-col w-full h-full">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold">Facilities Overview</h1>
          <p className="text-lg text-gray-400">City Hospital</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
        {facilities.map((facility) => (
          <div className="bg-gray-800 p-6 rounded-lg shadow-md" key={facility.id}>
            <div className="flex items-center space-x-4">
              {facility.name === "Blood Units" && (
                <FaTint className="text-4xl text-red-500" />
              )}
              {facility.name === "Ventilators" && (
                <FaLungs className="text-4xl text-green-500" />
              )}
              {facility.name === "ICU Beds" && (
                <FaProcedures className="text-4xl text-blue-500" />
              )}

              <div>
                <h3 className="text-xl font-bold">{facility.name}</h3>
                {editMode[facility.id] ? (
                  <div className="flex space-x-2 items-center">
                    <input
                      type={facility.type}
                      value={facility.value}
                      onChange={(e) =>
                        handleFacilityUpdate(facility.id, e.target.value)
                      }
                      className="w-full mt-1 p-1 rounded-md bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                    <button
                      onClick={() => toggleEditMode(facility.id)}
                      className="bg-green-600 text-white p-1 rounded-md"
                    >
                      Save
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center justify-between">
                    <span>{facility.value}</span>
                    <button
                      onClick={() => toggleEditMode(facility.id)}
                      className="text-emerald-500"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => deleteFacility(facility.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <FaTrash />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between bg-gray-800 p-4 rounded-lg shadow-md mb-8">
        <input
          type="text"
          value={newFacilityName}
          onChange={(e) => setNewFacilityName(e.target.value)}
          placeholder="New Facility"
          className="bg-gray-900 text-white p-2 rounded-md w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={addNewFacility}
          className="bg-blue-600 text-white p-2 rounded-md flex items-center space-x-2"
        >
          <FaPlus /> Add Facility
        </button>
      </div>

      <div className="bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Ambulance Details</h2>
        <table className="w-full text-left text-gray-300">
          <thead>
            <tr className="bg-gray-900 text-sm font-medium text-green-600">
              <th className="p-4">Vehicle Number</th>
              <th className="p-4">Vehicle Type</th>
              <th className="p-4">Driver Name</th>
              <th className="p-4">Contact Number</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody className="text-sm divide-y divide-gray-700">
            {ambulances.map((ambulance) => (
              <tr
                key={ambulance.id}
                className={`hover:bg-gray-700 ${
                  ambulance.id % 2 === 0 ? "bg-gray-800" : "bg-gray-900"
                }`}
              >
                <td className="p-4">
                  {editMode[ambulance.id] ? (
                    <input
                      type="text"
                      value={ambulance.vehicleNo}
                      onChange={(e) =>
                        handleAmbulanceUpdate(
                          ambulance.id,
                          "vehicleNo",
                          e.target.value
                        )
                      }
                      className="w-full bg-gray-900 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  ) : (
                    <span>{ambulance.vehicleNo}</span>
                  )}
                </td>
                <td className="p-4">
                  {editMode[ambulance.id] ? (
                    <input
                      type="text"
                      value={ambulance.vehicleType}
                      onChange={(e) =>
                        handleAmbulanceUpdate(
                          ambulance.id,
                          "vehicleType",
                          e.target.value
                        )
                      }
                      className="w-full bg-gray-900 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  ) : (
                    <span>{ambulance.vehicleType}</span>
                  )}
                </td>
                <td className="p-4">
                  {editMode[ambulance.id] ? (
                    <input
                      type="text"
                      value={ambulance.driverName}
                      onChange={(e) =>
                        handleAmbulanceUpdate(
                          ambulance.id,
                          "driverName",
                          e.target.value
                        )
                      }
                      className="w-full bg-gray-900 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  ) : (
                    <span>{ambulance.driverName}</span>
                  )}
                </td>
                <td className="p-4">
                  {editMode[ambulance.id] ? (
                    <input
                      type="text"
                      value={ambulance.contact}
                      onChange={(e) =>
                        handleAmbulanceUpdate(
                          ambulance.id,
                          "contact",
                          e.target.value
                        )
                      }
                      className="w-full bg-gray-900 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  ) : (
                    <span>{ambulance.contact}</span>
                  )}
                </td>
                <td className="p-4 flex space-x-2">
                  <button
                    onClick={() => toggleEditMode(ambulance.id)}
                    className="bg-emerald-600 text-white p-2 rounded-md"
                  >
                    {editMode[ambulance.id] ? "Save" : <FaEdit />}
                  </button>
                  <button
                    onClick={() => deleteAmbulance(ambulance.id)}
                    className="bg-red-600 text-white p-2 rounded-md"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <button
          onClick={addNewAmbulance}
          className="mt-4 bg-blue-600 text-white p-2 rounded-md flex items-center space-x-2"
        >
          <FaPlus /> Add New Ambulance
        </button>
      </div>
    </div>
  );
};

export default FacilitiesAvailable;
