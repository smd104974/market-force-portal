
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { SALES_DATA } from '../constants';

const DashboardStats: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
      <div className="lg:col-span-2 bg-white p-6 rounded-3xl shadow-lg border border-gray-100">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-bold text-gray-800">সাপ্তাহিক বিক্রয় রিপোর্ট</h3>
          <select className="bg-gray-50 border border-gray-200 text-sm rounded-lg p-2 outline-none">
            <option>গত ৭ দিন</option>
            <option>গত ৩০ দিন</option>
          </select>
        </div>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={SALES_DATA}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#9ca3af'}} />
              <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#9ca3af'}} />
              <Tooltip 
                cursor={{fill: '#f3f4f6'}}
                contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)'}}
              />
              <Bar dataKey="sales" radius={[4, 4, 0, 0]}>
                {SALES_DATA.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={index === SALES_DATA.length - 1 ? '#1d4ed8' : '#bfdbfe'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="space-y-4">
        <StatCard 
          icon="fa-wallet" 
          label="বর্তমান ব্যালেন্স" 
          value="৳ ১২,৫০০" 
          color="bg-blue-600" 
          trend="+৳ ৮৫০ আজ" 
        />
        <StatCard 
          icon="fa-shopping-cart" 
          label="মোট অর্ডার" 
          value="৮৬" 
          color="bg-indigo-600" 
          trend="১২টি প্রসেসিং" 
        />
        <StatCard 
          icon="fa-users" 
          label="মোট কমিশন" 
          value="৳ ৫,৪২০" 
          color="bg-purple-600" 
          trend="এ মাসে" 
        />
      </div>
    </div>
  );
};

const StatCard: React.FC<{ icon: string; label: string; value: string; color: string; trend: string }> = ({ icon, label, value, color, trend }) => (
  <div className="bg-white p-6 rounded-3xl shadow-md border border-gray-50 flex items-center gap-4">
    <div className={`${color} w-12 h-12 rounded-2xl flex items-center justify-center text-white`}>
      <i className={`fas ${icon} text-xl`}></i>
    </div>
    <div>
      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">{label}</p>
      <h4 className="text-xl font-black text-gray-800">{value}</h4>
      <p className="text-[10px] font-bold text-green-500 mt-1 uppercase">{trend}</p>
    </div>
  </div>
);

export default DashboardStats;
