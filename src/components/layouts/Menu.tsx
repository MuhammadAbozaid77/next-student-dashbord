import { menuItems } from "@/lib/data/menuData";
import Link from "next/link";

export default function Menu() {
  return (
    <>
      <div>
        {menuItems?.map((el) => (
          <div key={el?.title}>
            <span className="font-semibold"> {el?.title} </span>
            <ul>
              {el?.items?.map((item) => (
                <li key={item?.label} className="p-2">
                  <Link
                    href={`/${item?.href}`}
                    className="flex justify-start items-center gap-1"
                  >
                    {/* <div className="border p-1 border-gray-500 w-[30px]"> </div> */}
                    <div className="text-[14px] font-semibold text-gray-600"> {item?.label} </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}
