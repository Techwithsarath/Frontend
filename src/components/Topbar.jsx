
import { FaUserCircle, FaCog, FaBell, FaSearch } from 'react-icons/fa';

export default function Topbar() {
  return (
    <div className="w-full flex justify-between items-center bg-white p-4 shadow-sm">
      {/* Search Bar - Hidden on mobile, shown on md+ */}
      <div className="hidden md:flex items-center bg-gray-100 rounded-lg px-3 py-2 w-1/3">
        <FaSearch className="text-gray-500 mr-2" />
        <input 
          type="text" 
          placeholder="Search..." 
          className="bg-transparent border-none outline-none w-full text-sm"
        />
      </div>

      {/* Right Side Icons */}
      <div className="flex items-center gap-4 md:gap-6">
        {/* Notification Bell - Hidden on mobile */}
        <div className="hidden sm:block relative">
          <FaBell className="text-gray-600 text-lg cursor-pointer" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
            3
          </span>
        </div>

        {/* Settings Gear */}
        <div className="relative">
          <FaCog className="text-gray-600 text-lg cursor-pointer" />
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-blue-500 overflow-hidden">
            <img
              src="/images.png"
              alt="User"
              className="w-full h-full object-cover"
            />
          </div>
          {/* User name - hidden on mobile, shown on md+ */}
          <span className="hidden md:inline text-sm font-medium">Admin</span>
        </div>
      </div>
    </div>
  );
}