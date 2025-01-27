interface propsType {
  title: string;
}
export default function LargeCardTitle({ title }: propsType) { 
  return (
    <div className="flex justify-between items-center  md:border-l-[15px] border-l-[5px] w-[100%] rounded border-l-mainBgColor mb-2 shadow py-3 px-2 bg-white">
      <span className="text-primaryTextColor font-bold md:text-[24px] ">
        {title}
      </span>
    </div>
  );
}
