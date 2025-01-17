import React, { useState } from "react";
import { MdMenu, MdKeyboardArrowDown } from "react-icons/md";
import img from "../assets/profile.jpeg";

const NavbarPublisher = ({ userName }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="h-16 bg-white border-b">
      <div className="px-4 md:px-6 h-full flex items-center justify-between">
        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <MdMenu className="w-6 h-6 text-gray-700" />
        </button>

        {/* Title */}
        <h1 className="text-lg md:text-xl font-bold text-gray-800 font-poppins tracking-wide bg-gradient-to-r from-foundations-primary to-blue-600 bg-clip-text text-transparent">
          Publisher Dashboard
        </h1>

        {/* Desktop Right Section */}
        <div className="hidden lg:flex items-center gap-4 md:gap-6">
          <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
            <img src="/flags/us.svg" alt="US Flag" className="w-6 h-4" />
            <MdKeyboardArrowDown className="w-5 h-5 text-gray-600" />
          </div>

          <div className="bg-foundations-primary text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
            € 0.00 / 0.00
          </div>

          <div className="flex items-center gap-3">
            <span className="text-gray-700 font-medium">Hi, {userName}!</span>
            <div 
              className="w-9 h-9 rounded-full bg-gray-200 overflow-hidden border-2 border-foundations-primary shadow-sm"
              style={{
                backgroundImage: `url(${img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
          </div>
        </div>

        {/* Mobile User Avatar */}
        <div className="lg:hidden">
          <div 
            className="w-9 h-9 rounded-full bg-gray-200 overflow-hidden border-2 border-foundations-primary shadow-sm"
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 right-0 bg-white border-b shadow-lg z-50">
          <div className="p-4 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg">
                <img src="/flags/us.svg" alt="US Flag" className="w-6 h-4" />
                <span className="text-gray-700 font-medium">United States</span>
              </div>
            </div>
            <div className="bg-foundations-primary text-white px-4 py-2.5 rounded-lg text-center font-medium">
              € 0.00 / 0.00
            </div>
            <div className="border-t pt-4">
              <span className="text-gray-700 font-medium">Hi, {userName}!</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavbarPublisher;