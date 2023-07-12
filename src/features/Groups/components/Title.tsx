import styled from "styled-components";

export default function Title() {
  return (
    <Container>
      <Text>Lodgify Grouped Tasks</Text>
    </Container>
  );
}

const Container = styled("div")({
  width: "100%",
  paddingRight: "10px",
  paddingLeft: "10px",
});

const Text = styled("p")({
  fontSize: "24px",
  fontWeight: "800",
});
