import Container from "@/components/ui/Container";
import FilterButtons from "@/components/ui/FilterButtons";
import LargeCardTitle from "@/components/ui/LargeCardTitle";
import Pagination from "@/components/ui/Pagination";
import Table from "@/components/ui/Table";
import TableSearch from "@/components/ui/TableSearch";
import Wrapper from "@/components/ui/Wrapper";
import { studentsData } from "@/lib/data/data";
import Image from "next/image";
import { BsTrash } from "react-icons/bs";
import { CiViewTimeline } from "react-icons/ci";

interface rowType {
  id: number;
  studentId: string;
  name: string;
  email?: string;
  photo: string;
  phone?: string;
  grade?: number;
  class: string;
  address: string;
}
const columns = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Student Id",
    accessor: "studentId",
    classesName: "hidden md:table-cell",
  },
  {
    header: "Grade",
    accessor: "grade",
    classesName: "hidden md:table-cell",
  },
  {
    header: "Phone",
    accessor: "phone",
    classesName: "hidden lg:table-cell",
  },
  {
    header: "Address",
    accessor: "address",
    classesName: "hidden lg:table-cell",
  },
  {
    header: "Actions",
    accessor: "actions",
  },
];

export default function StudentsPage() {
  const renderRow = (row: rowType) => {
    return (
      <tr key={row.id} className="min:h-[50px] odd:bg-slate-200 p-2">
        <td className="text-gray-500 p-1">
          <div className="flex justify-start gap-2">
            <Image
              src={row.photo}
              width={40}
              height={40}
              alt=""
              className="rounded-full w-10 h-10 object-cover md:block hidden"
            />
            <div className="text-gray-500 flex flex-col justify-center">
              <span className="text-slate-700 font-semibold">{row.name}</span>
              <span className="text-[12px]">{row.class}</span>
            </div>
          </div>
        </td>
        <td className="text-gray-500 text-center hidden md:table-cell ">
          {row.studentId}
        </td>
        <td className="text-gray-500 text-center hidden md:table-cell ">
          {row.grade}
        </td>
        <td className="text-gray-500 text-center hidden lg:table-cell ">
          {" "}
          {row.phone}{" "}
        </td>
        <td className="text-gray-500 text-center hidden lg:table-cell ">
          {" "}
          {row.address}{" "}
        </td>
        <td>
          <div className="flex justify-center items-center gap-2">
            <div className="cursor-pointer border p-1 rounded-md border-slate-300">
              <CiViewTimeline className="text-sky-500" size={25} />
            </div>
            <div className="cursor-pointer border p-1 rounded-md border-slate-300">
              <BsTrash className="text-red-500" size={25} />
            </div>
          </div>
        </td>
      </tr>
    );
  };

  return (
    <Wrapper>
      <LargeCardTitle title={"Students"} />
      <Container>
        <div className="flex justify-between md:items-center  md:flex-row flex-col gap-2">
          <TableSearch />
          <FilterButtons />
        </div>
        <Table columns={columns} renderRow={renderRow} data={studentsData} />
        <Pagination />
      </Container>
    </Wrapper>
  );
}
