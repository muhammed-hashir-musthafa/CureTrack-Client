'use client'
import React from "react";
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactNode } from 'react';



interface DoctorProps {
  children: React.ReactNode;
}
const queryClient = new QueryClient();
const Doctor: React.FC<DoctorProps> = ({ children }) => {
  const role = "vendor";

  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </body>
    </html>
  );
};

export default Doctor;