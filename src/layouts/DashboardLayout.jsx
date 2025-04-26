 import Sidebar from "../components/Sidebar";
 import React from "react";
 import Topbar from "../components/Topbar";

 export default function DashboardLayout({ children}){
    return(
        <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
       <Sidebar />
       {/* Main Content */}
       <div className="flex flex-col flex-1 bg-gray-50">
         {/* Topbar */}
         <Topbar />

         {/* Page content */}
         <main className="flex-1 p-6 overflow-y-auto">
           {children}
         </main>
       </div>
     </div>
     )
 }
