import styled from "styled-components";
import Modal from "../UI/Modal";
import BasketItem from "./BasketItem";
import TotalAmount from "./TotalAmount";
import Button from "../UI/Button";

const MEALS = [
  {
    id: "f1",
    title: "Sushi",
    price: 22.99,
    amount: 3,
  },
  {
    id: "f2",
    title: "Schnitzel",
    price: 16.0,
    amount: 3,
  },
  {
    id: "f3",
    title: "Barbecue Burger",
    price: 12.99,
    amount: 3,
  },
  {
    id: "f4",
    title: "Green Bowl",
    price: 19.99,
    amount: 3,
  },
];

const Basket = ({ onClose }) => {
  return (
    <Modal onClose={onClose}>
      <MealContainer>
        {MEALS && MEALS.length > 0
          ? MEALS.map((item) => <BasketItem key={item.id} {...item} />)
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
