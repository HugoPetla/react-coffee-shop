import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 3.5rem;

  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;

  > *:last-child {
    margin-right: 0;
  }
`;

export const ItemCardContainer = styled.div`
  width: 16rem;
  height: 20rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 0.375rem 2.25rem;
  background: ${({ theme }) => theme['gray-200']};

  gap: 0.5rem;
`;

export const TagContainer = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;

  gap: 0.25rem;

  margin-top: 0.25rem;
  margin-bottom: 0.5rem;
`;

export const TagCard = styled.div`
  display: flex;
  padding: 0.25rem 0.5rem;
  justify-content: center;
  align-items: center;

  border-radius: 6.25rem;
  background: ${({ theme }) => theme['yellow-300']};

  color: ${({ theme }) => theme['yellow-700']};
`;

export const TitleItemCard = styled.h3`
  color: ${({ theme }) => theme['gray-800']};
  text-align: center;
  font-family: 'Baloo 2', sans-serif;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
`;

export const DescriptionItemCard = styled.h3`
  color: ${({ theme }) => theme['gray-600']};
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;

  margin: 0 1.25rem;
`;

export const PriceItemCardContainer = styled.div`
  display: flex;
  width: 13rem;
  align-items: center;
  justify-content: space-between;

  margin-top: 1.5rem;

  div {
    display: flex;
    gap: 0.5rem;
  }
`;

export const PriceItemCard = styled.h3`
  color: var(--Base-Text, #574f4d);
  text-align: right;
  font-family: 'Roboto', sans-serif;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;

  strong {
    color: var(--Base-Text, #574f4d);
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
  }
`;

export const ButtonItemCard = styled.button`
  border: none;
  padding: 0.5rem;
  border-radius: 0.375rem;
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${(props) => props.theme['purple-700']};
  background-color: ${(props) => props.theme['purple-300']};
`;

export const CounterContainer = styled.div`
  display: flex;
  height: 2.375rem;
  padding: 0.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border-radius: 0.375rem;
  background-color: ${(props) => props.theme['gray-400']};

  span {
    color: ${(props) => props.theme['gray-900']};
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }

  button {
    border: none;
    color: ${(props) => props.theme['purple-700']};
    background-color: ${(props) => props.theme['gray-400']};
  }
`;
