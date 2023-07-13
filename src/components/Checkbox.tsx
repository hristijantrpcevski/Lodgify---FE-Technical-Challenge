import styled from "styled-components";

interface Props {
  checked: boolean;
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
}

export default function Checkbox(props: Props) {
  return <CheckboxStyle {...props} />;
}

const CheckboxStyle = styled("input").attrs({ type: "checkbox" })(
  ({ theme }) => ({
    width: "18px",
    height: "18px",
    accentColor: theme.colors.green200,
  })
);
