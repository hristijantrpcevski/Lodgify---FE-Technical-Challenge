import { styled } from "styled-components";

export default function Layout({ children }: React.PropsWithChildren) {
  return <Main>{children}</Main>;
}

const Main = styled("main")(() => ({
  width: "100%",
  padding: "50px",
  height: "calc(100vh-50px)",
}));
