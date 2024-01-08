import { createContext, useReducer } from 'react';

import {
  Coffee,
  coffeCartReducer,
  initialState,
} from '../reducers/coffeCart/reducer';
import {
  addCoffeeFromCartAction,
  removeCoffeeFromCartAction,
  removeAllCoffeeFromCartAction,
} from '../reducers/coffeCart/actions';

interface CoffeeCartContextData {
  coffeeCart: Coffee[];
  deliveryTax: number;
  addCoffeeFromCart: (coffeeId: number) => void;
  removeCoffeeFromCart: (coffeeId: number) => void;
  removeAllCoffeeFromCart: (coffeeId: number) => void;
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

  function removeAllCoffeeFromCart(coffeeId: number) {
    dispatch(removeAllCoffeeFromCartAction(coffeeId));
  }

  return (
    <CoffeeCartContext.Provider
      value={{
        coffeeCart,
        deliveryTax: 3.5,
        addCoffeeFromCart,
        removeCoffeeFromCart,
        removeAllCoffeeFromCart,
      }}
    >
      {children}
    </CoffeeCartContext.Provider>
  );
}
