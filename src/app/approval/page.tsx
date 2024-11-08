// `Page.tsx` (server component)

import bgImage from '@/public/images/bgImg1.jpeg';
import RequestCard from '@/app/components/RequestCard';
import { Fragment } from 'react';

interface Request {
  _id: string;
  name: string;
  url: string;
  role: string;
}

const fetchApprovalRequests = async (): Promise<Request[]> => {
  const res = await fetch('http://localhost:5001/admin/api/requests', { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch approval requests');
  return res.json();
};

export default async function Page() {
  const approvalRequests = await fetchApprovalRequests();

  return (
    <div className="flex flex-col md:flex-row h-screen w-screen text-white bg-gray-900">
      {/* Left Section */}
      <div className="flex flex-col w-full md:w-2/3 p-6 md:p-16 space-y-8">
        <h1 className="text-3xl font-semibold">CureTrack</h1>
        
        {/* Pass fetched data to a client component */}

        {/* Request Cards */}
        <div className="flex flex-col space-y-4 mt-4 overflow-y-auto max-h-[calc(100vh-200px)] pr-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
          {approvalRequests.map((req) => (
            <Fragment key={req._id}>
              <RequestCard name={req.name} url={req.url} id={req._id} />
            </Fragment>
          ))}
        </div>
      </div>

      {/* Right Section with Background Image */}
      <div
        className="hidden md:flex w-full md:w-1/3 bg-cover bg-center rounded-l-lg"
        style={{ backgroundImage: `url('/images/bgImg1.jpeg')` }}
      />
    </div>
  );
}