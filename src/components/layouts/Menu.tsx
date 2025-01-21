import { role } from "@/lib/data/data";
import { MenuItems } from "@/lib/data/menuData";
import Link from "next/link";

export default function Menu() {
  return (
    <>
      <div className="p-5 ">
        {MenuItems?.map((el) => (
          <div key={el?.title} className="mb-5">
            <span className="font-bold text-primaryBgColor"> {el?.title} </span>
            <ul>
              {el?.items?.map((item) => {
                if (item?.visible.includes(role)) {
                  return (
                    <li key={item?.label} className="p-2">
                      <Link
                        href={`/${item?.href}`}
                        className="flex justify-start items-center gap-1"
                      >
                        <div className=" font-semibold text-gray-600 flex items-center  gap-1">
                          <span className="text-mainBgColor flex justify-center items-center text-[30px] mx-2">{item?.icon}</span>
                          <span className="text-[14px] lg:block hidden">{item?.label}</span>
                        </div>
                      </Link>
                    </li>
                  );
                }
              })}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}
