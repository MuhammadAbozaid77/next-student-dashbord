import Link from "next/link";

export default function Logo() {
  return (
    <>
      <div className=" p-5">
        <Link href={"/"}> Logo </Link>
      </div>
    </>
  );
}
