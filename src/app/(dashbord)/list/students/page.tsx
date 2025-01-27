import Container from "@/components/ui/Container";
import FilterButtons from "@/components/ui/FilterButtons";
import LargeCardTitle from "@/components/ui/LargeCardTitle";
import Pagination from "@/components/ui/Pagination";
import Table from "@/components/ui/Table";
import TableSearch from "@/components/ui/TableSearch";
import Wrapper from "@/components/ui/Wrapper";

export default function StudentsPage() {
  return (
    <Wrapper>
      <LargeCardTitle title={"Students"} />
      <Container>
        <div className="flex justify-between md:items-center  md:flex-row flex-col gap-2">
          <TableSearch />
          <FilterButtons />
        </div>
        {/* <Table columns={columns} renderRow={renderRow} data={teachersData} /> */}
        <Pagination />
      </Container>
    </Wrapper>
  );
}
