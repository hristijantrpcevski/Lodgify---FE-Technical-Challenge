import { styled } from "styled-components";

export default function Layout({ children }: React.PropsWithChildren) {
  return <Main>{children}</Main>;
}

const Main = styled("main")(() => ({
  width: "100%",
}));
