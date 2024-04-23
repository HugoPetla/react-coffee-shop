import { Address } from './reducer';

export enum ActionType {
  ADD_ADDRESS = 'ADD_ADDRESS',
}

export function addUserAddressAction(address: Address) {
  return {
    type: ActionType.ADD_ADDRESS,
    payload: {
      address,
    },
  };
}
