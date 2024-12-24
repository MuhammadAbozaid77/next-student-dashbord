"use client";

import AttendanceChart from "@/components/charts/AttendanceChart";
import CountCharts from "@/components/charts/CountCharts";
import FinanceChart from "@/components/charts/FinanceChart";
import UserCard from "@/components/client/UserCard";
import { RiMoreFill } from "react-icons/ri";
// Sky - Cyan - Purble (200)
// Slate-500
export default function AdminPage() {
  return (
    <>
      <div className="px-2  py-4 gap-4 flex flex-col md:flex-row rounded-md ">
        <div className="w-full lg:w-2/3 flex flex-col gap-4">
          <div className="flex gap-4 justify-between flex-wrap ">
            <UserCard type="Student" />
            <UserCard type="Teacher" />
            <UserCard type="Parent" />
            <UserCard type="Stuff" />
          </div>

          {/* Start Students && Attendence Charts  ===================================================================  */}
          <div className="flex gap-4 flex-col lg:flex-row">
            {/* =================  (Top Left) Students Chart  =================  */}
            <div className="w-full lg:w-1/3 border rounded-md shadow-md p-5 bg-white">
              {/* === Top === */}
              <div className="flex justify-between items-center">
                <span className=" px-2 py-1 bg-slate-50  rounded-md text-[16px]">
                  Students
                </span>
                <RiMoreFill />
              </div>
              {/* === Middle === */}
              <CountCharts />
              {/* === End === */}
              <div>
                <div className="flex justify-around items-center">
                  <div className="flex flex-col justify-center items-center">
                    <div className="w-[30px] h-[30px] rounded-full bg-amberColor"></div>
                    <span className="text-[20px] font-semibold">700</span>
                    <span className="font-semibold text-[14px] text-gray-400">
                      Total : 100%
                    </span>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <div className="w-[30px] h-[30px] rounded-full bg-boysColor"></div>
                    <span className="text-[20px] font-semibold">500</span>
                    <span className="font-semibold text-[14px] text-gray-400">
                      Boys : 65$
                    </span>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <div className="w-[30px] h-[30px] rounded-full bg-girlsColor"></div>
                    <span className="text-[20px] font-semibold">200</span>
                    <span className="font-semibold text-[14px] text-gray-400">
                      Girls : 35$
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* =================  (Top Right) Attendence Chart  =================  */}
            <div className="w-full lg:w-2/3 border rounded-md shadow-md p-5 bg-white">
              {/* === Top === */}
              <div className="flex justify-between items-center">
                <span className=" px-2 py-1 bg-slate-50  rounded-md text-[16px]">
                  Attendance
                </span>
                <RiMoreFill />
              </div>
              <AttendanceChart />
            </div>
          </div>
          {/* =================  (Bottom) Chart  =================  */}
          <div className="flex gap-4 flex-col lg:flex-row">
            <div className="w-full  border rounded-md shadow-md p-5 bg-white">
              {/* === Top === */}
              <div className="flex justify-between items-center">
                <span className=" px-2 py-1 bg-slate-50  rounded-md text-[16px]">
                  Finance
                </span>
                <RiMoreFill />
              </div>
              <FinanceChart />
            </div>
          </div>
          {/* End Students Chart  ===================================================================  */}
        </div>
        <div className="w-full lg:w-1/3"></div>
      </div>
    </>
  );
}
