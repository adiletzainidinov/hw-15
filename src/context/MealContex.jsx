import { createContext, useState } from 'react';
import { BASE_URL } from '../utils/general';

export const MealContext = createContext();

export const MealProvider = ({ children }) => {
  const [meals, setMeals] = useState([]);
  const [basket, setBasket] = useState([]);

  const getBasket = async () => {
    try {
      const res = await fetch(`${BASE_URL}/basket`);
      const data = await res.json();
      setBasket(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getMeals = async () => {
    try {
      const res = await fetch(`${BASE_URL}/meals`);
      const date = await res.json();
      setMeals(date);
    } catch (error) {
      console.log(error);
    }
  };
  const addToBasket = async (item) => {
    try {
      await fetch(`${BASE_URL}/basket`, {
        method: 'GET',
        body: JSON.stringify(item),
        headers: {
          'content-type': 'application/json',
        },
      });
      getBasket();
    } catch (error) {
      console.log(error);
    }
  };

  const increaseBasket = async (item) => {
    try {
      await fetch(`${BASE_URL}/basket/${item.id}`, {
        method: 'PATCH',
        body: JSON.stringify({ ...item, amount: item.updateAmount }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      getBasket();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteBasket = async (id) => {
    try {
      await fetch(`${BASE_URL}/basket/${id}`, {
        method: 'DELETE ',
      });
      getBasket()
    } catch (error) {
      console.error(error);
    }
  };

  const value = {
    addToBasket,
    meals,
    getMeals,
    basket,
    getBasket,
    increaseBasket,
    deleteBasket
  };

  return <MealContext.Provider value={value}>{children}</MealContext.Provider>;
};
