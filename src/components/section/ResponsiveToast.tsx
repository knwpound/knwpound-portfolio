"use client";
import { useState, useEffect } from "react";
import { Smartphone, CheckCircle2, X } from "lucide-react"; // ใช้ lucide-react สำหรับไอคอน

export function ResponsiveToast() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // หน่วงเวลา 1 วินาทีหลังจากโหลดหน้าเว็บแล้วค่อยเด้งขึ้นมา
    const timer = setTimeout(() => setIsVisible(true), 1000);
    
    // ตั้งเวลาให้หายไปเองหลังจาก 5 วินาที
    const hideTimer = setTimeout(() => setIsVisible(false), 6000);

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-5 right-5 z-[100] animate-in fade-in slide-in-from-right-10 duration-500">
      <div className="bg-white border-l-4 border-green-500 shadow-2xl p-4 rounded-lg flex items-center gap-4 min-w-[300px]">
        <div className="bg-green-100 p-2 rounded-full">
          <Smartphone className="w-5 h-5 text-green-600" />
        </div>
        
        <div className="flex-1">
          <h3 className="text-sm font-bold text-gray-900 flex items-center gap-1">
            Responsive Ready! <CheckCircle2 className="w-3 h-3" />
          </h3>
          <p className="text-xs text-gray-500 italic">
            "Now looking good on every screen size."
          </p>
        </div>

        <button 
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}