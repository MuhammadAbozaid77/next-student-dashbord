"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    income: 4000,
    expense: 2400,
  },
  {
    name: "Feb",
    income: 3000,
    expense: 1398,
  },
  {
    name: "Mar",
    income: 2000,
    expense: 9800,
  },
  {
    name: "Apr",
    income: 2780,
    expense: 3908,
  },
  {
    name: "May",
    income: 1890,
    expense: 4800,
  },
  {
    name: "Jun",
    income: 2390,
    expense: 3800,
  },
  {
    name: "Jul",
    income: 3490,
    expense: 4300,
  },
  {
    name: "Aug",
    income: 3490,
    expense: 4300,
  },
  {
    name: "Sep",
    income: 3490,
    expense: 4300,
  },
  {
    name: "Oct",
    income: 3490,
    expense: 4300,
  },
  {
    name: "Nov",
    income: 3490,
    expense: 4300,
  },
  {
    name: "Dec",
    income: 3490,
    expense: 4300,
  },
];

export default function FinanceChart() {
  return (
    <>
      <div className="w-full h-[400px] flex justify-center items-center ">
        <ResponsiveContainer>
          <LineChart width={500} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" axisLine={false} tickLine={false} />
            <YAxis axisLine={false} tickLine={false} />
            <Tooltip />
            <Legend
              align="center"
              verticalAlign="top"
              wrapperStyle={{ padding: "20px" }}
            />
            <Line
              strokeWidth={3}
              type="monotone"
              dataKey="income"
              stroke="#7dd3fc"
              activeDot={{ r: 8 }}
            />
            <Line
              strokeWidth={3}
              type="monotone"
              dataKey="expense"
              stroke="#d8b4fe"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}
