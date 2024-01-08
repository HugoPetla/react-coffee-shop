import styled from 'styled-components';

export const Container = styled.div`
  display: grid;

  grid-template-columns: 2fr 1fr;
  gap: 2rem;

  margin: 0 10rem;

  h3 {
    color: ${({ theme }) => theme['gray-700']};

    font-family: 'Baloo 2', sans-serif;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
  }

  @media (max-width: 1024px) {
    margin: 0 2rem;
    grid-template-columns: 1fr;
  }
`;

export const FragmentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;
