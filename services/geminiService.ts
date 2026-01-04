
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateMarketingPost = async (productName: string, category: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Create a catchy Facebook/TikTok marketing post in Bengali for a product named "${productName}" in the category "${category}". 
      Include emojis and bullet points for features. Make it sound professional yet attractive for resellers.`,
      config: {
        systemInstruction: "You are an expert digital marketing manager specializing in the Bangladeshi e-commerce market (F-commerce).",
        temperature: 0.8,
      },
    });
    
    return response.text;
  } catch (error) {
    console.error("AI Generation Error:", error);
    return "দুঃখিত, বর্তমানে এআই রেসপন্স পাওয়া যাচ্ছে না। অনুগ্রহ করে পরে চেষ্টা করুন।";
  }
};
