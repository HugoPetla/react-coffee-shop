import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 2.5rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  align-self: stretch;

  border-radius: 0.375rem;
  background: ${({ theme }) => theme['gray-200']};
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  svg {
    color: ${({ theme }) => theme['purple-500']};
  }

  div {
    display: flex;
    flex-direction: column;
  }
`;

const Typography = styled.p`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
`;

export const Title = styled(Typography)`
  color: ${({ theme }) => theme['gray-700']};

  font-size: 1rem;
`;

export const Subtitle = styled(Typography)`
  color: ${({ theme }) => theme['gray-600']};

  font-size: 0.875rem;
`;

export const PaymentCard = styled.div`
  display: flex;
  padding: 1rem;
  align-items: center;
  gap: 0.75rem;
  flex: 1 0 0;

  border-radius: 0.375rem;
  background: ${({ theme }) => theme['gray-400']};

  svg {
    color: ${({ theme }) => theme['purple-500']};
  }
`;
