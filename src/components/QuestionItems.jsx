// src/components/PendingQuestionsCard.jsx
'use client';

const questions = [
  {
    name: 'Phoenix Baker',
    username: '@phoenixb',
    message: 'What are the requirements for opening a new store?',
    time: '5min ago',
    avatar: '/image5.png',
  },
  {
    name: 'Ronny Osmuns',
    username: '@ronnyo',
    message: 'How do I manage inventory effectively?',
    time: '4hr ago',
    avatar: '/image6.png',
  },
];

export default function QuestionItems() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md">
      <h3 className="text-sm text-gray-500 mb-4">Pending Questions</h3>
      <div className="border-t border-gray-200 my-4"></div>
      <ul className="space-y-4">
        {questions.map((q, index) => (
          <li key={index} className="flex items-start gap-3">
            <img
              src={q.avatar}
              alt={q.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="flex-1">
              <div className="flex justify-between text-sm">
                <span className="font-semibold text-gray-800">{q.name}</span>
                <span className="text-gray-400 text-xs">{q.time}</span>
              </div>
              <p className="text-xs text-gray-500">{q.message}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}