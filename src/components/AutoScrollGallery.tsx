"use client";
import Image from "next/image";

export default function AutoScrollGallery() {
  const images = [
    "/pics/cat.jpg",
    "/pics/cat.jpg",
    "/pics/cat.jpg",
    "/pics/cat.jpg",
    "/pics/cat.jpg",
    "/pics/cat.jpg",
  ];

  return (
    <div className="overflow-hidden w-full py-4">
      <div className="flex animate-scroll gap-5">
        {images.map((src, i) => (
          <div key={i} className="relative w-[200px] h-[200px] shrink-0">
            <Image
              src={src}
              alt={`image-${i}`}
              fill
              className="object-cover rounded-md"
            />
          </div>
        ))}
        {/* duplicate set for seamless looping */}
        {images.map((src, i) => (
          <div key={`dup-${i}`} className="relative w-[200px] h-[200px] shrink-0 shadow-lg 
          hover:border hover:border-black">
            <Image
              src={src}
              alt={`dup-${i}`}
              fill
              className="object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
