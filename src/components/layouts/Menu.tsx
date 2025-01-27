import { role } from "@/lib/data/data";
import { MenuItems } from "@/lib/data/menuData";
import Link from "next/link";

export default function Menu() {
  return (
    <>
      <div className="p-5 ">
        {MenuItems?.map((el) => (
          <div key={el?.title} className="mb-5">
            <span className="font-bold text-primaryBgColor md:block hidden">
              {" "}
              {el?.title}{" "}
            </span>
            <ul>
              {el?.items?.map((item) => {
                if (item?.visible.includes(role)) {
                  return (
                    <li
                      key={item?.label}
                      className="flex justify-center items-center "
                    >
                      <Link
                        href={`/${item?.href}`}
                        className="flex lg:justify-start items-center justify-center w-[100%]"
                      >
                        <div className=" p-2 text-mainBgColor">
                          {item?.icon}
                        </div>
                        <div className="text-gray-500 p-1 text-[14px] lg:block hidden font-semibold">
                          {item?.label}
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
