"use client";
import { useState } from "react";
import { MdStore, MdMedicalServices, MdPeople } from "react-icons/md";
import StatCard from "@/components/baseComponents/ui/StatCard/StatCard";

const Dashboard = () => {
  const [recentActivities, setRecentActivities] = useState([
    {
      type: "consultation",
      message: "Completed a normal consultation with patient John Doe.",
      time: "5 mins ago",
    },
    {
      type: "consultation",
      message: "Scheduled a video consultation with patient Jane Smith.",
      time: "15 mins ago",
    },
    {
      type: "consultation",
      message: "Completed an emergency consultation with patient Alex Brown.",
      time: "20 mins ago",
    },
    {
      type: "consultation",
      message: "Cancelled a follow-up consultation with patient Mary Johnson.",
      time: "30 mins ago",
    },
    {
      type: "prescription",
      message: "Prescribed medication for patient Sarah Lee.",
      time: "45 mins ago",
    },
    {
      type: "lab",
      message: "Reviewed lab results for patient David Wright.",
      time: "1 hour ago",
    },
    {
      type: "follow-up",
      message: "Scheduled a follow-up consultation with patient Emma Green.",
      time: "2 hours ago",
    },
    {
      type: "consultation",
      message: "Completed a consultation for patient Chris Roberts.",
      time: "3 hours ago",
    },
  ]);

  const [appointments, setAppointments] = useState([
    {
      type: "completed",
      message: "Completed consultation with patient Alice Brown.",
      time: "10 mins ago",
    },
    {
      type: "scheduled",
      message: "Scheduled a consultation with patient Bob Miller.",
      time: "1 hour ago",
    },
    {
      type: "cancelled",
      message: "Cancelled consultation with patient Charlie Green.",
      time: "2 hours ago",
    },
  ]);

  return (
    <div className="bg-black text-white p-8 flex h-full w-full flex-col">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold">Welcome Back, Dr. Name</h1>
          <p className="text-lg text-gray-400">Here's an overview of your platform.</p>
        </div>
        <button className="bg-green-600 text-white px-4 py-2 rounded-md shadow-md">
          Create Report
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
        <StatCard icon={MdStore} count={94} label="Total Completed Consultations" />
        <StatCard icon={MdMedicalServices} count={32} label="Total Scheduled Consultations" />
        <StatCard icon={MdPeople} count={56} label="Total Cancelled Consultations" />
      </div>

      {/* Recent Activity Feed */}
      <div className="bg-gray-800 p-6 rounded-md shadow-lg mb-8">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <div className="divide-y divide-gray-700">
          {recentActivities.map((activity, index) => (
            <div key={index} className="flex justify-between py-3">
              <p className="text-gray-300">{activity.message}</p>
              <span className="text-sm text-gray-500">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Appointments Status */}
      <div className="bg-gray-800 p-6 rounded-md shadow-lg mb-8">
        <h2 className="text-xl font-semibold mb-4">Recent Appointments</h2>
        <div className="divide-y divide-gray-700">
          {appointments.map((appointment, index) => (
            <div key={index} className="flex justify-between py-4">
              <div>
                <p className="font-medium text-gray-300">{appointment.message}</p>
              </div>
              <div>
                <span
                  className={`px-3 py-1 text-xs rounded-full ${
                    appointment.type === "completed"
                      ? "bg-green-500 text-white"
                      : appointment.type === "scheduled"
                      ? "bg-yellow-500 text-white"
                      : "bg-red-500 text-white"
                  }`}
                >
                  {appointment.type.charAt(0).toUpperCase() + appointment.type.slice(1)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Appointment Table */}
      <div className="rounded-lg border border-gray-700 shadow-md">
        <table className="w-full text-left text-gray-300">
          <thead>
            <tr className="bg-gray-900 text-sm font-medium text-green-600">
              <th className="p-4">Patient</th>
              <th className="p-4">Consultation Type</th>
              <th className="p-4">Scheduled Time</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>
          <tbody className="text-sm divide-y divide-gray-700">
            {appointments.map((appointment, index) => (
              <tr
                key={index}
                className={`hover:bg-gray-700 ${
                  index % 2 === 0 ? "bg-gray-800" : "bg-gray-900"
                }`}
              >
                <td className="p-4">Patient Name</td>
                <td className="p-4">{appointment.type.charAt(0).toUpperCase() + appointment.type.slice(1)}</td>
                <td className="p-4">Scheduled Date</td>
                <td
                  className={`p-4 ${
                    appointment.type === "completed"
                      ? "text-green-500"
                      : appointment.type === "scheduled"
                      ? "text-yellow-500"
                      : "text-red-500"
                  }`}
                >
                  {appointment.type.charAt(0).toUpperCase() + appointment.type.slice(1)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
