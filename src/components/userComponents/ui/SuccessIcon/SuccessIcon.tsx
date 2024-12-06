const SuccessIcon = () => {
  return (
    <div className="flex justify-center items-center w-16 h-16 rounded-full bg-green-500 mb-6">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m0 5a9 9 0 11-6 0"
        />
      </svg>
    </div>
  );
};

export default SuccessIcon;