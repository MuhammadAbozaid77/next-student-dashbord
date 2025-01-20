import { CiViewList } from "react-icons/ci";

const events = [
  {
    id: 1,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

export default function Announcements() {
  return (
    <div className="bg-white p-4 rounded-md flex flex-col gap-4 shadow-md">
      <div className="flex justify-between items-center bg-white">
        <span className="text-primaryTextColor font-semibold">
          Announcements
        </span>
        <CiViewList className="text-mainBgColor cursor-pointer" size={30} />
      </div>
      <div className="flex flex-col gap-4">
        {events?.map((el) => (
          <div
            key={el.id}
            className="odd:bg-boysColor even:bg-girlsColor text-primaryTextColor  rounded-md p-5"
          >
            <div className="flex justify-between items-center font-semibold ">
              <h1 className="text-[18px] font-bold">{el?.title}</h1>
              <span className="p-1 bg-white text-[12px] rounded-md"> {el?.time} </span>
            </div>
            <p className="text-[14px] ">{el.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
