"use client"
import { Files } from "./File";
import { useAOS } from "@/้hooks/useAos";
export function UxClass() {
  useAOS(1000);
  return (
    <div className="w-full h-screen bg-[#FF8D4B] flex flex-col py-10 justify-center items-center">
      <h1 className="text-3xl font-semibold">I'm also taking UxUi Classes</h1>
      <div data-aos="fade-down" data-aos-duration="1000" className="mt-45 animate-fall">
        <div
          className={`absolute flex flex-col w-[500px] h-[200px] bg-[#EECE7B] hover:-translate-y-32 transition-transform duration-400 z-40`}
        >
          <div
            className={`absolute -top-7 ms-0 w-[125px] h-[30px] bg-[#EECE7B] rounded-t-lg cursor-pointer`}
          ></div>
        </div>
        <div
          className={`absolute flex flex-col w-[500px] h-[200px] bg-[#7EA763] hover:-translate-y-32 transition-transform duration-400 z-20`}
        >
          <div
            className={`absolute -top-7 ms-[125px] w-[125px] h-[30px] bg-[#7EA763] rounded-t-lg cursor-pointer`}
          ></div>
        </div>
        <div
          className={`absolute flex flex-col w-[500px] h-[200px] bg-[#DA5577] hover:-translate-y-32 transition-transform duration-400 z-20`}
        >
          <div
            className={`absolute -top-7 ms-[250px] w-[125px] h-[30px] bg-[#DA5577] rounded-t-lg cursor-pointer`}
          ></div>
        </div>
        <div
          className={`absolute flex flex-col w-[500px] h-[200px] bg-[#E5D0FF] hover:-translate-y-32 transition-transform duration-400 z-20`}
        >
          <div
            className={`absolute -top-7 ms-[375px] w-[125px] h-[30px] bg-[#E5D0FF] rounded-t-lg cursor-pointer`}
          ></div>
        </div>
        <div className="relative top-4 flex flex-col items-center pt-6 w-[500px] h-[250px] bg-white rounded-md z-50">
          <div className="w-[50%] h-[30px] bg-[#EECE7B] rounded-full"></div>
          <div className="absolute flex justify-center items-center w-[50%] h-[20%] bottom-10 pt-2 border-10 border-gray-200">
            <h1 className="font-apple">Lecture</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
