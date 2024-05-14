import { useState } from "react";
import Basket from "./components/basket/Basket";
import Header from "./components/header/Header";
import Meals from "./components/meals/Meals";
import Summary from "./components/summary/Summary";
import styled from "styled-components";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibleBasket = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <>
      <Header openModal={toggleVisibleBasket} />
      <Content>
        <Summary />
        <Meals />
      </Content>

      {isVisible && <Basket onClose={toggleVisibleBasket} />}
    </>
  );
}

export default App;

const Content = styled.div`
  margin-top: 101px;
`;
