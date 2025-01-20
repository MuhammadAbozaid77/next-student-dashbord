"use client";

import AttendanceChart from "@/components/charts/AttendanceChart";
import CountCharts from "@/components/charts/CountCharts";
import FinanceChart from "@/components/charts/FinanceChart";
import Announcements from "@/components/client/Announcements";
import EventCalender from "@/components/client/EventCalender";
import UserCard from "@/components/ui/UserCard";
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
                <span className="text-[20px] text-primaryTextColor font-bold">
                  Students
                </span>
                <RiMoreFill
                  className="text-mainBgColor cursor-pointer"
                  size={30}
                />
              </div>
              {/* === Middle === */}
              <CountCharts />
              {/* === End === */}
              <div>
                <div className="flex justify-around items-center">
                  <div className="flex flex-col justify-center items-center">
                    <div className="w-[30px] h-[30px] rounded-full bg-amberColor300"></div>
                    <span className="text-[18px] text-primaryTextColor font-bold">
                      700
                    </span>
                    <span className="font-semibold text-[12px] text-primaryTextColor">
                      Total : 100%
                    </span>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <div className="w-[30px] h-[30px] rounded-full bg-boysColor"></div>
                    <span className="text-[18px] text-primaryTextColor font-bold">
                      500
                    </span>
                    <span className="font-semibold text-[12px] text-primaryTextColor">
                      Boys : 65$
                    </span>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <div className="w-[30px] h-[30px] rounded-full bg-girlsColor"></div>
                    <span className="text-[18px] text-primaryTextColor font-bold">
                      200
                    </span>
                    <span className="font-semibold text-[12px] text-primaryTextColor">
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
              <span className="text-[20px] text-primaryTextColor font-bold">
              Attendance
                </span>
                <RiMoreFill
                  className="text-mainBgColor cursor-pointer"
                  size={30}
                />
              </div>
              <AttendanceChart />
            </div>
          </div>
          {/* =================  (Bottom) Chart  =================  */}
          <div className="flex gap-4 flex-col lg:flex-row">
            <div className="w-full  border rounded-md shadow-md p-5 bg-white">
              {/* === Top === */}
              <div className="flex justify-between items-center">
              <span className="text-[20px] text-primaryTextColor font-bold">
              Finance
                </span>
                <RiMoreFill
                  className="text-mainBgColor cursor-pointer"
                  size={30}
                />
              </div>
              <FinanceChart />
            </div>
          </div>
          {/* End Students Chart  ===================================================================  */}
        </div>

        <div className="w-full lg:w-1/3 flex flex-col gap-4">
          <EventCalender />

          <Announcements />
        </div>
      </div>
    </>
  );
}
