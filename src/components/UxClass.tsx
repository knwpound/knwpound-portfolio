"use client";
import Link from "next/link";
import { Files } from "./File";
import { useAOS } from "@/้hooks/useAos";
export function UxClass() {
  useAOS(1000);
  return (
    <div className="w-full h-screen bg-[#FF8D4B] flex flex-col py-10 justify-center items-center">
      <div
        data-aos="fade-down"
        data-aos-duration="1000"
        className="mt-30 animate-fall"
      >
        <div
          className={`absolute flex flex-col w-[500px] h-[200px] bg-[#EECE7B] hover:-translate-y-40 transition-transform duration-400 z-40`}
        >
          <div
            className={`absolute -top-7 ms-0 w-[125px] h-[30px] bg-[#EECE7B] rounded-t-lg cursor-pointer`}
          ></div>
          <div className="w-full h-full flex flex-row gap-2 px-4 py-3">
            <div className="w-full h-full flex flex-col gap-1">
              <div className="w-full flex flex-col">
                <div className="w-full flex flex-row justify-between">
                  <h1 className="text-xl font-semibold">CP Website</h1>
                  <Link
                    href={
                      "https://www.figma.com/design/omfIdKjQSJmBEcNpgwRctD/Wireframe?node-id=27-53&t=Px2REJiCr3qt6rRr-1"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button
                      className="bg-black text-white border-1 border-black text-sm font-semibold px-3 py-1 rounded-md
                  hover:bg-white hover:text-black transition-transform duration-300"
                    >
                      Figma
                    </button>
                  </Link>
                </div>

                <p className="text-xs">Senior Project – Website Redesign </p>
              </div>

              <p className="text-sm text-justify">
                The process included{" "}
                <b className="font-semibold">Requirement Gathering</b> through{" "}
                <i>surveys</i> and <i>interviews</i>, followed by Website{" "}
                <i>Auditing</i> and related research. Low-Fidelity
                <b className="font-semibold"> Wireframes</b> were sketched and
                refined with feedback, then translated into a consistent{" "}
                <b className="font-semibold">Design System</b> and High-Fidelity
                Wireframes, culminating in a{" "}
                <b className="font-semibold">Clickable Prototype</b> tested with
                users.
              </p>
            </div>
          </div>
        </div>
        <div
          className={`absolute flex flex-col w-[500px] h-[200px] bg-[#7EA763] hover:-translate-y-32 transition-transform duration-400 z-20`}
        >
          <div
            className={`absolute -top-7 ms-[125px] w-[125px] h-[30px] bg-[#7EA763] rounded-t-lg cursor-pointer`}
          ></div>
          <div className="w-full h-full flex flex-col gap-2 px-4 py-5">
            <h1 className="text-2xl font-semibold">To be filled ...</h1>
          </div>
        </div>
        <div
          className={`absolute flex flex-col w-[500px] h-[200px] bg-[#DA5577] hover:-translate-y-40 transition-transform duration-400 z-20`}
        >
          <div
            className={`absolute -top-7 ms-[250px] w-[125px] h-[30px] bg-[#DA5577] rounded-t-lg cursor-pointer`}
          ></div>
          <div className="w-full h-full flex flex-col gap-2 px-4 py-3">
            <div className="w-full h-full flex flex-col gap-1">
              <div className="w-full flex flex-col">
                <div className="w-full flex flex-row justify-between">
                  <h1 className="text-xl font-semibold">Fitness</h1>
                  <Link
                    href={
                      "https://www.figma.com/design/LrfaZHiF1lie1aAPwezPzn/Fitness-App?node-id=0-1&t=IFnhHE5eiWnnPP7r-1"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button
                      className="bg-black text-white border-1 border-black text-sm font-semibold px-3 py-1 rounded-md
                  hover:bg-white hover:text-black transition-transform duration-300"
                    >
                      Figma
                    </button>
                  </Link>
                </div>

                <p className="text-xs">
                  Course Project – Fitness application for non-trainer users
                </p>
              </div>

              <p className="text-sm text-justify">
                The process covered{" "}
                <b className="font-semibold">Requirement Gathering</b>,
                <b className="font-semibold">Application Auditing</b>, and
                creating{" "}
                <b className="font-semibold">Low-Fidelity Wireframes</b>
                with feedback, followed by a{" "}
                <b className="font-semibold">Design System</b>,{" "}
                <b className="font-semibold">High-Fidelity Wireframes</b>, and a{" "}
                <b className="font-semibold">Clickable Prototype</b> tested with
                users.
              </p>
            </div>
          </div>
        </div>
        <div
          className={`absolute flex flex-col w-[500px] h-[200px] bg-[#E5D0FF] hover:-translate-y-40 transition-transform duration-400 z-20`}
        >
          <div
            className={`absolute -top-7 ms-[375px] w-[125px] h-[30px] bg-[#E5D0FF] rounded-t-lg cursor-pointer`}
          ></div>
          <div className="w-full h-full flex flex-col items-end gap-2 px-4 py-5">
            <div className="w-full h-full flex flex-col gap-1">
              <div className="w-full flex flex-col items-end">
                <div className="w-full flex flex-row justify-between">
                  <Link
                    href={
                      "https://www.figma.com/design/Y2eAMZ9AV4BRHSSOB1o0JI/PPY-Website-Design?node-id=219-513&t=fECyz2HAs1UaWzOM-1"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button
                      className="bg-black text-white border-1 border-black text-sm font-semibold px-3 py-1 rounded-md
                  hover:bg-white hover:text-black transition-transform duration-300"
                    >
                      Figma
                    </button>
                  </Link>
                  <h1 className="text-xl font-semibold">PPY</h1>
                </div>

                <p className="text-xs">
                  Side Project – Redesign of Plookpanya School website
                </p>
              </div>

              <p className="text-sm text-justify">
                The process covered{" "}
                <b className="font-semibold">Requirement Gathering</b>,{" "}
                <b className="font-semibold">Application Auditing</b>, and
                creating{" "}
                <b className="font-semibold">Low-Fidelity Wireframes</b> with
                feedback, followed by a{" "}
                <b className="font-semibold">Design System</b>,{" "}
                <b className="font-semibold">High-Fidelity Wireframes</b>, and a{" "}
                <b className="font-semibold">Clickable Prototype</b> tested with
                users.
              </p>
            </div>
          </div>
        </div>
        <div className="relative top-4 flex flex-col items-center pt-6 w-[500px] h-[250px] bg-white rounded-md z-50">
          <div className="w-[50%] h-[30px] bg-[#EECE7B] rounded-full"></div>
          <div className="absolute flex justify-center items-center w-[50%] h-[20%] bottom-10 pt-2 border-10 border-gray-200">
            <h1 className="font-apple">Portfolio</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
