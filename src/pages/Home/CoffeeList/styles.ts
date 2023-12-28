import { styled } from 'styled-components';

export const CoffeeListContainer = styled.div`
  margin: auto 10rem;
  margin-top: 8.75rem;

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
