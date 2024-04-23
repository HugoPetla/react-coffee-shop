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
import {
  Address,
  userInformationReducer,
} from '../reducers/userInformation/reducer';
import { addUserAddressAction } from '../reducers/userInformation/actions';

interface CoffeeCartContextData {
  coffeeCart: Coffee[];
  deliveryTax: number;
  address?: Address;
  paymentMethod?: string;
  addCoffeeFromCart: (coffeeId: number) => void;
  removeCoffeeFromCart: (coffeeId: number) => void;
  removeAllCoffeeFromCart: (coffeeId: number) => void;
  addUserAddress: (address: Address) => void;
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

  const [userInformation, userDispatch] = useReducer(userInformationReducer, {
    address: undefined,
  });

  const { coffeeCart } = coffeeCartState;

  const { address } = userInformation;

  function addCoffeeFromCart(coffeeId: number) {
    dispatch(addCoffeeFromCartAction(coffeeId));
  }

  function removeCoffeeFromCart(coffeeId: number) {
    dispatch(removeCoffeeFromCartAction(coffeeId));
  }

  function removeAllCoffeeFromCart(coffeeId: number) {
    dispatch(removeAllCoffeeFromCartAction(coffeeId));
  }

  function addUserAddress(address: Address) {
    userDispatch(addUserAddressAction(address));
  }

  return (
    <CoffeeCartContext.Provider
      value={{
        coffeeCart,
        address,
        deliveryTax: 3.5,
        addCoffeeFromCart,
        removeCoffeeFromCart,
        removeAllCoffeeFromCart,
        addUserAddress,
      }}
    >
      {children}
    </CoffeeCartContext.Provider>
  );
}
