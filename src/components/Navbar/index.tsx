import { NavLink } from 'react-router-dom';
import { ShoppingCart, MapPin } from 'phosphor-react';

import {
  CartContainer,
  LogoImg,
  MapContainer,
  NavbarContainer,
} from './styles';
import logoCoffeeShop from '../../assets/coffee-shop-logo.svg';

export function Navbar() {
  return (
    <NavbarContainer>
      <NavLink to="/" title="Home">
        <LogoImg src={logoCoffeeShop} />
      </NavLink>
      <CartContainer>
        <MapContainer>
          <MapPin size={23} weight="fill" />
          <p>Ponta Grossa, PR</p>
        </MapContainer>
        <NavLink to="/checkout" title="Checkout">
          <ShoppingCart size={23} weight="fill" />
        </NavLink>
      </CartContainer>
    </NavbarContainer>
  );
}
