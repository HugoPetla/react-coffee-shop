import { CoffeeImagesConfig, coffeeImagesConfig } from './coffeeImageConfig';
import { ItemCardImage } from './styles';

interface CoffeeLogoProps {
  type: string;
}

export function CoffeeLogo({ type }: CoffeeLogoProps) {
  const resultCoffee = coffeeImagesConfig.find(
    (coffee: CoffeeImagesConfig) => coffee.type === type,
  );

  return <ItemCardImage src={resultCoffee?.image} alt="Imagem do café" />;
}
