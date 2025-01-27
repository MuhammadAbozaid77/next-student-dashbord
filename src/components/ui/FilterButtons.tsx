import { IoFilterSharp } from "react-icons/io5";
import { TbMenuOrder } from "react-icons/tb";
import { TiPlus } from "react-icons/ti";

export default function FilterButtons() {
  const role = "dd";
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
      {role === "admin" && (
        <div className=" cursor-pointer">
          <TiPlus
            size={35}
            className="text-white bg-mainBgColor rounded-md p-1"
          />
        </div>
      )}
    </div>
  );
}
