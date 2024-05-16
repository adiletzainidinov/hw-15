import { useContext, useState } from 'react';
import Button from '../UI/Button';
import PlusIcon from '../../assets/icons/plus.svg?react';
import styled from 'styled-components';
import { MealContext } from '../../context/MealContex';

const MealItemForm = ({ id, title, price }) => {
  const { addToBasket, basket, increaseBasket } = useContext(MealContext);

  const [amount, setAmount] = useState(1);

  const amountChangeHandler = (event) => {
    setAmount(+event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(title);

    const meal = basket.find((item) => item.title === title);

    if (meal) {
      const updatedAmount = meal.amount + amount;
      increaseBasket({id: meal.id,title, price,updatedAmount});
    } else {
      addToBasket({ title, price, amount,id });
    }
  };
  
  return (
    <AddAmount onSubmit={submitHandler}>
      <div>
        <AmountLabel htmlFor={id}>Amount</AmountLabel>
        <AmountsInput
          value={amount}
          onChange={amountChangeHandler}
          type="number"
          min={'1'}
          max={'5'}
          id={id}
          defaultValue={1}
        />
      </div>

      <Button>
        <StyledIcon /> ADD
      </Button>
    </AddAmount>
  );
};

export default MealItemForm;

const AddAmount = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const StyledIcon = styled(PlusIcon)`
  margin-right: 10px;
`;
const AmountLabel = styled.label`
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  color: #222222;
  margin-right: 20px;
`;
const AmountsInput = styled.input`
  width: 60px;
  height: 32px;
  border-radius: 6px;
  border: 1px solid #d6d6d6d6 !important;
  outline: none;
  padding: 4px 10px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #222222;
  margin-bottom: 12px;
`;
