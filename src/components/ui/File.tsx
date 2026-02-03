"use client"
export function Files({
  z,
  color,
  m,
}: {
  z: String;
  color: String;
  m: String;
}) {

  return (
      <div className={`absolute flex flex-col w-[500px] h-[200px] bg-${color} hover:-translate-y-32 transition-transform duration-300 z-${z}`}>
        <div
          className={`absolute -top-7 ms-${m} w-[100px] h-[30px] bg-${color} rounded-t-lg cursor-pointer`}
        ></div>
      </div>
  );
}
