
import React, { useState } from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onOrder: (details: any) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onOrder }) => {
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    price: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.price) {
      alert('সবগুলো ঘর পূরণ করুন');
      return;
    }
    onOrder({ ...formData, productId: product.id, productName: product.name });
    setShowOrderForm(false);
    setFormData({ name: '', phone: '', price: '' });
  };

  return (
    <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden border border-gray-100 transition hover:shadow-2xl flex flex-col h-full">
      <div className="relative h-56 group overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          {product.stock > 10 ? (
            <div className="bg-green-500 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase">স্টকে আছে</div>
          ) : (
            <div className="bg-red-500 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase">স্টক আউট হতে পারে</div>
          )}
          {product.isTrending && (
            <div className="bg-yellow-400 text-blue-900 px-3 py-1 rounded-full text-[10px] font-bold uppercase">ট্রেন্ডিং</div>
          )}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-1 text-gray-800 line-clamp-1">{product.name}</h3>
        <p className="text-gray-500 text-sm mb-4">{product.category}</p>
        
        <div className="flex justify-between items-center mb-6">
          <div>
            <span className="text-2xl font-black text-blue-700">৳{product.price}</span>
            <span className="text-sm text-gray-400 line-through ml-2">৳{product.originalPrice}</span>
          </div>
          <div className="text-right">
            <p className="text-[10px] text-gray-400 uppercase font-bold">স্টক</p>
            <p className="text-lg font-bold text-gray-700">{product.stock} পিস</p>
          </div>
        </div>

        <div className="flex gap-2 mb-4">
          <button className="flex-1 bg-gray-100 py-3 rounded-xl text-xs font-bold text-gray-600 hover:bg-gray-200 transition-colors uppercase tracking-tight flex items-center justify-center gap-2">
            <i className="fas fa-download"></i> ছবি ও ভিডিও
          </button>
        </div>

        {!showOrderForm ? (
          <button 
            onClick={() => setShowOrderForm(true)}
            className="w-full bg-blue-700 text-white py-4 rounded-xl font-bold hover:bg-blue-800 transition shadow-lg shadow-blue-200"
          >
            অর্ডার দিন
          </button>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3 bg-blue-50 p-4 rounded-2xl border border-blue-100 animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="flex justify-between items-center mb-1">
              <p className="text-xs font-bold text-blue-700 uppercase">কাস্টমার তথ্য</p>
              <button type="button" onClick={() => setShowOrderForm(false)} className="text-gray-400 hover:text-red-500">
                <i className="fas fa-times"></i>
              </button>
            </div>
            <input 
              type="text" 
              placeholder="কাস্টমারের নাম" 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full p-3 bg-white border border-blue-100 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              required
            />
            <input 
              type="tel" 
              placeholder="মোবাইল নম্বর" 
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              className="w-full p-3 bg-white border border-blue-100 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              required
            />
            <input 
              type="number" 
              placeholder="সেলিং প্রাইস (৳)" 
              value={formData.price}
              onChange={(e) => setFormData({...formData, price: e.target.value})}
              className="w-full p-3 bg-white border border-blue-100 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              required
            />
            <button type="submit" className="w-full bg-blue-700 text-white py-3 rounded-xl font-bold hover:bg-blue-800 transition">অর্ডার কনফার্ম করুন</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
