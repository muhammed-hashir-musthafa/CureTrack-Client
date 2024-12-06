// 'use client';

// import { useState } from "react";
// import DetailsModal from "./DetailsModal";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useRouter } from "next/navigation";


// export default function ViewButton({ id }: { id: string}) {
//   const [isOpen, setIsOpen] = useState(false);
//   const router = useRouter()
//   const setToast = (msg: string)=>{
//     toast(msg)
//   }
//   const onClose = (msg: string )=>{
//     // setToast(msg)
//     setIsOpen(false)
    
//     // router.refresh()
//     // toast("done")
//     toast("done")
//     router.refresh()
//   }
//   return (
//     <div>
//       <button 
//         className="mr-2 py-2 px-4 md:px-6 rounded-lg bg-purple-600 text-white font-semibold hover:bg-purple-500 transition-colors duration-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
//         onClick={() => setIsOpen(true)}
//       >
//         View
//       </button>

//       <DetailsModal  isOpen={isOpen} id={id} onClose={(msg: string)=> onClose(msg) } />
//       <ToastContainer />
//     </div>
//   );
// }
// In your `ViewButton` component
'use client'
import { useState } from "react";
import DetailsModal from "../DetailsModal/DetailsModal";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/navigation";

export default function ViewButton({ id }: { id: string}) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleModalClose = (msg: string) => {
    if(msg === 'Approved'){
      toast.success('Request Approved', {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    }else if (msg === 'Rejected'){
      toast.warn('Request Rejected!', {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    }else{
      toast.info('Closed', {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    }
    setIsOpen(false);
    router.refresh(); // Refreshes after closing modal, which preserves the toast
  };

  return (
    <div>
      <button 
        className="mr-2 py-2 px-4 md:px-6 rounded-lg bg-purple-600 text-white font-semibold hover:bg-purple-500 transition-colors duration-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
        onClick={() => setIsOpen(true)}
      >
        View
      </button>
      <DetailsModal isOpen={isOpen} id={id} onClose={handleModalClose} />
    </div>
  );
}

// Add `ToastContainer` in your layout or `_app.tsx` for global availability