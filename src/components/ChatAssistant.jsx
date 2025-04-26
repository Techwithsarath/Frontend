'use client';

import { FaArrowRight } from 'react-icons/fa';

export default function ChatAssistant() {
  return (
    <div className="bg-[#F6FBFF] rounded-lg shadow-md p-6 w-full flex flex-col justify-between">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-800">
          Welcome to the AI Chat Assistant
        </h3>
        <span className="text-blue-600 text-2xl">∞</span>
      </div>

      <div className="flex items-center bg-white border rounded-full p-2 shadow-sm">
        <input
          type="text"
          placeholder="Ask your question here.."
          className="flex-1 px-3 py-1 outline-none text-sm"
        />
        <button className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600">
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}