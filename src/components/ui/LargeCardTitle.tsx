interface propsType {
  title: string;
}
export default function LargeCardTitle({ title }: propsType) {
  return (
    <div className="flex justify-between items-center  border-l-[15px]  rounded-md border-l-mainBgColor mb-5 shadow py-3 px-2 bg-gray-100">
      <span className="text-primaryTextColor font-bold text-[24px] ">
        {title}
      </span>
    </div>
  );
}
