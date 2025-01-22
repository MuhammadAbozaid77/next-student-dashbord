import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

export default function Pagination() {
  return (
    <div className="flex justify-center items-center  gap-5 p-2">
      <button className="flex cursor-pointer justify-center items-center gap-1 disabled:opacity-50 p-1 rounded min-w-[100px] capitalize font-semibold bg-mainBgColor text-white text-center ">
        <FaChevronLeft />
        <span>Previous</span>
      </button>
      <div className="flex gap-1">
        <button className="px-2 py-1 rounded bg-gray-200 text-primaryTextColor font-bold">
          1
        </button>
        <button className="px-2 py-1 rounded bg-gray-200 text-primaryTextColor font-bold">
          2
        </button>
        <button className="px-2 py-1 rounded bg-gray-200 text-primaryTextColor font-bold">
          3
        </button>
        <button className="px-2 py-1 rounded bg-gray-200 text-primaryTextColor font-bold">
          4
        </button>
        <button className="px-2 py-1 rounded bg-gray-200 text-primaryTextColor font-bold">
          5
        </button>
      </div>
      <button className="flex cursor-pointer justify-center items-center gap-1 disabled:opacity-50 p-1 rounded min-w-[100px] capitalize font-semibold bg-mainBgColor text-white text-center ">
        <span>Next</span>
        <FaChevronRight />
      </button>
    </div>
  );
}
