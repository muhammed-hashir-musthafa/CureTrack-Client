// components/StatusBadge.tsx

export default function StatusBadge({ status }: { status: string }) {
  let bgColor = "bg-gray-600";

  if (status === "Scheduled") bgColor = "bg-green-600";
  else if (status === "Pending") bgColor = "bg-blue-600";
  else if (status === "Cancelled") bgColor = "bg-red-600";

  return (
    <span className={`${bgColor} py-1 px-3 rounded-full text-white text-sm`}>
      {status}
    </span>
  );
}