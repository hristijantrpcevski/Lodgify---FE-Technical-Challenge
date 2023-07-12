import Checkbox from "@/components/Checkbox";
import { Task } from "@/services/ProgressService";
import styled from "styled-components";

interface Props {
  task: Task;
}

export default function Task({ task }: Props) {
  return (
    <Container>
      <TaskContainer>
        <Checkbox checked={task.checked} />
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
  color: theme.colors.gray200,
}));
