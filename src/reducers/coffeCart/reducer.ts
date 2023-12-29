import { produce } from 'immer';
import { ActionType } from './actions';

export type CoffeeType =
  | 'expresso'
  | 'americano'
  | 'expressoCremoso'
  | 'expressoGelado'
  | 'cafeComLeite'
  | 'latte'
  | 'capuccino'
  | 'macchiato'
  | 'mochaccino'
  | 'chocolateQuente'
  | 'cubano'
  | 'havaiano'
  | 'arabe'
  | 'irlandes';

export interface Coffee {
  id: number;
  type: CoffeeType;
  title: string;
  description: string;
  characteristics: string[];
  price: number;
  quantity: number;
}

export interface CoffeeCartState {
  coffeeCart: Coffee[];
}

export function coffeCartReducer(state: CoffeeCartState, action: any) {
  switch (action.type) {
    case ActionType.ADD_COFFEE_FROM_CART: {
      const coffeeIndex = state.coffeeCart.findIndex(
        (coffee) => coffee.id === action.payload.coffeeId,
      );

      return produce(state, (draft) => {
        draft.coffeeCart[coffeeIndex].quantity += 1;
      });
    }

    case ActionType.REMOVE_COFFEE_FROM_CART: {
      const coffeeIndex = state.coffeeCart.findIndex(
        (coffee) => coffee.id === action.payload.coffeeId,
      );

      if (state.coffeeCart[coffeeIndex].quantity === 0) {
        return state;
      }

      return produce(state, (draft) => {
        draft.coffeeCart[coffeeIndex].quantity -= 1;
      });
    }

    default:
      return state;
  }
}

export const initialState: Coffee[] = [
  {
    id: 1,
    type: 'expresso',
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    characteristics: ['tradicional'],
    price: 9.9,
    quantity: 0,
  },
  {
    id: 2,
    type: 'americano',
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    characteristics: ['tradicional'],
    price: 9.9,
    quantity: 0,
  },
  {
    id: 3,
    type: 'expressoCremoso',
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    characteristics: ['tradicional'],
    price: 9.9,
    quantity: 0,
  },
  {
    id: 4,
    type: 'expressoGelado',
    title: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    characteristics: ['tradicional', 'gelado'],
    price: 9.9,
    quantity: 0,
  },
  {
    id: 5,
    type: 'cafeComLeite',
    title: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    characteristics: ['tradicional', 'com leite'],
    price: 9.9,
    quantity: 0,
  },
  {
    id: 6,
    type: 'latte',
    title: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    characteristics: ['tradicional', 'com leite'],
    price: 9.9,
    quantity: 0,
  },
  {
    id: 7,
    type: 'capuccino',
    title: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    characteristics: ['tradicional', 'com leite'],
    price: 9.9,
    quantity: 0,
  },
  {
    id: 8,
    type: 'macchiato',
    title: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    characteristics: ['tradicional', 'com leite'],
    price: 9.9,
    quantity: 0,
  },
  {
    id: 9,
    type: 'mochaccino',
    title: 'Mochaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    characteristics: ['tradicional', 'com leite'],
    price: 9.9,
    quantity: 0,
  },
  {
    id: 10,
    type: 'chocolateQuente',
    title: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    characteristics: ['especial', 'com leite'],
    price: 9.9,
    quantity: 0,
  },
  {
    id: 11,
    type: 'cubano',
    title: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    characteristics: ['especial', 'alcólico', 'gelado'],
    price: 9.9,
    quantity: 0,
  },
  {
    id: 12,
    type: 'havaiano',
    title: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    characteristics: ['especial'],
    price: 9.9,
    quantity: 0,
  },
  {
    id: 13,
    type: 'arabe',
    title: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    characteristics: ['especial'],
    price: 9.9,
    quantity: 0,
  },
  {
    id: 14,
    type: 'irlandes',
    title: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    characteristics: ['especial', 'alcólico'],
    price: 9.9,
    quantity: 0,
  },
];
