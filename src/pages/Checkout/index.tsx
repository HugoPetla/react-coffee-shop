import { Address } from './Address';
import { Payment } from './Payment';
import { Resume } from './Resume';
import { Container, FragmentContainer } from './styles';

export function Checkout() {
  return (
    <Container>
      <FragmentContainer>
        <h3>Complete seu pedido</h3>
        <Address />
        <Payment />
      </FragmentContainer>
      <FragmentContainer>
        <h3>Cafés selecionados</h3>
        <Resume />
      </FragmentContainer>
    </Container>
  );
}
