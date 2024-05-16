import MealItems from "./MealItems";
import styled from "styled-components";

const Meals = ({meals}) => {
  return (
    <Card>
      {meals.map((meal, index) => {
        return (
          <MealItems
            key={index}
            id={meal.id}
            title={meal.title}
            description={meal.description}
            price={meal.price}
          />
        );
      })}
    </Card>
  );
};

export default Meals;

const Card = styled.ul`
  display: flex;
  flex-direction: column;
  width: 64rem;
  background: #ffffff;
  border-radius: 16px;
  margin: 80px auto;
  display: flex;
  padding: 40px 40px 36px 40px;
`;
