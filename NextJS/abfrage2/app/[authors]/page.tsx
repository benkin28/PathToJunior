"use client";
import { authors } from "../(data)/mock";
import { usePathname, useRouter } from "next/navigation";
export default function Page() {
  const pathname: string = usePathname();
  const router = useRouter();
  console.log(pathname);
  const id: number = Number(pathname.slice(1));
  console.log(id);
  const renderarray = Array.from(Array(100).keys());
  return (
    <div className="flex flex-col justify-center gap-1 w-screen h-screen overflow-scroll flex-1">
      {renderarray.map((element, index) => {
        return (
          <div
            key={index}
            id={String(index+1)}
            className="w-[200px] h-[200px] bg-blue-800 flex-none"
          ></div>
        );
      })}
      <button onClick={() => router.push("/")}>Go to Home</button>
    </div>
  );
}
