import { RiShoppingCartLine } from "react-icons/ri";
import Icon from "./styles/Icon.styled";
import Circle from "./styles/Circle.styled";
import styled from "styled-components";
import { IoSearch } from "react-icons/io5";
import Input from "./styles/Input.styled";
import { Button } from "./styles/Button.styled";

const StyledNavigate = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2%;
  background-color: #aa6da3;
  border-radius: 20px;
  color: white;
`;

const SearchContainer = styled.div`
  display: flex;
  background-color: white;
  max-height: 50px;
  border-radius: 15px;
  position: relative;
`;
const SearchIcon = styled(IoSearch)`
  color: #404040;
  position: absolute;
  left: 10px;
  width: 30px;
`;
const SearchButton = styled(Button)`
  border-radius: 0 15px 15px 0;
  transform: none;
`;
const Navigation = function ({ cartItems = [], setSearchQuery }) {
  return (
    <StyledNavigate>
      <h1>!Shopping</h1>
      <SearchContainer>
        <SearchIcon />
        <Input type="text" id="searchInput" />
        <SearchButton
          onClick={() =>
            setSearchQuery(document.querySelector("#searchInput").value)
          }
        >
          Search
        </SearchButton>
      </SearchContainer>
      {cartItems.length !== 0 ? (
        <div>
          <Icon>
            <RiShoppingCartLine />
            <Circle>
              {
                cartItems.reduce(
                  (previous, current) => ({
                    count: previous.count + current.count,
                  }),
                  {
                    count: 0,
                  },
                ).count
              }
            </Circle>
          </Icon>
        </div>
      ) : (
        <div>
          <Icon>
            <RiShoppingCartLine />
          </Icon>
        </div>
      )}
    </StyledNavigate>
  );
};

export default Navigation;
