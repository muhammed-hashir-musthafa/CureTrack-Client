// pages/index.tsx
import React from 'react';
import Table from '../../ui/Table/Table';
import Dropdown from '../../ui/DropDown/DropDown';

const MedicalHistory = () => {
  const data = [
    {
      healthIssue: 'Fever',
      category: 'General',
      doctor: { name: 'Dr. Phoenix Baker', avatar: '/doctor1.png' },
      hospital: { name: 'Phoenix Baker', avatar: '/hospital1.png' },
      date: '12-10-2024',
    },
    {
      healthIssue: 'Cancer',
      category: 'Oncology',
      doctor: { name: 'Dr. Natali Craig', avatar: '/doctor2.png' },
      hospital: { name: 'Natali Craig', avatar: '/hospital2.png' },
      date: '24-07-2024',
    },
    {
      healthIssue: 'Fever',
      category: 'General',
      doctor: { name: 'Dr. Phoenix Baker', avatar: '/doctor1.png' },
      hospital: { name: 'Phoenix Baker', avatar: '/hospital1.png' },
      date: '12-10-2024',
    },
    {
      healthIssue: 'Fever',
      category: 'General',
      doctor: { name: 'Dr. Phoenix Baker', avatar: '/doctor1.png' },
      hospital: { name: 'Phoenix Baker', avatar: '/hospital1.png' },
      date: '12-10-2024',
    },
    {
      healthIssue: 'Fever',
      category: 'General',
      doctor: { name: 'Dr. Phoenix Baker', avatar: '/doctor1.png' },
      hospital: { name: 'Phoenix Baker', avatar: '/hospital1.png' },
      date: '12-10-2024',
    },
    {
      healthIssue: 'Fever',
      category: 'General',
      doctor: { name: 'Dr. Phoenix Baker', avatar: '/doctor1.png' },
      hospital: { name: 'Phoenix Baker', avatar: '/hospital1.png' },
      date: '12-10-2024',
    },
    {
      healthIssue: 'Fever',
      category: 'General',
      doctor: { name: 'Dr. Phoenix Baker', avatar: '/doctor1.png' },
      hospital: { name: 'Phoenix Baker', avatar: '/hospital1.png' },
      date: '12-10-2024',
    },
    {
      healthIssue: 'Fever',
      category: 'General',
      doctor: { name: 'Dr. Phoenix Baker', avatar: '/doctor1.png' },
      hospital: { name: 'Phoenix Baker', avatar: '/hospital1.png' },
      date: '12-10-2024',
    },
    {
      healthIssue: 'Fever',
      category: 'General',
      doctor: { name: 'Dr. Phoenix Baker', avatar: '/doctor1.png' },
      hospital: { name: 'Phoenix Baker', avatar: '/hospital1.png' },
      date: '12-10-2024',
    },
    {
      healthIssue: 'Fever',
      category: 'General',
      doctor: { name: 'Dr. Phoenix Baker', avatar: '/doctor1.png' },
      hospital: { name: 'Phoenix Baker', avatar: '/hospital1.png' },
      date: '12-10-2024',
    },
    {
      healthIssue: 'Fever',
      category: 'General',
      doctor: { name: 'Dr. Phoenix Baker', avatar: '/doctor1.png' },
      hospital: { name: 'Phoenix Baker', avatar: '/hospital1.png' },
      date: '12-10-2024',
    },
    {
      healthIssue: 'Fever',
      category: 'General',
      doctor: { name: 'Dr. Phoenix Baker', avatar: '/doctor1.png' },
      hospital: { name: 'Phoenix Baker', avatar: '/hospital1.png' },
      date: '12-10-2024',
    },
    {
      healthIssue: 'Fever',
      category: 'General',
      doctor: { name: 'Dr. Phoenix Baker', avatar: '/doctor1.png' },
      hospital: { name: 'Phoenix Baker', avatar: '/hospital1.png' },
      date: '12-10-2024',
    },
    {
      healthIssue: 'Fever',
      category: 'General',
      doctor: { name: 'Dr. Phoenix Baker', avatar: '/doctor1.png' },
      hospital: { name: 'Phoenix Baker', avatar: '/hospital1.png' },
      date: '12-10-2024',
    },
    {
      healthIssue: 'Fever',
      category: 'General',
      doctor: { name: 'Dr. Phoenix Baker', avatar: '/doctor1.png' },
      hospital: { name: 'Phoenix Baker', avatar: '/hospital1.png' },
      date: '12-10-2024',
    },
    {
      healthIssue: 'Fever',
      category: 'General',
      doctor: { name: 'Dr. Phoenix Baker', avatar: '/doctor1.png' },
      hospital: { name: 'Phoenix Baker', avatar: '/hospital1.png' },
      date: '12-10-2024',
    },
    {
      healthIssue: 'Fever',
      category: 'General',
      doctor: { name: 'Dr. Phoenix Baker', avatar: '/doctor1.png' },
      hospital: { name: 'Phoenix Baker', avatar: '/hospital1.png' },
      date: '12-10-2024',
    },
    
    // Add more rows here...
  ];

  return (
    <div className="p-4 bg-black h-full w-full">
      <div className="flex justify-between items-center mb-4">
        <Dropdown />
      </div>
      <Table data={data} />
    </div>
  );
};

export default MedicalHistory;