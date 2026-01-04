
import React, { useState } from 'react';
import { MOCK_PRODUCTS } from '../constants';
import { generateMarketingPost } from '../services/geminiService';

const AIContentAssistant: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState(MOCK_PRODUCTS[0].id);
  const [generatedContent, setGeneratedContent] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    setIsGenerating(true);
    const product = MOCK_PRODUCTS.find(p => p.id === selectedProduct);
    if (product) {
      const content = await generateMarketingPost(product.name, product.category);
      setGeneratedContent(content || '');
    }
    setIsGenerating(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedContent);
    alert('কপি করা হয়েছে!');
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8 p-8 bg-gradient-to-br from-indigo-700 to-purple-800 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-3xl font-black mb-2">এআই মার্কেটিং অ্যাসিস্ট্যান্ট 🤖</h2>
          <p className="opacity-80 text-lg">আপনার প্রোডাক্টের জন্য চমৎকার সেলস পোস্ট লিখুন এক ক্লিকেই।</p>
        </div>
        <div className="absolute -right-10 -bottom-10 opacity-10 rotate-12">
          <i className="fas fa-robot text-[12rem]"></i>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1 bg-white p-6 rounded-3xl shadow-lg border border-gray-100">
          <label className="block text-sm font-bold text-gray-700 mb-2">প্রোডাক্ট সিলেক্ট করুন</label>
          <select 
            value={selectedProduct}
            onChange={(e) => setSelectedProduct(e.target.value)}
            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 mb-6"
          >
            {MOCK_PRODUCTS.map(p => (
              <option key={p.id} value={p.id}>{p.name}</option>
            ))}
          </select>

          <button 
            onClick={handleGenerate}
            disabled={isGenerating}
            className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
              isGenerating ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-100'
            }`}
          >
            {isGenerating ? (
              <>
                <i className="fas fa-circle-notch fa-spin"></i> লিখছি...
              </>
            ) : (
              <>
                <i className="fas fa-magic"></i> কনটেন্ট জেনারেট করুন
              </>
            )}
          </button>
        </div>

        <div className="md:col-span-2 bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden flex flex-col min-h-[400px]">
          <div className="bg-gray-50 p-4 border-b border-gray-100 flex justify-between items-center">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">ফলাফল</span>
            {generatedContent && (
              <button 
                onClick={copyToClipboard}
                className="text-indigo-600 font-bold text-xs hover:text-indigo-800 flex items-center gap-1"
              >
                <i className="fas fa-copy"></i> কপি করুন
              </button>
            )}
          </div>
          <div className="p-8 flex-grow">
            {!generatedContent && !isGenerating ? (
              <div className="h-full flex flex-col items-center justify-center text-gray-400 opacity-60">
                <i className="fas fa-pen-nib text-5xl mb-4"></i>
                <p>বাম পাশ থেকে প্রোডাক্ট সিলেক্ট করে জেনারেট বাটনে ক্লিক করুন</p>
              </div>
            ) : isGenerating ? (
              <div className="space-y-4 animate-pulse">
                <div className="h-4 bg-gray-100 rounded w-3/4"></div>
                <div className="h-4 bg-gray-100 rounded w-1/2"></div>
                <div className="h-4 bg-gray-100 rounded w-5/6"></div>
                <div className="h-4 bg-gray-100 rounded w-2/3"></div>
              </div>
            ) : (
              <div className="whitespace-pre-wrap text-gray-700 leading-relaxed font-medium">
                {generatedContent}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIContentAssistant;
