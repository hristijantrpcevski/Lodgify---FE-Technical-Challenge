import styled from "styled-components";

interface Props {
  progress?: number;
}

export default function Progress({ progress }: Props) {
  return (
    <Container>
      <ProgressBar progress={progress?.toFixed(2)}>
        <Percentage>{progress?.toFixed(2) ?? 0}%</Percentage>
      </ProgressBar>
    </Container>
  );
}

const Container = styled("div")(({ theme }) => ({
  height: "30px",
  width: "100%",
  borderRadius: "50px",
  display: "flex",
  alignItems: "center",
  backgroundColor: theme.colors.green100,
}));

const ProgressBar = styled("div").attrs<{ progress?: string }>((props) => ({
  ...props,
  progress: props.progress,
}))(({ theme, progress }) => ({
  height: "100%",
  width: `${progress}%`,
  borderRadius: "50px",
  display: "flex",
  alignItems: "center",
  backgroundColor: theme.colors.green200,
  justifyContent: "flex-end",
}));

const Percentage = styled("span")(({ theme }) => ({
  padding: "10px",
  color: theme.colors.white,
  fontWeight: 500,
}));
