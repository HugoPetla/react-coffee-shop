import { useContext } from 'react';
import { Trash } from 'phosphor-react';

import {
  CardTitle,
  ConfirmButton,
  Container,
  Divider,
  InformationContainer,
  PriceTag,
  RemoveButton,
  SelectedCard,
  TotalsContainer,
} from './styles';
import { CoffeeCartContext } from '../../../contexts/CoffeeCartContext';
import { CoffeeLogo } from '../../../components/CoffeeLogo';
import { Counter } from '../../../components/Counter';

export function Resume() {
  const {
    coffeeCart,
    deliveryTax,
    addCoffeeFromCart,
    removeCoffeeFromCart,
    removeAllCoffeeFromCart,
  } = useContext(CoffeeCartContext);

  function getCoffeeSelected() {
    const coffeeSelected = coffeeCart.filter((coffee) => coffee.quantity > 0);
    return coffeeSelected;
  }

  const coffeeTotal = ({
    price,
    quantity,
  }: {
    price: number;
    quantity: number;
  }) =>
    (price * quantity).toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
    });

  const coffeeTotalItens = () => {
    const total = getCoffeeSelected().reduce((acc, coffee) => {
      return acc + coffee.price * coffee.quantity;
    }, 0);

    return total;
  };

  const finalValue = () => {
    return (coffeeTotalItens() + deliveryTax).toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
    });
  };

  return (
    <Container>
      {getCoffeeSelected().map((coffee) => (
        <>
          <SelectedCard key={coffee.id}>
            <CoffeeLogo type={coffee.type} width="4rem" height="4rem" />
            <InformationContainer>
              <CardTitle>{coffee.title}</CardTitle>
              <div>
                <Counter
                  quantity={coffee.quantity}
                  onMinusClick={() => removeCoffeeFromCart(coffee.id)}
                  onPlusClick={() => addCoffeeFromCart(coffee.id)}
                />
                <RemoveButton
                  onClick={() => removeAllCoffeeFromCart(coffee.id)}
                >
                  <Trash size={16} />
                  Remover
                </RemoveButton>
              </div>
            </InformationContainer>
            <PriceTag>
              R${' '}
              {coffeeTotal({ price: coffee.price, quantity: coffee.quantity })}
            </PriceTag>
          </SelectedCard>
          <Divider />
        </>
      ))}
      <TotalsContainer>
        <p>Total de itens</p>
        <p>
          R${' '}
          {coffeeTotalItens().toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
          })}
        </p>
      </TotalsContainer>
      <TotalsContainer>
        <p>Entrega</p>
        <p>
          R${' '}
          {deliveryTax.toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
          })}
        </p>
      </TotalsContainer>
      <TotalsContainer>
        <strong>Total</strong>
        <strong>R$ {finalValue()}</strong>
      </TotalsContainer>
      <ConfirmButton>Confirmar pedido</ConfirmButton>
    </Container>
  );
}
