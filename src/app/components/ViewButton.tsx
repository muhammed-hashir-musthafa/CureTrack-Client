'use client';

import { useState } from "react";
import DetailsModal from "@/app/components/DetailsModal";
import { revalidatePath } from "next/cache";

export default function ViewButton({ id }: { id: string}) {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = ()=>{
    setIsOpen(false)
  }
  return (
    <div>
      <button 
        className="mr-2 py-2 px-4 md:px-6 rounded-lg bg-purple-600 text-white font-semibold hover:bg-purple-500 transition-colors duration-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
        onClick={() => setIsOpen(true)}
      >
        View
      </button>
      <DetailsModal  isOpen={isOpen} id={id} onClose={() => onClose() } />
    </div>
  );
}