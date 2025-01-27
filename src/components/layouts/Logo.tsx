import Link from "next/link";

export default function Logo() {
  return (
    <>
      <div className="flex justify-center items-center h-[80px] border-b shadow">
        <Link href={"/"} className="font-bold md:text-[30px] text-mainBgColor">
          Logo
        </Link>
      </div>
    </>
  );
}
