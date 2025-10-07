import Image from "next/image";
import { FlipCard } from "./FlipCard";
export function Gallery() {
  return (
    <div className="flex gap-5">
      <FlipCard
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
      />
      <FlipCard
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
      />
      <FlipCard
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
      />
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
                Link
              </a>
            </div>
          </div>
        }
      />
      <FlipCard
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
                Link
              </a>
            </div>
          </div>
        }
      />
    </div>
  );
}
