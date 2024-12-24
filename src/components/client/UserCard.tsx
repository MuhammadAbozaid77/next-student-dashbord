import { RiMoreFill } from "react-icons/ri";

interface propsType {
  type: string;
}
export default function UserCard({ type }: propsType) {
  return (
    <>
      <div className="border flex-1 rounded-md p-2 h-[150px] odd:bg-boysColor even:bg-girlsColor flex flex-col justify-between">
        <div className="flex justify-between items-center">
          <span className=" px-2 py-1 bg-slate-50  rounded-md text-[12px]">
            22/5/2024
          </span>
          <RiMoreFill />
        </div>

        <h1 className="text-[25px] font-semibold">1555</h1>
        <h2 className="capitalize font-semibold  text-gray-500 ">{type}</h2>
      </div>
    </>
  );
}
