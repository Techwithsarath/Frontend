

import React from 'react';
import {
  FaHome,
  FaCheckCircle,
  FaUpload,
  FaCode,
  FaBullseye,
  FaEnvelope,
  FaQuestionCircle,
  FaSignOutAlt,
  FaUser,
  FaChartBar
} from "react-icons/fa";

export default function Sidebar({setCurrentTab}) {
  return (
    <div className="w-64 h-screen bg-[radial-gradient(circle_at_center,_#38b2ac,_#2c7a7b,_#155e75)] bg-cover bg-center text-gray-300 flex flex-col justify-between p-4 shadow-lg
    md:relative absolute z-10 md:bg-auto">
      
      <div>
        <h2 className="text-2xl font-semibold mb-8 pl-4 hidden md:block">Menu</h2>
        <ul className="space-y-2">
          <li onClick={() => setCurrentTab("home")} className="flex items-center gap-3 py-2 px-4 hover:bg-teal-600 hover:text-sky-300 rounded-lg cursor-pointer text-sm font-medium">
            <FaHome /> <span className="hidden md:inline">Home</span>
          </li>
          <li onClick={() => setCurrentTab("steps")} className="flex items-center gap-3 py-2 px-4 hover:bg-teal-600 hover:text-sky-300 rounded-lg cursor-pointer text-sm font-medium">
            <FaCheckCircle /> <span className="hidden md:inline">Steps & Checklist</span>
          </li>
          <li className="flex items-center gap-3 py-2 px-4 hover:bg-teal-600 hover:text-sky-300 rounded-lg cursor-pointer text-sm font-medium">
            <FaUser /> <span className="hidden md:inline">Preferred Vendors</span>
          </li>
          <li className="flex items-center gap-3 py-2 px-4 hover:bg-teal-600 hover:text-sky-300 rounded-lg cursor-pointer text-sm font-medium">
            <FaUpload /> <span className="hidden md:inline">Upload Docs</span>
          </li>
          <li className="flex items-center gap-3 py-2 px-4 hover:bg-teal-600 hover:text-sky-300 rounded-lg cursor-pointer text-sm font-medium">
            <FaCode /> <span className="hidden md:inline">Tech Stack</span>
          </li>
          <li onClick={() => setCurrentTab("target")} className="flex items-center gap-3 py-2 px-4 hover:bg-teal-600 hover:text-sky-300 rounded-lg cursor-pointer text-sm font-medium">
            <FaBullseye /> <span className="hidden md:inline">Target</span>
          </li>
          <li className="flex items-center gap-3 py-2 px-4 hover:bg-teal-600 hover:text-sky-300 rounded-lg cursor-pointer text-sm font-medium">
            <FaChartBar /> <span className="hidden md:inline">Zee Sales Targets</span>
          </li>
          <li className="flex items-center gap-3 py-2 px-4 hover:bg-teal-600 hover:text-sky-300 rounded-lg cursor-pointer text-sm font-medium">
            <FaEnvelope /> <span className="hidden md:inline">MAI Settings</span>
          </li>
          <li onClick={() => setCurrentTab("pending")} className="flex items-center gap-3 py-2 px-4 hover:bg-teal-600 hover:text-sky-300 rounded-lg cursor-pointer text-sm font-medium">
            <FaQuestionCircle /> <span className="hidden md:inline">Pending Questions</span>
          </li>
        </ul>
      </div>

      {/* Logout Button */}
      <div className="mt-auto pt-4">
        <button className="flex items-center gap-3 text-gray-300 hover:text-red-400 text-sm font-medium pl-4 py-2">
          <FaSignOutAlt />
          <span className="hidden md:inline">Logout</span>
        </button>
      </div>

    </div>
  );
}

