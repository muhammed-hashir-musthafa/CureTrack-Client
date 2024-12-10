// components/Table/TableRow.tsx
import React from 'react';
import Avatar from '../Avatar/Avatar';
import Button from '../Button/Button';

interface TableRowProps {
  healthIssue: string;
  category: string;
  doctor: { name: string; avatar: string };
  hospital: { name: string; avatar: string };
  date: string;
}

const TableRow: React.FC<TableRowProps> = ({ healthIssue, category, doctor, hospital, date }) => {
  return (
    <tr className="bg-gray-900 text-white border-b border-gray-700 hover:bg-gray-800">
      <td className="px-4 py-2">{healthIssue}</td>
      <td className="px-4 py-2">{category}</td>
      <td className="px-4 py-2 flex items-center gap-2 ">
        <Avatar src={doctor.avatar} alt={doctor.name} />
        {doctor.name}
      </td>
      <td>
      <td className="px-4 py-2 flex items-center gap-2">
        <Avatar src={hospital.avatar} alt={hospital.name} />
        {hospital.name}
      </td>
      </td>
      <td className="px-4 py-2">{date}</td>
      <td className="px-4 py-2 mx-auto">
        <Button label="View More" />
      </td>
    </tr>
  );
};

export default TableRow;