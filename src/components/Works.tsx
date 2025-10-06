import Image from "next/image"
import AutoScrollGallery from "./AutoScrollGallery"
export function Works() {
  return <div className="w-full h-screen flex flex-col justify-center gap-10">
    <h1 className="text-3xl ms-20 font-semibold">Explore My Work</h1>
    
<AutoScrollGallery/>

    
  </div>
}
