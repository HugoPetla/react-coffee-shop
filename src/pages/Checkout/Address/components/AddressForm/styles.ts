import { styled } from 'styled-components';

export const FormContainer = styled.div`
  width: 100%;
  display: grid;
  gap: 0.5rem;
  color: ${(props) => props.theme['gray-100']};

  flex-wrap: wrap;
`;

export const GridItem = styled.div<{
  columnStart?: number;
  columnEnd?: number;
}>`
  grid-column: ${(props) => props.columnStart || 1} /
    ${(props) => props.columnEnd || 12};
`;

export const Input = styled.input`
  display: flex;
  width: 100%;
  padding: 0.75rem;
  align-items: center;
  gap: 0.25rem;

  border-radius: 0.25rem;
  border: 1px solid ${(props) => props.theme['gray-400']};
  background: ${(props) => props.theme['gray-300']};
`;

export const InputOptional = styled.input`
  display: flex;
  width: 100%;
  padding: 0.75rem;
  align-items: center;
  gap: 0.25rem;

  border-radius: 0.25rem;
  border: 1px solid ${(props) => props.theme['gray-400']};
  background: ${(props) => props.theme['gray-300']};

  ::after {
    content: 'Opcional';
  }
`;

export const ErrorText = styled.p`
  color: ${(props) => props.theme.red};
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  margin-top: 6px;
  margin-left: 6px;
`;
