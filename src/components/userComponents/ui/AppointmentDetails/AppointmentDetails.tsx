interface AppointmentDetailsProps {
  doctorName: string;
  date: string;
}

const AppointmentDetails = ({ doctorName, date }: AppointmentDetailsProps) => {
  return (
    <div className="mt-4 text-center">
      <p className="text-sm text-gray-400">Requested appointment details:</p>
      <div className="flex justify-center items-center gap-4 mt-2">
        <div className="flex items-center gap-2">
          <img
            src="/doctor-avatar.png"
            alt="Doctor"
            className="w-8 h-8 rounded-full"
          />
          <span className="text-sm">{doctorName}</span>
        </div>
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M6 2a2 2 0 012-2h4a2 2 0 012 2v2H6V2zm1 4h6v2H7V6zM6 8h8a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6a2 2 0 012-2zm3 5a1 1 0 102 0v1a1 1 0 10-2 0v-1z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-sm">{date}</span>
        </div>
      </div>
    </div>
  );
};

export default AppointmentDetails;