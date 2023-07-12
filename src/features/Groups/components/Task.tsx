import Checkbox from "@/components/Checkbox";
import useGroupsContext from "@/context/GroupsContext";
import { Task } from "@/services/ProgressService";
import styled from "styled-components";

interface Props {
  task: Task;
  id: string;
}

export default function Task({ task, id }: Props) {
  const { setGroups } = useGroupsContext();
  return (
    <Container>
      <TaskContainer>
        <Checkbox
          checked={task.checked}
          onChange={(e) => setGroups(e.target.checked, id)}
        />
        <TaskName>{task.description}</TaskName>
      </TaskContainer>
    </Container>
  );
}

const Container = styled("div")({
  padding: "10px",
});

const TaskContainer = styled("label")({
  display: "flex",
  alignItems: "center",
  gap: "20px",
});

const TaskName = styled("p")(({ theme }) => ({
  fontSize: "14px",
}));
