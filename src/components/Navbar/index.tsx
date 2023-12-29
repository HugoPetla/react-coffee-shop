import { NavLink } from 'react-router-dom';
import { ShoppingCart, MapPin } from 'phosphor-react';

import {
  BadgeContainer,
  BadgeContent,
  CartContainer,
  LogoImg,
  MapContainer,
  NavbarContainer,
} from './styles';
import logoCoffeeShop from '../../assets/coffee-shop-logo.svg';
import { useContext } from 'react';
import { CoffeeCartContext } from '../../contexts/CoffeeCartContext';

export function Navbar() {
  const { coffeeCart } = useContext(CoffeeCartContext);

  function getTotalQuantity() {
    return coffeeCart.reduce((acc, coffee) => acc + coffee.quantity, 0);
  }

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
        <BadgeContainer>
          <NavLink to="/checkout" title="Checkout">
            <ShoppingCart size={23} weight="fill" />
          </NavLink>
          {getTotalQuantity() > 0 && (
            <BadgeContent>{getTotalQuantity()}</BadgeContent>
          )}
        </BadgeContainer>
      </CartContainer>
    </NavbarContainer>
  );
}
