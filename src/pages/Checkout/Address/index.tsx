import { MapPin } from 'phosphor-react';

import { Container, Subtitle, Title, TitleContainer } from './styles';
import { AddressForm } from './components/AddressForm';

export function Address() {
  return (
    <Container>
      <TitleContainer>
        <MapPin size={23} />
        <div>
          <Title>Endereço de Entrega</Title>
          <Subtitle>Informe o endereço onde deseja receber seu pedido</Subtitle>
        </div>
      </TitleContainer>

      <AddressForm />
    </Container>
  );
}
