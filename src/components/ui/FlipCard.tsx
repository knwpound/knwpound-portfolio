"use client";
import Image from "next/image";
import { ReactNode } from "react";

type FlipCardProps = {
  front: ReactNode;
  back: ReactNode;  
  className?: string; 
};

export function FlipCard({ front, back, className }: FlipCardProps) {
  return (
    <div
      className={`group relative ${className || "w-[250px] h-[300px]"} perspective`}
      style={{ perspective: "1000px" }}
    >
      <div
        className="relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
      >
        {/* Front */}
        <div className="absolute w-full h-full shadow-lg rounded-md [backface-visibility:hidden] overflow-hidden">
          {front}
        </div>

        {/* Back */}
        <div className="absolute w-full h-full bg-white flex items-center justify-center shadow-lg rounded-md [backface-visibility:hidden] [transform:rotateY(180deg)]">
          {back}
        </div>
      </div>
    </div>
  );
}
