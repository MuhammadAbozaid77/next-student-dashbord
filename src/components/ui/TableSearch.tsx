import { RiSearch2Line } from "react-icons/ri";

export default function TableSearch() {
  return (
    <>
      <form>
        <div className="flex  rounded md:w-[500px] items-center border-cyan-600 border p-1">
          <div className="p-1 text-mainBgColor border-r border-mainBgColor">
            <RiSearch2Line className="md:text-[25px] text-[20px]" />
          </div>
          <input
            type="text"
            name=""
            id=""
            placeholder="Search......"
            className="w-[100%]  p-1  outline-none text-primaryTextColor font-semibold"
          />
        </div>
      </form>
    </>
  );
}
