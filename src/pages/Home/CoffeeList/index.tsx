import { ShoppingCart } from 'phosphor-react';

import { ItemCard } from './components/ItemCard';
import { CoffeeListContainer } from './styles';
import {
  ButtonItemCard,
  Container,
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
import { Counter } from '../../../components/Counter';
import { NavLink } from 'react-router-dom';

export function CoffeeList() {
  const { coffeeCart, addCoffeeFromCart, removeCoffeeFromCart } =
    useContext(CoffeeCartContext);

  return (
    <CoffeeListContainer>
      <h1>Nossos cafés</h1>

      <Container>
        {coffeeCart.map((coffee) => (
          <ItemCard key={coffee.id}>
            <CoffeeLogo type={coffee.type} marginTop="-1rem" />
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
                <Counter
                  quantity={coffee.quantity}
                  onMinusClick={() => removeCoffeeFromCart(coffee.id)}
                  onPlusClick={() => addCoffeeFromCart(coffee.id)}
                />
                <ButtonItemCard>
                  <NavLink to="/checkout" title="Checkout">
                    <ShoppingCart size={23} weight="fill" />
                  </NavLink>
                </ButtonItemCard>
              </div>
            </PriceItemCardContainer>
          </ItemCard>
        ))}
      </Container>
    </CoffeeListContainer>
  );
}
