import { ShoppingCart, Plus, Minus } from 'phosphor-react';

import { ItemCard } from './components/ItemCard';
import { CoffeeListContainer } from './styles';
import {
  ButtonItemCard,
  Container,
  CounterContainer,
  DescriptionItemCard,
  PriceItemCard,
  PriceItemCardContainer,
  TagCard,
  TagContainer,
  TitleItemCard,
} from './components/ItemCard/styles';
import { CoffeeLogo } from '../../../components/CoffeeLogo';
import { CoffeeCartContext } from '../../../contexts/CoffeeCartContext';
import { useContext } from 'react';

export function CoffeeList() {
  const { coffeeCart, addCoffeeFromCart, removeCoffeeFromCart } =
    useContext(CoffeeCartContext);

  return (
    <CoffeeListContainer>
      <h1>Nossos cafés</h1>

      <Container>
        {coffeeCart.map((coffee) => (
          <ItemCard key={coffee.id}>
            <CoffeeLogo type={coffee.type} />
            <TagContainer>
              {coffee.characteristics.map((characteristic) => (
                <TagCard key={characteristic}>{characteristic}</TagCard>
              ))}
            </TagContainer>

            <TitleItemCard>{coffee.title}</TitleItemCard>
            <DescriptionItemCard>{coffee.description}</DescriptionItemCard>

            <PriceItemCardContainer>
              <PriceItemCard>
                R${' '}
                <strong>
                  {coffee.price.toLocaleString('pt-BR', {
                    minimumFractionDigits: 2,
                  })}
                </strong>
              </PriceItemCard>
              <div>
                <CounterContainer>
                  <button
                    type="button"
                    onClick={() => removeCoffeeFromCart(coffee.id)}
                  >
                    <Minus />
                  </button>
                  <span>{coffee.quantity}</span>
                  <button
                    type="button"
                    onClick={() => addCoffeeFromCart(coffee.id)}
                  >
                    <Plus />
                  </button>
                </CounterContainer>
                <ButtonItemCard>
                  <ShoppingCart size={23} weight="fill" />
                </ButtonItemCard>
              </div>
            </PriceItemCardContainer>
          </ItemCard>
        ))}
      </Container>
    </CoffeeListContainer>
  );
}
