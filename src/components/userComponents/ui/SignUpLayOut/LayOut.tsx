import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="h-full flex flex-col md:flex-row bg-gray-900 text-white">
      {children}
    </div>
  );
};

export default Layout;