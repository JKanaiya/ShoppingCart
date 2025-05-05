import { RiShoppingCartLine } from "react-icons/ri";
import Icon from "./styles/Icon.styled";
import Circle from "./styles/Circle.styled";
import styled from "styled-components";
import { IoSearch } from "react-icons/io5";
import Input from "./styles/Input.styled";
import { Button } from "./styles/Button.styled";
import StyLink from "./styles/StyLink.styled";
import { useParams } from "react-router-dom";

const StyledNavigate = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2%;
  background-color: #aa6da3;
  color: white;
  position: relative;
  margin-bottom: 30px;
  @media (max-width: 800px) {
    flex-wrap: wrap;
    row-gap: 10px;
    justify-content: safe center;
    flex-direction: column;
  }
`;

const NavIcon = styled(Icon)`
  position: absolute;
  right: -3%;
  bottom: 5%;
  @media (max-width: 800px) {
    bottom: 30%;
  }
  @media (max-width: 500px) {
    right: -10%;
    bottom: 37%;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  background-color: white;
  max-height: 50px;
  border-radius: 15px;
  position: relative;
  max-width: 40%;
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
  const { name } = useParams();
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
      {name == "cart" ? (
        <StyLink to="/home">Go to Shop</StyLink>
      ) : (
        <StyLink to="cart">Go to Cart</StyLink>
      )}
      {cartItems.length !== 0 ? (
        <div>
          <NavIcon>
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
          </NavIcon>
        </div>
      ) : (
        <div>
          <NavIcon>
            <RiShoppingCartLine />
          </NavIcon>
        </div>
      )}
    </StyledNavigate>
  );
};

export default Navigation;
