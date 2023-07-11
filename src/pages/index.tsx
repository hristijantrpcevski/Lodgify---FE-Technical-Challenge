import styled from "styled-components";

export default function Home() {
  return <Container>Home</Container>;
}

const Container = styled("div")(({ theme }) => ({
  // backgroundColor: theme.colors.secondary,
  width: "100%",
  display: "flex",
}));
