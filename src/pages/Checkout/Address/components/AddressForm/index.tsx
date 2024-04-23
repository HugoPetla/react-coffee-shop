import { useFormContext } from 'react-hook-form';
import {
  ErrorText,
  FormContainer,
  GridItem,
  Input,
  InputOptional,
} from './styles';
import { NewAddressFormData } from '../../..';

export function AddressForm() {
  const {
    register,
    formState: {
      errors: { zipCode, street, houseNumber, district, city, state },
    },
  } = useFormContext<NewAddressFormData>();

  return (
    <FormContainer>
      <GridItem columnEnd={3}>
        <Input id="zipCode" placeholder="Cep" {...register('zipCode')} />
        {Boolean(zipCode) && <ErrorText>{zipCode?.message}</ErrorText>}
      </GridItem>

      <GridItem>
        <Input id="street" placeholder="Rua" {...register('street')} />
        {Boolean(street) && <ErrorText>{street?.message}</ErrorText>}
      </GridItem>
      <GridItem columnEnd={3}>
        <Input
          id="houseNumber"
          placeholder="Número"
          {...register('houseNumber')}
        />
        {Boolean(houseNumber) && <ErrorText>{houseNumber?.message}</ErrorText>}
      </GridItem>
      <GridItem columnStart={3}>
        <InputOptional
          id="complement"
          placeholder="Complemento"
          {...register('complement')}
        />
      </GridItem>
      <GridItem columnEnd={3}>
        <Input id="district" placeholder="Bairro" {...register('district')} />
        {Boolean(district) && <ErrorText>{district?.message}</ErrorText>}
      </GridItem>
      <GridItem columnStart={3} columnEnd={11}>
        <Input id="city" placeholder="Cidade" {...register('city')} />
        {Boolean(city) && <ErrorText>{city?.message}</ErrorText>}
      </GridItem>
      <GridItem columnStart={11}>
        <Input id="state" placeholder="Estado" {...register('state')} />
        {Boolean(state) && <ErrorText>{state?.message}</ErrorText>}
      </GridItem>
    </FormContainer>
  );
}
