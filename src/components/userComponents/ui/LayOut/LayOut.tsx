import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const LayOut = ({ children }: LayoutProps) => {
  return (
    <div className="h-full w-full bg-gray-900 text-white flex items-center justify-center">
      <div className="w-full max-w-lg p-6 rounded-lg bg-gray-800">
        {children}
      </div>
    </div>
  );
};

export default LayOut;