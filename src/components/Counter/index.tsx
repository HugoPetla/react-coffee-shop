import { Plus, Minus } from 'phosphor-react';

import { CounterContainer } from './styles';

interface CounterProps {
  quantity: number;
  onMinusClick: () => void;
  onPlusClick: () => void;
}

export function Counter({ quantity, onMinusClick, onPlusClick }: CounterProps) {
  return (
    <CounterContainer>
      <button type="button" onClick={onMinusClick}>
        <Minus />
      </button>
      <span>{quantity}</span>
      <button type="button" onClick={onPlusClick}>
        <Plus />
      </button>
    </CounterContainer>
  );
}
