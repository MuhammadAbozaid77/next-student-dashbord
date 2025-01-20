import { AiOutlineMessage } from "react-icons/ai";
import { RiNotification2Line } from "react-icons/ri";
import { RiSearch2Line } from "react-icons/ri";
import { RiUser3Line } from "react-icons/ri";

export default function Navbar() {
  return (
    <>
      <div className="flex justify-between items-center p-5 border-b bg-white">
        {/* Search Bar */}
        <div className="md:flex hidden justify-center items-center bg-white px-2 rounded-md gap-1 border">
          <RiSearch2Line
            className="text-mainTextColor cursor-pointer"
            size={25}
          />
          <input
            type="text"
            placeholder="Serach..."
            className="  rounded-md outline-none text-gray-500 p-2  text-[14px]"
          />
        </div>
        {/* Icons And Users */}
        <div className="flex justify-center items-center gap-2">
          <div className="relative cursor-pointer">
            <RiNotification2Line
              size={35}
              className="text-white bg-mainBgColor rounded-md p-1"
            />
            <span className="absolute w-[20px] h-[20px] rounded-full -top-[8px] -right-[6px] bg-red-600 text-white flex justify-center items-center text-[12px]">
              10
            </span>
          </div>
          <div className="relative cursor-pointer">
            <AiOutlineMessage
              size={35}
              className="text-white bg-mainBgColor rounded-md p-1"
            />
            <span className="absolute w-[20px] h-[20px] rounded-full -top-[8px] -right-[6px] bg-red-600 text-white flex justify-center items-center text-[12px]">
              10
            </span>
          </div>

          <div className="flex justify-center items-center cursor-pointer">
            <div className="">
              <RiUser3Line
                size={35}
                className="text-white bg-mainBgColor rounded-md p-1"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
