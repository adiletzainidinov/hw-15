import styled from "styled-components";
import Modal from "../UI/Modal";
import BasketItem from "./BasketItem";
import TotalAmount from "./TotalAmount";
import Button from "../UI/Button";

const Basket = ({ onClose,basket }) => {
  return (
    <Modal onClose={onClose}>
      <MealContainer>
        {basket && basket.length > 0
          ? basket.map((item) => <BasketItem key={item.id} {...item} />)
          : null}
      </MealContainer>
      <TotalAmount />
      <ButtonsContainer>
        <Button variant="outlined" onClick={onClose}>
          Close
        </Button>
        <Button variant="contained">Order</Button>
      </ButtonsContainer>
    </Modal>
  );
};

export default Basket;

const MealContainer = styled("div")`
  max-height: 250px;
  overflow: hidden;
  overflow-y: auto;
`;

const ButtonsContainer = styled("div")`
  display: flex;
  gap: 16px;
  justify-content: flex-end;
`;
