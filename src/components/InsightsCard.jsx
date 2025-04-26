

'use client';

export default function InsightsCard() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md">
      <h3 className="text-sm text-gray-500 mb-2">Key Insights & Feedback</h3>

      <div className="flex justify-between items-center mb-3">
        <p className="text-2xl font-bold text-gray-800">10%</p>
        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Top Performer</span>
      </div>

      <p className="text-sm text-gray-600 mb-3">Sales Growth</p>

      <div className="border-t border-gray-200 my-4"></div>

      <div className="bg-gray-100 p-4 rounded-md text-sm text-gray-700">
        <strong>Feedback:</strong><br />
        Franchisees are requesting more detailed training materials.
      </div>
    </div>
  );
}