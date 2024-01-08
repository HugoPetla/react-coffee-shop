import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react';
import {
  Container,
  PaymentCard,
  Subtitle,
  Title,
  TitleContainer,
} from './styles';

const paymentMethods = [
  {
    id: 1,
    icon: <Money size={23} />,
    name: 'Dinheiro',
  },
  {
    id: 2,
    icon: <Bank size={23} />,
    name: 'Cartão de crédito',
  },
  {
    id: 3,
    icon: <CreditCard size={23} />,
    name: 'Cartão de débito',
  },
];

export function Payment() {
  return (
    <Container>
      <TitleContainer>
        <CurrencyDollar size={23} />
        <div>
          <Title>Pagamento</Title>
          <Subtitle>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </Subtitle>
        </div>
      </TitleContainer>
      {paymentMethods.map((payment) => (
        <PaymentCard key={payment.id}>
          {payment.icon}
          <span>{payment.name}</span>
        </PaymentCard>
      ))}
    </Container>
  );
}
