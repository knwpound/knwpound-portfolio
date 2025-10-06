import Image from "next/image"
import { FlipCard } from "./FlipCard"
export function Gallery(){
    return(
        <div className="flex gap-5">
                <FlipCard 
                front={<iframe
                    src="https://www.youtube.com/embed/s6bN0dfBuLM?mute=1"
                    title="youtube"
                    className="absolute top-1/2 left-1/2 w-[177.78%] h-full -translate-x-1/2 -translate-y-1/2"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                  ></iframe>}
                back={
                    <div>123</div>
                }/>
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
                    123
                }/>
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
                    123
                }/>
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
                    123
                }/>
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
                    123
                }/>
              </div>
    )
}