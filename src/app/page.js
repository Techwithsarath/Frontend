

'use client';

import DashboardLayout from '../layouts/DashboardLayout';

import ProgressCard from '../components/ProgressCard';
import FranchiseCard from '../components/FranchiseCard';
import InsightsCard from '../components/InsightsCard';
import FinancialCard from '../components/FinancialCard';
import LeadsCard from '../components/LeadsCard';
import QuestionItems from '../components/QuestionItems';
import ChatAssistant from '../components/ChatAssistant';

export default function DashboardPage() {
  return (
    <DashboardLayout>
      {/* Overall Dashboard Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Left Side (Progress + Pending Questions) */}
        <div className="space-y-6">
          <ProgressCard />
          <QuestionItems />
        </div>

        {/* Right Side (Franchise, Insights, Financial, Leads, Chat Assistant) */}
        <div className="md:col-span-2 space-y-6">
          
          {/* Grid for Franchise, Insights, Financial, Leads */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FranchiseCard />
            <InsightsCard />
            <FinancialCard />
            <LeadsCard />
          </div>

          {/* Full width Chat Assistant */}
          <ChatAssistant />

        </div>

      </div>
    </DashboardLayout>

  );
}