import React from "react";
import Navigation from "./components/Navigation";
import GlobalStyle from "./components/styles/GlobalStyle";
import StyLink from "./components/styles/StyLink.styled";
import styled from "styled-components";

const StyledApp = styled.div`
  background-color: #cc8b86;
  flex-direction: column;
  place-content: center;
  place-items: center;
  min-height: 100dvh;
  display: flex;
`;

const Title = styled.h1`
  color: #404040;
  font-weight: 900;
  text-shadow: 5px 5px 2px #ffffff;
  font-size: 3rem;
`;

function App() {
  return (
    <StyledApp>
      <GlobalStyle />
      <Title>Welcome to !RealShopping</Title>
      <StyLink to="home">Shop!</StyLink>
    </StyledApp>
  );
}

export default App;
