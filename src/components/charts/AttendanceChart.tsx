import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Sat",
    present: 55,
    absent: 66,
  },
  {
    name: "Sun",
    present: 44,
    absent: 55,
  },
  {
    name: "Mon",
    present: 44,
    absent: 66,
  },
  {
    name: "Tus",
    present: 66,
    absent: 55,
  },
  {
    name: "Wen",
    present: 66,
    absent: 55,
  },
  {
    name: "Thu",
    present: 55,
    absent: 52,
  },
  {
    name: "Fri",
    present: 74,
    absent: 42,
  },
];

export default function AttendanceChart() {
  return (
    <>
      <div className="w-full h-[400px] flex justify-center items-center ">
        <ResponsiveContainer>
          <BarChart width={500} height={300} data={data} barSize={20}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" axisLine={false} tickLine={false} />
            <YAxis axisLine={false} tickLine={false} />
            <Legend />
            <Bar
              dataKey="present"
              fill="#7dd3fc"
              legendType="circle"
              radius={[8, 8, 0, 0]}
            />
            <Bar
              dataKey="absent"
              fill="#d8b4fe"
              legendType="circle"
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}
