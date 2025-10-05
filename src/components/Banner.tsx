import { FlipText } from "./FlipText"
export function Banner(){
    return(
        <div
        className="h-[200vh] w-full"
        style={{
          background:
            "radial-gradient(circle at 50% 40%, #EECE7B, transparent, transparent),radial-gradient(circle at 30% 40%, #FF8D4B, #ffff, #ffff)",
        }}
      >
        <div className="relative top-[60vh] start-[10%]">
          <div className="flex flex-row gap-3">
            <p className="font-serif italic text-3xl">
              Sawasdee ka, Your Favorite
            </p>
            <FlipText/>
            <p className="font-serif italic text-3xl">is here</p>
          </div>

          <h1 className="mt-8 text-8xl font-apple">Pound Kanokwan</h1>
          <div className="mt-[50vh]">
            <h1 className="text-[48px] font-semibold">About Me</h1>
            <p>Hi, I'm Pound, a 4th-year Computer Engineering student.</p>
            <p>I love designing and creating interactive user experiences.</p>
            <p>I'm passionate about web development and UI/UX design.</p>
            <p>
              In my free time, I enjoy learning new technologies and improving
              my skills.
            </p>
          </div>
        </div>
      </div>
    )
}