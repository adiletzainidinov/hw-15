import { useContext, useEffect, useState } from 'react';
import Basket from './components/basket/Basket';
import Header from './components/header/Header';
import Meals from './components/meals/Meals';
import Summary from './components/summary/Summary';
import styled from 'styled-components';
import { MealContext } from './context/MealContex';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const { getMeals,meals,basket,getBasket } = useContext(MealContext);

  useEffect(() => {
    getMeals();
  }, []);

  useEffect(() => {
    getBasket()
  },[])

  const toggleVisibleBasket = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <>
      <Header openModal={toggleVisibleBasket} basket={basket} />
      <Content>
        <Summary />
        <Meals meals={meals} />
      </Content>

      {isVisible && <Basket onClose={toggleVisibleBasket} basket={basket} />}
    </>
  );
}

export default App;

const Content = styled.div`
  margin-top: 101px;
`;
