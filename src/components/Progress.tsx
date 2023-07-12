import styled from "styled-components";

export default function Progress() {
  return <Container></Container>;
}

const Container = styled("div")(({ theme }) => ({
  height: "30px",
  width: "100%",
  borderRadius: "50px",
  display: "flex",
  alignItems: "center",
  backgroundColor: theme.colors.green200,
}));
