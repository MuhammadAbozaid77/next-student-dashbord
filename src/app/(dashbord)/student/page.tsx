import Announcements from "@/components/client/Announcements";
import BigCalender from "@/components/client/BigCalender";
import EventCalender from "@/components/client/EventCalender";
import LargeCardTitle from "@/components/ui/LargeCardTitle";

export default function StudentPage() {
  return (
    <div className="p-2 gap-4 flex flex-col md:flex-row rounded-md ">
      {/*Left Side */}
      <div className="w-full lg:w-2/3 flex flex-col gap-4 bg-white text-primaryTextColor p-4">
        <LargeCardTitle title={"Schedule (4A)"} />
        <BigCalender />
      </div>

      {/*Right Side */}

      <div className="w-full lg:w-1/3 flex flex-col gap-4">
        <EventCalender />
        <Announcements />
      </div>
    </div>
  );
}
