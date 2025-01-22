interface propsType {
  title: string;
}
export default function LargeCardTitle({ title }: propsType) {
  return (
    <div className="flex justify-between items-center  border-l-[15px] w-[100%] rounded border-l-mainBgColor mb-2 shadow py-3 px-2 bg-white">
      <span className="text-primaryTextColor font-bold text-[24px] ">
        {title}
      </span>
    </div>
  );
}
