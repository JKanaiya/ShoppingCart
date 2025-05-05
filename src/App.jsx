import ErrorPage from "./components/ErrorPage";
import React from "react";
import Navigation from "./components/Navigation";
import GlobalStyle from "./components/styles/GlobalStyle";
import StyLink from "./components/styles/StyLink.styled";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Navigation />
      <StyLink to="home">Shop!</StyLink>
    </div>
  );
}

export default App;
