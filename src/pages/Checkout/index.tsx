import { Address } from './Address';
import { Payment } from './Payment';
import { Resume } from './Resume';
import { Container } from './styles';

export function Checkout() {
  return (
    <Container>
      <div>
        <h3>Complete seu pedido</h3>
        <Address />
        <Payment />
      </div>
      <div>
        <h3>Cafés selecionados</h3>
        <Resume />
      </div>
    </Container>
  );
}
