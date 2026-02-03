export default function PostIt({ title, desc, rotate }:{title:string,desc:string,rotate:string}) {
  return (
    <div className={`flex flex-col items-center p-2 md:p-6 shadow-md transition-all duration-300 bg-white
      w-[120px] h-[140px] xs-[150px] xs-[150px] sm:w-[200px] sm:h-[200px] lg:w-[250px] lg:h-[250px] 
      hover:rotate-0 hover:scale-105 ${rotate}`}>
      
      {/* Red Pin Icon */}
      <div className="mb-2">
        <div className="bg-red-400 w-3 h-3 md:w-5 md:h-5 relative top-2 md:top-3.5 start-0.5 md:start-1 z-20 rounded-full"></div>
        <div className="bg-red-600 w-3 h-3 md:w-5 md:h-5 relative z-10 rounded-full shadow-inner"></div>
      </div>

      <h2 className="text-center font-bold md:text-xl lg:text-2xl mb-1 md:mb-2 italic">{title}</h2>
      <p className="w-full text-center font-light leading-tight text-[10px] md:text-xs lg:text-sm px-1">
        {desc}
      </p>
    </div>
  );
}