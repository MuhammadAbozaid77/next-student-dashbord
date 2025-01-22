import Container from "@/components/ui/Container";
import FilterButtons from "@/components/ui/FilterButtons";
import LargeCardTitle from "@/components/ui/LargeCardTitle";
import Pagination from "@/components/ui/Pagination";
import Table from "@/components/ui/Table";
import TableSearch from "@/components/ui/TableSearch";
import Wrapper from "@/components/ui/Wrapper";

const columns = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Teacher Id",
    accessor: "teacherId",
    classesName: "hidden md:tabel-cell",
  },
  {
    header: "Subjects",
    accessor: "subjects",
    classesName: "hidden md:tabel-cell",
  },
  {
    header: "Classes",
    accessor: "classes",
    classesName: "hidden md:tabel-cell",
  },
  {
    header: "Phone",
    accessor: "phone",
    classesName: "hidden lg:tabel-cell",
  },
  {
    header: "Address",
    accessor: "address",
    classesName: "hidden lg:tabel-cell",
  },
  {
    header: "Actions",
    accessor: "actions",
    classesName: "hidden lg:tabel-cell",
  },
];

export default function TeachersList() {
  return (
    <Wrapper>
      <LargeCardTitle title={"Teachers"} />
      <Container>
        <div className="flex justify-between items-center">
          <TableSearch />
          <FilterButtons />
        </div>
        <Table columns={columns} />
        <Pagination />
      </Container>
    </Wrapper>
  );
}
