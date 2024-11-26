"use client";

import { useState, useEffect } from "react";
import { MdStore, MdMedicalServices, MdPeople } from "react-icons/md";
import StatCard from "@/components/baseComponents/ui/StatCard/StatCard";
import axios from "axios";
import { Activity, Appointment, StatsResponse } from "@/interfaces/doctor";

const DoctorDashboard = () => {
  const [stats, setStats] = useState<StatsResponse>({
    totalCompletedConsultations: 0,
    totalScheduledConsultations: 0,
    totalCancelledConsultations: 0,
  });

  const [recentActivities, setRecentActivities] = useState<Activity[]>([]);
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  const fetchDashboardData = async () => {
    try {
      const statsResponse = await axios.get<StatsResponse>("/api/doctor/stats");
      setStats(statsResponse.data);

      const activitiesResponse = await axios.get<{ activities: Activity[] }>(
        "/api/doctor/recent-activities"
      );
      setRecentActivities(activitiesResponse.data.activities);

      const appointmentsResponse = await axios.get<{
        appointments: Appointment[];
      }>("/api/doctor/appointments");
      setAppointments(appointmentsResponse.data.appointments);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Axios error:", error.message);
      } else {
        console.error("Unexpected error:", error);
      }
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  return (
    <div className="bg-black text-white p-8 flex h-full w-full flex-col">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold">Welcome Back, Dr. Name</h1>
          <p className="text-lg text-gray-400">
            Here's an overview of your platform.
          </p>
        </div>
        <button className="bg-green-600 text-white px-4 py-2 rounded-md shadow-md">
          Create Report
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
        <StatCard
          icon={MdStore}
          count={stats.totalCompletedConsultations}
          label="Total Completed Consultations"
        />
        <StatCard
          icon={MdMedicalServices}
          count={stats.totalScheduledConsultations}
          label="Total Scheduled Consultations"
        />
        <StatCard
          icon={MdPeople}
          count={stats.totalCancelledConsultations}
          label="Total Cancelled Consultations"
        />
      </div>

      <div className="bg-gray-800 p-6 rounded-md shadow-lg mb-8">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <div className="divide-y divide-gray-700">
          {recentActivities.length > 0 ? (
            recentActivities.map((activity, index) => (
              <div key={index} className="flex justify-between py-3">
                <p className="text-gray-300">{activity.message}</p>
                <span className="text-sm text-gray-500">{activity.time}</span>
              </div>
            ))
          ) : (
            <p className="text-gray-400">No recent activities available.</p>
          )}
        </div>
      </div>

      <div className="bg-gray-800 p-6 rounded-md shadow-lg mb-8">
        <h2 className="text-xl font-semibold mb-4">Recent Appointments</h2>
        <div className="divide-y divide-gray-700">
          {appointments.length > 0 ? (
            appointments.map((appointment, index) => (
              <div key={index} className="flex justify-between py-4">
                <div>
                  <p className="font-medium text-gray-300">
                    Appointment with {appointment.patientName}
                  </p>
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
                    {appointment.type.charAt(0).toUpperCase() +
                      appointment.type.slice(1)}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-400">No recent appointments available.</p>
          )}
        </div>
      </div>

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
            {appointments.length > 0 ? (
              appointments.map((appointment, index) => (
                <tr
                  key={index}
                  className={`hover:bg-gray-700 ${
                    index % 2 === 0 ? "bg-gray-800" : "bg-gray-900"
                  }`}
                >
                  <td className="p-4">{appointment.patientName}</td>
                  <td className="p-4">
                    {appointment.type.charAt(0).toUpperCase() +
                      appointment.type.slice(1)}
                  </td>
                  <td className="p-4">{appointment.scheduledTime}</td>
                  <td
                    className={`p-4 ${
                      appointment.type === "completed"
                        ? "text-green-500"
                        : appointment.type === "scheduled"
                        ? "text-yellow-500"
                        : "text-red-500"
                    }`}
                  >
                    {appointment.type.charAt(0).toUpperCase() +
                      appointment.type.slice(1)}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="p-4 text-center text-gray-400">
                  No appointments available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DoctorDashboard;
