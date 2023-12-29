export enum ActionType {
  ADD_COFFEE_FROM_CART = 'ADD_COFFEE_FROM_CART',
  REMOVE_COFFEE_FROM_CART = 'REMOVE_COFFEE_FROM_CART',
}

export function addCoffeeFromCartAction(coffeeId: number) {
  return {
    type: ActionType.ADD_COFFEE_FROM_CART,
    payload: {
      coffeeId,
    },
  };
}

export function removeCoffeeFromCartAction(coffeeId: number) {
  return {
    type: ActionType.REMOVE_COFFEE_FROM_CART,
    payload: {
      coffeeId,
    },
  };
}
