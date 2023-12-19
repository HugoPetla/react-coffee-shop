import { styled } from 'styled-components';

export const IntroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5.75rem;

  margin: auto 10rem;

  img {
    width: 29.75rem;
    height: 22.5rem;
    flex-shrink: 0;
  }

  @media (max-width: 1024px) {
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  @media (max-width: 768px) {
    margin: auto 2rem;

    img {
      margin-top: 2rem;
      width: 75%;
      height: auto;
    }
  }
`;

export const InformationContainer = styled.div`
  max-width: 36.75rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 3rem;
    line-height: 130%;
  }

  p {
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 130%;
  }
`;

export const ItemsContainer = styled.div`
  margin-top: 4rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  div {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
`;

const ITEM_COLORS = {
  purple: 'purple-700',
  yellow: 'yellow-500',
  darkYellow: 'yellow-700',
  gray: 'gray-700',
};

interface ItemProps {
  color: keyof typeof ITEM_COLORS;
}

export const RoundIcon = styled.div<ItemProps>`
  border-radius: 50%;
  background-color: ${(props) => props.theme[ITEM_COLORS[props.color]]};
  padding: 0.5rem;

  svg {
    color: ${(props) => props.theme.white};
  }
`;
