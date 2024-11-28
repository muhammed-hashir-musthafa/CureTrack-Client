import { Fragment } from 'react';
import RequestCard from '@/components/adminComponents/containers/approval-page/RequestCard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    <div className="flex flex-col md:flex-row h-full w-full text-white bg-gray-900">
      {/* Left Section */}
      <div className="flex flex-col w-full md:w-2/3 p-6 md:p-16 space-y-8">
        
        <p className="text-gray-400 italic">All pending Requests!</p>

        {/* Request Cards */}
        <div className="flex flex-col space-y-4 mt-4 overflow-y-auto max-h-[calc(100vh-200px)] pr-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
          {approvalRequests.length > 0 ? (approvalRequests.map((req) => (
            <Fragment key={req._id}>
              <RequestCard name={req.name} url={req.url} id={req._id} role={req.role} />
            </Fragment>
          ))):(<div className='flex w-full mt-14 text-2xl font-semibold justify-center italic'>No pending requests!!</div>)}
        </div>
      </div>

      {/* Right Section with Background Image */}
      <div
        className="hidden md:flex w-full md:w-1/3 bg-cover bg-center rounded-l-lg"
        style={{ backgroundImage: `url('https://s3-alpha-sig.figma.com/img/864f/5951/8ade4a2f720e6207181f3e46711872df?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UlU0C2xrrCvpFxYCjA72nFmIILRbQwqNB0Q8xYn0VenGjZXACXYZA7RqS091~NH3cspWbZ13p4tbfG1reDy7vAvhqFu8SQ6PPFlu4YVUe0cK636Ho-PgQSzNR~w8fpg5uF-vadsLEyxnut4NvtAaTDKdLIw-wE6WAHaNSUU7LhkYgKmPnR0J0w0dXYRk20NrvUcVDFvIh2CawVCWmEKXJ5AQWz2yep2OcTvaATTREQYw9H0L8iGE5b47wB1h~dYauQ0Dt7qEYnQNm5BzXaZB4RJXcrRgc2FoOrg7kY4uwV9OxTQq8ryDFXEc0C0akDI5cTJc3LY3IS7pZIziZYz5pQ__')` }}
      />
      <ToastContainer />
    </div>
    
  );
}