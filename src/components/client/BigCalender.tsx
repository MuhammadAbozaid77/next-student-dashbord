"use client";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar, momentLocalizer, View, Views } from "react-big-calendar";
import moment from "moment";
import { calendarEvents } from "@/lib/data/data";
import { useState } from "react";

export default function BigCalender() {
  const localizer = momentLocalizer(moment);

  const [view, setView] = useState<View>(Views.WEEK);

  const handelOnChangeView = (selectedView: View) => {
    setView(selectedView);
  };
  return (
    <div>
      <Calendar
        localizer={localizer}
        events={calendarEvents}
        startAccessor="start"
        endAccessor="end"
        views={["week", "day"]}
        view={view}
        style={{ height: "98%" }}
        onView={handelOnChangeView}
        min={new Date(2025, 1, 24, 0, 0, 0)}
        max={new Date(2025, 1, 25, 20, 0, 0)}
      />
    </div>
  );
}
