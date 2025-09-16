import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { DarkTheme, LightTheme } from "../styles/themeStyle";
import { GlobalStyles } from "../styles/globalStyle";
import { Header } from "./ui/groups/Header";
import { Navigation } from "./ui/groups/Navigation";
import { View } from "./ui/groups/View";

const GlobalWrappser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 1rem 10rem;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 2rem;
`;

export const App = () => {
  const [theme, setTheme] = useState("light");
  const [view, setView] = useState(0);

  const handleView = (target) => {
    if (target !== view) setView(target);
    console.log(target);
  };

  return (
    <>
      <GlobalStyles curTheme={theme} />
      <ThemeProvider theme={theme === "light" ? LightTheme : DarkTheme}>
        <GlobalWrappser>
          <Header />
          <Wrapper>
            <Navigation viewProperty={[view, handleView]} />
            <View />
          </Wrapper>
        </GlobalWrappser>
      </ThemeProvider>
    </>
  );
};
