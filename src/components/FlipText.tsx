export function FlipText(){
    return(
        <div className="group inline-block [perspective:1000px]">
              <div className="relative w-40 h-10 rounded-lg [transform-style:preserve-3d] transition-transform duration-500 group-hover:[transform:rotateY(180deg)]">
                {/* Front Face */}
                <div className="absolute inset-0 rounded-lg bg-violet-300 flex items-center justify-center [backface-visibility:hidden]">
                  <p className="font-serif italic text-3xl text-center">
                    Designer
                  </p>
                </div>

                {/* Back Face */}
                <div className="absolute inset-0 rounded-lg bg-lime-200 flex items-center justify-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <p className="font-serif italic text-3xl text-center">
                    Developer
                  </p>
                </div>
              </div>
            </div>
    )
}