
import React from 'react';
import { Tab } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activeTab, setActiveTab }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col pb-20 md:pb-0">
      {/* Desktop Header */}
      <nav className="bg-blue-700 p-4 shadow-lg sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center text-white">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-black italic tracking-tighter cursor-pointer" onClick={() => setActiveTab(Tab.HOME)}>
              MARKETFORCE
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden md:inline-block bg-yellow-400 text-blue-900 px-3 py-1 rounded-full text-xs font-bold uppercase">
              Premium Member
            </span>
            <div className="flex items-center gap-2 cursor-pointer">
              <span className="hidden md:block text-sm font-medium">আরিফ আহমেদ</span>
              <i className="fas fa-user-circle text-2xl"></i>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-grow container mx-auto p-4 lg:p-10">
        {children}
      </main>

      {/* Navigation - Sidebar for Desktop, Bottom Bar for Mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3 shadow-[0_-5px_15px_-3px_rgba(0,0,0,0.1)] z-50 md:sticky md:bottom-auto md:top-20 md:border-0 md:bg-transparent md:shadow-none">
        <div className="container mx-auto flex md:flex-col justify-around md:justify-start items-center md:items-start gap-4">
          <NavButton 
            icon="fa-home" 
            label="হোম" 
            active={activeTab === Tab.HOME} 
            onClick={() => setActiveTab(Tab.HOME)} 
          />
          <NavButton 
            icon="fa-box" 
            label="অর্ডার" 
            active={activeTab === Tab.ORDERS} 
            onClick={() => setActiveTab(Tab.ORDERS)} 
          />
          <NavButton 
            icon="fa-robot" 
            label="এআই অ্যাসিস্ট্যান্ট" 
            active={activeTab === Tab.AI} 
            onClick={() => setActiveTab(Tab.AI)} 
          />
          <NavButton 
            icon="fa-wallet" 
            label="ওয়ালেট" 
            active={activeTab === Tab.WALLET} 
            onClick={() => setActiveTab(Tab.WALLET)} 
          />
        </div>
      </div>
    </div>
  );
};

const NavButton: React.FC<{ icon: string; label: string; active: boolean; onClick: () => void }> = ({ icon, label, active, onClick }) => (
  <button 
    onClick={onClick}
    className={`flex flex-col md:flex-row items-center gap-1 md:gap-3 p-2 md:px-6 md:py-3 rounded-2xl transition-all w-full md:w-auto ${
      active 
        ? 'text-blue-700 md:bg-blue-50 md:text-blue-800 font-bold' 
        : 'text-gray-400 md:text-gray-600 hover:bg-gray-100'
    }`}
  >
    <i className={`fas ${icon} text-xl`}></i>
    <span className="text-[10px] md:text-base">{label}</span>
  </button>
);

export default Layout;
