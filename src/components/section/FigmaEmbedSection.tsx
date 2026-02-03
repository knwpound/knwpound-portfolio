// components/FigmaEmbedSection.tsx
import React, { ReactNode } from "react";
import FigmaEmbed from "../ui/FigmaEmbed";

interface FigmaSectionProps {
  title: string;
  figmaLink: string;
  description: ReactNode;
  isReversed?: boolean; // เพิ่ม Prop สำหรับสลับฝั่ง (Optional)
}

export default function FigmaEmbedSection({
  title,
  figmaLink,
  description,
  isReversed = false, // ค่าเริ่มต้นเป็น false (Embed อยู่ซ้ายเหมือนเดิม)
}: FigmaSectionProps) {
  return (
    <div className="flex justify-center items-center">
      <div 
        className={`w-full flex flex-col items-center justify-center gap-10 p-6 md:px-16 
          ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"}`}
      >
        {/* ส่วนของ Figma */}
        <div className="w-full lg:w-2/3 h-full">
          <FigmaEmbed figmaLink={figmaLink} />
        </div>

        {/* ส่วนของ Content */}
        <div className="w-full lg:w-1/3 flex flex-col gap-4">
          <h1 className="font-serif text-xl lg:text-3xl font-semibold text-slate-900 truncate whitespace-nowrap">
            {title}
          </h1>
          <div className="text-sm space-y-4 text-justify leading-relaxed text-gray-700">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
}