import useMockProgress from "@/hooks/useMockProgress";
import styled from "styled-components";
import Title from "./components/Title";
import Progress from "@/components/Progress";

export default function Groups() {
  const { data: mock = [], isLoading } = useMockProgress();

  if (isLoading) {
    return <div>Loading....</div>;
  }

  return (
    <Container>
      <Title />
      <Progress />
    </Container>
  );
}

const Container = styled("div")(({ theme }) => ({
  width: "1000px",
  justifyContent: "center",
  display: "flex",
  flexDirection: "column",
  padding: "20px",
  border: `1px solid ${theme.colors.gray100}`,
  borderRadius: "10px",
  backgroundColor: theme.colors.white,
}));
