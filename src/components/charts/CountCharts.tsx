"use client";
import { PiStudentFill } from "react-icons/pi";

import {
  RadialBarChart,
  RadialBar,
  // Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "total",
    count: 700,
    fill: "#fcd34d",
  },
  {
    name: "boys",
    count: 500,
    fill: "#7dd3fc",
  },
  {
    name: "girls",
    count: 200,
    fill: "#d8b4fe",
  },
];

const fff = () => {
  console.log("ffff");
};

export default function CountCharts() {
  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer className={"relative"}>
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="40%"
          outerRadius="110%"
          barSize={50}
          data={data}
        >
          <RadialBar
            label={{ position: "insideStart", fill: "#64748b" }}
            background
            dataKey="count"
          />
        </RadialBarChart>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
          <PiStudentFill className="text-slate-500" size={50} />
          {/* <IoManSharp color="#bae6fd" size={35} /> */}
        </div>
      </ResponsiveContainer>
    </div>
  );
}
