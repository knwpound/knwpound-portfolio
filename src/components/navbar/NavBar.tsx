"use client";
import { useAOS } from "@/้hooks/useAos";

export function NavBar() {
  useAOS(1000);
  return (
    <div
      data-aos="fade-up"
      className="flex flex-row gap-[32px] w-fit px-5 py-1 rounded-full shadow-md bg-white
      fixed top-2 left-1/2 -translate-x-1/2 z-50"
    >
      <a className="hover:underline active:font-semibold" href="#home">Home</a>
      <a className="hover:underline active:font-semibold" href="#lately">Skills</a>
      <a className="hover:underline active:font-semibold" href="#work">Work</a>
      <a className="hover:underline active:font-semibold" href="#contact">Contact</a>
    </div>
  );
}
