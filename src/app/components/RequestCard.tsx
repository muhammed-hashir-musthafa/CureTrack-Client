// import React from 'react';
// import ViewButton from './ViewButton';
// interface RequestCardProps {
//   name: string;
//   url: string;
//   id: string;
// }

// const RequestCard: React.FC<RequestCardProps> = ({ name, url, id, }) => {
//   return (
//     <div className="flex items-center space-x-4 p-4 bg-white shadow-md rounded-lg transition-transform transform hover:scale-105">
//       {/* Profile Image */}
//       <div className="flex-shrink-0">
//         <img
//           src={url}
//           alt={name}
//           className="w-12 h-12 rounded-full object-cover"
//         />
//       </div>

//       {/* Details Section */}
//       <div className="flex-1">
//         <p className="text-lg font-medium text-gray-800">{name}</p>
//         <p className="text-sm text-gray-500">Pending Approval</p>
//       </div>

//       {/* View Button */}
//       <ViewButton id={id} />
//     </div>
//   );
// };

// export default RequestCard;

import React from 'react';
import ViewButton from './ViewButton';
interface RequestCardProps {
  name: string;
  url: string;
  id: string;
}

const RequestCard: React.FC<RequestCardProps> = ({ name, url, id }) => {
  return (
    <div className="flex items-center p-4 bg-gray-800 bg-opacity-30 rounded-lg hover:bg-opacity-50 transition duration-300">
      {/* Profile Image */}
      <img src={url} alt={name} className="w-12 h-12 rounded-full object-cover" />

      {/* Doctor's Information */}
      <div className="flex-1 ml-4">
        <p className="text-lg font-medium text-white">{name}</p>
        <p className="text-sm text-gray-400">Doctor</p>
      </div>

      {/* View Button */}
      <ViewButton id={id} />
    </div>
  );
};

export default RequestCard;