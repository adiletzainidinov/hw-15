import styled from 'styled-components';
import Button from '../UI/Button';
import { useContext } from 'react';
import { MealContext } from '../../context/MealContex';

const BasketItem = ({ title, price, amount, id }) => {
  const { increaseBasket, deleteBasket } = useContext(MealContext);

  const increamentHandler = () => {
    const updatedAmount = amount + 1;
    increaseBasket({ id, title, price, updatedAmount });
  };
  const decrementHandler = () => {
    const updatedAmount = amount - 1;
    if (amount <= 1) {
      deleteBasket(id);
    } else {
      increaseBasket({ id, title, price, updatedAmount });
    }
  };
  return (
    <Container>
      <MealInfo>
        <Title>{title}</Title>
        <SecondInfo>
          <Price>${price}</Price>
          <Amount>x {amount}</Amount>
        </SecondInfo>
      </MealInfo>

      <ButtonsContainer>
        <Button
          variant="outlined"
          borderStyle="6px"
          onClick={increamentHandler}
        >
          +
        </Button>
        <Button variant="outlined" borderStyle="6px" onClick={decrementHandler}>
          -
        </Button>
      </ButtonsContainer>
    </Container>
  );
};

export default BasketItem;

const Container = styled('div')`
  display: flex;
  justify-content: space-between;
  padding: 25px 10px;
  width: 520px;
  border-bottom: 1px solid #d6d6d6;

  p {
    margin: 0;
  }
`;

const MealInfo = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Title = styled('p')`
  font-weight: 600;
  font-size: 20px;
`;

const SecondInfo = styled('div')`
  display: flex;
  gap: 47px;
`;

const Price = styled('p')`
  color: #ad5502;
  font-weight: 600;
  font-size: 18px;
`;

const Amount = styled('p')`
  padding: 6px 14px;
  border-radius: 6px;
  border: 1px solid #d6d6d6;
`;

const ButtonsContainer = styled('div')`
  display: flex;
  gap: 14px;
  height: 46px;
  width: 150px;
  align-items: flex-end;
`;
