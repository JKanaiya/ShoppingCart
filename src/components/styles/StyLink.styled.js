import { Link } from "react-router-dom";
import styled from "styled-components";

const StyLink = styled(Link)`
  padding: 0 2%;
  color: white;
  font-weight: 800;
  background-color: #f78154;
  border-radius: 15px;
  border: none;
  cursor: pointer;
  min-height: 50px;
  place-items: center;
  &:hover {
    transform: translateY(-1px);
  }
  text-decoration: none;
  display: flex;
  max-height: 50px;
`;

export default StyLink;
