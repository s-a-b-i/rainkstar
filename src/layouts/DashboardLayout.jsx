import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import NavbarPublisher from "../components/NavbarPublisher";
import NavbarAdvertiser from "../components/NavbarAdvertiser";

const DashboardLayout = ({ mode, toggleMode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar 
        mode={mode} 
        toggleMode={toggleMode}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
      
      {/* Main Content - Added margin-left for large screens */}
      <div className="lg:ml-64 flex flex-col min-h-screen">
        {/* Navbar */}
        <div className="sticky top-0 z-10 bg-white border-b">
          {mode === "Publisher" ? (
            <NavbarPublisher 
              userName="Michael Smyth"
              onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)}
            />
          ) : (
            <NavbarAdvertiser 
              userName="Michael Smyth"
              onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)}
            />
          )}
        </div>

        {/* Main Content Area */}
        <main className="flex-1 p-4 md:p-6 overflow-x-hidden">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;