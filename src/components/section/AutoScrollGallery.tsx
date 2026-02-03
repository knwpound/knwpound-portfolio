"use client";
import Image from "next/image";
import { FlipCard } from "../ui/FlipCard";
import { Gallery } from "../ui/Gallery";

export default function AutoScrollGallery() {
  return (
    <div className="overflow-hidden w-full py-10">
      <div className="flex animate-scroll gap-5">
        <Gallery/>
        <Gallery/>
        </div>
    </div>
  );
}
