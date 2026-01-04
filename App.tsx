
import React, { useState } from 'react';
import Layout from './components/Layout';
import ProductCard from './components/ProductCard';
import DashboardStats from './components/DashboardStats';
import AIContentAssistant from './components/AIContentAssistant';
import { Tab, Order } from './types';
import { MOCK_PRODUCTS, MOCK_ORDERS } from './constants';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.HOME);
  const [orders, setOrders] = useState<Order[]>(MOCK_ORDERS);

  const handlePlaceOrder = (details: any) => {
    const newOrder: Order = {
      id: `ORD-${Math.floor(1000 + Math.random() * 9000)}`,
      productName: details.productName,
      customerName: details.name,
      phone: details.phone,
      sellingPrice: parseFloat(details.price),
      status: 'Pending',
      date: new Date().toISOString().split('T')[0]
    };
    
    setOrders([newOrder, ...orders]);
    alert('অর্ডারটি সফলভাবে প্লেস করা হয়েছে!');
    setActiveTab(Tab.ORDERS);
  };

  const renderContent = () => {
    switch (activeTab) {
      case Tab.HOME:
        return (
          <>
            <div className="mb-8 p-8 bg-gradient-to-r from-blue-600 via-indigo-700 to-blue-800 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden group">
              <div className="relative z-10">
                <h2 className="text-3xl font-black mb-2">স্বাগতম, আরিফ! 👋</h2>
                <p className="opacity-90 text-lg max-w-2xl">আজকের ট্রেন্ডিং প্রোডাক্টগুলো চেক করুন এবং আপনার কাস্টমারের অর্ডার প্লেস করুন। আপনার সফলতায় আমরা সবসময় পাশে আছি।</p>
                <div className="mt-6 flex gap-3">
                  <button onClick={() => setActiveTab(Tab.AI)} className="bg-white text-blue-800 px-6 py-3 rounded-2xl font-bold hover:bg-gray-100 transition shadow-lg">
                    মার্কেটিং সাহায্য পান
                  </button>
                  <button className="bg-blue-500 bg-opacity-30 backdrop-blur-md text-white border border-blue-400 px-6 py-3 rounded-2xl font-bold hover:bg-opacity-40 transition">
                    টপ রিসেলার লিস্ট
                  </button>
                </div>
              </div>
              <div className="absolute right-0 top-0 w-64 h-64 bg-white opacity-5 -mr-20 -mt-20 rounded-full blur-3xl transition-transform duration-700 group-hover:scale-150"></div>
            </div>

            <DashboardStats />

            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-black text-gray-800">ট্রেন্ডিং প্রোডাক্টস 🔥</h2>
              <button className="text-blue-600 font-bold hover:underline">সবগুলো দেখুন</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
              {MOCK_PRODUCTS.map(product => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onOrder={handlePlaceOrder} 
                />
              ))}
            </div>
          </>
        );

      case Tab.ORDERS:
        return (
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-black text-gray-800 mb-8">আমার অর্ডারসমূহ 📦</h2>
            <div className="bg-white rounded-[2rem] shadow-xl border border-gray-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-gray-50 border-b border-gray-100">
                    <tr>
                      <th className="p-6 text-xs font-bold text-gray-400 uppercase">অর্ডার আইডি</th>
                      <th className="p-6 text-xs font-bold text-gray-400 uppercase">প্রোডাক্ট</th>
                      <th className="p-6 text-xs font-bold text-gray-400 uppercase">কাস্টমার</th>
                      <th className="p-6 text-xs font-bold text-gray-400 uppercase">তারিখ</th>
                      <th className="p-6 text-xs font-bold text-gray-400 uppercase">মূল্য</th>
                      <th className="p-6 text-xs font-bold text-gray-400 uppercase">স্ট্যাটাস</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {orders.map((order) => (
                      <tr key={order.id} className="hover:bg-blue-50/30 transition-colors">
                        <td className="p-6 font-bold text-blue-700">{order.id}</td>
                        <td className="p-6 font-medium text-gray-800">{order.productName}</td>
                        <td className="p-6">
                          <div className="text-sm font-bold text-gray-800">{order.customerName}</div>
                          <div className="text-xs text-gray-400">{order.phone}</div>
                        </td>
                        <td className="p-6 text-sm text-gray-500">{order.date}</td>
                        <td className="p-6 font-black text-gray-800">৳{order.sellingPrice}</td>
                        <td className="p-6">
                          <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${
                            order.status === 'Delivered' ? 'bg-green-100 text-green-700' :
                            order.status === 'Shipped' ? 'bg-blue-100 text-blue-700' :
                            order.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-red-100 text-red-700'
                          }`}>
                            {order.status === 'Pending' ? 'পেন্ডিং' : 
                             order.status === 'Shipped' ? 'শিপড' : 
                             order.status === 'Delivered' ? 'ডেলিভারড' : 'বাতিল'}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {orders.length === 0 && (
                <div className="p-20 text-center text-gray-400">
                  <i className="fas fa-shopping-basket text-6xl mb-4 opacity-20"></i>
                  <p className="text-lg">এখনো কোনো অর্ডার নেই</p>
                </div>
              )}
            </div>
          </div>
        );

      case Tab.AI:
        return <AIContentAssistant />;

      case Tab.WALLET:
        return (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black text-gray-800 mb-8">আমার ওয়ালেট 💳</h2>
            <div className="bg-gradient-to-br from-blue-700 to-indigo-900 p-10 rounded-[2.5rem] text-white shadow-2xl mb-8 flex flex-col md:flex-row justify-between items-center gap-8">
              <div>
                <p className="text-blue-200 text-sm font-bold uppercase tracking-widest mb-2">মোট ব্যালেন্স</p>
                <h3 className="text-5xl font-black">৳১২,৫০০.০০</h3>
                <p className="text-blue-300 text-sm mt-4 italic">পরবর্তী পেমেন্ট রিলেজ হবে ৫ই ডিসেম্বর</p>
              </div>
              <button className="bg-yellow-400 text-blue-900 px-10 py-5 rounded-3xl font-black text-lg hover:bg-yellow-300 transition shadow-xl shadow-indigo-900/50">
                উইথড্র রিকোয়েস্ট দিন
              </button>
            </div>

            <h3 className="text-xl font-bold text-gray-800 mb-6">ট্রানজ্যাকশন হিস্ট্রি</h3>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white p-6 rounded-3xl shadow-md border border-gray-50 flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <div className="bg-green-100 text-green-600 w-12 h-12 rounded-2xl flex items-center justify-center">
                      <i className="fas fa-arrow-down text-xl"></i>
                    </div>
                    <div>
                      <p className="font-bold text-gray-800">অর্ডার প্রফিট - ORD-5542</p>
                      <p className="text-xs text-gray-400">২২ নভেম্বর, ২০২৩ • ৩:৪৫ PM</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-black text-green-600">+৳২৫০</p>
                    <p className="text-[10px] text-gray-400 uppercase font-bold">সফল</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return <div>শীঘ্রই আসছে...</div>;
    }
  };

  return (
    <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
      <div className="animate-in fade-in duration-500">
        {renderContent()}
      </div>
    </Layout>
  );
};

export default App;
