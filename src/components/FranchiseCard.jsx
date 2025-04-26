

'use client';
import { FaUsers } from 'react-icons/fa';
import Image from 'next/image';

export default function FranchiseCard() {
  const total = 14;
  const stages = [
    { name: 'Stage 1', count: 2, color: 'bg-blue-800', label: 'Initial Inquiry' },
    { name: 'Stage 2', count: 7, color: 'bg-blue-500', label: 'Document Submission' },
    { name: 'Stage 3', count: 5, color: 'bg-blue-300', label: 'Site Visit' }
  ];

  const profiles = [
    '/image5.png',
    '/image2.png',
    '/image9.png',
    '/image10.png',
    '/image11.png',
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-full  max-w-md"> {/* ONLY HEIGHT CHANGE */}
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-sm font-bold text-black">Total Franchises Onboard</h3>
        <span className="text-[10px] bg-green-100 text-green-600 px-1.5 py-0.5 rounded-full">
          +2.4%
        </span>
      </div>

      {/* Total Count and Profile Images */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="bg-blue-100 p-2 rounded-full text-blue-600 text-lg">
            <FaUsers />
          </div>
          <span className="text-2xl font-bold text-gray-800">{total}</span>
        </div>

        {/* Profile Images */}
        <div className="hidden sm:flex items-center space-x-2">
          {profiles.map((profile, idx) => (
            <div key={idx} className="w-6 h-6 rounded-full border-2 border-white overflow-hidden">
              <Image 
                src={profile}
                alt="Profile"
                width={24}
                height={24}
                className="object-cover"
              />
            </div>
          ))}
          {/* Extra People */}
          <div className="w-6 h-6 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center text-[10px] font-semibold">
            +7
          </div>
        </div>
      </div>

      {/* Horizontal Progress Bar */}
      <div className="w-full h-3 bg-gray-100 rounded-full mb-4 overflow-hidden">
        <div className="flex h-full">
          {stages.map((stage, index) => (
            <div 
              key={stage.name}
              className={`${stage.color} ${index === 0 ? 'rounded-l-full' : ''} ${index === stages.length - 1 ? 'rounded-r-full' : ''}`}
              style={{ width: `${(stage.count / total) * 100}%` }}
            />
          ))}
        </div>
      </div>

      {/* Vertical Stage Details */}
      <div className="space-y-2">
        {stages.map(stage => (
          <div key={stage.name} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className={`w-2.5 h-2.5 ${stage.color} rounded-full`}></div>
              <div>
                <p className="text-sm font-semibold text-gray-800">{stage.name}</p>
                <p className="text-[10px] text-gray-500">{stage.label}</p>
              </div>
            </div>
            <span className={`text-xs font-semibold ${stage.color.replace('bg', 'text')}`}>
              {stage.count}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

