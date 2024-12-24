import { AiOutlineMessage } from "react-icons/ai";
import { RiNotification2Line } from "react-icons/ri";
import { RiSearch2Line } from "react-icons/ri";
import { RiUser3Fill } from "react-icons/ri";

export default function Navbar() {
  return (
    <>
      <div className="flex justify-between items-center p-5 border-b bg-white">
        {/* Search Bar */}
        <div className="md:flex hidden justify-center items-center bg-white px-2 rounded-md gap-1 border">
          <RiSearch2Line className="text-cyan-500 cursor-pointer" size={25} />
          <input
            type="text"
            placeholder="Serach..."
            className=" bg-cyan-50 rounded-md outline-none text-gray-500 p-2  text-[14px]"
          />
        </div>
        {/* Icons And Users */}
        <div className="flex justify-center items-center gap-1">
          <div className="">
            <AiOutlineMessage
              size={35}
              className="text-white bg-cyan-600 rounded-md p-1"
            />
          </div>
          <div className="relative">
            <RiNotification2Line
              size={35}
              className="text-white bg-cyan-600 rounded-md p-1"
            />
            <span className="absolute w-[20px] h-[20px] rounded-full -top-[7px] -right-[5px] bg-red-600 text-white flex justify-center items-center text-[12px]">
              10
            </span>
          </div>
          <div className="flex justify-center items-center">
            <div className="flex justify-center items-end flex-col mx-3">
              <span className="text-[14px] font-semibold"> muhammad </span>
              <span className="text-[12px]"> admin </span>
            </div>
            <div className="">
              <RiUser3Fill
                size={35}
                className="text-cyan-600 border-cyan-600 border-[2px] rounded-md p-1"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
