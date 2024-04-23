import { OrderInfoContainer, Container, Label, Subtitle } from './styles';
import logoCoffeeShop from '../../assets/delivery_man.svg';

export function Success() {
  return (
    <Container>
      <Label>Uhu! Pedido confirmado</Label>
      <Subtitle>Agora é só aguardar que logo o café chegará até você</Subtitle>
      <OrderInfoContainer>
        <Subtitle>
          Agora é só aguardar que logo o café chegará até você
        </Subtitle>
      </OrderInfoContainer>
      <img src={logoCoffeeShop} />
    </Container>
  );
}
