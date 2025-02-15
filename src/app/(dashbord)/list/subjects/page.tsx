import Container from "@/components/ui/Container";
import FilterButtons from "@/components/ui/FilterButtons";
import LargeCardTitle from "@/components/ui/LargeCardTitle";
import Pagination from "@/components/ui/Pagination";
import Table from "@/components/ui/Table";
import TableSearch from "@/components/ui/TableSearch";
import Wrapper from "@/components/ui/Wrapper";
import { subjectsData } from "@/lib/data/data";
import { CiViewTimeline } from "react-icons/ci";
import { BsTrash } from "react-icons/bs";

interface rowType {
  id: number;
  name: string;
  teachers: string[];
}
const columns = [
  {
    header: "Subject Name",
    accessor: "name",
  },
  {
    header: "Teachers",
    accessor: "teachers",
    classesName: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "actions",
  },
];

export default function SubjectsList() {
  const renderRow = (row: rowType) => {
    return (
      <tr key={row.id} className="min:h-[50px] odd:bg-slate-200 p-2">

<td className="text-gray-500 text-center hidden md:table-cell ">
          {row.name}
        </td>

        <td className="text-gray-500 text-center hidden md:table-cell ">
        {row.teachers.join(",")}
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
      <LargeCardTitle title={"Subjects"} />
      <Container>
        <div className="flex justify-between md:items-center  md:flex-row flex-col gap-2">
          <TableSearch />
          <FilterButtons />
        </div>
        <Table columns={columns} renderRow={renderRow} data={subjectsData} />
        <Pagination />
      </Container>
    </Wrapper>
  );
}
