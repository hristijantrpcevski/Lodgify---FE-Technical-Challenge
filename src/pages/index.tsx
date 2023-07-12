import styled from "styled-components";
import Groups from "@/features/Groups";

export default function Home() {
  return (
    <Container>
      <Groups />
    </Container>
  );
}

const Container = styled("div")({
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px",
});
