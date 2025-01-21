import {
  FaHome,
  FaChalkboardTeacher,
  FaClipboardCheck,
  FaEthernet,
  FaMicrophone,
  FaUser,
} from "react-icons/fa";
import { PiStudentFill, PiExamFill } from "react-icons/pi";
import { IoMdSettings, IoMdLogOut } from "react-icons/io";
import { RiParentFill } from "react-icons/ri";
import { ImBooks } from "react-icons/im";
import {
  MdFlightClass,
  MdPlayLesson,
  MdAssignmentAdd,
  MdSummarize,
  MdEmail,
} from "react-icons/md";

export const MenuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: <FaHome size={20} />,
        label: "Home",
        href: "/",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <FaChalkboardTeacher size={20} />,
        label: "Teachers",
        href: "/list/teachers",
        visible: ["admin", "teacher"],
      },
      {
        icon: <PiStudentFill size={20} />,
        label: "Students",
        href: "/list/students",
        visible: ["admin", "teacher"],
      },
      {
        icon: <RiParentFill size={20} />,
        label: "Parents",
        href: "/list/parents",
        visible: ["admin", "teacher"],
      },
      {
        icon: <ImBooks size={20} />,
        label: "Subjects",
        href: "/list/subjects",
        visible: ["admin"],
      },
      {
        icon: <MdFlightClass size={20} />,
        label: "Classes",
        href: "/list/classes",
        visible: ["admin", "teacher"],
      },
      {
        icon: <MdPlayLesson size={20} />,
        label: "Lessons",
        href: "/list/lessons",
        visible: ["admin", "teacher"],
      },
      {
        icon: <PiExamFill size={20} />,
        label: "Exams",
        href: "/list/exams",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <MdAssignmentAdd size={20} />,
        label: "Assignments",
        href: "/list/assignments",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <MdSummarize size={20} />,
        label: "Results",
        href: "/list/results",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <FaClipboardCheck size={20} />,
        label: "Attendance",
        href: "/list/attendance",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <FaEthernet size={20} />,

        label: "Events",
        href: "/list/events",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <MdEmail size={20} />,
        label: "Messages",
        href: "/list/messages",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <FaMicrophone size={20} />,

        label: "Announcements",
        href: "/list/announcements",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: <FaUser size={20} />,
        label: "Profile",
        href: "/profile",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <IoMdSettings size={20} />,
        label: "Settings",
        href: "/settings",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <IoMdLogOut size={20} />,
        label: "Logout",
        href: "/logout",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
];
