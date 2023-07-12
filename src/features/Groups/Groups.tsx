import useMockProgress from "@/hooks/useMockProgress";
import styled from "styled-components";
import Title from "./components/Title";
import Progress from "@/components/Progress";
import Group from "./components/Group";
import { type Group as GroupType } from "@/services/ProgressService";

function calculateProgress(groups: GroupType[]) {
  let sum = 0;
  let progress = 0;

  groups.forEach((group) =>
    group.tasks.forEach((task) => {
      sum = sum + task.value;
      if (task.checked) {
        progress = progress + task.value;
      }
    })
  );

  return (progress * 100) / sum;
}

export default function Groups() {
  const { data: groups = [], isLoading } = useMockProgress();

  return (
    <Main>
      {isLoading ? (
        <div>Loading....</div>
      ) : (
        <Container>
          <Title />
          <Progress progress={calculateProgress(groups)} />
          <GroupsStyle>
            {groups.map((group, index) => (
              <Group key={`${group}-${index}`} group={group} />
            ))}
          </GroupsStyle>
        </Container>
      )}
    </Main>
  );
}

const Main = styled("div")({
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

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
