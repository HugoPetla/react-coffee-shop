import { CoffeeImagesConfig, coffeeImagesConfig } from './coffeeImageConfig';
import { ItemCardImage } from './styles';

interface CoffeeLogoProps {
  type: string;
  width?: string;
  height?: string;
  marginTop?: string;
}

export function CoffeeLogo({
  type,
  width,
  height,
  marginTop,
}: CoffeeLogoProps) {
  const resultCoffee = coffeeImagesConfig.find(
    (coffee: CoffeeImagesConfig) => coffee.type === type,
  );

  return (
    <ItemCardImage
      src={resultCoffee?.image}
      alt="Imagem do café"
      width={width}
      height={height}
      marginTop={marginTop}
    />
  );
}
