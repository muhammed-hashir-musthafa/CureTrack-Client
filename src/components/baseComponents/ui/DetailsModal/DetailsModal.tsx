// // DetailsModal component
'use client'
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Image from 'next/image';

interface DetailsModalProps {
  id: string;
  isOpen: boolean;
  onClose: (msg: string) => void;
}

export default function DetailsModal({ id, isOpen, onClose }: DetailsModalProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  // Separate API call logic
  const updateRequestStatus = async (status: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`http://localhost:5001/admin/api/request`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status }),
      });
      if (!response.ok) throw new Error(`Failed to ${status} the request`);
      onClose(status === "approved" ? "Approved" : "Rejected");
    } catch (err) {
      setError(`Error ${status} request`);
    } finally {
      setLoading(false);
    }
  };

  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 backdrop-blur-sm p-4">
      <div className="bg-gray-800 flex flex-col w-full max-w-lg p-6 rounded-lg shadow-lg">
        <button
          className="self-end text-gray-400 hover:text-gray-300 text-2xl font-semibold cursor-pointer mb-4"
          onClick={() => onClose("Modal closed")}
          aria-label="Close"
        >
          ✕
        </button>
        <div className="text-white text-center font-semibold mb-6">
          Request Details
        </div>
        <div className="flex flex-col items-center gap-6">
          <Image
            src="https://imgs.search.brave.com/YfyNSZIduSszrOd2DIfVpcEZXVPxARydF3-FOuI_1pA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dzNzY2hvb2xzLmNv/bS9ob3d0by9pbWdf/YXZhdGFyLnBuZw"
            alt="Profile Image"
            width={120}
            height={120}
            className="rounded-full object-cover"
          />
          <div className="text-gray-300">
            <h1 className="text-lg font-medium">Name: doc1203ms10</h1>
            <p>Specialty: Gynecology</p>
            <p>Contact: 9895683891</p>
            <p>IMA ID</p>
          </div>
        </div>
        {error && <p className="text-red-600 text-center mt-4">{error}</p>}
        <div className="flex mt-10 gap-4">
          <button
            className="w-full h-12 bg-red-600 rounded-lg hover:bg-red-500 text-white"
            onClick={() => updateRequestStatus("rejected")}
            disabled={loading}
          >
            {loading ? 'Rejecting...' : 'Reject'}
          </button>
          <button
            className="w-full h-12 bg-green-600 rounded-lg hover:bg-green-500 text-white"
            onClick={() => updateRequestStatus("approved")}
            disabled={loading}
          >
            {loading ? 'Approving...' : 'Approve'}
          </button>
        </div>
      </div>
    </div>,
    document.getElementById('portalRoot')!
  );
}