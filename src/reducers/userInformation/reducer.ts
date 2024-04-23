import { produce } from 'immer';

import { ActionType } from './actions';

export interface Address {
  zipCode: string;
  street: string;
  houseNumber: string;
  complement?: string;
  district: string;
  city: string;
  state: string;
  paymentMethod?: string;
}

export interface UserInformationState {
  address?: Address;
}

export function userInformationReducer(
  state: UserInformationState,
  action: any,
) {
  if (action.type === ActionType.ADD_ADDRESS) {
    return produce(state, (draft) => {
      draft.address = action.payload.address;
    });
  }

  return state;
}
