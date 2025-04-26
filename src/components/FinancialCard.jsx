
'use client';

export default function FinancialCard() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md">
      <h3 className="text-sm text-black mb-2">Financial Wellbeing</h3>
      <div className="flex justify-between items-center mb-4">
        <p className="text-3xl font-bold text-gray-800">20</p>
        <span className="text-sm bg-green-100 text-green-600 px-2 py-1 rounded">+2.1%</span>
      </div>
      <p className="text-sm text-gray-600 mb-2">Total Franchisees</p>
      <div className="border-t border-gray-200 my-4"></div>
      <div className="flex justify-between gap-3 mt-3">
        <div className="bg-gray-50 rounded-md p-3 text-center flex-1">
          <p className="text-sm text-gray-500 mb-1">Target</p>
          <p className="text-base font-medium text-gray-800">$500,000</p>
        </div>
        <div className="bg-gray-50 rounded-md p-3 text-center flex-1">
          <p className="text-sm text-gray-500 mb-1">Current</p>
          <p className="text-base font-medium text-gray-800">$450,000</p>
        </div>
      </div>
    </div>
  )
}