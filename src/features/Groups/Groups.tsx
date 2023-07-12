import useMockProgress from "@/hooks/useMockProgress";
import styled from "styled-components";
import Title from "./components/Title";
import Progress from "@/components/Progress";
import Group from "./components/Group";

export default function Groups() {
  const { data: groups = [], isLoading } = useMockProgress();

  if (isLoading) {
    return <div>Loading....</div>;
  }

  return (
    <Container>
      <Title />
      <Progress />
      <GroupsStyle>
        {groups.map((group, index) => (
          <Group key={`${group}-${index}`} group={group} />
        ))}
      </GroupsStyle>
    </Container>
  );
}

const Container = styled("div")(({ theme }) => ({
  width: "1000px",
  justifyContent: "center",
  display: "flex",
  flexDirection: "column",
  padding: "20px",
  border: `1px solid ${theme.colors.gray200}`,
  borderRadius: "10px",
  gap: "20px",
  backgroundColor: theme.colors.white,
}));

const GroupsStyle = styled("div")(({ theme }) => ({
  width: "100%",
  height: "100%",
  justifyContent: "center",
  display: "flex",
  flexDirection: "column",
  border: `1px solid ${theme.colors.gray100}`,
  borderRadius: "10px",
}));
