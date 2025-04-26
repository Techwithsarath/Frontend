'use client';


const leads = [
    { name: 'Wade Warren', stage: 'Initial Inquiry', avatar: '/image.png' },
    { name: 'Ava Wright', stage: 'Initial Inquiry', avatar: '/image2.png' },
    { name: 'Cody Fisher', stage: 'Initial Inquiry', avatar: '/image3.png' },
  ];
  
  export default function LeadsCard() {
    return (
      <div className="bg-white rounded-lg shadow-md p-4 w-full max-w-md">
      <h3 className="text-sm text-black mb-4">Prospect Leads</h3>

  <ul className="space-y-2">
    {leads.map((lead, index) => (
      <li key={index} className="bg-gray-100 p-2 rounded-md flex items-center gap-4">
        <img
          src={lead.avatar}
          alt={lead.name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <p className="font-medium text-gray-800">{lead.name}</p>
          <p className="text-xs text-gray-500">Stage: {lead.stage}</p>
        </div>
      </li>
    ))}
  </ul>
</div>
  
    );
  }