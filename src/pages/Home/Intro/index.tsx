import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react';

import {
  InformationContainer,
  IntroContainer,
  ItemsContainer,
  RoundIcon,
} from './styles';
import introCoffee from '../../../assets/intro-coffee.svg';

export function Intro() {
  return (
    <IntroContainer>
      <InformationContainer>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
        <ItemsContainer>
          <div>
            <RoundIcon color="darkYellow">
              <ShoppingCart size={23} weight="fill" />
            </RoundIcon>
            <p>Compra simples e segura</p>
          </div>
          <div>
            <RoundIcon color="gray">
              <Package size={23} weight="fill" />
            </RoundIcon>
            <p>Embalagem mantém o café intacto</p>
          </div>
          <div>
            <RoundIcon color="yellow">
              <Timer size={23} weight="fill" />
            </RoundIcon>
            <p>Entrega rápida e rastreada</p>
          </div>
          <div>
            <RoundIcon color="purple">
              <Coffee size={23} weight="fill" />
            </RoundIcon>
            <p>O café chega fresquinho até você</p>
          </div>
        </ItemsContainer>
      </InformationContainer>
      <img src={introCoffee} title="Imagem cafe inicial" />
    </IntroContainer>
  );
}
