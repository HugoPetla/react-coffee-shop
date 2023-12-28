import Americano from '../../assets/coffee-types/Type=Americano.svg';
import Arabe from '../../assets/coffee-types/Type=Arabe.svg';
import CafeComLeite from '../../assets/coffee-types/Type=Cafe-com-Leite.svg';
import CafeGelado from '../../assets/coffee-types/Type=Cafe-Gelado.svg';
import Capuccino from '../../assets/coffee-types/Type=Capuccino.svg';
import ChocolateQuente from '../../assets/coffee-types/Type=Chocolate-Quente.svg';
import Cubano from '../../assets/coffee-types/Type=Cubano.svg';
import ExpressoCremoso from '../../assets/coffee-types/Type=Expresso-Cremoso.svg';
import Expresso from '../../assets/coffee-types/Type=Expresso.svg';
import Havaiano from '../../assets/coffee-types/Type=Havaiano.svg';
import Irlandes from '../../assets/coffee-types/Type=Irlandes.svg';
import Latte from '../../assets/coffee-types/Type=Latte.svg';
import Macchiato from '../../assets/coffee-types/Type=Macchiato.svg';
import Mochaccino from '../../assets/coffee-types/Type=Mochaccino.svg';

export type CoffeeImagesConfig = {
  type: string;
  image: string;
};

export const coffeeImagesConfig = [
  {
    type: 'americano',
    image: Americano,
  },
  {
    type: 'arabe',
    image: Arabe,
  },
  {
    type: 'cafeComLeite',
    image: CafeComLeite,
  },
  {
    type: 'expressoGelado',
    image: CafeGelado,
  },
  {
    type: 'capuccino',
    image: Capuccino,
  },
  {
    type: 'chocolateQuente',
    image: ChocolateQuente,
  },
  {
    type: 'cubano',
    image: Cubano,
  },
  {
    type: 'expressoCremoso',
    image: ExpressoCremoso,
  },
  {
    type: 'expresso',
    image: Expresso,
  },
  {
    type: 'havaiano',
    image: Havaiano,
  },
  {
    type: 'irlandes',
    image: Irlandes,
  },
  {
    type: 'latte',
    image: Latte,
  },
  {
    type: 'macchiato',
    image: Macchiato,
  },
  {
    type: 'mochaccino',
    image: Mochaccino,
  },
];
