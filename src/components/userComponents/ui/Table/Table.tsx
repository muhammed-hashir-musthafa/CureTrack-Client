// components/Table/Table.tsx
import React from 'react';
import TableRow from '../TableRow/TableRow';

interface TableProps {
  data: {
    healthIssue: string;
    category: string;
    doctor: { name: string; avatar: string };
    hospital: { name: string; avatar: string };
    date: string;
  }[];
}

const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto text-left">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="px-4 py-2">Health Issue</th>
            <th className="px-4 py-2">Category</th>
            <th className="px-4 py-2">Doctor Name</th>
            <th className="px-4 py-2">Hospital Name</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Reports</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <TableRow key={index} {...item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;