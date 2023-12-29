import { styled } from 'styled-components';

export const NavbarContainer = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: space-between;
`;

export const LogoImg = styled.img`
  width: 5.3095rem;
  height: 2.5rem;
`;

export const CartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  a {
    padding: 0.5rem;
    border-radius: 0.375rem;
    display: flex;
    align-items: center;
    justify-content: center;

    color: ${(props) => props.theme['yellow-700']};
    background-color: ${(props) => props.theme['yellow-300']};
  }
`;

export const MapContainer = styled.div`
  padding: 0.5rem;
  border-radius: 0.375rem;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${(props) => props.theme['purple-700']};
  background-color: ${(props) => props.theme['purple-300']};
`;

export const BadgeContainer = styled.div`
  display: flex;
`;

export const BadgeContent = styled.div`
  display: flex;
  width: 1.25rem;
  height: 1.25rem;
  justify-content: center;
  align-items: center;

  border-radius: 62.5rem;
  background: ${(props) => props.theme['yellow-700']};
  color: ${(props) => props.theme.white};

  margin-left: -10px;
  margin-top: -10px;
`;
