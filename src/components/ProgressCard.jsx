

'use client';

import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { FaCheckCircle } from 'react-icons/fa';

export default function ProgressCard() {
  const percentage = 85;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-sm min-h-[556px]">
      {/* Centered Header */}
      <div className="text-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Account Progress</h2>
      </div>
      
      {/* Circular Progress with centered percentage */}
      <div className="flex justify-center mb-4">
        <div className="w-28 h-28">
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            styles={buildStyles({
              textColor: "#1F2937",
              pathColor: "#3B82F6",
              trailColor: "#E5E7EB",
              textSize: '22px',
              pathTransitionDuration: 0.5,
            })}
          />
        </div>
      </div>

      {/* Divider Line */}
      <div className="border-t border-gray-200 my-4"></div>

      {/* Steps Lists */}
      <div className="space-y-4">
        
        {/* Completed Steps */}
        <div className="bg-gray-50 rounded-md p-4">
          <h3 className="text-sm font-semibold text-gray-500 mb-2">Steps Completed</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-2 text-sm" />
              <span className="text-gray-700 text-sm">Profile Setup</span>
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-2 text-sm" />
              <span className="text-gray-700 text-sm">Initial Training</span>
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-2 text-sm" />
              <span className="text-gray-700 text-sm">Legal Documents</span>
            </li>
          </ul>
        </div>

        {/* Remaining Steps */}
        <div className="bg-gray-50 rounded-md p-4">
          <h3 className="text-sm font-semibold text-gray-500 mb-2">Steps Remaining</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-gray-400 mr-2"></div>
              <span className="text-gray-600 text-sm">Financial Integration</span>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-gray-400 mr-2"></div>
              <span className="text-gray-600 text-sm">Final Review</span>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
}