import styled from "styled-components";
import StyLink from "./styles/StyLink.styled";

const ErrorDiv = styled.div`
  font-size: 2rem;
  color: #cc8b86;
  background-color: #7b9e89;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  place-items: center;
`;
const ErrorPage = function () {
  return (
    <ErrorDiv>
      <h2>An Error Has Occured! Please Navigate Elsewhere</h2>
      <StyLink to="/home">Shop!</StyLink>
    </ErrorDiv>
  );
};

export default ErrorPage;
