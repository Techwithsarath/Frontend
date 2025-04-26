'use client';

import { FaCheckCircle } from 'react-icons/fa';

export default function StepsCard() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Steps Completed</h3>

      <ul className="space-y-3 mb-4">
        <li className="flex items-center gap-2 text-green-600">
          <FaCheckCircle className="text-green-500" />
          <span className="text-gray-700">Profile Setup</span>
        </li>
        <li className="flex items-center gap-2 text-green-600">
          <FaCheckCircle className="text-green-500" />
          <span className="text-gray-700">Legal Documents</span>
        </li>
      </ul>

      <div className="border-t pt-3 text-sm text-gray-500">
        <strong>Steps Remaining:</strong> 2 Document Submissions
      </div>
    </div>
  )
}