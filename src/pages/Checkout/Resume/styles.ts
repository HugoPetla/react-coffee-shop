import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 28rem;
  padding: 2.5rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;

  border-radius: 0.375rem 2.75rem;
  background: ${({ theme }) => theme['gray-200']};
`;

export const SelectedCard = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

export const Divider = styled.hr`
  width: 100%;

  color: ${({ theme }) => theme['gray-200']};
  opacity: 0.2;
`;

export const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    gap: 0.5rem;
  }
`;

export const CardTitle = styled.p`
  color: ${({ theme }) => theme['gray-800']};

  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
`;

export const PriceTag = styled.span`
  color: ${({ theme }) => theme['gray-700']};
  text-align: right;

  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;

  align-self: flex-start;
`;

export const RemoveButton = styled.button`
  svg {
    color: ${({ theme }) => theme['purple-500']};
  }

  border: none;
  display: flex;
  height: 2.375rem;
  padding: 0.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  border-radius: 0.375rem;
  background: ${({ theme }) => theme['gray-400']};

  color: ${({ theme }) => theme['gray-700']};

  font-family: 'Roboto', sans-serif;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
  text-transform: uppercase;
`;

export const TotalsContainer = styled.div`
  width: 100%;
  display: flex;

  justify-content: space-between;

  p {
    color: ${({ theme }) => theme['gray-700']};
    text-align: right;

    font-family: Roboto;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }

  strong {
    color: ${({ theme }) => theme['gray-800']};
    text-align: right;

    font-family: 'Roboto', sans-serif;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
  }
`;

export const ConfirmButton = styled.button`
  border: none;
  display: flex;
  padding: 0.75rem 0.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  align-self: stretch;
  text-transform: uppercase;

  border-radius: 0.375rem;
  background: ${({ theme }) => theme['yellow-500']};
  color: ${({ theme }) => theme.white};
`;
