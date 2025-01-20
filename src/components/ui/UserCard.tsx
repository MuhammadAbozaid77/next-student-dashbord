import { RiMoreFill } from "react-icons/ri";

interface propsType {
  type: string;
}
export default function UserCard({ type }: propsType) {
  return (
    <>
      <div className="border flex-1 rounded-md p-2 h-[100px] odd:bg-boysColor even:bg-girlsColor flex flex-col justify-between">
        <div className="flex justify-between items-center">
          <span className=" px-2 py-1 bg-white rounded-md text-[12px] text-primaryTextColor font-bold">
            22/5/2024
          </span>
          <RiMoreFill className="text-primaryTextColor" size={20} />
        </div>
        <div className="flex justify-between items-center">
          <h1 className="text-[25px] font-semibold text-primaryTextColor">
            1555
          </h1>
          <h2 className="capitalize font-semibold  text-primaryTextColor ">
            {type}
          </h2>
        </div>
      </div>
    </>
  );
}
