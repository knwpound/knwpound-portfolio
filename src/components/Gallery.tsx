import Image from "next/image";
import { FlipCard } from "./FlipCard";
export function Gallery() {
  return (
    <div className="flex gap-5">
      {/* Capstone */}
      <FlipCard
        front={
          <Image
            src="/pics/capstone.png"
            alt=""
            fill
            className="object-cover object-top rounded-md"
          />
        }
        back={
          <div className="flex flex-col gap-1 px-5 py-2">
            <div className="flex flex-row gap-2 items-baseline">
              <p className="text-sm font-semibold">Capstone</p>
              <p className="h-full text-xs font-semibold text-gray-400">
                Senior year
              </p>
            </div>
            <h1 className="text-xl font-semibold">CP Website</h1>
            <div className="flex flex-row gap-1">
              <p className="px-3 py-0.5 bg-lime-400/50 rounded-sm font-light text-sm">
                UX
              </p>
              <p className="px-3 py-0.5 bg-violet-300/80 rounded-sm font-light text-sm">
                Designer
              </p>
            </div>
            <p className="w-full text-sm text-justify">
              This project is about redesigning a 10-year-old website into a
              modern ,user-friendly ,and responsive interface. It was my first
              project working with real users, where I took part in requirement
              gathering and UI Lead.{" "}
            </p>
            <hr className="border border-gray-400" />
            <div className="flex w-full justify-end">
              <a
                className="w-fit font-semibold text-white bg-black py-1 px-3 shadow-sm rounded-md
                      hover:bg-white hover:text-black hover:outline hover:outline-black "
                href="https://www.figma.com/design/omfIdKjQSJmBEcNpgwRctD/Wireframe?node-id=1-2&t=Px2REJiCr3qt6rRr-1"
              >
                Figma
              </a>
            </div>
          </div>
        }
      />

      {/* PPY */}
      <FlipCard
        front={
          <Image
            src="/pics/ppy.png"
            alt=""
            fill
            className="object-cover object-top rounded-md bg-gray-100"
          />
        }
        back={
          <div className="flex flex-col gap-1 px-5 py-2">
            <div className="flex flex-row gap-2 items-baseline">
              <p className="text-sm font-semibold">Side Project</p>
              <p className="h-full text-xs font-semibold text-gray-400">
                Senior year
              </p>
            </div>
            <h1 className="text-xl font-semibold">Plookpanya School</h1>
            <div className="flex flex-row gap-1">
              <p className="px-3 py-0.5 bg-violet-300/80 rounded-sm font-light text-sm">
                Designer
              </p>
            </div>
            <p className="w-full text-sm text-justify">
              This was my first side project focusing on redesigning an outdated
              website into a modern and academic interface. I aimed to create a
              design that felt unique and with distinctive interactions and
              elements that stood out.
            </p>
            <hr className="border border-gray-400" />
            <div className="flex w-full justify-end">
              <a
                className="w-fit font-semibold text-white bg-black py-1 px-3 shadow-sm rounded-md
                      hover:bg-white hover:text-black hover:outline hover:outline-black "
                href="https://www.figma.com/design/Y2eAMZ9AV4BRHSSOB1o0JI/PPY-Website-Design?node-id=413-4526&t=fECyz2HAs1UaWzOM-1"
              >
                Figma
              </a>
            </div>
          </div>
        }
      />

      {/* SwdevPrac */}
      <FlipCard
        front={
          <Image
            src="/pics/swdev.png"
            alt=""
            fill
            className="object-cover object-top rounded-md bg-gray-100"
          />
        }
        back={
          <div className="flex flex-col gap-1 px-5 py-2">
            <div className="flex flex-row gap-2 items-baseline">
              <p className="text-sm font-semibold">Sw Dev Prac II</p>
              <p className="h-full text-xs font-semibold text-gray-400">
                Senior year
              </p>
            </div>
            <h1 className="text-xl font-semibold">Event Management</h1>
            <div className="flex flex-row gap-1">
              <p className="px-3 py-0.5 bg-lime-400/50 rounded-sm font-light text-sm">
                Dev
              </p>
              <p className="px-3 py-0.5 bg-violet-300/80 rounded-sm font-light text-sm">
                Designer
              </p>
            </div>
            <p className="w-full text-sm text-justify">
              My solo project for Event Management web application. 
              Simple design for product management website with user and admin view.
            </p>
            <hr className="border border-gray-400" />
            <div className="flex w-full justify-end">
              <a
                className="w-fit font-semibold text-white bg-black py-1 px-3 shadow-sm rounded-md
                      hover:bg-white hover:text-black hover:outline hover:outline-black "
                href="https://swdevprac2-term-project.vercel.app/"
              >
                Link
              </a>
            </div>
          </div>
        }
      />

      {/* Fitness */}
      <FlipCard
        front={
          <Image
            src="/pics/fitness.png"
            alt=""
            fill
            className="object-contain rounded-md bg-gray-100"
          />
        }
        back={
          <div className="flex flex-col gap-1 px-5 py-2">
            <div className="flex flex-row gap-2 items-baseline">
              <p className="text-sm font-semibold">UxUi</p>
              <p className="h-full text-xs font-semibold text-gray-400">
                Senior year
              </p>
            </div>
            <h1 className="text-xl font-semibold">Fitness App</h1>
            <div className="flex flex-row gap-1">
              <p className="px-3 py-0.5 bg-lime-400/50 rounded-sm font-light text-sm">
                UX
              </p>
              <p className="px-3 py-0.5 bg-violet-300/80 rounded-sm font-light text-sm">
                Designer
              </p>
            </div>
            <p className="w-full text-sm text-justify">
              Another UX/UI project focused on creating a mobile application for
              non-trainer fitness users. I worked on understanding the user
              persona, refining the design through iteration, and building a
              structured design system.
            </p>
            <hr className="border border-gray-400" />
            <div className="flex w-full justify-end">
              <a
                className="w-fit font-semibold text-white bg-black py-1 px-3 shadow-sm rounded-md
                      hover:bg-white hover:text-black hover:outline hover:outline-black "
                href="https://www.figma.com/design/omfIdKjQSJmBEcNpgwRctD/Wireframe?node-id=1-2&t=Px2REJiCr3qt6rRr-1"
              >
                Figma
              </a>
            </div>
          </div>
        }
      />

      {/* Smart Flood */}
      {/* <FlipCard
        front={
          <video
            src="/vdo/smart.mp4"
            autoPlay
            loop
            muted
            className="w-full h-[120%] object-cover rounded-md -translate-y-10"
          ></video>
        }
        back={
          <div className="flex flex-col gap-1 px-5 py-2">
            <div className="flex flex-row gap-2 items-baseline">
              <p className="text-sm font-semibold">Embedded</p>
              <p className="h-full text-xs font-semibold text-gray-400">
                Sophomore year
              </p>
            </div>
            <h1 className="text-xl font-semibold">Water Sensor</h1>
            <div className="flex flex-row gap-1">
              <p className="px-3 py-0.5 bg-lime-400/50 rounded-sm font-light text-sm">
                Dev
              </p>
              <p className="px-3 py-0.5 bg-violet-300/80 rounded-sm font-light text-sm">
                Designer
              </p>
            </div>
            <p className="w-full text-sm">
              This project is about a water level sensor used in a dam. I
              designed the entire website's UI/UX. To make it feel more
              realistic, I added animated water waves, and the container can be
              scaled to match real-life sizes.{" "}
            </p>
            <hr className="border border-gray-400" />
            <div className="flex w-full justify-end">
              <a
                className="w-fit font-semibold text-white bg-black py-1 px-3 shadow-sm rounded-md
                      hover:bg-white hover:text-black hover:outline hover:outline-black "
                href="https://smart-floodgate.web.app"
              >
                Link
              </a>
            </div>
          </div>
        }
      /> */}

      {/* AucAuc */}
      <FlipCard
        front={
          <Image
            src="/pics/aucauc.png"
            alt=""
            fill
            className="object-cover object-left rounded-md"
          />
        }
        back={
          <div className="flex flex-col gap-1 px-5 py-2">
            <div className="flex flex-row gap-2 items-baseline">
              <p className="text-sm font-semibold">SE2</p>
              <p className="h-full text-xs font-semibold text-gray-400">
                Junior year
              </p>
            </div>
            <h1 className="text-xl font-semibold">Auc Auc</h1>
            <div className="flex flex-row gap-1">
              <p className="px-3 py-0.5 bg-lime-400/50 rounded-sm font-light text-sm">
                Dev
              </p>
              <p className="px-3 py-0.5 bg-violet-300/80 rounded-sm font-light text-sm">
                Designer
              </p>
            </div>
            <p className="w-full text-sm">
              This was my first agile web-based project, where I took on the
              roles of UX/UI designer and frontend developer. It was also my
              first time gaining hands-on experience with Figma.
            </p>
            <hr className="border border-gray-400" />
            <div className="flex w-full justify-end">
              <a
                className="w-fit font-semibold text-white bg-black py-1 px-3 shadow-sm rounded-md
                      hover:bg-white hover:text-black hover:outline hover:outline-black "
                href="https://www.figma.com/design/NOZXtEpBdPDw014iA7XWfZ/aucauc?node-id=1-2&t=rC3FDK6EALIX1Men-1"
              >
                Figma
              </a>
            </div>
          </div>
        }
      />

      {/* Chat */}
      {/* <FlipCard
        front={
          <Image
            src="/pics/chat.png"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        }
        back={
          <div className="flex flex-col gap-1 px-5 py-2">
            <div className="flex flex-row gap-2 items-baseline">
              <p className="text-sm font-semibold">Network</p>
              <p className="h-full text-xs font-semibold text-gray-400">
                Junior year
              </p>
            </div>
            <h1 className="text-xl font-semibold">Realtime Chat App</h1>
            <div className="flex flex-row gap-1">
              <p className="px-3 py-0.5 bg-lime-400/50 rounded-sm font-light text-sm">
                Dev
              </p>
              <p className="px-3 py-0.5 bg-violet-300/80 rounded-sm font-light text-sm">
                Designer
              </p>
              <p className="px-3 py-0.5 bg-fuchsia-200 rounded-sm font-light text-sm">
                PM
              </p>
            </div>
            <p className="w-full text-sm">
              Real-time chat application built with Socket.io. I took the lead
              on this project, handling planning, task allocation, designer and
              developer. The design concept focuses on simplicity, clarity, and
              familiarity for users.
            </p>
            <hr className="border border-gray-400" />
            <div className="flex w-full justify-end">
              <a
                className="w-fit font-semibold text-white bg-black py-1 px-3 shadow-sm rounded-md
                      hover:bg-white hover:text-black hover:outline hover:outline-black "
                href="https://www.figma.com/design/r3L2Ix6JiQNoDwvwX9YbH9/Network?node-id=0-1&t=cFl1NPIpO3S8wHQZ-1"
              >
                Figma
              </a>
            </div>
          </div>
        }
      /> */}
    </div>
  );
  {
    /* Game */
  }
  {
    /* <FlipCard
        front={
          <iframe
            src="https://www.youtube.com/embed/s6bN0dfBuLM?mute=1"
            title="youtube"
            className="absolute top-1/2 left-1/2 w-[177.78%] h-full -translate-x-1/2 -translate-y-1/2"
            allow="autoplay; fullscreen"
            allowFullScreen
          ></iframe>
        }
        back={
          <div className="flex flex-col gap-2 px-5 py-2">
            <div className="flex flex-row gap-2 items-baseline">
              <p className="text-sm font-semibold">Progmeth</p>
              <p className="h-full text-xs font-semibold text-gray-400">
                Sophomore year
              </p>
            </div>
            <h1 className="text-xl font-semibold">JavaFx Game Project</h1>
            <div className="flex flex-row gap-1">
              <p className="px-3 py-0.5 bg-lime-400/50 rounded-sm font-light text-sm">
                Dev
              </p>
              <p className="px-3 py-0.5 bg-violet-300/80 rounded-sm font-light text-sm">
                Designer
              </p>
              <p className="px-3 py-0.5 bg-fuchsia-200 rounded-sm font-light text-sm">
                PM
              </p>
            </div>
            <p className="w-full text-sm">
              This was my very first project ! Moo Day is a lively farming game
              built with Java and JavaFX, under the OOP concept. I took the lead
              on planning and developing from start to finish.{" "}
            </p>
            <hr className="border border-gray-400" />
            <div className="flex w-full justify-end">
              <a
                className="w-fit font-semibold text-white bg-black py-1 px-3 shadow-sm rounded-md
                      hover:bg-white hover:text-black hover:outline hover:outline-black "
                href="https://youtu.be/s6bN0dfBuLM"
              >
                Link
              </a>
            </div>
          </div>
        }
      /> */
  }
  {
    /* <FlipCard
        front={
          <Image
            src="/pics/game.png"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        }
        back={
          <div className="flex flex-col gap-2 px-5 py-2">
            <div className="flex flex-row gap-2 items-baseline">
              <p className="text-sm font-semibold">ComEngEss</p>
              <p className="h-full text-xs font-semibold text-gray-400">
                Sophomore year
              </p>
            </div>
            <h1 className="text-xl font-semibold">Box & Bone</h1>
            <div className="flex flex-row gap-1">
              <p className="px-3 py-0.5 bg-lime-400/50 rounded-sm font-light text-sm">
                Dev
              </p>
              <p className="px-3 py-0.5 bg-violet-300/80 rounded-sm font-light text-sm">
                Designer
              </p>
              <p className="px-3 py-0.5 bg-fuchsia-200 rounded-sm font-light text-sm">
                PM
              </p>
            </div>
            <p className="w-full text-sm">
              Box & Bone is a fun game similar to Pac-Man, where players race to
              collect as many coins as possible within a set time limit! I have
              taken on the roles of task manager and full-stack developer for
              this exciting project!
            </p>
          </div>
        }
      /> */
  }
}
