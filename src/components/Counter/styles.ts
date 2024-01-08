import styled from 'styled-components';

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
