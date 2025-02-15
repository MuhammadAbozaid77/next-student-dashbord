import Container from "@/components/ui/Container";
import FilterButtons from "@/components/ui/FilterButtons";
import LargeCardTitle from "@/components/ui/LargeCardTitle";
import Pagination from "@/components/ui/Pagination";
import Table from "@/components/ui/Table";
import TableSearch from "@/components/ui/TableSearch";
import Wrapper from "@/components/ui/Wrapper";
import { classesData } from "@/lib/data/data";
import { CiViewTimeline } from "react-icons/ci";
import { BsTrash } from "react-icons/bs";

interface rowType {
  id: number;
  name: string;
  capacity: number;
  grade: number;
  supervisor: string;
}
const columns = [
  {
    header: "Class Name",
    accessor: "name",
  },
  {
    header: "Capacity",
    accessor: "capacity",
    classesName: "hidden md:table-cell",
  },
  {
    header: "Grade",
    accessor: "grade",
    classesName: "hidden md:table-cell",
  },
  {
    header: "Supervisor",
    accessor: "supervisor",
    classesName: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "actions",
  },
];

export default function ClassesList() {
  const renderRow = (row: rowType) => {
    return (
      <tr key={row.id} className="min:h-[50px] odd:bg-slate-200 p-2">

<td className="text-gray-500 text-center hidden md:table-cell ">
          {row.name}
        </td>
<td className="text-gray-500 text-center hidden md:table-cell ">
          {row.capacity}
        </td>
<td className="text-gray-500 text-center hidden md:table-cell ">
          {row.grade}
        </td>
<td className="text-gray-500 text-center hidden md:table-cell ">
          {row.supervisor}
        </td>

        {/* <td className="text-gray-500 text-center hidden md:table-cell ">
        {row.teachers.join(",")}
        </td> */}

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
      <LargeCardTitle title={"classes"} />
      <Container>
        <div className="flex justify-between md:items-center  md:flex-row flex-col gap-2">
          <TableSearch />
          <FilterButtons />
        </div>
        <Table columns={columns} renderRow={renderRow} data={classesData} />
        <Pagination />
      </Container>
    </Wrapper>
  );
}
