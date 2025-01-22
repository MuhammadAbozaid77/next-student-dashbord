import Container from "@/components/ui/Container";
import LargeCardTitle from "@/components/ui/LargeCardTitle";
import Wrapper from "@/components/ui/Wrapper";

export default function ParentPage() {
  return (
    <>
      <Wrapper>
        <LargeCardTitle title={"parent"} />
        <Container>
          <h1 className="text-[20px] text-red-300">parent </h1>
        </Container>
      </Wrapper>
    </>
  );
}
