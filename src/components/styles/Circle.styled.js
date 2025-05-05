import styled from "styled-components";

const Circle = styled.span`
  border-radius: 50%;
  height: 30px;
  width: 30px;
  display: flex;
  background-color: #1b998b;
  color: white;
  position: absolute;
  place-items: center;
  bottom: 12%;
  justify-content: center;
  @media (max-width: 800px) {
    bottom: 26%;
  }
`;
export default Circle;
