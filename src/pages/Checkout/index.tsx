import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';

import { Address } from './Address';
import { Payment } from './Payment';
import { Resume } from './Resume';
import { Container, FragmentContainer } from './styles';
import { CoffeeCartContext } from '../../contexts/CoffeeCartContext';

const newAddressFormSchema = zod.object({
  zipCode: zod
    .string()
    .min(8, 'CEP é um campo obrigatório')
    .max(8, 'CEP é um campo obrigatório'),
  street: zod.string().min(1, 'Rua é um campo obrigatório'),
  houseNumber: zod.string().min(1, 'Número é um campo obrigatório'),
  complement: zod.string().optional(),
  district: zod.string().min(1, 'Bairro é um campo obrigatório'),
  city: zod.string().min(1, 'Cidade é um campo obrigatório'),
  state: zod.string().min(1, 'Estado é um campo obrigatório'),
  paymentMethod: zod.string().min(1, 'Método de pagamento é obrigatório'),
});

export type NewAddressFormData = zod.infer<typeof newAddressFormSchema>;

export function Checkout() {
  const navigate = useNavigate();
  const { addUserAddress } = useContext(CoffeeCartContext);

  const newAddressForm = useForm<NewAddressFormData>({
    resolver: zodResolver(newAddressFormSchema),
    defaultValues: {
      zipCode: '',
      street: '',
      houseNumber: '',
      complement: '',
      district: '',
      city: '',
      state: '',
      paymentMethod: '',
    },
  });

  function handleCreateNewAddress(data: NewAddressFormData) {
    addUserAddress(data);
    navigate('/success');
  }

  return (
    <Container>
      <form onSubmit={newAddressForm.handleSubmit(handleCreateNewAddress)}>
        <FormProvider {...newAddressForm}>
          <FragmentContainer>
            <h3>Complete seu pedido</h3>
            <Address />
            <Payment />
          </FragmentContainer>
          <FragmentContainer>
            <h3>Cafés selecionados</h3>
            <Resume />
          </FragmentContainer>
        </FormProvider>
      </form>
    </Container>
  );
}
