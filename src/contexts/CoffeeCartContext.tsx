import { createContext, useReducer } from 'react';

import {
  Coffee,
  coffeCartReducer,
  initialState,
} from '../reducers/coffeCart/reducer';
import {
  addCoffeeFromCartAction,
  removeCoffeeFromCartAction,
} from '../reducers/coffeCart/actions';

interface CoffeeCartContextData {
  coffeeCart: Coffee[];
  addCoffeeFromCart: (coffeeId: number) => void;
  removeCoffeeFromCart: (coffeeId: number) => void;
}

export const CoffeeCartContext = createContext({} as CoffeeCartContextData);

interface CoffeeCartContextProviderProps {
  children: React.ReactNode;
}

export function CoffeeCartContextProvider({
  children,
}: CoffeeCartContextProviderProps) {
  const [coffeeCartState, dispatch] = useReducer(coffeCartReducer, {
    coffeeCart: initialState,
  });

  const { coffeeCart } = coffeeCartState;

  function addCoffeeFromCart(coffeeId: number) {
    dispatch(addCoffeeFromCartAction(coffeeId));
  }

  function removeCoffeeFromCart(coffeeId: number) {
    dispatch(removeCoffeeFromCartAction(coffeeId));
  }

  return (
    <CoffeeCartContext.Provider
      value={{ coffeeCart, addCoffeeFromCart, removeCoffeeFromCart }}
    >
      {children}
    </CoffeeCartContext.Provider>
  );
}
