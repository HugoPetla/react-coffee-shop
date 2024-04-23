import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react';
import {
  Container,
  ErrorText,
  PaymentCard,
  PaymentCardsContainer,
  Subtitle,
  Title,
  TitleContainer,
} from './styles';
import { useFormContext } from 'react-hook-form';
import { NewAddressFormData } from '..';

const paymentMethods = [
  {
    id: 1,
    icon: <Money size={23} />,
    name: 'Dinheiro',
    type: 'money',
  },
  {
    id: 2,
    icon: <Bank size={23} />,
    name: 'Cartão de crédito',
    type: 'credit',
  },
  {
    id: 3,
    icon: <CreditCard size={23} />,
    name: 'Cartão de débito',
    type: 'debit',
  },
];

export function Payment() {
  const {
    watch,
    setValue,
    formState: {
      errors: { paymentMethod },
    },
  } = useFormContext<NewAddressFormData>();

  const paymentMethodWatch = watch('paymentMethod');

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
      <PaymentCardsContainer>
        {paymentMethods.map((payment) => (
          <PaymentCard
            key={payment.id}
            checked={paymentMethodWatch === payment.type}
            onClick={() => setValue('paymentMethod', payment.type)}
          >
            {payment.icon}
            <span>{payment.name}</span>
          </PaymentCard>
        ))}
      </PaymentCardsContainer>
      {Boolean(paymentMethod) && (
        <ErrorText>{paymentMethod?.message}</ErrorText>
      )}
    </Container>
  );
}
