import { IoFilterSharp } from "react-icons/io5";
import { TbMenuOrder } from "react-icons/tb";

export default function FilterButtons() {
  return (
    <div className="flex justify-center items-center  gap-2">
      <div className=" cursor-pointer">
        <IoFilterSharp
          size={35}
          className="text-white bg-mainBgColor rounded-md p-1"
        />
      </div>
      <div className=" cursor-pointer">
        <TbMenuOrder
          size={35}
          className="text-white bg-mainBgColor rounded-md p-1"
        />
      </div>
    </div>
  );
}
