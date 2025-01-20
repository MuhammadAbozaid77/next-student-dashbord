"use client";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { RiMoreFill } from "react-icons/ri";

// ---------Types
type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];
// ---------Types

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
export default function EventCalender() {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="bg-white p-4 rounded-md flex flex-col gap-4 shadow-md">
      <Calendar onChange={onChange} value={value} />

      <div className="flex justify-between items-center bg-white">
        <span className="text-primaryTextColor font-semibold">Events</span>
        <RiMoreFill className="text-mainBgColor cursor-pointer" size={30} />
      </div>
      <div className="flex flex-col gap-4">
        {events?.map((el) => (
          <div
            key={el.id}
            className="border-2 border-t-4  odd:border-t-girlsColor even:border-t-boysColor text-primaryTextColor  rounded-md p-5"
          >
            <div className="flex justify-between items-center font-semibold ">
              <h1 className="text-[18px]">{el?.title}</h1>
              <span> {el?.time} </span>
            </div>
            <p className="text-[14px]">{el.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
