import { useState } from "react";

import Icon from "@/components/Icon";
import { Group } from "@/services/ProgressService";
import styled from "styled-components";

interface Props {
  group: Group;
}

export default function Group({ group }: Props) {
  const [show, setShow] = useState(false);

  return (
    <Container>
      <GroupContainer>
        <NameContainer>
          <Icon icon="regular:clipboard" fontSize={25} />
          <Name>{group.name}</Name>
        </NameContainer>
        <Action>
          <Text>{show ? "Hide" : "Show"}</Text>
          <IconButton onClick={() => setShow((prev) => !prev)}>
            <Icon icon="solid:chevron-up" fontSize={20} rotate={show ? 0 : 2} />
          </IconButton>
        </Action>
      </GroupContainer>
    </Container>
  );
}

const Container = styled("div")(({ theme }) => ({
  borderBottom: `1px solid ${theme.colors.gray100}`,
  height: "70px",
  padding: "20px",
  display: "flex",
  alignItems: "center",
  width: "100%",

  "&:last-of-type": {
    border: "none",
  },
}));

const GroupContainer = styled("div")({
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
});

const NameContainer = styled("div")(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  color: theme.colors.gray300,
}));

const Name = styled("p")(({ theme }) => ({
  fontSize: "14px",
  fontWeight: 500,
  color: theme.colors.gray400,
}));

const Text = styled("p")(({ theme }) => ({
  fontSize: "14px",
  color: theme.colors.gray200,
}));

const Action = styled("div")(({ theme }) => ({
  display: "flex",
  gap: "10px",
  color: theme.colors.gray200,
  alignItems: "center",
}));

const IconButton = styled("button")(({ theme }) => ({
  borderRadius: "50%",
  background: "transparent",
  border: "transparent",
  height: "35px",
  width: "35px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.colors.gray200,

  "&:hover": {
    backgroundColor: theme.colors.gray50,
  },
}));
