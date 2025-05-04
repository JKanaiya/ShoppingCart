import { RiShoppingCartLine } from "react-icons/ri";
import Icon from "./styles/Icon.styled";
import Circle from "./styles/Circle.styled";
import styled from "styled-components";

const StyledNavigate = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2%;
  background-color: #aa6da3;
  border-radius: 20px;
  color: white;
`;
const Navigation = function ({ cartItems = [] }) {
  console.log(cartItems);
  console.log(
    cartItems.length !== 0 &&
      cartItems.reduce(
        (previous, current) => ({
          count: previous.count + current.count,
        }),
        {
          count: 0,
        },
      ).count,
  );
  return (
    <StyledNavigate>
      <h1>!Shopping</h1>
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
